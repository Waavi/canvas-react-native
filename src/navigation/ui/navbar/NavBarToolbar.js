import React from 'react'
import { number, element, oneOfType, arrayOf } from 'prop-types'
import { ViewPropTypes } from 'react-native'
import { Box } from '@/components'
import { Metrics } from '@/theme'

/*
	Wrapper to include more than one NavBarButton together. It adjusts their paddings automatically
*/
NavBarToolbar.propTypes = {
	children: oneOfType([element, arrayOf(element)]).isRequired,
	padding: number,
	paddingBetweenIcons: number,
	style: ViewPropTypes.style,
}
NavBarToolbar.defaultProps = {
	padding: Metrics.grid.baseSpacing,
	paddingBetweenIcons: Metrics.scale.horizontal(5),
	style: undefined,
}
export function NavBarToolbar({ children, padding, paddingBetweenIcons, style }) {
	return (
		<Box cls="row-center" style={style}>
			{React.Children.map(children, (child, index) =>
				React.cloneElement(child, {
					paddingLeft: index === 0 ? padding : paddingBetweenIcons,
					paddingRight: index === children.length - 1 ? padding : paddingBetweenIcons,
				})
			)}
		</Box>
	)
}
