import { createReducer, createActions } from 'reduxsauce'

// Initial State
export const initialState = {
	currentRouteName: null,
}

// Types and Action Creators
const { Types, Creators } = createActions(
	{
		clean: null,
		setRouteName: ['routeName'],
	},
	{
		prefix: 'NAVIGATION_DATA_',
	}
)

// Handlers and Reducers
export const handlers = {
	[Types.CLEAN]: () => initialState,
	[Types.SET_ROUTE_NAME]: (state = initialState, { routeName }) => ({
		...state,
		currentRouteName: routeName,
	}),
}

export const reducer = createReducer(initialState, handlers)
export const NavigationDataTypes = Types
export const NavigationDataActions = Creators
