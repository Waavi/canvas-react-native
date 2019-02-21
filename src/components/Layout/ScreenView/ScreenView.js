import PropTypes from '#propTypes'
import ClsStyles from '@modules/react-native-cls'
import { createScreenView } from '@modules/react-native-cls-layout'
import { childFlexClsStyles, flexClsStyles, paddingClsStyles } from '@/theme/cls'
import { Colors } from '@/theme'

const clsStyles = ClsStyles.merge([flexClsStyles, paddingClsStyles])
const scrollOuterClsStyles = ClsStyles.merge([childFlexClsStyles, paddingClsStyles])
const scrollInnerClsStyles = clsStyles

export const ScreenView = createScreenView({
	colorsMap: {
		white: Colors.white,
		dark: Colors.dark,
	},
	clsStyles,
	scrollOuterClsStyles,
	scrollInnerClsStyles,
	baseStyle: { backgroundColor: Colors.background },
	propTypes: { color: PropTypes.oneOf(['white', 'dark']) },
})
