import { RESPONSE_DATA } from '../utils/responses'
import { authData } from '../data'

export default {
	signin: () => RESPONSE_DATA(authData),
	signout: () => RESPONSE_DATA({}),
}
