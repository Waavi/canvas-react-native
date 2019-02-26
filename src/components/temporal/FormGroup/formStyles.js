import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '@/theme'

export const formStyles = StyleSheet.create({
	// eslint-disable-next-line
	inputText: {
		fontFamily: Fonts.type.regular,
		fontSize: Fonts.size[16],
		lineHeight: Fonts.size[16] * 1.25,
		color: Colors.black,
		backgroundColor: 'transparent',
	},
})

export const placeholderColor = Colors.text.hint
