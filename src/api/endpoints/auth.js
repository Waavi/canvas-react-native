const auth = api => ({
	signin: ({ id, password }) => api.post('/auth/signin', { id, password }),
	signout: () => api.post('/auth/signout'),
})

export default auth
