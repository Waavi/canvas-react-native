import ClsStyles from '@modules/react-native-cls'
import { marginClsStyles, paddingClsStyles } from '@/theme/cls/spacingClsStyles'
import { childFlexClsStyles } from '@/theme/cls/flexClsStyles'
import { Fonts, Colors } from '@/theme'

const lineHeightForSize = size => size * 1.25

const fontFamilyStyles = Object.keys(Fonts.type).reduce(
	(result, key) => ({
		...result,
		[key]: { fontFamily: Fonts.type[key] },
	}),
	{}
)
const colorStyles = Object.keys(Colors.text).reduce(
	(result, key) => ({
		...result,
		[key]: { color: Colors.text[key] },
	}),
	{}
)

const clsStyles = ClsStyles.create({
	styles: {
		_base: {
			fontFamily: Fonts.type.regular,
			fontSize: Fonts.size[16],
			lineHeight: lineHeightForSize(Fonts.size[16]),
			color: Colors.black,
			backgroundColor: 'transparent',
		},

		...fontFamilyStyles,
		...colorStyles,

		left: { textAlign: 'left' },
		center: { textAlign: 'center' },
		right: { textAlign: 'right' },

		notFontPadding: { includeFontPadding: false },
	},
})

const clsStylesWithSpacings = ClsStyles.merge([
	marginClsStyles,
	paddingClsStyles,
	childFlexClsStyles,
	clsStyles,
])

export default clsStylesWithSpacings
