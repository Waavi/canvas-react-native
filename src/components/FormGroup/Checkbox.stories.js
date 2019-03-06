import React from 'react'
import { View, StyleSheet } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { StoryCase } from '@modules/react-native-storybook/components'
import withReduxForm from '@modules/react-native-storybook/decorators/reduxForm'
import { boolean } from '@storybook/addon-knobs'
import { Checkbox } from './Checkbox'

storiesOf('FG/Checkbox', module)
	.addDecorator(withReduxForm)
	.add('default', () => (
		<StoryCase text="Default" description="Use the Addons options">
			<View style={styles.wrapper}>
				<Checkbox
					name="demo"
					input={{
						value: boolean('Disabled', false),
						onChange: () => console.tron.log(`Clicked`),
					}}
				/>
			</View>
		</StoryCase>
	))

const styles = StyleSheet.create({
	wrapper: {
		margin: 10,
	},
})
