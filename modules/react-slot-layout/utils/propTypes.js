/*
 * Useful to easily import default prop-types and some more complex.
 */
import { Component } from 'react'
import PropTypes, { func, node, arrayOf, oneOfType } from 'prop-types'

const CustomPropTypes = {
	...PropTypes,
	children: oneOfType([node, arrayOf(node)]),
	tag: oneOfType(Component, func),
}

export default CustomPropTypes
