import React from 'react'
import PropTypes from '#propTypes'
import ReactNativeLinearGradient from 'react-native-linear-gradient'
import { Directions, Colors } from './utils'

const DirectionsKeys = Object.keys(Directions)

WLinearGradient.propTypes = {
	direction: PropTypes.oneOf([...DirectionsKeys, '']),
	color: PropTypes.oneOf('primary', 'secondary', 'tertiary'),
	colors: PropTypes.arrayOf(PropTypes.string),
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
}

export function WLinearGradient({ direction, color, colors, start, end, children }) {
	const coords = direction ? Directions[direction] : { start, end }
	const palette = color ? Colors[color] : colors
	return (
		<ReactNativeLinearGradient colors={palette} start={coords.start} end={coords.end}>
			{children}
		</ReactNativeLinearGradient>
	)
}
