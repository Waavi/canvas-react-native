import React from 'react'
import PropTypes from '#propTypes'
import { TouchableOpacity } from 'react-native'
import { WText } from '../WText'

LinkButton.propTypes = {
	text: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
	size: PropTypes.number.isRequired,
	cls: PropTypes.string,
	style: PropTypes.textStyle,
}
LinkButton.defaultProps = {
	cls: undefined,
	style: undefined,
}

export function LinkButton({ text, onPress, size, cls, style, ...restProps }) {
	return (
		<TouchableOpacity onPress={onPress} {...restProps}>
			<WText size={size} cls={cls} style={style}>
				{text}
			</WText>
		</TouchableOpacity>
	)
}
