import { create } from '@storybook/theming'

export default create({
	// Is this a 'light' or 'dark' theme?
	base: 'light',

	// Color palette
	colorPrimary: 'red', // primary color
	colorSecondary: 'pink', // secondary color

	// UI
	appBg: 'papayawhip',
	appContentBg: 'white',
	appBorderColor: 'rgba(0,0,0,.1)',
	appBorderRadius: 4,

	// Fonts
	fontBase: '"Helvetica", Arial, sans-serif',
	fontCode: 'Monaco, monospace',

	// Text colors
	textColor: '#FFFFFF',
	textInverseColor: '#333333',

	// Toolbar default and active colors
	barTextColor: '#999999',
	barSelectedColor: 'blue',
	barBg: 'white',

	// Form colors
	inputBg: 'white',
	inputBorder: 'rgba(0,0,0,.1)',
	inputTextColor: '#333333',
	inputBorderRadius: 4,

	// Brand logo/text
	brand: `<svg .../>`,
})
