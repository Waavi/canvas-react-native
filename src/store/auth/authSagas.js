/* eslint-disable */

// import { Platform } from 'react-native'
import { call, select, put, all, delay } from 'redux-saga/effects'
import FLAGS from '#flags'
console.log(FLAGS)
// import { CLIENT_ERROR } from 'apisauce'
import {
	AuthActions,
	FlagsActions,
	NavigationActions,
	CategoriesActions,
	AccountActions,
	CardsActions,
} from '#actions'
// import Analytics from '@/utils/analytics'
//import { googleSignout } from '@/utils/social/googleSocial'
// import fcm from '@/utils/fcm'
// import { setToken, setAuthOnKeychain, removeToken } from '@/api/apiSecured'
import ERROR from '@/utils/errors'
// import { fireActionAfterLogin } from '@/utils/actionsCenter'
// import { get as getAccount } from './account'
// import { get as getCategories } from './categories'
import { resetToMainStack, resetToOnboardingStack, navigateTo } from '@/store/system'

// export function* signup(api, { params }) {
//     yield put(GlobalActions.showLoading())
//     yield put(AuthActions.setProvider('credentials'))
//     const { ok, problem } = yield call(api.auth.signup, { ...params, countryIso2: 'ES' })
//     if (ok) {
//         // Analytics.trackEvent({ category: 'User', action: 'Signup' })
//     } else if (problem === CLIENT_ERROR) {
//         //yield put(GlobalErrorActions.setErrorCode('auth.signup'))
//         yield put(GlobalActions.error(ERROR.UNKNOWN))
//     } else {
//         yield put(GlobalActions.error(ERROR.UNKNOWN))
//     }
//     yield put(GlobalActions.hideLoading())
// }

export function* signin(api, { params }) {
	yield put(FlagsActions.setTrue(FLAGS.LOADING))
	const {
		provider,
		socialAuthToken = null,
		data: { email, password },
	} = params
	yield put(AuthActions.setProvider(provider, socialAuthToken))
	const { ok, data } = yield call(api.auth.signin, { id: email, password })
	if (ok && data && data.token && data.minutes) {
		// yield call(setAuthOnKeychain, params)
		// yield call(setToken, data.token, data.minutes)

		// yield* getAccount(api)
		// const { userId } = yield select(state => state.auth)
		yield* onLogin(api)
		// Analytics.setUser(userId)
		// Analytics.trackEvent({ category: 'User', action: 'Signin' })
	}
	yield put(FlagsActions.remove(FLAGS.LOADING))
}

// export function* forgotPassword(api, { params }) {
//     yield put(GlobalActions.showLoading())
//     const { ok } = yield call(api.auth.forgotPassword, { email: params.email })
//     if (ok) {
//         // Analytics.trackEvent({ category: 'User', action: 'Signin' })
//     }
//     yield put(GlobalActions.hideLoading())
// }

function* onLogin(api) {
	// yield* getCategories(api)
	yield* resetToMainStack()
	//yield* getAndSaveNotificationToken(api)
	// fireActionAfterLogin()
}

export function* signout(api) {
	// const { notificationToken, provider } = yield select(state => ({
	//     notificationToken: state.auth.notificationToken,
	//     provider: state.auth.provider
	// }))
	// Analytics.trackEvent({ category: 'User', action: 'Signout' })
	yield put(FlagsActions.setTrue(FLAGS.LOADING))
	yield all([
		call(api.auth.signout),
		// call(removeToken),
		delay(500),
	])
	yield* cleanStore()
	yield* resetToOnboardingStack()
	yield* navigateTo({ routeName: 'Signin' })

	// yield* removeNotificationToken(api, { notificationToken })
	// if (provider === 'google') {
	//     googleSignout()
	// }
	yield put(FlagsActions.remove(FLAGS.LOADING))
}

function* cleanStore() {
	yield put(AuthActions.cleanButProvider())
	// yield put(CategoriesActions.clean())
	// yield put(AccountActions.clean())
	// yield put(CardsActions.clean())
}

export function* forceLogin(api) {
	yield* signin(api, {
		params: {
			provider: 'password',
			data: {
				email: 'adrianhurt@gmail.com',
				password: '123123123',
			},
		},
	})
}

// export function* getAndSaveNotificationToken(api) {
//     const { userId } = yield select(state => state.auth)
//     if (userId) {
//         // if user is logged
//         // const notificationToken = yield call(fcm.getToken)
//         const notificationToken = '1234567890'
//         if (notificationToken) {
//             yield* saveNotificationToken(api, { notificationToken })
//         }
//     }
// }

// export function* saveNotificationToken(api, { notificationToken }) {
//     const { userId, notificationToken: oldNotificationToken } = yield select(state => state.auth)
//     if (userId) {
//         // if user is logged
//         if (notificationToken !== oldNotificationToken) {
//             if (oldNotificationToken) {
//                 yield call(api.device.remove, oldNotificationToken)
//             }
//             yield put(AuthActions.setNotificationToken(notificationToken))
//             if (notificationToken) {
//                 yield call(api.device.add, {
//                     token: notificationToken,
//                     os: Platform.OS === 'ios' ? 'iOS' : 'Android'
//                 })
//                 // Analytics.trackEvent({ category: 'User', action: 'SaveTokenDevice' })
//             }
//         }
//     } else {
//         if (oldNotificationToken) {
//             yield call(api.device.remove, oldNotificationToken)
//         }
//         yield put(AuthActions.setNotificationToken(null))
//     }
// }

// export function* removeNotificationToken(api, { notificationToken }) {
//     if (notificationToken) {
//         const { ok } = yield call(api.device.remove, notificationToken)
//         if (ok) {
//             yield put(AuthActions.setNotificationToken(null))
//         }
//     }
// }
