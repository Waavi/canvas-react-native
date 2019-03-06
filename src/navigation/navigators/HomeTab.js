import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { ifIphoneXR } from 'react-native-utils'
import { NavBarBottomButton } from '../ui/navbar'
import { Colors, Metrics } from '@/theme'
import { InboxNavigator, ArchiveNavigator, EnquiriesNavigator } from '@/navigation/home'

const tabRoute = (screen, component) => ({
	screen,
	navigationOptions: () => ({
		tabBarIcon: ({ tintColor }) => component(tintColor),
	}),
})

const HomeTab = createBottomTabNavigator(
	{
		Inbox: tabRoute(InboxNavigator, tintColor => (
			<NavBarBottomButton name="Inbox" icon="card" color={tintColor} />
		)),
		Enquiries: tabRoute(EnquiriesNavigator, tintColor => (
			<NavBarBottomButton name="Enquiries" icon="card" color={tintColor} />
		)),
		Archive: tabRoute(ArchiveNavigator, tintColor => (
			<NavBarBottomButton name="Archive" icon="card" color={tintColor} />
		)),
	},
	{
		initialRouteName: 'Inbox',
		lazy: true,
		swipeEnabled: false,
		animationEnabled: false,
		tabBarOptions: {
			showIcon: true,
			showLabel: false,
			activeTintColor: Colors.primary,
			inactiveTintColor: Colors.darkgray,
			style: {
				height: 50,
				backgroundColor: Colors.tabBarBackground,
				borderTopWidth: 1,
				borderTopColor: Colors.lightergray,
				paddingBottom: ifIphoneXR(80, Metrics.iPhoneXBottomPadding),
			},
			tabStyle: {
				height: 50,
				padding: 0,
			},
			iconStyle: {
				flex: 1,
				width: null,
				alignSelf: 'stretch',
			},
			indicatorStyle: {
				backgroundColor: 'transparent',
			},
		},
		headerMode: 'screen',
		navigationOptions: () => ({
			header: null,
		}),
	}
)

export default HomeTab
