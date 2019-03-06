import React from 'react'
import { View, StyleSheet } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { StoryCase } from '@modules/react-native-storybook/components'
import withReduxForm from '@modules/react-native-storybook/decorators/reduxForm'
import { text, boolean } from '@storybook/addon-knobs'
import { emailValidation } from '@/utils/validation'
import { Text } from './Text'

const styles = StyleSheet.create({
	wrapper: {
		margin: 10,
	},
})

storiesOf('FG/Text', module)
	.addDecorator(withReduxForm)
	.add('default', () => (
		<StoryCase text="Default" description="Use the Addons options">
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
		</StoryCase>
	))
	.add('error', () => (
		<StoryCase text="Text with error" description="Use the Addons options">
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
		</StoryCase>
	))
