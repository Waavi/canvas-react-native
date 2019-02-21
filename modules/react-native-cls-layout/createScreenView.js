import React, { Component } from 'react'
import { View, ScrollView, Dimensions, StyleSheet } from 'react-native'
import PropTypes from './utils/propTypes'

// TODO: add isLoading attribute (maybe in other ScreenView in components due to the spinner dependency)
// TODO: add wrapper NavigationEvents (if needed) (maybe in other ScreenView in components due to the navigation dependency)

/**
 * Function that creates a custom ScreenView with ClsStyles functionality.
 * Due to the style of a ScreenView doesn't change too often, the ClsStyles are not cached.
 * @param {Object} obj object with parameters.
 * @param {Object} obj.colorsMap object with each [colorName]: colorString.
 * @param {ClsStyles} [obj.clsStyles] contains all the "cls-styles" (when scrollable = false).
 * @param {ClsStyles} [obj.scrollOuterClsStyles] contains all the "cls-styles" for the scrollview's outer container (when scrollable = true).
 * @param {ClsStyles} [obj.scrollInnerClsStyles] contains all the "cls-styles" for the scrollview's inner container (when scrollable = true).
 * @param {Function} [obj.propsToStyle] function that generate a style from the props (when scrollable = true it will be applied to the outer container).
 * @param {Object|StyleSheet} [obj.baseStyle] base style to apply to the view (when scrollable = true it will be applied to the outer container).
 * @param {Object} [obj.propTypes] extra prop-types that will be added to the view
 * @param {Object} [obj.defaultProps] extra default-props that will be added to the view
 */
export function createScreenView({
	colorsMap,
	clsStyles,
	scrollOuterClsStyles,
	scrollInnerClsStyles,
	propsToStyle,
	baseStyle,
	propTypes,
	defaultProps,
}) {
	// eslint-disable-next-line react/prefer-stateless-function
	return class extends Component {
		static propTypes = {
			color: PropTypes.string,
			scrollable: PropTypes.bool,
			cls: PropTypes.string,
			scrollOuterCls: PropTypes.string, // only for scrollable = true
			style: PropTypes.viewStyle,
			scrollOuterStyle: PropTypes.viewStyle, // only for scrollable = true
			...(propTypes || {}),
		}
		static defaultProps = {
			color: undefined,
			scrollable: false,
			cls: undefined,
			scrollOuterCls: undefined,
			style: undefined,
			scrollOuterStyle: undefined,
			...(defaultProps || {}),
		}
		render() {
			const {
				scrollable,
				color,
				cls,
				scrollOuterCls,
				style,
				scrollOuterStyle,
				...restProps
			} = this.props
			const outerStyle = [
				styles.baseOuter,
				baseStyle,
				{ backgroundColor: (colorsMap || {})[color] },
			]
			const styleFromProps = propsToStyle ? propsToStyle(this.props) : undefined
			if (scrollable) {
				const scrollOuterClsStyle = scrollOuterClsStyles
					? scrollOuterClsStyles.getStyles(scrollOuterCls)
					: undefined
				const scrollInnerClsStyle = scrollInnerClsStyles
					? scrollInnerClsStyles.getStyles(cls)
					: undefined
				return (
					<ScrollView
						style={[outerStyle, scrollOuterClsStyle, scrollOuterStyle]}
						contentContainerStyle={[
							styles.baseScrollInner,
							styleFromProps,
							scrollInnerClsStyle,
							style,
						]}
						{...restProps}
					/>
				)
			}
			const clsStyle = clsStyles ? clsStyles.getStyles(cls) : undefined
			return <View style={[outerStyle, styleFromProps, clsStyle, style]} {...restProps} />
		}
	}
}

const styles = StyleSheet.create({
	// eslint-disable-next-line react-native/no-color-literals
	baseOuter: {
		flex: 1,
		width: Dimensions.get('window').width,
		backgroundColor: 'white',
	},
	baseScrollInner: {
		flexGrow: 1,
	},
})
