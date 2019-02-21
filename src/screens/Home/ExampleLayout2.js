import React, { Component, Fragment } from 'react'
import { View } from 'react-native'
import { Box, SText } from '@/components'
import { slotLayout, Slot, SlotTemplate } from '@modules/react-slot-layout'

@slotLayout
export class ExampleLayout2 extends Component {
	render() {
		return (
			<Fragment>
				<Box cls="bg-green p-s">
					<Slot name="header">
						<SText size={12}>title</SText>
					</Slot>
					<Slot name="header2" />
				</Box>
				<View>
					<Slot bind2={{ num: 5 }}>
						<SText size={12}>No Body!!</SText>
					</Slot>
				</View>
				<Box cls="bg-red p-s">
					<Slot name="footer">
						<SText size={12}>bye</SText>
					</Slot>
				</Box>
			</Fragment>
		)
	}
}

ExampleLayout2.Slot = SlotTemplate
