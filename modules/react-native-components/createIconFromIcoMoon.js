import React from 'react'
import { View } from 'react-native'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import PropTypes from './utils/propTypes'

const noScaleFunc = x => x

/**
 * Function that creates a custom ScreenView with ClsStyles functionality.
 * Due to the style of a ScreenView doesn't change too often, the ClsStyles are not cached.
 * @param {Object} obj object with parameters.
 * @param {ClsStyles} obj.clsStyles contains all the "cls-styles" (when scrollable = false).
 * @param {ClsStyles} obj.scrollOuterClsStyles contains all the "cls-styles" for the scrollview's outer container (when scrollable = true).
 * @param {ClsStyles} obj.scrollInnerClsStyles contains all the "cls-styles" for the scrollview's inner container (when scrollable = true).
 * @param {Function} [obj.propsToStyle] function that generate a style from the props (when scrollable = true it will be applied to the outer container).
 * @param {Object|StyleSheet} [obj.baseStyle] base style to apply to the view (when scrollable = true it will be applied to the outer container).
 * @param {Object} [obj.propTypes] extra prop-types that will be added to the view
 * @param {Object} [obj.defaultProps] extra default-props that will be added to the view
 */
export function createIconFromIcoMoon({
	icoMoonJsConfig,
	fontName,
	fontFilename,
	scaleFunction = noScaleFunc,
}) {
	const VectorIcon = createIconSetFromIcoMoon(icoMoonJsConfig, fontName, fontFilename)

	Icon.propTypes = {
		name: PropTypes.string.isRequired,
		size: PropTypes.number,
		width: PropTypes.number,
		height: PropTypes.number,
		scaled: PropTypes.bool,
		color: PropTypes.string,
		style: PropTypes.viewStyle,
	}
	Icon.defaultProps = {
		size: 20,
		width: undefined,
		height: undefined,
		scaled: false,
		color: undefined,
		style: undefined,
	}
	function Icon({ name, size, width, height, scaled, color, style, ...iconProps }) {
		const scale = scaled ? scaleFunction : noScaleFunc
		const iconSize = scale(size)
		const iconColor = color || (style && StyleSheet.flatten(style).color) || 'black'
		const colorStyle = { color: iconColor, backgroundColor: 'transparent' }
		if (width) {
			const iconWidth = width ? scale(width) : iconSize
			const iconMarginLeft = (iconWidth - iconSize) / 2
			const viewStyle = [{ width: iconWidth, overflow: 'hidden', color: 'white' }, style]
			return (
				<View style={viewStyle}>
					<VectorIcon
						name={name}
						size={iconSize}
						style={{ marginLeft: iconMarginLeft, ...colorStyle }}
						{...iconProps}
					/>
				</View>
			)
		}
		if (height) {
			const iconHeight = height ? scale(height) : iconSize
			const iconMarginTop = (iconHeight - iconSize) / 2
			const viewStyle = [{ height: iconHeight, overflow: 'hidden', color: 'white' }, style]
			return (
				<View style={viewStyle}>
					<VectorIcon
						name={name}
						size={iconSize}
						style={{ marginTop: iconMarginTop, ...colorStyle }}
						{...iconProps}
					/>
				</View>
			)
		}
		return <VectorIcon name={name} size={iconSize} style={[colorStyle, style]} {...iconProps} />
	}
	return Icon
}
