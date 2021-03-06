import { persistCombineReducers } from 'redux-persist'
import { reducer as form } from 'redux-form'
import { reducer as system } from './system'
import { reducer as navigation } from './navigation'
import { reducer as navigationData } from './navigationData'
import { reducer as notifications } from './notifications'
import { reducer as flags } from './flags'
import { reducer as auth } from './auth'
import configureStore from './configureStore'
import rootSaga from './sagas'
import { config } from './rehydration'

const rootReducer = persistCombineReducers(config, {
	form,
	system,
	navigation,
	notifications,
	flags,
	navigationData,
	auth,
})

const store = configureStore(rootReducer, rootSaga)
export default store
