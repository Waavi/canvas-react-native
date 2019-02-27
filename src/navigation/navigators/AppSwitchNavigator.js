import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { BootstrapScreen } from '@/screens'
import OnboardingStack from './OnboardingStack'
import MainStack from './MainStack'
import StorybookUI from '@/storybook'

const AppSwitchNavigator = createAppContainer(
	createSwitchNavigator(
		{
			Bootstrap: { screen: BootstrapScreen },
			OnboardingStack: { screen: OnboardingStack },
			MainStack: { screen: MainStack },
			StorybookUI: __DEV__ ? { screen: StorybookUI } : undefined,
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
