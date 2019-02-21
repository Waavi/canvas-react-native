/* eslint-disable react-native/no-color-literals */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from '../utils/propTypes'

StoryHeader.propTypes = {
	text: PropTypes.string.isRequired,
	textSize: PropTypes.number.isRequired,
	textColor: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	descriptionSize: PropTypes.number.isRequired,
	descriptionColor: PropTypes.string.isRequired,
	marginTop: PropTypes.number.isRequired,
	marginBottom: PropTypes.number.isRequired,
}
export function StoryHeader({
	text,
	textSize,
	textColor,
	description,
	descriptionSize,
	descriptionColor,
	marginTop,
	marginBottom,
}) {
	const containerStyle = { marginTop, marginBottom }
	const textStyle = { fontSize: textSize, color: textColor }
	const descriptionStyle = { fontSize: descriptionSize, color: descriptionColor }
	return (
		<View style={[styles.container, containerStyle]}>
			<Text style={[styles.text, textStyle]}>{text}</Text>
			{description && (
				<Text style={[styles.description, descriptionStyle]}>{description}</Text>
			)}
		</View>
	)
}
StoryHeader.h1 = ({ text, description }) =>
	StoryHeader({
		text,
		description,
		textSize: 20,
		textColor: 'rgba(0,0,0,0.8)',
		descriptionSize: 14,
		descriptionColor: 'rgba(0,0,0,0.5)',
		marginTop: 40,
		marginBottom: 20,
	})
StoryHeader.h2 = ({ text, description }) =>
	StoryHeader({
		text,
		description,
		textSize: 17,
		textColor: 'rgba(0,0,0,0.6)',
		descriptionSize: 12,
		descriptionColor: 'rgba(0,0,0,0.3)',
		marginTop: 10,
		marginBottom: 20,
	})

const styles = StyleSheet.create({
	container: {
		alignSelf: 'stretch',
		paddingHorizontal: 15,
	},
	text: {
		fontWeight: 'bold',
		textAlign: 'center',
	},
	description: {
		textAlign: 'center',
		marginTop: 10,
	},
})
