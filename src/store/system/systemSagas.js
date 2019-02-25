import { put } from 'redux-saga/effects'
// import { delay } from 'redux-saga'
// import { StackActions } from 'react-navigation'
import { SystemActions, NavigationActions } from '../actions'

export function* startup() {
	yield put(SystemActions.rehydratated())
	// fireInitialAction()
}

export function* navigateTo(navigateParams) {
	yield put(NavigationActions.navigate(navigateParams))
}

export function* resetTo(navigateParams) {
	yield put(
		NavigationActions.reset({
			key: null,
			index: 0,
			actions: [NavigationActions.navigate(navigateParams)],
		})
	)
}
export function* resetToOnboardingStack() {
	yield* navigateTo({ routeName: 'OnboardingStack' })
	// yield* resetTo({ routeName: 'OnboardingStack' })
}
export function* resetToMainStack() {
	yield* navigateTo({ routeName: 'MainStack' })
	// yield* resetTo({ routeName: 'MainStack' })
}
