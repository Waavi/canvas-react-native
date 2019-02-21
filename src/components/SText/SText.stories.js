import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { boolean } from '@storybook/addon-knobs'
import { StoryView, StoryHeader, StoryCase } from '@modules/react-native-storybook/components'
import { View, StyleSheet } from 'react-native'
import { Fonts, Colors } from '@/theme'
import { SPACINGS_ABSOLUTE, SPACINGS_LIST } from '@/theme/cls/spacingClsStyles'
import { SText } from './SText'

storiesOf('SText', module)
	.add('font sizes', () => {
		const fontSizes = [10, 12, 14, 16, 18, 20, 24, 28, 35]
		const scaled = boolean('Scaled', true)
		return (
			<StoryView align="stretch" padded>
				{fontSizes.map(size => (
					<View key={size} style={styles.wrapper}>
						<SText size={size} scaled={scaled}>{`SText with size ${size}`}</SText>
					</View>
				))}
			</StoryView>
		)
	})
	.add('font types (families)', () => {
		const fontTypes = Object.keys(Fonts.type)
		return (
			<StoryView align="stretch" padded>
				{fontTypes.map(type => (
					<View key={type} style={styles.wrapper}>
						<SText size={20} cls={type}>{`SText with cls '${type}'`}</SText>
					</View>
				))}
			</StoryView>
		)
	})
	.add('font colors', () => {
		const colors = Object.keys(Colors.text).map(color => ({
			color,
			style: {
				backgroundColor:
					color === 'white' || color === 'inverse' ? Colors.black : Colors.transparent,
			},
		}))
		return (
			<StoryView align="stretch" padded>
				{colors.map(({ color, style }) => (
					<View key={color} style={[styles.wrapper, style]}>
						<SText size={20} cls={color}>{`SText with cls '${color}'`}</SText>
					</View>
				))}
			</StoryView>
		)
	})
	.add('alignment', () => {
		const alignments = ['left', 'center', 'right']
		return (
			<StoryView align="stretch" padded>
				{alignments.map(align => (
					<View key={align} style={styles.wrapper}>
						<SText size={20} cls={align}>{`SText with cls '${align}'`}</SText>
					</View>
				))}
			</StoryView>
		)
	})
	.add('flex', () => {
		const items = ['one', 'two', 'fourteen']
		const flexWrapper = {
			flexDirection: 'row',
			justifyContent: 'space-between',
		}
		const textStyle = {
			backgroundColor: 'yellow',
			borderColor: 'black',
			borderWidth: 1,
			textAlign: 'center',
		}
		const example = cls => (
			<StoryCase text={cls ? `Each item with cls '${cls}'` : 'default'}>
				<View style={flexWrapper}>
					{items.map(item => (
						<SText key={item} cls={cls} size={20} style={textStyle}>
							{item}
						</SText>
					))}
				</View>
			</StoryCase>
		)
		return (
			<StoryView align="stretch">
				{example(undefined)}
				{example('flex-0')}
				{example('flex-1')}
				{example('grow-0')}
				{example('grow-1')}
			</StoryView>
		)
	})
	.add('margins & paddings', () => {
		const textStyle = {
			backgroundColor: 'yellow',
			borderColor: 'black',
			borderWidth: 1,
		}
		const example = cls => (
			<StoryCase text={cls ? `with cls '${cls}'` : 'default'}>
				<SText cls={cls} size={16} style={textStyle}>
					Lorem ipsum
				</SText>
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

				<StoryHeader.h1 text="Paddings" />
				<StoryHeader.h2
					text="Choose the padding"
					description="You can choose to add a padding to all sides or select one of them"
				/>
				{example(undefined)}
				{example('p-10')}
				{example('pl-10')}
				{example('pr-10')}
				{example('pt-10')}
				{example('pb-10')}

				<StoryHeader.h2
					text="Absolute padding values"
					description={`You have the following values: ${SPACINGS_ABSOLUTE.join(', ')}`}
				/>
				{example('p-5')}
				{example('p-10')}
				{example('p-20')}
				{example('p-30')}

				<StoryHeader.h2
					text="Padding values based on default spacings"
					description={`You have the following values: ${SPACINGS_LIST.join(', ')}`}
				/>
				{example('p-s')}
				{example('p-2s')}
				{example('p-3s')}
			</StoryView>
		)
	})

const styles = StyleSheet.create({
	wrapper: {
		marginVertical: 5,
	},
})