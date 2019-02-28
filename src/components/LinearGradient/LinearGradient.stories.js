/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import { StoryView, StoryCase, StoryHeader } from '@modules/react-native-storybook/components'
import { LinearGradient } from './LinearGradient'

const styles = {
	width: 50,
	height: 50,
}

storiesOf('LinearGradient', module)
	.add('Directions', () => (
		<StoryView scrollable>
			<StoryHeader.h1 text="LinearGradient" />
			<StoryCase text="default">
				<LinearGradient>
					<View style={styles} />
				</LinearGradient>
			</StoryCase>
			<StoryCase text="vertical-reverse">
				<LinearGradient direction="vertical-reverse">
					<View style={styles} />
				</LinearGradient>
			</StoryCase>
			<StoryCase text="horizontal">
				<LinearGradient direction="horizontal">
					<View style={styles} />
				</LinearGradient>
			</StoryCase>
			<StoryCase text="horizontal-reverse">
				<LinearGradient direction="horizontal-reverse">
					<View style={styles} />
				</LinearGradient>
			</StoryCase>
		</StoryView>
	))
	.add('Colors', () => (
		<StoryView scrollable>
			<StoryHeader.h1 text="LinearGradient" />
			<StoryCase text="default">
				<LinearGradient>
					<View style={styles} />
				</LinearGradient>
			</StoryCase>
			<StoryCase text="secondary">
				<LinearGradient color="secondary" direction="horizontal">
					<View style={styles} />
				</LinearGradient>
			</StoryCase>
			<StoryCase text="tertiary">
				<LinearGradient color="tertiary" direction="horizontal">
					<View style={styles} />
				</LinearGradient>
			</StoryCase>
		</StoryView>
	))
