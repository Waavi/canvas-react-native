import React, { Component } from 'react'
import { func, shape } from 'prop-types'
import { connect } from 'react-redux'
import { AuthActions, NotificationsActions } from '#actions'
import { ScreenView, WText, Button } from '@/components'

@connect(
	null,
	{
		signin: AuthActions.signin,
		showNotificationInfo: NotificationsActions.showNotificationInfo,
	}
)
export class SigninScreen extends Component {
	static propTypes = {
		showNotificationInfo: func.isRequired,
		signin: func.isRequired,
		navigation: shape({ navigate: func.isRequired }).isRequired,
	}
	submit = () => console.tron.log('Sigin')

	render() {
		// const {  } = this.props
		return (
			<ScreenView scrollable color="white" cls="col-center pt-3s px-s pb-s">
				<WText size={20} cls="medium center mb-s">
					Signin
				</WText>
				<Button cls="" text="sign in!" onPress={this.submit} />
			</ScreenView>
		)
	}
}
