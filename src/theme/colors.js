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
		label: basics.mediumgray,
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

	card: {
		subscribed: green,
		notSubscribed: basics.lightgray,
	},

	promo: {
		reward: green,
		points: green,
		pointsLight: '#70f0c9',
		offer: '#95D6C7',
		offerLight: '#dff2ee',
		stamp: '#FABA59',
		stampLight: '#fde3bc',
		stamps: '#FABA59',
		stampsLight: '#fde3bc',
		coupon: '#EECB19',
		couponLight: '#f5e078',
		couponp: '#EECB19',
		couponpLight: '#f5e078',
		bono: '#FA4C37',
		bonoLight: '#fca59b',
	},

	rating: {
		gray: '#dce1e6',
		darkgray: basics.darkgray,
		green,
		black: basics.black,
	},

	catalog: {
		background: '#3e4854',
		gray: '#647685',
		title: '#14e5a9',
		price: '#f9da31',
		thumbup: '#14e5a9',
		thumbdown: '#fe6448',
	},

	txnResult: {
		promo: basics.darkorange,
		rule: green,
	},
}
