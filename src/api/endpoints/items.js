/* eslint-disable no-unused-vars */
import _ from 'lodash'
import { RESPONSE_PAGE_WITH_PAGE } from '../utils/mockup'

const item = id => ({ id, name: `Item ${id}` })
const total = 157

const items = api => ({
	get: async ({ page = 1, size = 20 }) => {
		const from = (page - 1) * size
		const itemArray = from < total ? _.range(from, from + size).map(item) : []
		return RESPONSE_PAGE_WITH_PAGE(itemArray, page, size, total)
	},
})

export default items
