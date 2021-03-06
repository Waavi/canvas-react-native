import React, { Component } from 'react'
import { func, shape } from 'prop-types'
import { ScreenView, WText, WButton } from '@/components'

export class OtherScreen extends Component {
	static propTypes = {
		navigation: shape({ navigate: func.isRequired }).isRequired,
	}
	constructor(props) {
		super(props)
		const { navigation } = props
		navigation.setParams({ handleGoBack: this.handleGoBack })
	}
	handleGoBack = () => {
		const { navigation } = this.props
		setTimeout(() => navigation.goBack(), 3000)
	}
	render() {
		const { navigation } = this.props
		const { push } = navigation
		return (
			<ScreenView cls="col-center">
				<WText size={20}>OtherScreen</WText>
				<WButton text="Go to another screen" onPress={() => push('OtherScreen')} />
			</ScreenView>
		)
	}
}

OtherScreen.navigationOptions = ({ navigation }) => ({
	title: 'OtherScreen',
	gesturesEnabled: false,
	handleGoBack: (navigation.state.params || {}).handleGoBack || false,
})
