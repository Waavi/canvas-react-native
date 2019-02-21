import { createReducer, createActions } from 'reduxsauce'
import { Keyboard } from 'react-native'

// Initial State
export const initialState = {
	currentRouteName: null,
	isDrawerOpen: false,
}

// Types and Action Creators
const { Types, Creators } = createActions(
	{
		clean: null,
		setRouteName: ['routeName'],
		setIsDrawerOpen: ['isDrawerOpen'],
		openDrawer: null,
		closeDrawer: null,
	},
	{
		prefix: 'NAVIGATION_DATA_',
	}
)

// HELPERS
const setIsDrawerOpen = (state, isOpen) => {
	Keyboard.dismiss()
	return { ...state, isDrawerOpen: isOpen }
}

// Handlers and Reducers
export const handlers = {
	[Types.CLEAN]: () => initialState,
	[Types.SET_ROUTE_NAME]: (state = initialState, { routeName }) => ({
		...state,
		currentRouteName: routeName,
	}),
	[Types.SET_IS_DRAWER_OPEN]: (state = initialState, { isDrawerOpen }) =>
		setIsDrawerOpen(state, isDrawerOpen),
	[Types.OPEN_DRAWER]: (state = initialState) => setIsDrawerOpen(state, true),
	[Types.CLOSE_DRAWER]: (state = initialState) => setIsDrawerOpen(state, false),
}

export const reducer = createReducer(initialState, handlers)
export const NavigationDataTypes = Types
export const NavigationDataActions = Creators
