import React from 'react'
import { RefreshControl as NativeRefreshControl } from 'react-native'
import { Colors } from 'app/theme'

export function RefreshControl({ color = Colors.brand, ...otherProps }) {
    return (
        <NativeRefreshControl tintColor={color} colors={[color]} {...otherProps} />
    )
}
