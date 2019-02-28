import React from 'react'
import PropTypes from '#propTypes'
import { TouchableOpacity } from 'react-native'
import { WText } from '../WText'

WLinkButton.propTypes = {
	text: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
	size: PropTypes.number.isRequired,
	cls: PropTypes.string,
	style: PropTypes.textStyle,
}
WLinkButton.defaultProps = {
	cls: undefined,
	style: undefined,
}

export function WLinkButton({ text, onPress, size, cls, style, ...restProps }) {
	return (
		<TouchableOpacity onPress={onPress} {...restProps}>
			<WText size={size} cls={cls} style={style}>
				{text}
			</WText>
		</TouchableOpacity>
	)
}
