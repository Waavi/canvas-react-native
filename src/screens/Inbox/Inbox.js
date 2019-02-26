import React, { Component } from 'react'
import PropTypes from '#propTypes'
import { connect } from 'react-redux'
import { AuthActions, GlobalActions } from '#actions'
import { ScreenView, Button } from '@/components'
import { t } from '@/lang'

@connect(
	null,
	{
		signout: AuthActions.signout,
		showModalInfo: GlobalActions.showModalInfo,
	}
)
export class InboxScreen extends Component {
	static propTypes = {
		signout: PropTypes.func.isRequired,
		navigation: PropTypes.navigation.isRequired,
		showModalInfo: PropTypes.func.isRequired,
	}

	render() {
		const { signout, showModalInfo, navigation } = this.props
		const { navigate } = navigation
		return (
			<ScreenView cls="flex-1 col-center space-around">
				<Button text="Go to another screen" onPress={() => navigate('OtherScreen')} />
				<Button text="signout" onPress={signout} />

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
			</ScreenView>
		)
	}
}

InboxScreen.navigationOptions = () => ({
	title: t('nav.pages.inbox'),
})
