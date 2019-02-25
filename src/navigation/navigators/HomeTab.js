import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { ifIphoneXR } from 'react-native-utils'
import { EnquiriesScreen, ArchiveScreen } from '@/screens'
import { MainTabIcon } from '@/components'
import { Colors, Metrics } from '@/theme'
import InboxNavigator from '../inbox'

const tabRoute = (screen, component) => ({
	screen,
	navigationOptions: () => ({
		tabBarIcon: ({ tintColor }) => component(tintColor),
	}),
})

const HomeTab = createBottomTabNavigator(
	{
		Inbox: tabRoute(InboxNavigator, tintColor => (
			<MainTabIcon name="Inbox" tintColor={tintColor} />
		)),
		Enquiries: tabRoute(EnquiriesScreen, tintColor => (
			<MainTabIcon name="Enquiries" tintColor={tintColor} />
		)),
		Archive: tabRoute(ArchiveScreen, tintColor => (
			<MainTabIcon name="Archive" tintColor={tintColor} />
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
