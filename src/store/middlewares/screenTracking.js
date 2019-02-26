import { NavigationActions, StackActions } from 'react-navigation'
//import Analytics from '@/utils/analytics'
import { NavigationDataActions } from '#actions'

const navigateActionTypes = [
	NavigationActions.NAVIGATE,
	NavigationActions.BACK,
	StackActions.PUSH,
	StackActions.POP,
	StackActions.POP_TO_TOP,
	StackActions.RESET,
	StackActions.REPLACE,
]

const screenTracking = ({ getState, dispatch }) => next => action => {
	if (navigateActionTypes.includes(action.type)) {
		const currentScreen = getCurrentRouteName(getState().navigation)
		const result = next(action)
		const nextScreen = getCurrentRouteName(getState().navigation)
		if (nextScreen !== currentScreen) {
			//Analytics.trackScreen(nextScreen)
			dispatch(NavigationDataActions.setRouteName(nextScreen))
		}
		return result
	}
	return next(action)
}
export default screenTracking

function getCurrentRouteName(navigationState) {
	if (!navigationState) {
		return null
	}
	const route = navigationState.routes[navigationState.index]
	// dive into nested navigators
	if (route.routes) {
		return getCurrentRouteName(route)
	}
	return route.routeName
}
