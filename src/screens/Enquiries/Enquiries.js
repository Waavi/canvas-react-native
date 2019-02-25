import React from 'react'
import { ScreenView, SText } from '@/components'

EnquiriesScreen.navigationOptions = ({ navigation }) => ({
	title: 'EnquiriesScreen',
})
export function EnquiriesScreen() {
	return (
		<ScreenView cls="col-center">
			<SText size={20}>EnquiriesScreen</SText>
		</ScreenView>
	)
}
