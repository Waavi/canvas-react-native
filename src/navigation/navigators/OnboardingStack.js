import { createStackNavigator } from 'react-navigation'
import { WalkthroughScreen } from '@/screens'

const OnboardingStack = createStackNavigator(
	{
		Walkthrough: { screen: WalkthroughScreen },
	},
	{
		initialRouteName: 'Walkthrough',
		headerMode: 'none',
	}
)
export default OnboardingStack
