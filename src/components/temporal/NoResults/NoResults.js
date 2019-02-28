import React from 'react'
import { Box, WText, Icon } from '@/components'
import { Colors } from '@/theme'

// eslint-disable-next-line
export function NoResults({ icon, text }) {
	return (
		<Box cls="col-center py-3s px-2s">
			<Icon name={icon} size={100} color={Colors.text.secondary} />
			<WText cls="size20 secondary center mt-s">{text}</WText>
		</Box>
	)
}
