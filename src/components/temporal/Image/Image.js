import React from 'react'
import { Image as NativeImage } from 'react-native'

export function Image({ source, ...otherProps }) {
    const uriOrImage = typeof source === 'string' ? { uri: source } : source
    return <NativeImage source={uriOrImage} {...otherProps} />
}
