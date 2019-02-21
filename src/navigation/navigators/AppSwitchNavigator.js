import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { AuthLoadingScreen } from '@/screens'
import OnboardingStack from './OnboardingStack'
import MainStackWithDrawer from '../MainStackWithDrawer'

const AppSwitchNavigator = createAppContainer(
	createSwitchNavigator(
		{
			AuthLoading: { screen: AuthLoadingScreen },
			OnboardingStack: { screen: OnboardingStack },
			MainStack: { screen: MainStackWithDrawer },
		},
		{
			initialRouteName: 'AuthLoading',
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
