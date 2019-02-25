import ClsStyles from '@modules/react-native-cls'
import { Fonts, Colors, Metrics } from '@/theme'
import { marginClsStyles } from '@/theme/cls/spacingClsStyles'

const clsStyles = ClsStyles.create({
	mapping: { wrapper: null, view: null, text: null },
	styles: {
		_base: {
			wrapper: {},
			view: {
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: 100,
				backgroundColor: Colors.mediumgray,
				paddingHorizontal: 1.5 * Metrics.grid.baseSpacing,
				paddingVertical: Metrics.grid.baseSpacing,
			},
			text: {
				fontSize: Fonts.size[14],
				fontFamily: Fonts.type.medium,
				backgroundColor: 'transparent',
				color: Colors.white,
				includeFontPadding: false,
				textAlignVertical: 'center',
			},
		},

		green: {
			view: { backgroundColor: Colors.green },
			text: { color: Colors.black },
		},
		white: {
			view: {
				borderWidth: 1,
				borderColor: Colors.black,
				backgroundColor: Colors.white,
			},
			text: { color: Colors.black },
		},
		dark: {
			view: { backgroundColor: Colors.dark },
		},
		'dark-light': {
			view: { backgroundColor: Colors.darkgray },
			text: { color: Colors.dark },
		},
		'dark-outline': {
			view: {
				backgroundColor: Colors.dark,
				borderWidth: 1,
				borderColor: Colors.white,
			},
			text: { fontSize: Fonts.size[13] },
		},
		yellow: {
			view: { backgroundColor: Colors.yellow },
			text: { color: Colors.black },
		},

		small: {
			view: {
				paddingHorizontal: 1.5 * Metrics.grid.baseSpacing,
				paddingVertical: 0.5 * Metrics.grid.baseSpacing,
			},
			text: { fontSize: Fonts.size[14] },
		},

		mini: {
			view: {
				paddingHorizontal: 1.5 * Metrics.grid.baseSpacing,
				paddingVertical: 0.3 * Metrics.grid.baseSpacing,
			},
			text: { fontSize: Fonts.size[14] },
		},

		center: {
			wrapper: { alignSelf: 'center' },
			view: { alignSelf: 'center' },
		},
		stretch: {
			wrapper: { alignSelf: 'stretch' },
			view: { alignSelf: 'stretch' },
		},
		'flex-1': {
			wrapper: { flex: 1 },
		},
	},
})

const clsStylesWithMargins = ClsStyles.merge([
	marginClsStyles.withMapping({ view: null }),
	clsStyles,
])

export default clsStylesWithMargins
