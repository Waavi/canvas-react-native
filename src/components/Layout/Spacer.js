import React from 'react'
import PropTypes from '#propTypes'
import { View } from 'react-native'
import { Metrics } from '@/theme'

Spacer.propTypes = {
	flex: PropTypes.number,
	horizontal: PropTypes.bool,
	size: PropTypes.number,
	units: PropTypes.oneOf(['px', '%', 'spacings']),
}
Spacer.defaultProps = {
	flex: 1,
	horizontal: false,
	size: 0,
	units: 'px',
}
export function Spacer({ flex, horizontal, size, units }) {
	if (size) {
		let sizeInPixels = 0
		if (units === 'spacings') {
			sizeInPixels = size * Metrics.grid.baseSpacing
		} else if (units === '%') {
			sizeInPixels = Metrics.scale.percentage[horizontal ? 'horizontal' : 'vertical'](size)
		} else {
			sizeInPixels = Metrics.scale[horizontal ? 'horizontal' : 'vertical'](size)
		}
		return <View style={{ [horizontal ? 'width' : 'height']: sizeInPixels }} />
	}
	return <View style={{ flex }} />
}
