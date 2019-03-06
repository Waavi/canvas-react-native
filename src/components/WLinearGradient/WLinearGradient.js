import React from 'react'
import PropTypes from '#propTypes'
import RNLinearGradient from 'react-native-linear-gradient'
import { Directions, Colors } from './utils'

const DirectionsKeys = Object.keys(Directions)

WLinearGradient.propTypes = {
	direction: PropTypes.oneOf([...DirectionsKeys, '']),
	color: PropTypes.oneOf('primary', 'secondary', 'tertiary'),
	colors: PropTypes.arrayOf(PropTypes.string),
	style: PropTypes.style,
	start: PropTypes.shape({
		x: Number,
		y: Number,
	}),
	end: PropTypes.shape({
		x: Number,
		y: Number,
	}),
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
		undefined,
	]),
}

WLinearGradient.defaultProps = {
	direction: '',
	color: 'primary',
	colors: Colors.primary,
	start: Directions.vertical.start,
	end: Directions.vertical.end,
	children: undefined,
	style: undefined,
}

export function WLinearGradient({ direction, color, colors, start, end, style, children }) {
	const coords = direction ? Directions[direction] : { start, end }
	const palette = color ? Colors[color] : colors
	return (
		<RNLinearGradient colors={palette} start={coords.start} end={coords.end} style={style}>
			{children}
		</RNLinearGradient>
	)
}
