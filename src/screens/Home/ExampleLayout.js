import React from 'react'
import PropTypes from '#propTypes'
import { View } from 'react-native'
import { Box, SText } from '@/components'
import { SlotLayout, Slot, SlotTemplate } from '@modules/react-slot-layout'

ExampleLayout.Slot = SlotTemplate

ExampleLayout.propTypes = {
	children: PropTypes.children.isRequired,
}
export function ExampleLayout({ children }) {
	return (
		<SlotLayout content={children}>
			<Box cls="bg-green p-s">
				<Slot name="header">
					<SText size={12}>title</SText>
				</Slot>
				<Slot name="header2" />
			</Box>
			<View>
				<Slot>
					<SText size={12}>body</SText>
				</Slot>
			</View>
			<Box cls="bg-red p-s">
				<Slot name="footer">
					<SText size={12}>bye</SText>
				</Slot>
			</Box>
		</SlotLayout>
	)
}
