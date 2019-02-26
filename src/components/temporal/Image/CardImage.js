import React from 'react'
import { Image as NativeImage } from 'react-native'
import AppConfig from '@/config/app'

// eslint-disable-next-line
export function CardImage({ source, ...otherProps }) {
	const uri = /^https?:\/\//.test(source) ? source : AppConfig.clientImageBaseUrl + source
	return <NativeImage source={{ uri }} {...otherProps} />
}
