import React from 'react'
import { number, string, func, bool } from 'prop-types'
import { ViewPropTypes } from 'react-native'
import { WIcon } from '@/components'
import { Colors, Metrics } from '@/theme'
import { NavBarButton } from './NavBarButton'

NavBarIconButton.propTypes = {
	name: string.isRequired,
	color: string,
	size: number,
	onPress: func,
	paddingLeft: number,
	paddingRight: number,
	disabled: bool,
	style: ViewPropTypes.style,
}
NavBarIconButton.defaultProps = {
	color: Colors.black,
	size: 18,
	onPress: undefined,
	paddingLeft: Metrics.grid.baseSpacing,
	paddingRight: Metrics.grid.baseSpacing,
	disabled: false,
	style: undefined,
}
export function NavBarIconButton({
	name,
	color,
	size,
	onPress,
	paddingLeft,
	paddingRight,
	disabled,
	style,
	...iconProps
}) {
	return (
		<NavBarButton
			onPress={onPress}
			paddingLeft={paddingLeft}
			paddingRight={paddingRight}
			disabled={disabled}
			style={style}
		>
			<WIcon name={name} color={color} size={size} {...iconProps} />
		</NavBarButton>
	)
}
