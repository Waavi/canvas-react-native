import React from 'react'
import { TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Keyboard, View } from 'react-native'

const onPressAndKeyboardDismiss = onPress => () => {
    Keyboard.dismiss()
    return onPress && onPress()
}
export function Touchable({ onPress, disabled, type, children, ...otherProps }) {
    if (onPress && disabled !== true) {
        if (type === undefined || type === 'opacity') {
            return (
                <TouchableOpacity onPress={onPressAndKeyboardDismiss(onPress)} {...otherProps}>
                    {children}
                </TouchableOpacity>
            )
        }
        if (type === 'highlight') {
            return (
                <TouchableHighlight onPress={onPressAndKeyboardDismiss(onPress)} {...otherProps}>
                    {children}
                </TouchableHighlight>
            )
        }
    }
    return (
        <View {...otherProps}>
            <TouchableWithoutFeedback onPress={onPressAndKeyboardDismiss(onPress)}>{children}</TouchableWithoutFeedback>
        </View>
    )
}
