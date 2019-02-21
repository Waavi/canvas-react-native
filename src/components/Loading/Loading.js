import React from 'react'
import PropTypes from '#propTypes'
import { ActivityIndicator } from 'react-native'
import { Box } from '../Layout'
import { Colors } from '@/theme'

Loading.propTypes = {
	active: PropTypes.bool.isRequired,
	position: PropTypes.oneOf(['relative', 'absolute']),
	color: PropTypes.string,
	bgColor: PropTypes.string,
	opacity: PropTypes.number,
	style: PropTypes.viewStyle,
}
Loading.defaultProps = {
	position: 'relative',
	color: Colors.brand,
	bgColor: Colors.background,
	opacity: 0.8,
	style: undefined,
}
export function Loading({ active, position, color, bgColor, opacity, style }) {
	if (active) {
		return (
			<Box
				cls={['col-center', { 'pos-absolute-fill': position === 'absolute' }]}
				style={style}
			>
				<Box cls="pos-absolute-fill" style={{ backgroundColor: bgColor, opacity }} />
				<ActivityIndicator animating size="large" color={color} />
			</Box>
		)
	}
	return null
}
