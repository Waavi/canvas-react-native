import React, { Component } from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import { AuthActions, NotificationsActions } from '#actions'
import { ScreenView, WText, WButton } from '@/components'

@connect(
	null,
	{
		signin: AuthActions.forceLogin,
		showNotificationInfo: NotificationsActions.showNotificationInfo,
	}
)
export class SigninScreen extends Component {
	static propTypes = {
		signin: func,
	}

	static defaultProps = {
		signin: undefined,
	}

	handleSubmit = () => {
		const { signin } = this.props
		signin()
	}

	render() {
		return (
			<ScreenView scrollable color="white" cls="col-center pt-3s px-s pb-s">
				<WText size={20} cls="medium center mb-s">
					Signin
				</WText>
				<WButton cls="" text="sign in!" onPress={this.handleSubmit} />
			</ScreenView>
		)
	}
}
