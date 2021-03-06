import PropTypes from '#propTypes'
import { Text, Animated } from 'react-native'
import { createClsComponent } from '@modules/react-native-cls'
import { Metrics } from '@/theme'
import clsStyles from './clsStyles'

const clsTextCreationParams = {
	clsStyles,
	propTypes: {
		size: PropTypes.number,
		lineHeight: PropTypes.number,
		scaled: PropTypes.bool,
		// eslint-disable-next-line react/forbid-foreign-prop-types
		style: PropTypes.textStyle,
	},
	defaultProps: {
		size: 16,
		lineHeight: undefined,
		scaled: false,
		style: undefined,
	},
	propsToStyle: ({ size, lineHeight, scaled }) => {
		const fontSize = scaled ? Metrics.scale.horizontal(size) : size
		return {
			fontSize,
			lineHeight:
				(lineHeight && scaled && Metrics.scale.horizontal(lineHeight)) ||
				lineHeight ||
				fontSize * 1.25,
		}
	},
}
export const WText = createClsComponent({
	component: Text,
	...clsTextCreationParams,
})
export const WTextAnimated = createClsComponent({
	component: Animated.Text,
	...clsTextCreationParams,
})
