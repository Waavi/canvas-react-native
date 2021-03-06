import ClsStyles from '@modules/react-native-cls'
import { Fonts, Colors, Metrics, BasicStyles } from '@/theme'
import { marginClsStyles } from '@/theme/cls/spacingClsStyles'

const clsStyles = ClsStyles.create({
	mapping: { wrapper: null, view: null, text: null, _config: null },
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
		},
		disabled: {
			view: { backgroundColor: Colors.lightgray },
			text: { color: Colors.white },
			_config: {
				gradient: false,
			},
		},
		// Colors
		lightgray: {
			view: { backgroundColor: Colors.lightgray },
			text: { color: Colors.white },
			_config: {
				gradient: false,
			},
		},
		green: {
			view: { backgroundColor: Colors.green },
			text: { color: Colors.black },
			_config: {
				gradient: false,
			},
		},
		white: {
			view: {
				borderWidth: 1,
				borderColor: Colors.black,
				backgroundColor: Colors.white,
			},
			text: { color: Colors.black },
			_config: {
				gradient: false,
			},
		},
		dark: {
			view: { backgroundColor: Colors.dark },
			_config: {
				gradient: false,
			},
		},
		'dark-light': {
			view: { backgroundColor: Colors.darkgray },
			text: { color: Colors.white },
			_config: {
				gradient: false,
			},
		},
		'dark-outline': {
			view: {
				backgroundColor: Colors.dark,
				borderWidth: 1,
				borderColor: Colors.white,
			},
			text: { fontSize: Fonts.size[13] },
			_config: {
				gradient: false,
			},
		},
		yellow: {
			view: { backgroundColor: Colors.yellow },
			text: { color: Colors.black },
			_config: {
				gradient: false,
			},
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
