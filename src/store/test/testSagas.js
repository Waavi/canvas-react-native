import { put, call, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { TestActions } from '#actions'

export function* incrementAsync() {
	const value = yield select(state => state.test.counter)
	yield call(delay, 2000)
	yield put(TestActions.set(value + 1))
}
