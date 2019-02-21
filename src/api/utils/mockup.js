import { NONE, CLIENT_ERROR } from 'apisauce'
import moment from 'moment'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const DELAY = 2000
const delayFor = async (response, delay = DELAY) => {
	await sleep(delay)
	return response
}

export const RESPONSE_DATA = async (data, delay = DELAY) =>
	delayFor({ ok: true, problem: NONE, data }, delay)
export const RESPONSE_OK = async (delay = DELAY) => RESPONSE_DATA({}, delay)

export const RESPONSE_ERROR = async (problem, data, delay = DELAY) =>
	delayFor({ ok: false, problem, data }, delay)
export const RESPONSE_UNKNOWN_ERROR = async (delay = DELAY) =>
	RESPONSE_ERROR(CLIENT_ERROR, { title: 'Error!', text: 'Ooooops!' }, delay)

export const PAGE_DATA_WITH_FROM = (items, from, size, total) => ({
	data: items,
	meta: {
		current_page: Math.floor(from / size) + 1,
		from,
		per_page: size || Math.min(items.length, 10),
		total: total || items.length,
	},
})
export const PAGE_DATA_WITH_PAGE = (items, page, size, total) => ({
	data: items,
	meta: {
		current_page: page,
		from: (page - 1) * size,
		per_page: size || Math.min(items.length, 10),
		total: total || items.length,
	},
})

export const RESPONSE_PAGE_WITH_FROM = async (items, from, size, total, delay = DELAY) =>
	RESPONSE_DATA(PAGE_DATA_WITH_FROM(items, from, size, total), delay)
export const RESPONSE_PAGE_WITH_PAGE = async (items, page, size, total, delay = DELAY) =>
	RESPONSE_DATA(PAGE_DATA_WITH_PAGE(items, page, size, total), delay)

export const RESPONSE_SIMPLE_ACTION_WITH_ID = async (id, delay = DELAY) => {
	if (id === undefined || id === null) {
		return RESPONSE_UNKNOWN_ERROR(delay)
	}
	return RESPONSE_OK(delay)
}

export const RESPONSE_ACTION_FOR_ID = async (responseFromId, delay = DELAY) => id => {
	if (id === undefined || id === null) {
		return RESPONSE_UNKNOWN_ERROR(delay)
	}
	return RESPONSE_DATA(responseFromId(id), delay)
}

export const randomBetween = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min
export const randomBoolean = () => Math.random() > 0.5
export const randomToken = (length = 36) =>
	Math.random()
		.toString(length)
		.substr(2)

export const messageDate = (date, minutesToAdd) =>
	(date ? moment(date) : moment()).add(minutesToAdd, 'minutes').format()
