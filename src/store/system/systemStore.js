import { createReducer, createActions } from 'reduxsauce'
import { omit } from 'lodash'

// Initial State
export const initialState = {
	isRehydrated: false,
	// Global params persistents
	config: {},
}

// Types and Action Creators
const { Types, Creators } = createActions(
	{
		rehydratated: null,
		set: ['key', 'value'],
		remove: ['key'],
		// Async
		startup: null,
		navigateTo: ['navigateParams'],
		resetTo: ['navigateParams'],
		resetToMainStack: null,
		resetToOnboardingStack: null,
	},
	{
		prefix: 'SYSTEM_',
	}
)

// HELPERS:
const setConfig = (state, key, value) => ({ ...state, [key]: value })
const removeConfig = (state, key) => ({ ...omit(state, key) })

// Handlers and Reducers
export const handlers = {
	[Types.REHYDRATATED]: (state = initialState) => ({ ...state, isRehydrated: true }),
	[Types.SET]: (state = initialState, { key, value }) => setConfig(state, key, value),
	[Types.REMOVE]: (state = initialState, { key }) => removeConfig(state, key),
}

export const reducer = createReducer(initialState, handlers)
export const SystemTypes = Types
export const SystemActions = Creators
