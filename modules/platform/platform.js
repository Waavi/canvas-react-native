// https://github.com/ptelad/react-native-iphone-x-helper/blob/master/index.js

import { Platform, Dimensions, StatusBar } from 'react-native'

const dimensions = Dimensions.get('window')
export const screen = {
	width: dimensions.width < dimensions.height ? dimensions.width : dimensions.height,
	height: dimensions.width < dimensions.height ? dimensions.height : dimensions.width,
}

export const isIOS = Platform.OS === 'ios'
export const isPad = Platform.isPad
export const isTVOS = Platform.isTVOS
export const isIphoneX =
	isIOS &&
	!isPad &&
	!isTVOS &&
	(screen.height === 812 || screen.width === 812 || screen.height === 896 || screen.width === 896)
export const isAndroid = !isIOS

export const ifIOS = (iphoneValue, regularValue) => (isIOS ? iphoneValue : regularValue)
export const ifIphoneX = (iphoneXValue, regularValue) => (isIphoneX ? iphoneXValue : regularValue)
export const ifAndroid = (androidValue, regularValue) => (isIOS ? regularValue : androidValue)

export const forIOS = func => {
	if (isIOS) func()
}
export const forIphoneX = func => {
	if (isIphoneX) func()
}
export const forAndroid = func => {
	if (!isIOS) func()
}

export const getStatusBarHeight = Platform.select({
	ios: isIphoneX ? safe => (safe ? 44 : 30) : () => 20,
	android: () => StatusBar.currentHeight,
})

export const getBottomSpace = isIphoneX ? 34 : 0

export default {
	screen,
	isIOS,
	isPad,
	isTVOS,
	isIphoneX,
	isAndroid,
	ifIOS,
	ifIphoneX,
	ifAndroid,
	forIOS,
	forIphoneX,
	forAndroid,
	getStatusBarHeight,
	getBottomSpace,
	select: Platform.select,
}
