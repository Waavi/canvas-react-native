import React from 'react'
import { View, StyleSheet, Text as RNText } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { StoryView } from '@modules/react-native-storybook/components'
import withReduxForm from '@modules/react-native-storybook/decorators/reduxForm'
import { text, boolean } from '@storybook/addon-knobs'
import { emailValidation } from '@/utils/validation'
import { Text } from './Text'

const styles = StyleSheet.create({
	wrapper: {
		marginVertical: 5,
	},
})

storiesOf('FG/Text', module)
	.addDecorator(withReduxForm.bind({ email: '' }))
	.add('default', () => (
		<StoryView align="stretch" padded>
			<View style={styles.wrapper}>
				<Text
					name="email"
					label="Email"
					placeholder="Write your email"
					validate={[emailValidation]}
					input={{
						value: text('Value', ''),
						onChange: () => console.tron.log(`Changed`),
					}}
				/>
			</View>
			<RNText>(Use the Addons options)</RNText>
		</StoryView>
	))
	.add('error', () => (
		<StoryView align="stretch" padded>
			<View style={styles.wrapper}>
				<Text
					name="email"
					label="Email"
					input={{ value: 'demo' }}
					validate={[emailValidation]}
					meta={{
						touched: boolean('Error', true),
						error: 'The field is required',
					}}
				/>
			</View>
			<RNText>(Use the Addons options)</RNText>
		</StoryView>
	))
