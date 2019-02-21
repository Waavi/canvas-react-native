import React, { Component } from 'react'
import { number, object, func, arrayOf } from 'prop-types'
import { connect } from 'react-redux'
import { TestActions, ItemsActions } from '#actions'
import { Platform, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Box, SText, Button } from '@/components'
import { t } from '@/lang'

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
})

@connect(
	state => ({
		counter: state.test.counter,
		items: state.items.list,
	}),
	{
		increment: TestActions.increment,
		incrementAsync: TestActions.incrementAsync,
		set: TestActions.set,
		getItems: ItemsActions.get,
	}
)
export class MainScreen extends Component {
	static propTypes = {
		counter: number.isRequired,
		increment: func.isRequired,
		incrementAsync: func.isRequired,
		set: func.isRequired,
		getItems: func.isRequired,
		items: arrayOf(object),
	}
	static defaultProps = {
		items: [],
	}

	state = {
		textColor: 'primary',
	}

	componentDidMount() {
		const { getItems } = this.props
		getItems()
	}

	handleIncrement = () => {
		const { increment } = this.props
		increment()
	}
	handleTestButtonClick = () => {
		const { textColor } = this.state
		this.setState({ textColor: textColor === 'primary' ? 'secondary' : 'primary' })
	}
	handleIncrementAsync = () => {
		const { incrementAsync } = this.props
		incrementAsync()
	}
	handleReset = () => {
		const { set } = this.props
		set(0)
	}

	render() {
		const { counter, items } = this.props
		const { textColor } = this.state
		const flexStyle = { flex: 1 }
		return (
			<View style={flexStyle}>
				<View style={styles.container}>
					<Text style={styles.welcome}>Welcome to React Native!</Text>
					<Text style={styles.instructions}>To get started, edit App.js</Text>
					<Text style={styles.instructions}>{instructions}</Text>
					<Box cls="mt-2s">
						<SText cls={[textColor, 'center mb-2s']}>test</SText>
						<Button text="button" onPress={this.handleTestButtonClick} />
					</Box>
					<View style={styles.testContainer}>
						<Text style={styles.testCounter}>
							{t('general.counter', { value: counter })}
						</Text>
						<View style={styles.buttonsContainer}>
							<TouchableOpacity onPress={this.handleIncrement} style={styles.button}>
								<Text>+1</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={this.handleIncrementAsync}
								style={styles.button}
							>
								<Text>+1 Async</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={this.handleReset} style={styles.button}>
								<Text>Reset</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.testContainer}>
						{items.map(({ id, name }) => (
							<Text key={id}>{name}</Text>
						))}
					</View>
				</View>
			</View>
		)
	}
}

/* eslint-disable */
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	testContainer: {
		marginTop: 50,
	},
	testCounter: {
		fontSize: 20,
	},
	buttonsContainer: {
		flexDirection: 'row',
		marginTop: 20,
	},
	button: {
		margin: 5,
		padding: 10,
		borderWidth: 1,
		borderColor: 'black',
	},
})
