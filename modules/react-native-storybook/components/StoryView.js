import { createScreenView } from '@modules/react-native-cls-layout'
import PropTypes from '../utils/propTypes'

const baseStyle = {
	flex: 1,
	backgroundColor: '#F0F3F8',
}
export const StoryView = createScreenView({
	baseStyle,
	propTypes: {
		justifyContent: PropTypes.bool,
		align: PropTypes.oneOf(['left', 'center', 'right', 'stretch']),
		padded: PropTypes.bool,
	},
	defaultProps: {
		center: true,
		align: 'center',
		padded: false,
	},
	propsToStyle: ({ center, align, padded }) => ({
		justifyContent: center ? 'center' : 'flex-start',
		alignItems: toAlignItems(align),
		padding: padded ? 20 : undefined,
	}),
})

function toAlignItems(align) {
	if (align === 'left') return 'flex-start'
	if (align === 'center') return 'center'
	if (align === 'right') return 'flex-end'
	if (align === 'stretch') return 'stretch'
	return undefined
}
