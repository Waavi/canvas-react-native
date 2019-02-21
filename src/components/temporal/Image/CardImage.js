import React from 'react'
import { Image as NativeImage } from 'react-native'
import AppConfig from 'app/config/app'

export function CardImage({ source, ...otherProps }) {
    const uri = /^https?:\/\//.test(source) ? source : AppConfig.clientImageBaseUrl + source
    return <NativeImage source={{ uri }} {...otherProps} />
}
