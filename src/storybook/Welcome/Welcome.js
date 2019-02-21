import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

export class WelcomeScreen extends Component {
	static defaultProps = {
		showApp: null,
	}

	static propTypes = {
		showApp: PropTypes.func,
	}

	showApp = event => {
		const { showApp } = this.props
		event.preventDefault()

		if (showApp) {
			showApp()
		}
	}

	render() {
		return (
			<View style={styles.wrapper}>
				<Text style={styles.header}>{texts.title}</Text>
				<Text style={styles.content}>{texts.text}</Text>
			</View>
		)
	}
}
const texts = {
	title: 'Welcome to React Native Storybook',
	text:
		'This is a UI Component development environment for your React Native app. Here you can display and interact with your UI components as stories. A story is a single state of one or more UI components. You can have as many stories as you want. In other words a story is like a visual test case.',
}
const styles = {
	wrapper: {
		flex: 1,
		padding: 24,
		justifyContent: 'center',
	},
	header: {
		fontSize: 18,
		marginBottom: 18,
	},
	content: {
		fontSize: 12,
		marginBottom: 10,
		lineHeight: 18,
	},
}
