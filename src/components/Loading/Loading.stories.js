/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryView, StoryCase, StoryHeader } from '@modules/react-native-storybook/components'
import { Text } from 'react-native'
import { Colors } from '@/theme'
import { Loading } from './Loading'

storiesOf('Loading', module)
	.add('active / inactive', () => (
		<StoryView scrollable>
			<StoryHeader.h1 text="Loading" />
			<StoryCase text="with active = true">
				<Loading active />
			</StoryCase>
			<StoryCase text="with active = false">
				<Loading active={false} />
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
						<Loading active color={Colors[color]} />
					</StoryCase>
				))}
				<StoryHeader.h1 text="Loading background colors" />
				{bgColors.map(color => (
					<StoryCase
						key={color || 'none'}
						text={color ? `with background color '${color}'` : 'default'}
					>
						<Loading active bgColor={Colors[color]} />
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
					<Loading active />
				</StoryCase>
				<StoryCase text="with position = absolute">
					<Text style={textStyle}>A sample text</Text>
					<Loading active position="absolute" />
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
					<Loading active position="absolute" />
				</StoryCase>
				<StoryCase text="with opacity = 0.95">
					<Text style={textStyle}>A sample text</Text>
					<Loading active position="absolute" opacity={0.95} />
				</StoryCase>
				<StoryCase text="with opacity = 0">
					<Text style={textStyle}>A sample text</Text>
					<Loading active position="absolute" opacity={0} />
				</StoryCase>
			</StoryView>
		)
	})
