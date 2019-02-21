import React from 'react'
import { number, func, bool, element, oneOfType, arrayOf } from 'prop-types'
import { TouchableOpacity, ViewPropTypes } from 'react-native'
import { Box } from '@/components'
import { Metrics } from '@/theme'

NavBarButton.propTypes = {
	children: oneOfType([element, arrayOf(element)]).isRequired,
	onPress: func,
	paddingLeft: number,
	paddingRight: number,
	disabled: bool,
	style: ViewPropTypes.style,
}
NavBarButton.defaultProps = {
	onPress: undefined,
	paddingLeft: Metrics.grid.baseSpacing,
	paddingRight: Metrics.grid.baseSpacing,
	disabled: false,
	style: undefined,
}
export function NavBarButton({ children, onPress, paddingLeft, paddingRight, disabled, style }) {
	const boxStyle = { paddingLeft, paddingRight, opacity: disabled ? 0.5 : 1 }
	return (
		<TouchableOpacity onPress={onPress} disabled={disabled} style={style}>
			<Box cls="flex-1 col-center" style={boxStyle}>
				{children}
			</Box>
		</TouchableOpacity>
	)
}
