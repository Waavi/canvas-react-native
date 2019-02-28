/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryView, StoryCase, StoryHeader } from '@modules/react-native-storybook/components'
import { LinearGradient } from './LinearGradient'

storiesOf('LinearGradient', module).add('active / inactive', () => (
	<StoryView scrollable>
		<StoryHeader.h1 text="LinearGradient" />
		<StoryCase text="with active = true">
			<LinearGradient />
		</StoryCase>
	</StoryView>
))
