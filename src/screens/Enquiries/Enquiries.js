import React from 'react'
import { ScreenView, SText } from '@/components'
import { t } from '@/lang'

EnquiriesScreen.navigationOptions = () => ({
	title: t('nav.pages.enquiries'),
})
export function EnquiriesScreen() {
	return (
		<ScreenView cls="col-center">
			<SText size={20}>EnquiriesScreen</SText>
		</ScreenView>
	)
}
