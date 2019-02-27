import { createReducer, createActions } from 'reduxsauce'
import { t } from '@/lang'

// Initial State
export const initialState = {
	notification: {
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
}

// Types and Action Creators
const { Types, Creators } = createActions(
	{
		clean: null,
		showNotificationInfo: ['data'],
		showNotificationSuccess: ['data'],
		showNotificationError: ['data'],
		showNotificationRequest: ['data'],
		hideNotification: null,
	},
	{
		prefix: 'NOTIFICATIONS_',
	}
)

// HELPERS:
const notificationWithType = (state, data, type, dismissBtnDefaultText) => {
	if (data) {
		return {
			...state,
			notification: {
				...initialState.notification,
				...data,
				visible: true,
				type,
				dismissBtnText: data.dismissBtnText || dismissBtnDefaultText,
			},
		}
	}
	return { ...state, notification: initialState.notification }
}

// Reducers and Handlers
export const handlers = {
	[Types.CLEAN]: () => initialState,

	[Types.SHOW_NOTIFICATION_INFO]: (state = initialState, { data }) =>
		notificationWithType(state, data, 'INFO', t('ok')),
	[Types.SHOW_NOTIFICATION_SUCCESS]: (state = initialState, { data }) =>
		notificationWithType(state, data, 'SUCCESS', t('ok')),
	[Types.SHOW_NOTIFICATION_ERROR]: (state = initialState, { data }) =>
		notificationWithType(state, data, 'ERROR', t('accept')),
	[Types.SHOW_NOTIFICATION_REQUEST]: (state = initialState, { data }) =>
		notificationWithType(state, data, 'REQUEST', t('cancel')),
	[Types.HIDE_NOTIFICATION]: (state = initialState) => ({
		...state,
		notification: {
			...state.notification,
			visible: false,
		},
	}),
}

export const reducer = createReducer(initialState, handlers)
export const NotificationsTypes = Types
export const NotificationsActions = Creators
