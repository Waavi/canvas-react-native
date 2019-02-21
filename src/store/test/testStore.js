import { createReducer, createActions } from 'reduxsauce'

// Initial State
const initialState = {
	counter: 0,
}

// Types and Action Creators
const { Types, Creators } = createActions(
	{
		clean: null,
		increment: null,
		set: ['value'],
		// Async
		incrementAsync: null,
	},
	{
		prefix: 'TEST_',
	}
)

// Handlers and Reducers
export const handlers = {
	[Types.CLEAN]: () => initialState,
	[Types.INCREMENT]: (state = initialState) => ({ ...state, counter: state.counter + 1 }),
	[Types.SET]: (state = initialState, { value }) => ({ ...state, counter: value }),
}

export const reducer = createReducer(initialState, handlers)
export const TestTypes = Types
export const TestActions = Creators
