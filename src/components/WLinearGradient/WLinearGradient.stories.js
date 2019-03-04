/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import { StoryView, StoryCase, StoryHeader } from '@modules/react-native-storybook/components'
import { WLinearGradient } from './WLinearGradient'

const styles = {
	width: 50,
	height: 50,
}

storiesOf('WLinearGradient', module)
	.add('Directions', () => (
		<StoryView scrollable>
			<StoryHeader.h1 text="WLinearGradient" />
			<StoryCase text="default">
				<WLinearGradient>
					<View style={styles} />
				</WLinearGradient>
			</StoryCase>
			<StoryCase text="vertical-reverse">
				<WLinearGradient direction="vertical-reverse">
					<View style={styles} />
				</WLinearGradient>
			</StoryCase>
			<StoryCase text="horizontal">
				<WLinearGradient direction="horizontal">
					<View style={styles} />
				</WLinearGradient>
			</StoryCase>
			<StoryCase text="horizontal-reverse">
				<WLinearGradient direction="horizontal-reverse">
					<View style={styles} />
				</WLinearGradient>
			</StoryCase>
		</StoryView>
	))
	.add('Colors', () => (
		<StoryView scrollable>
			<StoryHeader.h1 text="WLinearGradient" />
			<StoryCase text="default">
				<WLinearGradient>
					<View style={styles} />
				</WLinearGradient>
			</StoryCase>
			<StoryCase text="secondary">
				<WLinearGradient color="secondary" direction="horizontal">
					<View style={styles} />
				</WLinearGradient>
			</StoryCase>
			<StoryCase text="tertiary">
				<WLinearGradient color="tertiary" direction="horizontal">
					<View style={styles} />
				</WLinearGradient>
			</StoryCase>
		</StoryView>
	))
