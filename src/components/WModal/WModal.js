import React from 'react'
import { Image, View, StyleSheet, Modal as NativeModal, TouchableOpacity } from 'react-native'
import PropTypes from '#propTypes'
import { BasicStyles, Colors } from '@/theme'
import { Backdrop } from './components/Backdrop'
import { WModalButtons } from './components/WModalButtons'
import { WText } from '../WText'
import { WIcon } from '../WIcon'

WModal.propTypes = {
	visible: PropTypes.bool.isRequired,
	type: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
	image: PropTypes.asset,
	imageStyle: PropTypes.viewStyle,
	onDismiss: PropTypes.func,
	dismissBtnText: PropTypes.string,
	avoidKeyboard: PropTypes.bool,
	avoidKeyboardOffset: PropTypes.number,
	children: PropTypes.children,
	buttons: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			onPress: PropTypes.func.isRequired,
			variant: PropTypes.string,
		})
	),
}
WModal.defaultProps = {
	type: undefined,
	title: undefined,
	text: undefined,
	image: undefined,
	imageStyle: undefined,
	onDismiss: null,
	dismissBtnText: undefined,
	avoidKeyboard: false,
	avoidKeyboardOffset: -120,
	children: undefined,
	buttons: [],
}
export function WModal({
	visible,
	// eslint-disable-next-line no-unused-vars
	type,
	title,
	text,
	image,
	imageStyle,
	onDismiss,
	dismissBtnText,
	avoidKeyboard,
	avoidKeyboardOffset,
	children,
	buttons,
}) {
	return (
		<NativeModal visible={visible} animationType="fade" transparent onRequestClose={onDismiss}>
			<Backdrop avoidKeyboard={avoidKeyboard} avoidKeyboardOffset={avoidKeyboardOffset}>
				<View style={styles.container}>
					{onDismiss && (
						<TouchableOpacity onPress={onDismiss} style={styles.closeButton}>
							<WIcon name="times" size={20} color={Colors.lightgray} />
						</TouchableOpacity>
					)}
					{image && <Image source={image} style={imageStyle} />}
					{title && (
						<WText size={20} cls="medium center mb-s">
							{title}
						</WText>
					)}
					{text && (
						<WText size={16} cls="center mb-s">
							{text}
						</WText>
					)}
					{children}
					<WModalButtons
						dismissBtnText={dismissBtnText}
						buttons={buttons}
						onModalDismiss={onDismiss}
					/>
				</View>
			</Backdrop>
		</NativeModal>
	)
}

const styles = StyleSheet.create({
	container: {
		alignSelf: 'stretch',
		alignItems: 'center',
		backgroundColor: Colors.white,
		...BasicStyles.roundedCorners(25),
		paddingHorizontal: 25,
		paddingTop: 50,
		paddingBottom: 20,
	},
	closeButton: {
		position: 'absolute',
		top: 0,
		right: 0,
		padding: 20,
		backgroundColor: Colors.transparent,
	},
})
