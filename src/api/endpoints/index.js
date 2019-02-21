import auth from './auth'
import account from './account'
import items from './items'

const endpoints = api => ({
	auth: auth(api),
	account: account(api),
	items: items(api),
})

export default endpoints
