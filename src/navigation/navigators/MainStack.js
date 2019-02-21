import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { NavBar } from '@/navigation'
import { HomeScreen, OtherScreen } from '@/screens'
import StorybookUI from '@/storybook'

const MainStack = createStackNavigator(
	{
		MyCards: { screen: HomeScreen },
		OtherScreen: { screen: OtherScreen },
		StorybookUI: __DEV__ ? { screen: StorybookUI } : undefined,
	},
	{
		initialRouteName: 'MyCards',
		headerMode: 'screen',
		defaultNavigationOptions: ({ navigation }) => ({
			header: headerProps => (
				<NavBar withDrawer navigation={navigation} headerProps={headerProps} />
			),
		}),
	}
)

export default MainStack
