import React from 'react'
import PropTypes from '#propTypes'
import { View, StyleSheet } from 'react-native'
import { BoxAvoidKeyboard } from '../../Layout'
import { Metrics } from '@/theme'

Backdrop.propTypes = {
	avoidKeyboard: PropTypes.bool,
	avoidKeyboardOffset: PropTypes.number,
	children: PropTypes.children.isRequired,
	color: PropTypes.string,
}
Backdrop.defaultProps = {
	avoidKeyboard: false,
	avoidKeyboardOffset: -120,
	color: 'rgba(0,0,0,0.6)',
}
export function Backdrop({ avoidKeyboard, avoidKeyboardOffset, children, color }) {
	const style = { backgroundColor: color }
	if (avoidKeyboard) {
		return (
			<BoxAvoidKeyboard
				cls="flex-1 col-center p-s"
				withAutoDismiss
				keyboardVerticalOffset={avoidKeyboardOffset}
				style={[styles.backdrop, style]}
			>
				{children}
			</BoxAvoidKeyboard>
		)
	}
	return <View style={[styles.backdrop, style]}>{children}</View>
}

const styles = StyleSheet.create({
	backdrop: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: Metrics.grid.baseSpacing,
	},
})
