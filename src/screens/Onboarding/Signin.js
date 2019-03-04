import React, { Component } from 'react'
import { func, shape } from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { AuthActions, NotificationsActions } from '#actions'
import { ScreenView, WText, FG, Button } from '@/components'
import { emailValidation } from '@/utils/validation'

@connect(
	null,
	{
		signin: AuthActions.signin,
		showNotificationInfo: NotificationsActions.showNotificationInfo,
	}
)
@reduxForm({ form: 'signinForm' })
export class SigninScreen extends Component {
	static propTypes = {
		showNotificationInfo: func.isRequired,
		signin: func.isRequired,
		navigation: shape({ navigate: func.isRequired }).isRequired,
	}
	submit = () => this.props.handleSubmit(form => console.tron.log(form))()

	render() {
		// const {  } = this.props
		return (
			<ScreenView scrollable color="white" cls="col-center pt-3s px-s pb-s">
				<WText size={20} cls="medium center mb-s">
					Signin
				</WText>

				<FG.Text name="email" label="email" validate={[emailValidation]} />

				<Button cls="" text="sign in!" onPress={this.submit} disabled={!this.props.dirty} />
			</ScreenView>
		)
	}
}
