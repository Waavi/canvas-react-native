import apisauce from 'apisauce'
import AppConfig from '@/config'
import {
	saveTokenOnStorage,
	getTokenFromStorage,
	removeTokenFromStorage,
} from './utils/tokenStorage'
import { setAuthorizationHeader, removeAuthorizationHeader } from './utils/authorizationHeader'

let api = null
let tokenData = { token: null, expiration: null }

export const create = () => {
	if (api === null) {
		api = apisauce.create(AppConfig.api.config)
		getTokenFromStorage().then(({ token, expiration }) => {
			setAuthorizationHeader(api, token, expiration)
		})
	}
	return api
}

export const getToken = () => tokenData

export const setToken = ({ token, expiration = null }) => {
	tokenData = { token, expiration }
	saveTokenOnStorage(token, expiration)
	setAuthorizationHeader(api, token, expiration)
}

export const removeToken = async () => {
	removeTokenFromStorage()
	removeAuthorizationHeader()
}
