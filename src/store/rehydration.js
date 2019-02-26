import { AsyncStorage } from 'react-native'
import { persistStore } from 'redux-persist'
import AppConfig from '@/config'
import { SystemActions } from '#actions'

let whitelist = ['navigation', 'navigationData']

if (__DEV__) {
	whitelist = [...whitelist, 'test']
}

export const config = {
	key: AppConfig.reduxPersist.key,
	storage: AsyncStorage,
	whitelist,
}

const updateReducers = store => {
	const reducerVersion = AppConfig.reduxPersist.version

	const startup = () => store.dispatch(SystemActions.startup())

	// Check to ensure latest reducer version
	AsyncStorage.getItem('reducerVersion')
		.then(localVersion => {
			if (localVersion !== reducerVersion) {
				if (AppConfig.useReactotron) {
					console.tron.display({
						name: 'PURGE',
						value: {
							'Old Version:': localVersion,
							'New Version:': reducerVersion,
						},
						preview: 'Reducer Version Change Detected',
						important: true,
					})
				}
				// Purge store
				persistStore(store, null, startup).purge()
				AsyncStorage.setItem('reducerVersion', reducerVersion)
			} else {
				persistStore(store, null, startup).purge()
				persistStore(store, null, startup)
			}
		})
		.catch(() => {
			persistStore(store, null, startup)
			AsyncStorage.setItem('reducerVersion', reducerVersion)
		})
}

export default { updateReducers }
