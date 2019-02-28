import moment from 'moment'

export const randomBetween = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min
export const randomBoolean = () => Math.random() > 0.5
export const randomToken = (length = 36) =>
	Math.random()
		.toString(length)
		.substr(2)

export const messageDate = (date, minutesToAdd) =>
	(date ? moment(date) : moment()).add(minutesToAdd, 'minutes').format()
