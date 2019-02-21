import React, { Component } from 'react'
import PropTypes from '#propTypes'
import { connect } from 'react-redux'
import { GlobalActions, NavigationActions } from '#actions'
import { View, StyleSheet, BackHandler } from 'react-native'
import { Loading, Modal } from '@/components'
import { ReduxifiedAppNavigator } from '@/store/navigation'

// TODO: cambiar isRehydrated por algo del tipo isReady o isInitialized para hacerlo más genérico
// TODO: si isInitialized = false, mostrar una pantalla a modo de splash screen con animación en lugar de un spinner

@connect(
	state => ({
		isRehydrated: state.system.isRehydrated,
		showLoading: state.global.loading,
		loadingOpacity: state.global.loadingOpacity,
		modalData: state.global.modalData,
		navState: state.navigation,
	}),
	{
		hideModal: GlobalActions.hideModal,
	}
)
class AppLayout extends Component {
	static propTypes = {
		isRehydrated: PropTypes.bool.isRequired,
		showLoading: PropTypes.bool.isRequired,
		loadingOpacity: PropTypes.number.isRequired,
		modalData: PropTypes.shape({
			visible: PropTypes.bool.isRequired,
			title: PropTypes.string,
			text: PropTypes.string,
			dismissBtnText: PropTypes.string,
			onDismiss: PropTypes.func,
			buttons: PropTypes.arrayOf(
				PropTypes.shape({
					text: PropTypes.string.isRequired,
					onPress: PropTypes.func,
					variant: PropTypes.string,
				})
			),
			blocking: PropTypes.bool, // true if a modal requires to select an option
		}).isRequired,
		navState: PropTypes.shape({
			routes: PropTypes.array.isRequired,
			index: PropTypes.number.isRequired,
		}).isRequired,
		hideModal: PropTypes.func.isRequired,
	}

	constructor(props) {
		super(props)
		this.navigatorRef = React.createRef()
		this.backHandler = BackHandler.addEventListener(
			'hardwareBackPress',
			this.handleBackAndroidButton
		)
	}

	componentWillUnmount() {
		this.backHandler.remove()
	}

	handleModalDismiss = () => {
		const { modalData, hideModal } = this.props
		if (modalData.onDismiss) {
			modalData.onDismiss()
		}
		hideModal()
	}

	handleBackAndroidButton = () => {
		const { modalData, navState } = this.props
		// if there is a modal shown, back button will hide it (unless it is blocking)
		const { visible, blocking } = modalData
		if (visible) {
			if (blocking !== true) {
				this.handleModalDismiss()
			}
			return true
		}

		function getCurrentNavigatorState(state) {
			const { routes, index } = state
			const childState = routes[index]
			if (Array.isArray(childState.routes) && typeof childState.index === 'number') {
				return getCurrentNavigatorState(childState)
			}
			return state
		}
		const currentNavigatorState = getCurrentNavigatorState(navState)
		if (currentNavigatorState.routeName.includes('Stack')) {
			if (currentNavigatorState.index > 0) {
				const currentScreenState = currentNavigatorState.routes[currentNavigatorState.index]
				const navigation = this.navigatorRef.current
					.getWrappedInstance() // needed because of connect()
					.getCurrentNavigation() // needed because of reduxifyNavigator()
				const navigationOptions = navigation.router
					.getComponentForState(navState)
					.navigationOptions({ navigation: { state: currentScreenState } })
				const { gesturesEnabled, handleGoBack } = navigationOptions || {}
				if (typeof handleGoBack === 'function') {
					handleGoBack()
				} else if (handleGoBack !== undefined) {
					// do nothing
				} else if (gesturesEnabled !== false) {
					navigation.dispatch(NavigationActions.back())
				}
				return true
			}
		}
		// Exits App
		return false
	}

	render() {
		const { isRehydrated, showLoading, loadingOpacity, modalData } = this.props
		if (!isRehydrated) {
			return <Loading active opacity={1} />
		}
		const { visible, onDismiss, ...modalProps } = modalData
		return (
			<View style={styles.container}>
				<ReduxifiedAppNavigator ref={this.navigatorRef} />
				<Loading active={showLoading} opacity={loadingOpacity} position="absolute" />
				<Modal visible={visible} {...modalProps} onDismiss={this.handleModalDismiss} />
			</View>
		)
	}
}
export default AppLayout

const styles = StyleSheet.create({
	container: { flex: 1 },
})
