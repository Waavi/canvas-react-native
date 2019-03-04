import React from 'react'
import { ScreenView, WText } from '@/components'
import { t } from '@/lang'

EnquiriesScreen.navigationOptions = () => ({
	title: t('nav.pages.enquiries'),
})
export function EnquiriesScreen() {
	return (
		<ScreenView cls="col-center">
			<WText size={20}>EnquiriesScreen</WText>
		</ScreenView>
	)
}
