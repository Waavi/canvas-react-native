/*
	https://medium.com/@danielskripnik/how-to-add-and-remove-custom-fonts-in-react-native-b2830084b0e4

	How to import a Icomoon font:
	1. download the icomoon generated folder.
	2. copy selection.json into config.json
	3. copy icomoon.ttf into src/assets/fonts
	4. run "react-native link"
*/
import { createIconFromIcoMoon } from '@modules/react-native-components'
import { Metrics } from '@/theme'
import icoMoonJsConfig from './config.json'

export const Icon = createIconFromIcoMoon({
	icoMoonJsConfig,
	fontName: 'WelveIcons',
	fontFilename: 'icomoon.ttf',
	scaleFunction: Metrics.scale.horizontal,
})
