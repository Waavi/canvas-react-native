import { NONE, CLIENT_ERROR } from 'apisauce'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const DELAY = 500

const delayFor = async (response, delay = DELAY) => {
	await sleep(delay)
	return response
}
export const RESPONSE_DATA = async (data, delay = DELAY) =>
	delayFor({ ok: true, problem: NONE, data }, delay)
export const RESPONSE_OK = async (delay = DELAY) => delayFor(RESPONSE_DATA({}), delay)

export const RESPONSE_ERROR = async (problem, data, delay = DELAY) =>
	delayFor({ ok: false, problem, data }, delay)
export const RESPONSE_UNKNOWN_ERROR = RESPONSE_ERROR(CLIENT_ERROR, {
	title: 'Error!',
	text: 'Ooooops!',
})

export const PAGE_DATA = (items, page, size, total) => ({
	data: items,
	meta: {
		current_page: page,
		from: (page - 1) * size,
		per_page: size,
		total,
	},
})

export const RESPONSE_PAGE = (...args) => RESPONSE_DATA(PAGE_DATA(...args))

export const RESPONSE_SIMPLE_ACTION_WITH_ID = id => {
	if (id === undefined || id === null) {
		return RESPONSE_UNKNOWN_ERROR
	}
	return RESPONSE_OK
}

export const RESPONSE_ACTION_FOR_ID = responseFromId => id => {
	if (id === undefined || id === null) {
		return RESPONSE_UNKNOWN_ERROR
	}
	return RESPONSE_DATA(responseFromId(id))
}
