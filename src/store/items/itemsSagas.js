import { call, put, select } from 'redux-saga/effects'
import { ItemsActions } from '#actions'
//import { changePasswordOnKeychain } from '@/api/apiSecured';
import Pagination from '@/api/utils/pagination'
// import ERROR from '@/utils/errors'

export function* get(api) {
	const { isLoading } = yield select(state => state.items.pagination)
	if (!isLoading) {
		yield put(ItemsActions.markAsRefreshing())
	}
	const { ok, data } = yield call(api.items.get, {})
	// Analytics.trackEvent({ category: 'Card', action: 'GetComments' })
	if (ok && data && Array.isArray(data.data) && data.meta) {
		yield put(ItemsActions.set(data.data, Pagination.fromMetaData(data.meta)))
	} else {
		yield put(ItemsActions.markAsLoaded())
	}
}

export function* getMore(api) {
	const { page } = yield select(state => state.items.pagination)
	yield put(ItemsActions.markAsLoadingMore())
	const { ok, data } = yield call(api.items.get, { page: page + 1 })
	// Analytics.trackEvent({ category: 'Card', action: 'GetMoreComments' });
	if (ok && data && Array.isArray(data.data) && data.meta) {
		yield put(ItemsActions.add(data.data, Pagination.fromMetaData(data.meta)))
	} else {
		yield put(ItemsActions.markAsLoaded())
	}
}
