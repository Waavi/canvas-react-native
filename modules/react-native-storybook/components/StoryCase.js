import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from '../utils/propTypes'

StoryCase.propTypes = {
	text: PropTypes.string.isRequired,
	children: PropTypes.children.isRequired,
	description: PropTypes.string,
	padded: PropTypes.bool,
	style: PropTypes.viewStyle,
	containerStyle: PropTypes.viewStyle,
}
StoryCase.defaultProps = {
	description: undefined,
	padded: false,
	style: undefined,
	containerStyle: undefined,
}
export function StoryCase({ text, children, description, padded, style, containerStyle }) {
	return (
		<View style={[styles.container, containerStyle]}>
			<Text style={styles.text}>{text}</Text>
			<View style={[styles.wrapper, padded ? styles.wrapperPadded : undefined, style]}>
				{children}
			</View>
			{description && <Text style={styles.description}>{description}</Text>}
		</View>
	)
}

const backgroundColor = '#e0e0f0'
const containerBorderColor = 'rgba(0,0,0,0.08)'
const wrapperColor = 'white'
const wrapperBorderColor = 'rgba(0,0,0,0.3)'
const textColor = 'rgba(0,0,0,0.4)'
const descriptionColor = 'rgba(0,0,0,0.3)'
const styles = StyleSheet.create({
	container: {
		alignSelf: 'stretch',
		backgroundColor,
		marginBottom: 20,
		paddingHorizontal: 15,
		paddingVertical: 5,
		borderColor: containerBorderColor,
		borderTopWidth: 4,
	},
	text: {
		fontSize: 16,
		color: textColor,
	},
	wrapper: {
		backgroundColor: wrapperColor,
		marginVertical: 5,
		padding: 0,
		borderWidth: 1,
		borderColor: wrapperBorderColor,
	},
	wrapperPadded: {
		padding: 10,
	},
	description: {
		fontSize: 14,
		color: descriptionColor,
	},
})
