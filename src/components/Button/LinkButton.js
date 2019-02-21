import React from 'react'
import PropTypes from '#propTypes'
import { TouchableOpacity } from 'react-native'
import { SText } from '../SText'

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
			<SText size={size} cls={cls} style={style}>
				{text}
			</SText>
		</TouchableOpacity>
	)
}
