import { createStackNavigator } from 'react-navigation'
import { WalkthroughScreen, SigninScreen } from '@/screens'

const OnboardingStack = createStackNavigator(
	{
		Walkthrough: { screen: WalkthroughScreen },
		Signin: { screen: SigninScreen },
	},
	{
		initialRouteName: 'Walkthrough',
		headerMode: 'none',
	}
)
export default OnboardingStack
