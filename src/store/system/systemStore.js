import { createReducer, createActions } from 'reduxsauce'

// Initial State
export const initialState = {
	isRehydrated: false,
}

// Types and Action Creators
const { Types, Creators } = createActions(
	{
		rehydratated: null,
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

// Handlers and Reducers
export const handlers = {
	[Types.REHYDRATATED]: (state = initialState) => ({ ...state, isRehydrated: true }),
}

export const reducer = createReducer(initialState, handlers)
export const SystemTypes = Types
export const SystemActions = Creators
