export const PaginationEmpty = {
	page: 1,
	from: 1,
	size: 10,
	total: 0,
	isLoadedAll: true,
	isLoading: true,
	isRefreshing: false,
	isLoadingMore: false,
}
export const createPagination = (page, from, size, total) => ({
	page,
	from,
	size,
	total,
	isLoadedAll: from + size > total,
	isLoading: false,
	isRefreshing: false,
	isLoadingMore: false,
})

const getHeader = (headers, header) =>
	parseInt(headers[header] || headers[header.toLowerCase()], 10)

const fromHeaders = headers =>
	createPagination(
		getHeader(headers, 'X-Page'),
		getHeader(headers, 'X-Page-From'),
		getHeader(headers, 'X-Page-Size'),
		getHeader(headers, 'X-Page-Total')
	)
const fromMetaData = metaData =>
	createPagination(metaData.current_page, metaData.from, metaData.per_page, metaData.total)

export default { fromHeaders, fromMetaData }
