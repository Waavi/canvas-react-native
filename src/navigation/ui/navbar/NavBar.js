import React, { Component } from 'react'
import { number, func, array, shape } from 'prop-types'
import { findIndex } from 'lodash'
import { StatusBar, StyleSheet } from 'react-native'
import { Platform } from 'react-native-utils'
import { Box, WText } from '@/components'
import { Colors, Metrics } from '@/theme'
import { NavBarIconButton } from './NavBarIconButton'

const minSidesWidth = Metrics.scale.horizontal(14) + 2 * Metrics.grid.baseSpacing

export class NavBar extends Component {
	static propTypes = {
		// Options can be obtained from headerProps or options
		navigation: shape({ goBack: func.isRequired }).isRequired,
		headerProps: shape({ scenes: array.isRequired, index: number.isRequired }).isRequired,
		options: shape({}),
	}
	static defaultProps = {
		options: {},
	}
	static defaultOptionsData = {
		title: undefined,
		headerTitle: undefined,
		headerLeft: undefined,
		headerRight: undefined,
		height: Metrics.appBarHeight,
		alignCenter: true,
		borderBottomColor: undefined,
	}

	state = {
		leftWidth: undefined,
		rightWidth: undefined,
	}

	componentWillMount() {
		const { navigation, headerProps } = this.props
		this.belongsToNavigation = navigation !== undefined && headerProps !== undefined
	}

	handleLayoutLeftSide = e =>
		this.setState({ leftWidth: Math.max(e.nativeEvent.layout.width, minSidesWidth) })
	handleLayoutRightSide = e =>
		this.setState({ rightWidth: Math.max(e.nativeEvent.layout.width, minSidesWidth) })

	options = () => {
		const { headerProps, options: optionsProps } = this.props
		const optionsData = this.belongsToNavigation
			? headerProps.scenes[headerProps.index].descriptor.options
			: optionsProps // TODO: check is OK
		return { ...NavBar.defaultOptionsData, ...optionsData }
	}

	goBack = () => {
		const { navigation } = this.props
		navigation.goBack()
	}

	defaultLeftButton = () => {
		const { headerProps } = this.props
		if (this.belongsToNavigation) {
			const index = findIndex(headerProps.scenes, { isActive: true })
			if (index > 0) {
				return (
					<NavBarIconButton
						name="chevron-thin-left"
						size={20}
						width={15}
						onPress={() => this.goBack()}
					/>
				)
			}
		}
		return null
	}

	renderLeft = headerLeft => (
		<Box
			cls="row-left-stretch"
			style={{ minWidth: minSidesWidth }}
			onLayout={this.handleLayoutLeftSide}
		>
			{headerLeft}
		</Box>
	)

	renderRight = headerRight => (
		<Box
			cls="row-right-stretch"
			style={{ minWidth: minSidesWidth }}
			onLayout={this.handleLayoutRightSide}
		>
			{headerRight}
		</Box>
	)

	renderTitle = (title, headerTitle, alignCenter) => {
		const content = headerTitle || (
			<WText size={18} numberOfLines={1} /* style={{ color: Colors.black }} */>
				{title}
			</WText>
		)
		if (alignCenter) {
			const { leftWidth, rightWidth } = this.state
			let paddingLeft = 0
			let paddingRight = 0
			if (leftWidth && rightWidth) {
				if (rightWidth > leftWidth) {
					paddingLeft = rightWidth - leftWidth
				}
				if (leftWidth > rightWidth) {
					paddingRight = leftWidth - rightWidth
				}
			}
			return (
				<Box cls="flex-1 col-center" style={{ paddingLeft, paddingRight }}>
					{content}
				</Box>
			)
		}
		return <Box cls="flex-1">{content}</Box>
	}

	render() {
		const {
			title,
			headerTitle,
			headerLeft,
			headerRight,
			height,
			alignCenter,
			borderBottomColor,
		} = this.options()
		const borderStyle = {
			borderBottomWidth: 4 * StyleSheet.hairlineWidth,
			borderBottomColor: borderBottomColor || Colors.brand,
		}
		return (
			<Box style={[styles.layout, borderStyle]}>
				<StatusBar barStyle="dark-content" />
				<Box cls="row-stretch" style={[styles.container, { height }]}>
					{this.renderLeft(headerLeft || this.defaultLeftButton()) || null}
					{this.renderTitle(title, headerTitle, alignCenter)}
					{this.renderRight(headerRight)}
				</Box>
			</Box>
		)
	}
}

const styles = StyleSheet.create({
	layout: {
		backgroundColor: Colors.white,
		paddingTop: Platform.getStatusBarHeight(),
		paddingBottom: 15,
	},
	container: {
		minHeight: 22.5,
		backgroundColor: Colors.transparent,
	},
})
