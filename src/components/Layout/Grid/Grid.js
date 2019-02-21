import { createGrid } from '@modules/react-native-cls-layout'
import ClsStyles from '@modules/react-native-cls'
import { bgColorsClsStyles, flexClsStyles, marginClsStyles } from '@/theme/cls'
import { Metrics } from '@/theme'

const spacing = Metrics.grid.baseSpacing

const clsStyles = ClsStyles.merge([bgColorsClsStyles, flexClsStyles, marginClsStyles])

export const Grid = createGrid({
	padding: {
		top: spacing,
		bottom: spacing,
		right: spacing,
		left: spacing,
		inner: spacing,
	},
	clsStyles,
})
