import React from 'react'
import {
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	View,
	Keyboard,
	Platform,
} from 'react-native'
import { Metrics } from '@/theme'
import { Box } from './Box'

export function BoxAvoidKeyboard({
	behavior = 'position',
	keyboardVerticalOffset = 0,
	wrapperStyle = { flex: 1 },
	contentContainerStyle,
	withAutoDismiss = false,
	children,
	...boxProps
}) {
	const offset = Metrics.scale.vertical(keyboardVerticalOffset)
	const content = <Box {...boxProps}>{children}</Box>
	const touchableContent = touchableWrapper(content, withAutoDismiss)
	return wrapper(touchableContent, behavior, offset, wrapperStyle, contentContainerStyle)
}

function touchableWrapper(content, withAutoDismiss) {
	return withAutoDismiss ? ( // eslint-disable-next-line react/jsx-handler-names
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} pointerEvents="box-none">
			{content}
		</TouchableWithoutFeedback>
	) : (
		content
	)
}

function wrapper(content, behavior, offset, wrapperStyle, contentContainerStyle) {
	return Platform.OS === 'ios' && behavior !== 'none' ? (
		<KeyboardAvoidingView
			behavior={behavior}
			keyboardVerticalOffset={offset}
			style={wrapperStyle}
			contentContainerStyle={[wrapperStyle, contentContainerStyle]}
		>
			{content}
		</KeyboardAvoidingView>
	) : (
		<View style={[wrapperStyle, contentContainerStyle]}>{content}</View>
	)
}
