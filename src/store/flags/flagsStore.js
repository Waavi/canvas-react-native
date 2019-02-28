import { createReducer, createActions } from 'reduxsauce'
import FLAG from '#flags'
import { omit } from 'lodash'

// Initial State
export const initialState = {}

// Types and Action Creators
const { Types, Creators } = createActions(
	{
		clean: null,
		set: ['key', 'value'],
		setWaiting: ['key'],
		setLoading: ['key'],
		setSuccess: ['key'],
		setOk: ['key'],
		setError: ['key'],
		setTrue: ['key'],
		setFalse: ['key'],
		remove: ['key'],
	},
	{
		prefix: 'FLAGS_',
	}
)

// HELPERS:
const addFlag = (state, key, value) => ({ ...state, [key]: value })
const removeFlag = (state, key) => ({ ...omit(state, key) })

// Reducers and Handlers
export const handlers = {
	[Types.CLEAN]: () => initialState,
	[Types.SET]: (state = initialState, { key, value }) => addFlag(state, key, value),
	[Types.SET_WAITING]: (state = initialState, { key }) => addFlag(state, key, FLAG.WAITING),
	[Types.SET_LOADING]: (state = initialState, { key }) => addFlag(state, key, FLAG.WAITING),
	[Types.SET_SUCCESS]: (state = initialState, { key }) => addFlag(state, key, FLAG.SUCCESS),
	[Types.SET_OK]: (state = initialState, { key }) => addFlag(state, key, FLAG.SUCCESS),
	[Types.SET_ERROR]: (state = initialState, { key }) => addFlag(state, key, FLAG.ERROR),
	[Types.SET_TRUE]: (state = initialState, { key }) => addFlag(state, key, FLAG.TRUE),
	[Types.SET_FALSE]: (state = initialState, { key }) => addFlag(state, key, FLAG.FALSE),
	[Types.REMOVE]: (state = initialState, { key }) => removeFlag(state, key),
}

export const reducer = createReducer(initialState, handlers)
export const FlagsTypes = Types
export const FlagsActions = Creators
