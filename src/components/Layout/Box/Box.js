import PropTypes from '#propTypes'
import { View, Animated } from 'react-native'
import { createClsComponent } from '@modules/react-native-cls'
import clsStyles from './clsStyles'

const clsBoxCreationParams = {
	clsStyles,
	propTypes: {
		flex: PropTypes.number,
	},
	defaultProps: {
		flex: undefined,
	},
	propsToStyle: ({ flex }) => ({ flex }),
}

export const Box = createClsComponent({
	component: View,
	...clsBoxCreationParams,
})
export const BoxAnimated = createClsComponent({
	component: Animated.View,
	...clsBoxCreationParams,
})
