import { Platform } from 'react-native-utils'

const { width, height } = Platform.screen

//Guideline sizes are based on standard ~5" screen mobile device
// We'll use iphone resolution
const GUIDELINE_BASE_WIDTH = 375 //350;
const GUIDELINE_BASE_HEIGHT = 667 //680;

const scaleHorizontal = size => (width * size) / GUIDELINE_BASE_WIDTH
const scaleVertical = size => (height * size) / GUIDELINE_BASE_HEIGHT

const scaleHorizontalPercentage = size => (width * size) / 100
const scaleVerticalPercentage = size => (height * size) / 100

const BASE_SPACING = scaleHorizontal(16)
const ONE_COLUMN_WIDTH = scaleHorizontal(44)

export const Metrics = {
	grid: {
		baseSpacing: BASE_SPACING,
		spacing: num => num * BASE_SPACING,
		columnsWidth: num => num * ONE_COLUMN_WIDTH + (num - 1) * BASE_SPACING,
	},
	scale: {
		horizontal: scaleHorizontal,
		vertical: scaleVertical,
		percentage: {
			horizontal: scaleHorizontalPercentage,
			vertical: scaleVerticalPercentage,
		},
	},
	screenWidth: width < height ? width : height,
	screenHeight: width < height ? height : width,
	statusBarHeight: Platform.getStatusBarHeight(false),
	statusBarSafeHeight: Platform.getStatusBarHeight(true),
	navBarHeight: Platform.ifIOS(44, 54),
	bottomSpace: Platform.getBottomSpace,
}
