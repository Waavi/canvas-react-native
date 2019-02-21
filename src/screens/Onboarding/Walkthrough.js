import React, { Component } from 'react'
import { func, shape } from 'prop-types'
import { connect } from 'react-redux'
import { AuthActions, GlobalActions } from '#actions'
import { ScreenView, Button, Icon } from '@/components'

@connect(
	null,
	{
		forceLogin: AuthActions.forceLogin,
		showModalInfo: GlobalActions.showModalInfo,
	}
)
export class WalkthroughScreen extends Component {
	static propTypes = {
		showModalInfo: func.isRequired,
		forceLogin: func.isRequired,
		// navigation: shape({ navigate: func.isRequired }).isRequired,
	}
	render() {
		const { showModalInfo, forceLogin } = this.props
		return (
			<ScreenView scrollable color="white" cls="col-stretch-center pt-3s px-s pb-s">
				<Icon name="card" />
				<Button text="signin" textAlign="center" toUpper onPress={() => forceLogin()} />
				<Button
					text="test modal"
					textAlign="center"
					toUpper
					onPress={() =>
						showModalInfo({
							title: 'título',
							text: 'texto',
							dismissBtnText: 'vale!',
							onDismiss: () => console.tron.log('wowow'),
						})
					}
				/>
				<Button text="blah" onPress={() => {}} />
				<Button text="blah" onPress={() => {}} />
				<Button text="blah" onPress={() => {}} />
				<Button text="blah" onPress={() => {}} />
				<Button text="blah" onPress={() => {}} />
			</ScreenView>
		)
	}
}
