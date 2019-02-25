import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { NavBar } from '@/navigation'
import HomeTab from './HomeTab'
import { OtherScreen } from '@/screens'
import StorybookUI from '@/storybook'

const MainStack = createStackNavigator(
	{
		Home: { screen: HomeTab },
		OtherScreen: { screen: OtherScreen },
		StorybookUI: __DEV__ ? { screen: StorybookUI } : undefined,
	},
	{
		initialRouteName: 'Home',
		headerMode: 'screen',
		defaultNavigationOptions: ({ navigation }) => ({
			header: headerProps => <NavBar navigation={navigation} headerProps={headerProps} />,
		}),
	}
)

export default MainStack
