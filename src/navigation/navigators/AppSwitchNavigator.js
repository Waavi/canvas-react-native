import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { BootstrapScreen } from '@/screens'
import OnboardingStack from './OnboardingStack'
import MainStack from './MainStack'

const AppSwitchNavigator = createAppContainer(
	createSwitchNavigator(
		{
			Bootstrap: { screen: BootstrapScreen },
			OnboardingStack: { screen: OnboardingStack },
			MainStack: { screen: MainStack },
		},
		{
			initialRouteName: 'Bootstrap',
		}
	)
)

export const screensWithoutBackOption = [
	'Welcome',
	'SignupSuccess',
	'EditAccount',
	'ChangePassword',
]

export default AppSwitchNavigator
