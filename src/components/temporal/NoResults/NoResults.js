import React from 'react'
import { Box, SText, Icon } from 'app/components'
import { Colors } from 'app/theme'

export function NoResults({ icon, text }) {
    return (
        <Box cls="col-center py-3s px-2s">
            <Icon name={icon} size={100} color={Colors.text.secondary} />
            <SText cls="size20 secondary center mt-s">{text}</SText>
        </Box>
    )
}
