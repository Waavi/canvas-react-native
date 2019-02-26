import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { NavBar } from '@/navigation'
import ArchiveRoutes from './routes'

const ArchiveNavigator = createStackNavigator(
	{
		...ArchiveRoutes,
	},
	{
		initialRouteName: 'ArchiveIndex',
		headerMode: 'screen',
		defaultNavigationOptions: ({ navigation }) => ({
			header: headerProps => <NavBar navigation={navigation} headerProps={headerProps} />,
		}),
	}
)

export default ArchiveNavigator
