import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { NavBar } from '@/navigation'
import EnquiriesRoutes from './routes'

const EnquiriesNavigator = createStackNavigator(
	{
		...EnquiriesRoutes,
	},
	{
		initialRouteName: 'EnquiriesIndex',
		headerMode: 'screen',
		defaultNavigationOptions: ({ navigation }) => ({
			header: headerProps => <NavBar navigation={navigation} headerProps={headerProps} />,
		}),
	}
)

export default EnquiriesNavigator
