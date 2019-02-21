import React, { Component } from 'react'
import PropTypes from '#propTypes'
import { connect } from 'react-redux'
import { AuthActions, GlobalActions } from '#actions'
import { ScreenView, Box, SText, Button, Grid } from '@/components'
import { SlotTemplate } from '@modules/react-slot-layout'
import { StyleSheet } from 'react-native'
import { ExampleLayout } from './ExampleLayout'
import { ExampleLayout2 } from './ExampleLayout2'

@connect(
	null,
	{
		signout: AuthActions.signout,
		showModalInfo: GlobalActions.showModalInfo,
	}
)
export class HomeScreen extends Component {
	static propTypes = {
		signout: PropTypes.func.isRequired,
		navigation: PropTypes.navigation.isRequired,
		showModalInfo: PropTypes.func.isRequired,
	}
	static navigationOptions = {
		title: 'Home',
	}

	render() {
		const { signout, showModalInfo, navigation } = this.props
		const { navigate } = navigation
		return (
			<ScreenView cls="col-center">
				<SText size={24}>Welcome to React Native!</SText>
				<Box cls="bg-yellow px-2s py-s m-s">
					<SText size={30} cls="varela">
						Test
					</SText>
				</Box>
				<Button text="Go to another screen" onPress={() => navigate('OtherScreen')} />
				<Button text="signout" onPress={signout} />

				<Button
					text="test modal"
					textAlign="center"
					toUpper
					onPress={() =>
						showModalInfo({
							title: 'título',
							text: 'texto',
							dismissBtnText: 'vale!',
							onDismiss: () => console.tron.log('wowow'),
						})
					}
				/>

				{/* <Grid direction="row" cls="mt-20" style={styles.grid}>
					<View style={styles.testView} />
					<View flex={3} style={styles.testView} />
				</Grid>
				<Grid direction="row" cls="mt-10" style={styles.grid}>
					<View style={styles.testView} />
					<View style={styles.testView} />
					<View style={styles.testView} />
					<View style={styles.testView} />
				</Grid>
				<Grid direction="row" cls="mt-10" style={styles.grid}>
					<View flex={2} style={styles.testView} />
					<View style={styles.testView} />
					<View style={styles.testView} />
				</Grid> */}

				<ExampleLayout>
					<SText slot="header" size={28}>
						header!
					</SText>
					<SText size={18}>body 1</SText>
					<SText size={18}>body 2</SText>
					<SlotTemplate slot="footer">
						<SText size={16}>footer!</SText>
					</SlotTemplate>
				</ExampleLayout>
				<ExampleLayout2>
					<SlotTemplate>{() => <SText size={16}>222</SText>}</SlotTemplate>
					<ExampleLayout2.Slot name="footer" as={SText} size={28}>
						footer2
					</ExampleLayout2.Slot>
				</ExampleLayout2>
			</ScreenView>
		)
	}
}

const red = 'red'
const green = 'green'
const styles = StyleSheet.create({
	grid: {
		backgroundColor: red,
	},
	testView: {
		width: 50,
		height: 50,
		backgroundColor: green,
	},
})
