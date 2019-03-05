import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { StoryView } from '@modules/react-native-storybook/components'
import withReduxForm from '@modules/react-native-storybook/decorators/reduxForm'
import { boolean } from '@storybook/addon-knobs'
import { Checkbox } from './Checkbox'

storiesOf('FG/Checkbox', module)
	.addDecorator(withReduxForm.bind({ email: '' }))
	.add('default', () => (
		<StoryView align="stretch" padded>
			<View style={styles.wrapper}>
				<Checkbox
					name="demo"
					input={{
						value: boolean('Disabled', false),
						onChange: () => console.tron.log(`Clicked`),
					}}
				/>
				<Text>(Use the Addons options)</Text>
			</View>
		</StoryView>
	))

const styles = StyleSheet.create({
	wrapper: {
		marginVertical: 5,
	},
})
