import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '@/store'
import withReactotron from '@/config/reactotron/withReactotron'
import translatedApp from '@/lang/translatedApp'
import AppLayout from '@/AppLayout'

@withReactotron
@translatedApp
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppLayout />
			</Provider>
		)
	}
}

export default App
