import { all, takeLatest } from 'redux-saga/effects'
import Api from '@/api'

import {
	SystemTypes,
	startup,
	navigateTo,
	resetTo,
	resetToMainStack,
	resetToOnboardingStack,
} from '@/store/system'
import { AuthTypes, signin, signout, forceLogin } from '@/store/auth'

export default function* rootSaga() {
	const sagaIndex = [
		// System
		takeLatest(SystemTypes.STARTUP, startup),
		takeLatest(SystemTypes.NAVIGATE_TO, navigateTo),
		takeLatest(SystemTypes.RESET_TO, resetTo),
		takeLatest(SystemTypes.RESET_TO_MAIN_STACK, resetToMainStack),
		takeLatest(SystemTypes.RESET_TO_ONBOARDING_STACK, resetToOnboardingStack),
		// Auth
		takeLatest(AuthTypes.SIGNIN, signin, Api),
		takeLatest(AuthTypes.SIGNOUT, signout, Api),
		takeLatest(AuthTypes.FORCE_LOGIN, forceLogin, Api),
	]
	yield all(sagaIndex)
}
