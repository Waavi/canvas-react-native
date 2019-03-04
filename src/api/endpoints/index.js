import auth from './auth'

const endpoints = api => ({
	auth: auth(api),
})

export default endpoints
