import { StyleSheet } from 'react-native'
import { Fonts, Colors } from 'app/theme'

export const formStyles = StyleSheet.create({
    inputText: {
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size[16],
        lineHeight: Fonts.size[16] * 1.25,
        color: Colors.black,
        backgroundColor: 'transparent'
    }
})

export const placeholderColor = Colors.text.hint
