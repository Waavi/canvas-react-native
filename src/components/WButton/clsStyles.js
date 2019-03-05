import ClsStyles from '@modules/react-native-cls'
import { Fonts, Colors, Metrics, BasicStyles } from '@/theme'
import { marginClsStyles } from '@/theme/cls/spacingClsStyles'

const clsStyles = ClsStyles.create({
	mapping: { wrapper: null, view: null, text: null, gradient: null },
	styles: {
		_base: {
			wrapper: {},
			view: {
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: 100,
				backgroundColor: 'transparent',
				paddingHorizontal: 1.5 * Metrics.grid.baseSpacing,
				paddingVertical: Metrics.grid.baseSpacing,
				...BasicStyles.shadow.button,
			},
			text: {
				fontSize: Fonts.size[16],
				fontFamily: Fonts.type.medium,
				backgroundColor: 'transparent',
				color: Colors.white,
				includeFontPadding: false,
				textAlignVertical: 'center',
			},
			gradient: {
				borderRadius: 100,
			},
		},
		disabled: {
			view: { backgroundColor: Colors.lightgray },
			text: { color: Colors.white },
			gradient: null,
		},
		// Colors
		green: {
			view: { backgroundColor: Colors.green },
			text: { color: Colors.black },
			gradient: null,
		},
		white: {
			view: {
				borderWidth: 1,
				borderColor: Colors.black,
				backgroundColor: Colors.white,
			},
			text: { color: Colors.black },
			gradient: null,
		},
		dark: {
			view: { backgroundColor: Colors.dark },
			gradient: null,
		},
		'dark-light': {
			view: { backgroundColor: Colors.darkgray },
			text: { color: Colors.white },
			gradient: null,
		},
		'dark-outline': {
			view: {
				backgroundColor: Colors.dark,
				borderWidth: 1,
				borderColor: Colors.white,
			},
			text: { fontSize: Fonts.size[13] },
			gradient: null,
		},
		yellow: {
			view: { backgroundColor: Colors.yellow },
			text: { color: Colors.black },
			gradient: null,
		},
		// Sizes
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
		// Align
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
