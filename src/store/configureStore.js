import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import AppConfig from '@/config'
import Rehydration from './rehydration'
import { middleware as navigationMiddleware } from './navigation'
import screenTrackingMiddleware from './middlewares/screenTracking'

export default (rootReducer, rootSaga) => {
	// Redux Configuration
	const middlewares = [screenTrackingMiddleware, navigationMiddleware]
	const enhancers = []
	// Saga Middleware
	const sagaMonitor = AppConfig.useReactotron ? console.tron.createSagaMonitor() : null
	const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
	middlewares.push(sagaMiddleware)
	// Assemble Middleware
	enhancers.push(applyMiddleware(...middlewares))
	// If Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
	const createAppropriateStore = AppConfig.useReactotron ? console.tron.createStore : createStore
	const store = createAppropriateStore(rootReducer, compose(...enhancers))
	// Configure persistStore and check reducer version number
	if (AppConfig.reduxPersist.active) {
		Rehydration.updateReducers(store)
	}
	// Kick off root saga
	sagaMiddleware.run(rootSaga)

	return store
}
