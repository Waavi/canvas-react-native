/* eslint-disable max-len */
const title = 'Uups...'

export default {
	title,
	unknown: {
		title,
		text: 'Unexpected error. Please, try it again or contact us.',
	},
	unauthorized: {
		title,
		text: 'Error de credenciales',
	},
	auth: {
		signup: {
			title,
			text: 'There is another account with these credentials.',
		},
		signin: {
			title,
			text: 'There is no account with these credentials.',
		},
		email: {
			title,
			text: 'The email is incorrect or there is another regitered user using it.',
		},
	},
	unknownQR: {
		title,
		text: 'Vaya, parece que no entendemos este código QR',
	},
}
