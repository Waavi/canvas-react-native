const basics = {
	lightgreen: '#18E2A5',
	darkgreen: '#23AE85',
	secondaryLightgreen: '#B1DCCD',
	secondaryDarkgreen: '#2E7D7F',
	lightorange: '#FBCC7C',
	darkorange: '#FF934B',
	lightred: '#F4573C',
	darkred: '#ED2434',
	lightyellow: '#FCFCD3',
	darkyellow: '#F1D833',

	white: '#FFF',
	lightestgray: '#F4F6FA',
	lightergray: '#EDF0F4',
	lightgray: '#C8CED8',
	mediumgray: '#A3ADBA',
	darkgray: '#5B6674',
	darkergray: '#3A434F',
	darkestgray: '#2b303c',
	black: '#222',
	totalblack: '#000',
}

const green = basics.lightgreen
const yellow = basics.darkyellow
const dark = basics.darkergray
const red = basics.darkred

export const Colors = {
	...basics,
	green,
	yellow,
	dark,
	red,

	primary: green,
	brand: green,

	sectionTitle: {
		background: '#08D79a',
		text: 'rgb(50, 120, 90)',
	},

	transparent: 'transparent',

	separator: '#dedde0', //'#f5f5f6',

	background: basics.lightergray,

	text: {
		totalBlack: basics.totalblack,
		black: basics.black,
		darkestgray: basics.darkestgray,
		darkgray: basics.darkgray,
		secondary: basics.mediumgray,
		label: basics.lightgray,
		hint: basics.lightgray,
		'hint-dark': basics.darkgray,
		white: basics.white,
		brand: green,
		green,
		yellow,

		inverse: basics.white,
		inverseSecondary: basics.mediumgray,

		link: '#0088ff',
		error: red,
	},

	gradients: {
		primary: ['rgb(72, 192, 182)', 'rgb(77, 108, 204)', 'rgb(84, 0, 232)'],
		secondary: ['rgb(72, 192, 182)', 'rgb(77, 108, 204)'],
		tertiary: ['rgb(60, 223, 226)', 'rgb(72, 192, 182)'],
	},
}
