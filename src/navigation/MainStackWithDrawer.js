import React, { Component } from 'react'
import PropTypes from '#propTypes'
import { connect } from 'react-redux'
import { NavigationDataActions } from '#actions'
import SideMenu from 'react-native-side-menu'
import { Metrics } from '@/theme'
import MainStack from './navigators/MainStack'
import sections from './navigators/DrawerSections'
import { Drawer } from './ui/drawer'

const drawerWidth = Metrics.screenWidth * 0.85

@connect(
	state => ({
		isDrawerOpen: state.navigationData.isDrawerOpen,
	}),
	{
		setIsDrawerOpen: NavigationDataActions.setIsDrawerOpen,
	}
)
export default class MainStackWithDrawer extends Component {
	static propTypes = {
		navigation: PropTypes.navigation.isRequired,
		isDrawerOpen: PropTypes.bool.isRequired,
		setIsDrawerOpen: PropTypes.func.isRequired,
	}

	static router = MainStack.router

	render() {
		const { navigation, isDrawerOpen, setIsDrawerOpen } = this.props
		const isFirstScreenOnStack = navigation.state.index === 0
		const currentSection = navigation.state.routes[0].routeName
		return (
			<SideMenu
				menu={
					<Drawer
						sections={sections}
						currentSection={currentSection}
						navigation={navigation}
						closeDrawer={() => setIsDrawerOpen(false)}
					/>
				}
				openMenuOffset={drawerWidth}
				isOpen={isDrawerOpen}
				onChange={setIsDrawerOpen}
				disableGestures={!isFirstScreenOnStack}
			>
				<MainStack navigation={navigation} />
			</SideMenu>
		)
	}
}
