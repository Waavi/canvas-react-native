/* eslint-disable react-native/no-inline-styles */
import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryView } from '@modules/react-native-storybook/components'
import { WithStateBool } from '@modules/react-native-components'
import { TouchableOpacity, Text } from 'react-native'
// import { Text } from 'react-native'
import { WModal } from './WModal'

storiesOf('WModal', module).add('WModal', () => {
	const textStyle = {
		padding: 10,
		marginVertical: 10,
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: 10,
	}
	const example = (btnText, text, props = {}) => (
		<WithStateBool>
			{(visible, setVisible) => (
				<Fragment>
					<TouchableOpacity onPress={() => setVisible(true)}>
						<Text style={textStyle}>{btnText}</Text>
					</TouchableOpacity>
					<WModal
						visible={visible}
						title="A sample Modal"
						text={text}
						onDismiss={() => setVisible(false)}
						{...props}
					/>
				</Fragment>
			)}
		</WithStateBool>
	)
	return (
		<StoryView scrollable>
			{example(
				'Tap on me to show a modal',
				'This is a default modal with title and text, but without dismiss button'
			)}
			{example('Modal with dismiss button', 'This is a default modal with a dismiss button', {
				dismissBtnText: 'ok',
			})}
			{example('Modal with custom button', 'This is a modal with a custom button', {
				buttons: [
					{
						text: 'button text',
						onPress: () => console.tron.log('clicked'),
						variant: 'dark',
					},
				],
			})}
			{example(
				'Modal with 1 custom buttons and a dismiss one',
				'This is a modal with a custom and dismiss buttons',
				{
					dismissBtnText: 'ok',
					buttons: [
						{
							text: 'button text',
							onPress: () => console.tron.log('clicked'),
						},
					],
				}
			)}
			{example(
				'Modal with 3 custom buttons and a dismiss one',
				'This is a modal with custom and dismiss buttons',
				{
					dismissBtnText: 'ok',
					buttons: [
						{
							text: 'button text 1',
							onPress: () => console.tron.log('clicked 1'),
							variant: 'green',
						},
						{
							text: 'button text 2',
							onPress: () => console.tron.log('clicked 2'),
							variant: 'dark',
						},
						{
							text: 'button text 3',
							onPress: () => console.tron.log('clicked 3'),
							variant: 'dark',
						},
					],
				}
			)}
		</StoryView>
	)
})
