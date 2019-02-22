/* eslint-disable max-len */
export default {
	step1: {
		navTitle: 'Nueva transacción',
		title: 'NUEVA TRANSACCIÓN',
		text: {
			food:
				'¿Has disfrutado? Pues todavía hay más: selecciona las promociones de las que quieras beneficiarte usando los selectores de la izquierda e indícalo antes de pedir la cuenta. Ojo, algunas no son acumulables.',
			other:
				'¿Has disfrutado? Pues todavía hay más: selecciona las promociones de las que quieras beneficiarte usando los selectores de la izquierda e indícalo antes de realizar el pago en el establecimiento. Ojo, algunas no son acumulables.',
		},
		textForNoPromos: {
			food:
				'¿Has disfrutado? Por favor, inicia la transacción e indícalo antes de pedir la cuenta.',
			other:
				'¿Has disfrutado? Por favor, inicia la transacción e indícalo antes de realizar el pago en el establecimiento.',
		},
		join: {
			navTitle: 'Unirse a transacción',
			title: 'UNIRSE A OTRA TRANSACCIÓN',
			text: {
				food:
					'¿Quieres unirte a la transacción de {{username}}? ¡Estupendo! Antes de pedir la cuenta elige aquellas promociones de las que quieras beneficiarte. Ojo, algunas no son acumulables.',
				other:
					'¿Quieres unirte a la transacción de {{username}}? ¡Estupendo! Antes de realizar el pago elige aquellas promociones de las que quieras beneficiarte. Ojo, algunas no son acumulables.',
			},
			textForNoPromos: {
				food:
					'¿Quieres unirte a la transacción de {{username}}? Por favor, inicia la transacción e indícalo antes de pedir la cuenta.',
				other:
					'¿Quieres unirte a la transacción de {{username}}? Por favor, inicia la transacción e indícalo antes de realizar el pago en el establecimiento.',
			},
			nick: 'TRANSACCIÓN DE',
			code: 'CÓDIGO',
		},
		initTransactionBtn: 'Iniciar transacción',
		error: {
			defaultTitle: '¡Ups!',
			exclusivityTitle: 'Promociones no acumulables',
			isExclusive:
				'La promoción que quieres seleccionar no es acumulable a otras. ¿Quieres seleccionarla y quitar las anteriores?',
			anotherIsExclusive:
				'La promoción que tenías seleccionada no es acumulable a otras. ¿Quieres seleccionar esta y quitar la anterior?',
			notEnough: {
				reward: 'Vaya, no tienes puntos suficientes',
				stamps: 'Vaya, no tienes sellos suficientes',
				coupon: 'Vaya, no tienes suficientes cupones',
				couponp: 'Vaya, no tienes suficientes cupones',
				bono: 'Vaya, no tienes unidades suficientes',
			},
			unknown: 'Algo ha pasado...',
		},
		confirmation: {
			title: 'Confirma tu transacción',
			text: 'Confirma tu transacción antes de realizar el pago en el establecimiento.',
		},
	},
	step2: {
		navTitle: 'Transacción en curso',
		title: 'TRANSACCIÓN EN CURSO',
		text: {
			food:
				'Ya está todo listo para finalizar la transacción. Pide la cuenta e indica al camarero cuál es tu nombre de usuario o el código que se ha generado.',
			other:
				'Ya está todo listo para finalizar la transacción. Antes de realizar el pago indica cuál es tu nombre de usuario o el código que se ha generado.',
		},
		nick: 'USUARIO',
		code: 'CÓDIGO',
		splitText: '¿Quieres compartir tus puntos de esta transacción con uno o más amigos?',
		splitBtn: 'Compartir puntos',
		goToCardBtn: 'Ir a la tarjeta {{name}}',
		cancel: {
			title: 'Cancelar transacción',
			text: '¿Deseas cancelar la transacción?',
		},
		finished: {
			title: 'TRANSACCIÓN FINALIZADA',
			text: '¡Estupendo! Tu transacción ha sido finalizada.',
		},
		expiredModal: {
			title: 'Expirado',
			text: 'Tu última transacción ha expirado sin haberse completado',
		},
		expired: {
			title: 'TRANSACCIÓN CADUCADA',
			text: '¡Vaya! Tu transacción ha caducado sin completarse.',
		},
	},
	split: {
		navTitle: 'Compartir puntos',
		title: 'COMPARTIR PUNTOS',
		text1: {
			one:
				'Si quieres compartir los puntos de esta transacción tu acompañante tan solo tiene que capturar el siguiente código QR desde su aplicación móvil de promed o directamente desde la propia web.',
			bold: 'promed',
			two: ' o directamente desde la propia web.',
		},
		text2:
			'Si lo hace desde la web puede capturar el código desde cualquier aplicación de captura de QR o bien iniciar la transacción de la manera habitual, pinchando en la opción “unirte a otra transacción” e indicando el siguiente código de 4 cifras.',
	},
	result: {
		card: 'Tarjeta',
		exchanged: 'PROMOCIONES CANJEADAS',
		rules: 'HAS RECIBIDO',
	},
}
