import React, { Component } from 'react'
import PropTypes from '#propTypes'
import ReactNativeLinearGradient from 'react-native-linear-gradient'

export class LinearGradient extends Component {
	componentName = 'LinearGradient'

	typeMapping = {
		gradientData: {},
	}

	static propTypes = {
		rkType: PropTypes.string,
		colors: PropTypes.array,
		start: PropTypes.object,
		end: PropTypes.object,
		children: oneOfType([PropTypes.element, arrayOf(PropTypes.element)]),
	}

	render() {
		const {
			colors: givenColors,
			start: givenStart,
			end: givenEnd,
			children,
			...otherProps
		} = this.props
		const { gradientData } = this.defineStyles()
		const colors = givenColors || this.extractNonStyleValue(gradientData, 'colors')
		const start = givenStart || this.extractNonStyleValue(gradientData, 'start')
		const end = givenEnd || this.extractNonStyleValue(gradientData, 'end')
		return (
			<ReactNativeLinearGradient colors={colors} start={start} end={end} {...otherProps}>
				{children}
			</ReactNativeLinearGradient>
		)
	}
}
