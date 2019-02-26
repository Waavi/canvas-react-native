import React from 'react'
import { ScreenView, SText } from '@/components'
import { t } from '@/lang'

ArchiveScreen.navigationOptions = () => ({
	title: t('nav.pages.archive'),
})
export function ArchiveScreen() {
	return (
		<ScreenView cls="col-center">
			<SText size={20}>ArchiveScreen</SText>
		</ScreenView>
	)
}
