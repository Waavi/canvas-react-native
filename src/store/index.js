import { persistCombineReducers } from 'redux-persist'
import { reducer as form } from 'redux-form'
import { reducer as system } from './system'
import { reducer as global } from './global'
import { reducer as navigation } from './navigation'
import { reducer as navigationData } from './navigationData'
import { reducer as auth } from './auth'
import { reducer as test } from './test'
import { reducer as items } from './items'
import configureStore from './configureStore'
import rootSaga from './sagas'
import { config } from './rehydration'

const rootReducer = persistCombineReducers(config, {
	form,
	system,
	global,
	navigation,
	navigationData,
	auth,
	test,
	items,
})

const store = configureStore(rootReducer, rootSaga)
export default store
