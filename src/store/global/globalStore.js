import { createReducer, createActions } from 'reduxsauce'
import FLAG from '#flags'
import { omit } from 'lodash'
import { t } from '@/lang'

// Initial State
export const initialState = {
	loading: FLAG.FALSE,
	loadingOpacity: 0.8,
	modalData: {
		visible: false,
		type: undefined,
		title: undefined,
		image: undefined,
		text: undefined,
		dismissBtnText: undefined,
		onDismiss: undefined,
		buttons: [], // list of { text, onPress, variant } for each button (dismissBtn is automatically added to layout)
		blocking: false, // true if a modal requires to select an option
	},
	flag: {},
}

// Types and Action Creators
const { Types, Creators } = createActions(
	{
		clean: null,

		showLoading: ['opacity'],
		hideLoading: null,

		showModalInfo: ['data'],
		showModalSuccess: ['data'],
		showModalError: ['data'],
		showModalRequest: ['data'],
		hideModal: null,

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
		prefix: 'GLOBAL_',
	}
)

// HELPERS:
const modalDataWithType = (state, data, type, dismissBtnDefaultText) => {
	if (data) {
		return {
			...state,
			modalData: {
				...initialState.modalData,
				...data,
				visible: true,
				type,
				dismissBtnText: data.dismissBtnText || dismissBtnDefaultText,
			},
		}
	}
	return { ...state, modalData: initialState.modalData }
}
const addFlag = (state, key, value) => ({ ...state, flag: { ...state.flag, [key]: value } })
const removeFlag = (state, key) => ({ ...state, flag: omit(state.flag, key) })

// Reducers and Handlers
export const handlers = {
	[Types.CLEAN]: () => initialState,

	[Types.SHOW_LOADING]: (state = initialState, { opacity = null }) => ({
		...state,
		loading: FLAG.TRUE,
		loadingOpacity: opacity || initialState.loadingOpacity,
	}),
	[Types.HIDE_LOADING]: (state = initialState) => ({
		...state,
		loading: FLAG.FALSE,
		loadingOpacity: initialState.loadingOpacity,
	}),

	[Types.SHOW_MODAL_INFO]: (state = initialState, { data }) =>
		modalDataWithType(state, data, 'INFO', t('ok')),
	[Types.SHOW_MODAL_SUCCESS]: (state = initialState, { data }) =>
		modalDataWithType(state, data, 'SUCCESS', t('ok')),
	[Types.SHOW_MODAL_ERROR]: (state = initialState, { data }) =>
		modalDataWithType(state, data, 'ERROR', t('accept')),
	[Types.SHOW_MODAL_REQUEST]: (state = initialState, { data }) =>
		modalDataWithType(state, data, 'REQUEST', t('cancel')),
	[Types.HIDE_MODAL]: (state = initialState) => ({
		...state,
		modalData: {
			...state.modalData,
			visible: false,
		},
	}),

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
export const GlobalTypes = Types
export const GlobalActions = Creators
