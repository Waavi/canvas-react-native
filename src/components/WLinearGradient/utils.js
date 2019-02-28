import { Colors as ColorsTheme } from '@/theme'

export const Colors = {
	primary: ColorsTheme.gradients.primary,
	secondary: ColorsTheme.gradients.secondary,
	tertiary: ColorsTheme.gradients.tertiary,
}

export const Directions = {
	vertical: {
		start: { x: 0, y: 0 },
		end: { x: 1, y: 1 },
	},
	'vertical-reverse': {
		start: { x: 1, y: 1 },
		end: { x: 0, y: 0 },
	},
	horizontal: {
		start: { x: 0, y: 0.5 },
		end: { x: 1, y: 0.5 },
	},
	'horizontal-reverse': {
		start: { x: 1, y: 0.5 },
		end: { x: 0, y: 0.5 },
	},
}

export default {
	Directions,
	Colors,
}
