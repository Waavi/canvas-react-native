import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from '#propTypes'
import { Metrics, Colors } from '@/theme'
import { VectorIcon } from './VectorIcon'

WIcon.propTypes = {
	size: PropTypes.number,
	width: PropTypes.number,
	color: PropTypes.string,
	style: PropTypes.number,
}
WIcon.defaultProps = {
	size: 20,
	width: undefined,
	color: undefined,
	style: undefined,
}

export function WIcon({ size = 20, width = undefined, color = undefined, style, ...iconProps }) {
	const iconSize = Metrics.scale.horizontal(size)
	const iconColor = color || (style && StyleSheet.flatten(style).color) || Colors.black
	if (width) {
		const iconWidth = width ? Metrics.scale.horizontal(width) : iconSize
		const iconMarginLeft = iconWidth !== iconSize ? (iconWidth - iconSize) / 2 : 0
		const defaultStyle = { width: iconWidth, overflow: 'hidden' }
		return (
			<View style={[defaultStyle, style]}>
				<VectorIcon
					size={iconSize}
					style={{ marginLeft: iconMarginLeft, color: iconColor }}
					{...iconProps}
				/>
			</View>
		)
	}
	return <VectorIcon size={iconSize} style={[{ color: iconColor }, style]} {...iconProps} />
}
