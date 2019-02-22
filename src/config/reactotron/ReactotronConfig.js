/* eslint-disable import/no-extraneous-dependencies */
import Reactotron, { trackGlobalErrors } from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'
import AppConfig from '@/config/app'

// For Android simulation, try run 'adb reverse tcp:9090 tcp:9090' if it doesn't connect to reactotron.
Reactotron.configure({
	name: 'PROMED',
	host: 'localhost',
})
	.useReactNative()
	.use(reactotronRedux())
	.use(sagaPlugin())
	.use(
		trackGlobalErrors({
			veto: frame => frame.fileName.indexOf('/node_modules/react-native/') >= 0,
		})
	)

if (AppConfig.useReactotron) {
	Reactotron.connect().clear()
}

console.tron = Reactotron

const warn = console.warn
console.warn = (...args) => {
	warn(...args)
	Reactotron.warn(...args)
}
