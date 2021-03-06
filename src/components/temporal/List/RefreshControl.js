import React from 'react'
import { RefreshControl as NativeRefreshControl } from 'react-native'
import { Colors } from '@/theme'

// eslint-disable-next-line
export function RefreshControl({ color = Colors.brand, ...otherProps }) {
	return <NativeRefreshControl tintColor={color} colors={[color]} {...otherProps} />
}
