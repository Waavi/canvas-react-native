import React from 'react'
import { View, StyleSheet, Modal as NativeModal, TouchableOpacity } from 'react-native'
import PropTypes from '#propTypes'
import { WIcon } from '../WIcon'
import { Colors, Metrics } from '@/theme'

ModalFullScreen.propTypes = {
	onDismiss: PropTypes.func,
	style: PropTypes.viewStyle,
	closeButtonColor: PropTypes.string,
	closeButtonStyle: PropTypes.viewStyle,
	withoutStatusBar: PropTypes.bool,
	children: PropTypes.children.isRequired,
}
ModalFullScreen.defaultProps = {
	onDismiss: undefined,
	style: undefined,
	closeButtonColor: Colors.darkgray,
	closeButtonStyle: undefined,
	withoutStatusBar: true,
}
export function ModalFullScreen({
	onDismiss,
	style,
	closeButtonColor,
	closeButtonStyle,
	withoutStatusBar,
	children,
	...restProps
}) {
	return (
		<NativeModal
			animationType="slide"
			transparent
			onRequestClose={onDismiss && onDismiss()}
			{...restProps}
		>
			<View
				style={[
					styles.container,
					withoutStatusBar ? { marginTop: Metrics.statusBarHeight } : {},
					style,
				]}
			>
				{children}
				{onDismiss && (
					<TouchableOpacity
						onPress={onDismiss}
						style={[styles.closeButton, closeButtonStyle]}
					>
						<WIcon name="times" size={20} color={closeButtonColor} />
					</TouchableOpacity>
				)}
			</View>
		</NativeModal>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background,
	},
	closeButton: {
		position: 'absolute',
		top: 0,
		left: 0,
		backgroundColor: Colors.transparent,
		padding: 20,
	},
})
