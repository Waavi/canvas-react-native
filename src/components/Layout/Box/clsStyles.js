import ClsStyles from '@modules/react-native-cls'
import {
	bgColorsClsStyles,
	borderClsStyles,
	flexClsStyles,
	positionClsStyles,
	roundnessClsStyles,
	shadowClsStyles,
	marginClsStyles,
	paddingClsStyles,
} from '@/theme/cls'

const boxClsStyles = ClsStyles.create({
	styles: {
		_base: {},

		/*********************************************************
		 * Z-INDEX UTILITIES
		 */

		// zIndex10: { zIndex: 10 },
		// zIndex100: { zIndex: 100 },
	},
})

const clsStyles = ClsStyles.merge([
	boxClsStyles,
	bgColorsClsStyles,
	borderClsStyles,
	flexClsStyles,
	positionClsStyles,
	roundnessClsStyles,
	shadowClsStyles,
	marginClsStyles,
	paddingClsStyles,
])

export default clsStyles
