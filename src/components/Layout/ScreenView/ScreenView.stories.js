/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryView } from '@modules/react-native-storybook/components'
import { Text } from 'react-native'
import { ScreenView } from './ScreenView'

storiesOf('ScreenView', module)
	.add('default', () => (
		<StoryView>
			<ScreenView cls="col-center">
				<Text>This is a default ScreenView</Text>
			</ScreenView>
		</StoryView>
	))
	.add('white', () => (
		<StoryView>
			<ScreenView color="white" cls="col-center">
				<Text>This is a white ScreenView</Text>
			</ScreenView>
		</StoryView>
	))
	.add('dark', () => (
		<StoryView>
			<ScreenView color="dark" cls="col-center">
				<Text>This is a dark ScreenView</Text>
			</ScreenView>
		</StoryView>
	))
