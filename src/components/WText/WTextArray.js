import React from 'react'
import PropTypes from '#propTypes'
import { Text } from 'react-native'
import { WText } from './WText'

PropTypes.propTypes = {
	cls: PropTypes.string,
	texts: PropTypes.arrayOf(
		PropTypes.shape({
			bold: PropTypes.bool,
			italic: PropTypes.bool,
			green: PropTypes.bool,
			text: PropTypes.string.isRequired,
		})
	).isRequired,
}
PropTypes.defaultProps = {
	cls: undefined,
}
// eslint-disable-next-line
export function WTextArray({ cls, texts, children, ...restProps }) {
	return <Text {...restProps}>{texts.map((item, index) => textItem(cls, item, index))}</Text>
}

function textItem(cls, item, index) {
	let computedCls = cls || ''
	if (item.bold) {
		computedCls += ' semibold'
	}
	if (item.italic) {
		computedCls += ' italic'
	}
	if (item.green) {
		computedCls += ' green'
	}
	return (
		<WText key={index} cls={computedCls}>
			{item.text}
		</WText>
	)
}
