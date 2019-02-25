import React from 'react'
import { ScreenView, SText } from '@/components'

ArchiveScreen.navigationOptions = ({ navigation }) => ({
	title: 'ArchiveScreen',
})
export function ArchiveScreen() {
	return (
		<ScreenView cls="col-center">
			<SText size={20}>ArchiveScreen</SText>
		</ScreenView>
	)
}
