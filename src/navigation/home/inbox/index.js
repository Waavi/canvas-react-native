import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { NavBar } from '@/navigation'
import InboxRoutes from './routes'

const InboxNavigator = createStackNavigator(
	{
		...InboxRoutes,
	},
	{
		initialRouteName: 'InboxIndex',
		headerMode: 'screen',
		defaultNavigationOptions: ({ navigation }) => ({
			header: headerProps => <NavBar navigation={navigation} headerProps={headerProps} />,
		}),
	}
)

export default InboxNavigator
