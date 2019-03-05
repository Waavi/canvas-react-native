/*
The stories are loaded dynamically thanks to 'react-native-storybook-loader'.
It loads every '.stories.js' file within 'src' folder (check config within 'package.json')
All the stories are loaded within the file 'storybook/storyLoader'.
To refresh this file you need to run 'yarn prestorybook'
*/
import React from 'react'
import { View } from 'react-native'
import { getStorybookUI, configure, addParameters } from '@storybook/react-native'
import './rn-addons'
import { loadStories } from './storyLoader' // file created dinamically
import theme from './theme'

// add every common decorator used for every story
import '@modules/react-native-storybook/decorators/common'

//Add parameters
addParameters({
	options: {
		name: 'Foo',
		theme,
	},
})

// import stories
configure(() => {
	loadStories() // loads every '.stories.js' files within 'src' folder
}, module)

// Refer to https://github.com/storybooks/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI

// Fixed with black background, wrapper storybook
// https://github.com/storybooks/storybook/issues/5628
// https://github.com/storybooks/storybook/issues/5377
function StorybookUIRoot() {
	const StorybookUI = getStorybookUI({})
	return (
		// eslint-disable-next-line
		<View style={{ backgroundColor: 'white', flex: 1 }}>
			<StorybookUI />
		</View>
	)
}

export default StorybookUIRoot
