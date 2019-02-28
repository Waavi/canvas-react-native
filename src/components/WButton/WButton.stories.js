/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryView, StoryCase, StoryHeader } from '@modules/react-native-storybook/components'
import { SPACINGS_ABSOLUTE, SPACINGS_LIST } from '@/theme/cls/spacingClsStyles'
import { WButton } from './WButton'
import { WLinkButton } from './WLinkButton'

const handlePress = (text = 'Clicked!') => () => console.tron.log(text)

storiesOf('WButton', module)
	.add('colors', () => {
		const colors = [undefined, 'green', 'white', 'dark', 'dark-light', 'dark-outline', 'yellow']
		return (
			<StoryView scrollable>
				<StoryHeader.h1 text="WButton colors" />
				{colors.map(color => (
					<StoryCase
						key={color || 'none'}
						text={color ? `with cls '${color}'` : 'default'}
						padded
					>
						<WButton cls={color} text="Lorem ipsum" onPress={handlePress()} />
					</StoryCase>
				))}
			</StoryView>
		)
	})
	.add('sizes', () => {
		const sizes = [undefined, 'small', 'mini']
		return (
			<StoryView scrollable>
				<StoryHeader.h1 text="WButton sizes" />
				{sizes.map(size => (
					<StoryCase
						key={size || 'none'}
						text={size ? `with cls '${size}'` : 'default'}
						padded
					>
						<WButton cls={size} text="Lorem ipsum" onPress={handlePress()} />
					</StoryCase>
				))}
			</StoryView>
		)
	})
	.add('center & flex', () => (
		<StoryView scrollable>
			<StoryHeader.h1
				text="Centered WButton"
				description="The following container have { alignItems: 'stretch' }"
			/>
			<StoryCase text="default" padded style={{ alignItems: 'stretch' }}>
				<WButton text="Lorem ipsum" onPress={handlePress()} />
			</StoryCase>
			<StoryCase text={"with cls 'center'"} padded style={{ alignItems: 'stretch' }}>
				<WButton cls="center" text="Lorem ipsum" onPress={handlePress()} />
			</StoryCase>

			<StoryHeader.h1
				text="Stretched WButton"
				description="The following container have { alignItems: 'center' }"
			/>
			<StoryCase text="default" padded style={{ alignItems: 'center' }}>
				<WButton text="Lorem ipsum" onPress={handlePress()} />
			</StoryCase>
			<StoryCase text={"with cls 'stretch'"} padded style={{ alignItems: 'center' }}>
				<WButton cls="stretch" text="Lorem ipsum" onPress={handlePress()} />
			</StoryCase>

			<StoryHeader.h1
				text="Flex"
				description="The following container have { flexDirection: 'row', alignItems: 'center' }"
			/>
			<StoryCase
				text="default"
				padded
				style={{ flexDirection: 'row', justifyContent: 'center' }}
			>
				<WButton text="Lorem ipsum" onPress={handlePress()} />
			</StoryCase>
			<StoryCase
				text={"with cls 'flex-1'"}
				padded
				style={{ flexDirection: 'row', justifyContent: 'space-between' }}
			>
				<WButton cls="flex-1" text="Lorem ipsum" onPress={handlePress()} />
			</StoryCase>
		</StoryView>
	))
	.add('disabled', () => {
		const colors = [undefined, 'green', 'white', 'dark', 'dark-light', 'dark-outline', 'yellow']
		return (
			<StoryView scrollable>
				<StoryHeader.h1 text="Disabled WButtons" />
				{colors.map(color => (
					<StoryCase
						key={color || 'none'}
						text={color ? `with cls '${color}'` : 'default'}
						padded
					>
						<WButton cls={color} disabled text="Lorem ipsum" onPress={handlePress()} />
					</StoryCase>
				))}
			</StoryView>
		)
	})
	.add('WLinkButton', () => (
		<StoryView scrollable>
			<StoryHeader.h1 text="Link WButton" />
			<StoryCase text="default" padded>
				<WLinkButton size={18} text="Lorem ipsum" onPress={handlePress()} />
			</StoryCase>
		</StoryView>
	))
	.add('margins', () => {
		const example = cls => (
			<StoryCase text={cls ? `with cls '${cls}'` : 'default'}>
				<WButton cls={cls} text="Lorem ipsum" onPress={handlePress()} />
			</StoryCase>
		)
		return (
			<StoryView scrollable>
				<StoryHeader.h1 text="Margins" />
				<StoryHeader.h2
					text="Choose the margin"
					description="You can choose to add a margin to all sides or select one of them"
				/>
				{example(undefined)}
				{example('m-10')}
				{example('ml-10')}
				{example('mr-10')}
				{example('mt-10')}
				{example('mb-10')}

				<StoryHeader.h2
					text="Absolute margin values"
					description={`You have the following values: ${SPACINGS_ABSOLUTE.join(', ')}`}
				/>
				{example('m-5')}
				{example('m-10')}
				{example('m-20')}
				{example('m-30')}

				<StoryHeader.h2
					text="Margin values based on default spacings"
					description={`You have the following values: ${SPACINGS_LIST.join(', ')}`}
				/>
				{example('m-s')}
				{example('m-2s')}
				{example('m-3s')}
			</StoryView>
		)
	})
