import React from 'react'
import { number, string, func, bool } from 'prop-types'
import { Text, ViewPropTypes } from 'react-native'
import { Colors, Metrics } from '@/theme'
import { NavBarButton } from './NavBarButton'

NavBarTextButton.propTypes = {
	text: string.isRequired,
	color: string,
	fontSize: number,
	textStyle: ViewPropTypes.style,
	onPress: func,
	paddingLeft: number,
	paddingRight: number,
	disabled: bool,
	style: ViewPropTypes.style,
}
NavBarTextButton.defaultProps = {
	color: Colors.black,
	fontSize: 16,
	textStyle: undefined,
	onPress: undefined,
	paddingLeft: Metrics.grid.baseSpacing,
	paddingRight: Metrics.grid.baseSpacing,
	disabled: false,
	style: undefined,
}
export function NavBarTextButton({
	text,
	color,
	fontSize,
	textStyle,
	onPress,
	paddingLeft,
	paddingRight,
	disabled,
	style,
}) {
	return (
		<NavBarButton
			onPress={onPress}
			paddingLeft={paddingLeft}
			paddingRight={paddingRight}
			disabled={disabled}
			style={style}
		>
			<Text style={[textStyle, { color, fontSize }]}>{text}</Text>
		</NavBarButton>
	)
}
