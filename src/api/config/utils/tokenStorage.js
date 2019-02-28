import { AsyncStorage } from 'react-native'

const AUTH_TOKEN = 'AUTH_TOKEN'
const AUTH_TOKEN_EXP = 'AUTH_TOKEN_EXP'

export const saveTokenOnStorage = async (token, expiration) => {
	try {
		if (token) {
			await AsyncStorage.setItem(AUTH_TOKEN, token)
		} else {
			await AsyncStorage.removeItem(AUTH_TOKEN)
		}
		if (expiration) {
			await AsyncStorage.setItem(AUTH_TOKEN_EXP, expiration.toString())
		} else {
			await AsyncStorage.removeItem(AUTH_TOKEN_EXP)
		}
	} catch (error) {
		console.tron.error(`AsyncStorage error: ${error.message}`)
	}
}

export const getTokenFromStorage = async () => {
	try {
		const token = await AsyncStorage.getItem(AUTH_TOKEN)
		const expiration = await AsyncStorage.getItem(AUTH_TOKEN_EXP)
		return { token, expiration: expiration ? new Date(expiration) : null }
	} catch (error) {
		console.tron.error(`AsyncStorage error: ${error.message}`)
		return { token: null, expiration: null }
	}
}

export const removeTokenFromStorage = async () => {
	try {
		await AsyncStorage.removeItem(AUTH_TOKEN)
		await AsyncStorage.removeItem(AUTH_TOKEN_EXP)
	} catch (error) {
		console.tron.error(`AsyncStorage error: ${error.message}`)
	}
}
