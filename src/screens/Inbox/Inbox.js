import React, { Component } from 'react'
import PropTypes from '#propTypes'
import { connect } from 'react-redux'
import { AuthActions, NotificationsActions } from '#actions'
import { ScreenView, WButton } from '@/components'
import { t } from '@/lang'

@connect(
	null,
	{
		signout: AuthActions.signout,
		showNotificationInfo: NotificationsActions.showNotificationInfo,
	}
)
export class InboxScreen extends Component {
	static propTypes = {
		signout: PropTypes.func.isRequired,
		navigation: PropTypes.navigation.isRequired,
		showNotificationInfo: PropTypes.func.isRequired,
	}

	render() {
		const { signout, showNotificationInfo, navigation } = this.props
		const { navigate } = navigation
		return (
			<ScreenView cls="flex-1 col-center space-around">
				<WButton text="Go to another screen" onPress={() => navigate('OtherScreen')} />
				<WButton text="signout" onPress={signout} />

				<WButton
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
			</ScreenView>
		)
	}
}

InboxScreen.navigationOptions = () => ({
	title: t('nav.pages.inbox'),
})
