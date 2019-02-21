import React, { Component } from 'react'
import PropTypes from '#propTypes'
import { connect } from 'react-redux'
import { NavigationActions, StackActions, AuthActions } from '#actions'
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { Box, SText, Icon } from '@/components'
import { Colors, BasicStyles } from '@/theme'
// import images from '@/assets2/images'
import { t } from '@/lang'

const separator = (
	<View style={{ backgroundColor: Colors.black, height: StyleSheet.hairlineWidth }} />
)
const header = (
	<View>
		<Box cls="col-center p-50">
			{/* <Image source={images.waaviLogo} style={styles.header} /> */}
		</Box>
		{separator}
	</View>
)

@connect(
	null,
	{
		signout: AuthActions.signout,
	}
)
export class Drawer extends Component {
	static propTypes = {
		sections: PropTypes.arrayOf(
			PropTypes.shape({
				key: PropTypes.string.isRequired,
				route: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				icon: PropTypes.string.isRequired,
				onPress: PropTypes.func,
			})
		).isRequired,
		currentSection: PropTypes.string.isRequired,
		closeDrawer: PropTypes.func.isRequired,
		navigation: PropTypes.navigation.isRequired,
		signout: PropTypes.func.isRequired,
	}

	constructor(props) {
		super(props)
		const { sections, signout } = props
		this.sections = [
			...sections,
			{
				key: 'signout',
				name: t(`drawer.sections.Signout`),
				icon: 'logout',
				onPress: signout,
			},
		]
	}

	handleSectionPress = section => {
		const { navigation, closeDrawer } = this.props
		if (section.onPress) {
			if (section.closeOnPress !== false) {
				closeDrawer()
			}
			section.onPress()
		} else {
			closeDrawer()
			navigation.dispatch(
				StackActions.reset({
					index: 0,
					actions: [NavigationActions.navigate({ routeName: section.route })],
				})
			)
		}
	}

	renderSection = ({ item: section }) => {
		const { currentSection } = this.props
		const isSelected = section.route === currentSection
		return (
			<TouchableOpacity onPress={() => this.handleSectionPress(section)}>
				<Box cls="row-left-center">
					<View
						style={[
							styles.selector,
							{ backgroundColor: isSelected ? Colors.brand : Colors.transparent },
						]}
					/>
					<Icon
						name={section.icon}
						size={30}
						width={60}
						color={isSelected ? Colors.brand : Colors.black}
					/>
					<SText size={16} /* cls="size16 bold" style={textStyle} */>
						{section.name}
					</SText>
				</Box>
			</TouchableOpacity>
		)
	}

	render() {
		return (
			<FlatList
				ListHeaderComponent={() => header}
				data={this.sections}
				renderItem={this.renderSection}
				ItemSeparatorComponent={() => separator}
				ListFooterComponent={separator}
				scrollsToTop={false}
			/>
		)
	}
}

const styles = StyleSheet.create({
	selector: {
		width: 8,
		height: 50,
		...BasicStyles.roundedRightCorners(10),
	},
})
