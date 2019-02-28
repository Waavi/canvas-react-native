import { AppRegistry } from 'react-native'
import AppConfig from '@/config'
import App from '@/App'
import StorybookUI from '@/config/storybook'

const MainScreen = __DEV__ && AppConfig.storybook.show ? StorybookUI : App
AppRegistry.registerComponent(AppConfig.projectName, () => MainScreen)
