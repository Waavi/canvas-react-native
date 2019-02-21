import { createReducer, createActions } from 'reduxsauce'

// Initial State
export const initialState = {
	userCode: null,
	provider: null,
	socialAuthToken: null, // para acceder a informacion de redes sociales con el token del usuario
	token: null,
	expiration: null,
	notificationToken: null, // device token
}

// Types and Action Creators
const { Types, Creators } = createActions(
	{
		clean: null,
		cleanButProvider: null,
		setUserCode: ['userCode'],
		setProvider: ['provider', 'socialAuthToken'],
		setToken: ['token', 'expiration'],
		expire: null,
		//setAsSignedUp: null,
		setNotificationToken: ['notificationToken'],

		//Async (sagas)
		// signup: ['params'],
		signin: ['params'],
		// forgotPassword: ['params'],
		// getAndSaveNotificationToken: null,
		// saveNotificationToken: ['notificationToken'],
		// removeNotificationToken: ['notificationToken'],
		signout: null,
		forceLogin: null,
	},
	{
		prefix: 'AUTH_',
	}
)

// Handlers and Reducers
export const handlers = {
	[Types.CLEAN]: () => initialState,
	[Types.CLEAN_BUT_PROVIDER]: (state = initialState) => ({
		...initialState,
		provider: state.provider,
	}),
	[Types.SET_USER_CODE]: (state = initialState, { userCode }) => ({ ...state, userCode }),
	[Types.SET_PROVIDER]: (state = initialState, { provider, socialAuthToken = null }) => ({
		...state,
		provider,
		socialAuthToken,
	}),
	[Types.SET_TOKEN]: (state = initialState, { token, expiration }) => ({
		...state,
		token,
		expiration,
	}),
	[Types.EXPIRE]: (state = initialState) => ({ ...state, token: null, expiration: null }),
	[Types.SET_NOTIFICATION_TOKEN]: (state = initialState, { notificationToken }) => ({
		...state,
		notificationToken,
	}),
}

export const reducer = createReducer(initialState, handlers)
export const AuthTypes = Types
export const AuthActions = Creators
