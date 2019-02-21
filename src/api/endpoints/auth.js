/* eslint-disable no-unused-vars */
import { RESPONSE_DATA, RESPONSE_UNKNOWN_ERROR, randomToken } from '../utils/mockup'

const auth = api => ({
	// signin: ({ id, password }) => api.post('/v1/signin', { id, password }),
	signin: async params => {
		if (params && params.forceError) {
			return RESPONSE_UNKNOWN_ERROR()
		}
		return RESPONSE_DATA({
			token: 'abcdefg',
			minutes: 10,
		})
	},
	signout: async params => RESPONSE_DATA({}),
})

export default auth
