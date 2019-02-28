// TODO: inspect and refactor

//import Keychain from 'react-native-keychain'
import moment from 'moment'
import AppConfig from '@/config'
import store from '@/store'
import { AuthActions, NotificationsActions } from '#actions'
import ERROR from '@/utils/errors'
import {
	saveTokenOnStorage,
	getTokenFromStorage,
	removeTokenFromStorage,
} from './utils/tokenStorage'
import Api from './api' // eslint-disable-line

const api = Api.get()

export const HEADER_AUTH_TOKEN = AppConfig.api.header.authToken
const STATUS_UNAUTHORIZED = 401

export const getToken = async () => {
	const { token, expiration } = store.getState().auth
	if (expiration && Date.now() > Date.parse(expiration)) {
		await removeToken()
	} else if (!token) {
		const { token: tok, expiration: exp } = await getTokenFromStorage()
		if (tok && exp) {
			store.dispatch(AuthActions.setToken(tok, exp))
			await getToken()
		}
	}
	return store.getState().auth.token
}
export const setToken = async (newToken, minutesToExpire) => {
	if (newToken) {
		const expiration = moment()
			.add(minutesToExpire, 'm')
			.toString()
		await saveTokenOnStorage(newToken, expiration)
		store.dispatch(AuthActions.setToken(newToken, expiration))
	} else {
		await removeToken()
	}
}
export const removeToken = async () => {
	await removeTokenFromStorage()
	store.dispatch(AuthActions.expire())
}

// TODO: Instalar y usar el Keychain: https://github.com/oblador/react-native-keychain
let keychainData = { username: 'adrian@mail.com', password: '1234567890' }
export const getAuthFomKeychain = async () => keychainData
export const setAuthOnKeychain = async ({ id, username, password }) => {
	keychainData = { username: id || username, password }
}
export const changePasswordOnKeychain = async password => {
	const { username } = await getAuthFomKeychain()
	await setAuthOnKeychain({ username, password })
}

const authenticate = async () => {
	const { username, password } = await getAuthFomKeychain()
	if (username && password) {
		const { ok, data } = await api.post(
			'/v1/signin',
			{ id: username, password },
			{ silent: true }
		)
		if (ok && data && data.token && data.minutes) {
			await setToken(data.token, data.minutes)
		}
	} else {
		store.dispatch(NotificationsActions.error(ERROR.UNAUTHORIZED))
	}
}

const fetch = async (apiFunc, url, paramsOrData = {}, axiosConfig = {}) => {
	let token = await getToken()
	if (!token && url !== '/v1/signout') {
		await authenticate()
		token = await getToken()
	}
	const axiosConfigWithToken = {
		...axiosConfig,
		headers: {
			...(axiosConfig.headers || {}),
			[HEADER_AUTH_TOKEN]: token || undefined,
		},
	}
	const response = await apiFunc(url, paramsOrData, axiosConfigWithToken)
	if (token && response.status === STATUS_UNAUTHORIZED) {
		store.dispatch(AuthActions.expire())
		return await fetch(apiFunc, url, paramsOrData, axiosConfig)
	}
	return response
}

const ApiSecured = {
	get: api.get,
	head: api.head,
	delete: api.delete,
	post: api.post,
	patch: api.patch,
	put: api.put,
	getSecured: async (...args) => await fetch(api.get, ...args),
	headSecured: async (...args) => await fetch(api.head, ...args),
	deleteSecured: async (...args) => await fetch(api.delete, ...args),
	postSecured: async (...args) => await fetch(api.post, ...args),
	patchSecured: async (...args) => await fetch(api.patch, ...args),
	putSecured: async (...args) => await fetch(api.put, ...args),
}

export default {
	get: () => ApiSecured,
}
