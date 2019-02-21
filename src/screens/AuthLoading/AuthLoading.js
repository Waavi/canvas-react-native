import React, { Component } from 'react'
import PropTypes from '#propTypes'
import { ActivityIndicator, StatusBar } from 'react-native'
import { ScreenView } from '@/components'

export class AuthLoadingScreen extends Component {
	static propTypes = {
		navigation: PropTypes.navigation.isRequired,
	}
	componentDidMount() {
		const { navigation } = this.props
		this.timeout = setTimeout(() => {
			navigation.navigate('OnboardingStack')
		}, 2000)
	}
	componentWillUnmount() {
		clearTimeout(this.timeout)
	}

	render() {
		return (
			<ScreenView cls="col-center">
				<ActivityIndicator />
				<StatusBar barStyle="default" />
			</ScreenView>
		)
	}
}
