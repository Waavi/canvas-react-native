export function setAuthorizationHeader(api, token, expiration) {
	if (api) {
		const expirationDate = typeof expiration === 'string' ? Date.parse(expiration) : expiration
		if (token && expirationDate > Date.now()) {
			api.setHeaders({ Authorization: `Bearer ${token}` })
		} else {
			api.deleteHeader('Authorization')
		}
	}
}

export function removeAuthorizationHeader(api) {
	if (api) {
		api.deleteHeader('Authorization')
	}
}
