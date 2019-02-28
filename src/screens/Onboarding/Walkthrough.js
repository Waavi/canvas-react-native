import React, { Component } from 'react'
import { func, shape } from 'prop-types'
import { connect } from 'react-redux'
import { AuthActions, NotificationsActions } from '#actions'
import { ScreenView, Button, Icon } from '@/components'

@connect(
	null,
	{
		forceLogin: AuthActions.forceLogin,
		showNotificationInfo: NotificationsActions.showNotificationInfo,
	}
)
export class WalkthroughScreen extends Component {
	static propTypes = {
		showNotificationInfo: func.isRequired,
		forceLogin: func.isRequired,
		navigation: shape({ navigate: func.isRequired }).isRequired,
	}
	render() {
		const { showNotificationInfo, forceLogin, navigation } = this.props
		return (
			<ScreenView scrollable color="white" cls="col-stretch-center pt-3s px-s pb-s">
				<Icon name="card" />
				<Button text="signin" textAlign="center" toUpper onPress={() => forceLogin()} />
				<Button
					text="test modal"
					textAlign="center"
					toUpper
					onPress={() =>
						showNotificationInfo({
							title: 'título',
							text: 'texto',
							dismissBtnText: 'vale!',
							onDismiss: () => console.tron.log('wowow'),
						})
					}
				/>
				<Button text="StoryBook" onPress={() => navigation.navigate('StorybookUI')} />
				<Button text="blah" onPress={() => {}} />
				<Button text="blah" onPress={() => {}} />
				<Button text="blah" onPress={() => {}} />
				<Button text="blah" onPress={() => {}} />
			</ScreenView>
		)
	}
}
