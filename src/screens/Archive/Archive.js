import React from 'react'
import { ScreenView, WText } from '@/components'
import { t } from '@/lang'

ArchiveScreen.navigationOptions = () => ({
	title: t('nav.pages.archive'),
})
export function ArchiveScreen() {
	return (
		<ScreenView cls="col-center">
			<WText size={20}>ArchiveScreen</WText>
		</ScreenView>
	)
}
