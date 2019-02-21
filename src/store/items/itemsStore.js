import { createReducer, createActions } from 'reduxsauce'
import { PaginationEmpty } from '@/api/utils/pagination'

// Initial State
export const initialState = {
	list: [],
	pagination: PaginationEmpty,
}

// Types and Action Creators
const { Types, Creators } = createActions(
	{
		clean: null,
		set: ['items', 'pagination'],
		add: ['items', 'pagination'],
		markAsLoading: null,
		markAsRefreshing: null,
		markAsLoadingMore: null,
		markAsLoaded: null,
		// Async
		get: null,
		getMore: null,
	},
	{
		prefix: 'ITEMS_',
	}
)

// HELPERS
const setPaginationFlags = (state, flags) => ({
	...state,
	pagination: { ...state.pagination, ...flags },
})

// Reducers and Handlers
export const handlers = {
	[Types.CLEAN]: () => initialState,
	[Types.SET]: (state = initialState, { items, pagination }) => ({
		...state,
		list: items,
		pagination,
	}),
	[Types.ADD]: (state = initialState, { items, pagination }) => ({
		...state,
		list: [...state.list, ...items],
		pagination,
	}),
	[Types.MARK_AS_LOADING]: (state = initialState) =>
		setPaginationFlags(state, { isLoading: true }),
	[Types.MARK_AS_REFRESHING]: (state = initialState) =>
		setPaginationFlags(state, { isRefreshing: true }),
	[Types.MARK_AS_LOADING_MORE]: (state = initialState) =>
		setPaginationFlags(state, { isLoadingMore: true }),
	[Types.MARK_AS_LOADED]: (state = initialState) =>
		setPaginationFlags(state, { isLoading: false, isRefreshing: false, isLoadingMore: false }),
}

export const reducer = createReducer(initialState, handlers)
export const ItemsTypes = Types
export const ItemsActions = Creators
