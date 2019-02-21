import Config from './app'
import './reactotron/ReactotronConfig'

const AppConfig = Config
export default AppConfig

if (__DEV__) {
	// If ReactNative's yellow box warnings are too much, it is possible to turn
	// it off, but the healthier approach is to fix the warnings.  =)
	console.disableYellowBox = AppConfig.disableWarningsYellowBox
}
