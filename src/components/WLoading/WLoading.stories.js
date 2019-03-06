/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { boolean } from '@storybook/addon-knobs'
import { StoryView, StoryCase, StoryHeader } from '@modules/react-native-storybook/components'
import { Text } from 'react-native'
import { Colors } from '@/theme'
import { WLoading } from './WLoading'

storiesOf('WLoading', module)
	.add('Default', () => (
		<StoryView scrollable>
			<StoryHeader.h1 text="Loading" />
			<StoryCase text="with active = true" description="Use the Addons options">
				<WLoading active={boolean('Active', true)} />
			</StoryCase>
		</StoryView>
	))
	.add('colors', () => {
		const colors = [undefined, 'black']
		const bgColors = [undefined, 'white']
		return (
			<StoryView scrollable>
				<StoryHeader.h1 text="Loading colors" />
				{colors.map(color => (
					<StoryCase
						key={color || 'none'}
						text={color ? `with color '${color}'` : 'default'}
					>
						<WLoading active color={Colors[color]} />
					</StoryCase>
				))}
				<StoryHeader.h1 text="Loading background colors" />
				{bgColors.map(color => (
					<StoryCase
						key={color || 'none'}
						text={color ? `with background color '${color}'` : 'default'}
					>
						<WLoading active bgColor={Colors[color]} />
					</StoryCase>
				))}
			</StoryView>
		)
	})
	.add('position', () => {
		const textStyle = { margin: 20, textAlign: 'center' }
		return (
			<StoryView scrollable>
				<StoryHeader.h1 text="Loading" />
				<StoryCase text="default">
					<Text style={textStyle}>A sample text</Text>
					<WLoading active />
				</StoryCase>
				<StoryCase text="with position = absolute">
					<Text style={textStyle}>A sample text</Text>
					<WLoading active position="absolute" />
				</StoryCase>
			</StoryView>
		)
	})
	.add('opacity', () => {
		const textStyle = { margin: 20, textAlign: 'center' }
		return (
			<StoryView scrollable>
				<StoryHeader.h1 text="Loading" />
				<StoryCase text="default">
					<Text style={textStyle}>A sample text</Text>
					<WLoading active position="absolute" />
				</StoryCase>
				<StoryCase text="with opacity = 0.95">
					<Text style={textStyle}>A sample text</Text>
					<WLoading active position="absolute" opacity={0.95} />
				</StoryCase>
				<StoryCase text="with opacity = 0">
					<Text style={textStyle}>A sample text</Text>
					<WLoading active position="absolute" opacity={0} />
				</StoryCase>
			</StoryView>
		)
	})
