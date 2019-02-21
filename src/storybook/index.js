/*
* The stories are loaded dynamically thanks to 'react-native-storybook-loader'.
* It loads every '.stories.js' file within 'src' folder (check config within 'package.json')
* All the stories are loaded within the file 'storybook/storyLoader'.
* To refresh this file you need to run 'yarn prestorybook'
*/
import { getStorybookUI, configure } from '@storybook/react-native'
import './rn-addons'
import { loadStories } from './storyLoader' // file created dinamically

// add every common decorator used for every story
import '@modules/react-native-storybook/decorators/common'

// import stories
configure(() => {
	// eslint-disable-next-line
	if (__DEV__ && false) {
		require('../components/SText/SText.stories')
	} else {
		require('./Welcome/Welcome.stories')
		loadStories() // loads every '.stories.js' files within 'src' folder
	}
}, module)

// Refer to https://github.com/storybooks/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({})

export default StorybookUIRoot
