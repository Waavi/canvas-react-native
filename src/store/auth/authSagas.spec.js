import { expectSaga } from 'redux-saga-test-plan'
import { AuthActions, NotificationsActions } from '#actions'
import Api from '@/api'
import { signin } from '@/store/auth/authSagas'

describe('store/authSagas', () => {
	const storeState = {
		auth: {
			userCode: null,
			provider: null,
			socialAuthToken: null, // para acceder a informacion de redes sociales con el token del usuario
			token: null,
			expiration: null,
			notificationToken: null, // device token
		},
	}

	it('"sigin" should work', () => {
		const params = {
			provider: 'email',
			socialAuthToken: null,
			data: {
				email: 'adrianhurt@gmail.com',
				password: '123123123',
			},
		}

		return expectSaga(signin, Api, { params })
			.put(NotificationsActions.showLoading())
			.run()
	})
})
