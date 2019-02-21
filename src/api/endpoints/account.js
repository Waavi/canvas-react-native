/* eslint-disable no-unused-vars */
import { RESPONSE_DATA } from '../utils/mockup'

let user = {
	id: 1,
	name: 'John',
	lastname: 'Doe',
	nick: 'Jonhy',
	email: 'john.doe@mail.com',
	birthday: '1984-12-21',
	student: false,
	hobby: 'sports',
}

const account = api => ({
	get: async () => RESPONSE_DATA(user),
	update: async params => {
		user = { ...user, ...params }
		return RESPONSE_DATA(user)
	},
})

export default account
