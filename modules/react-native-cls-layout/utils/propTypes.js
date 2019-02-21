/*
 * Useful to easily import default prop-types and some more complex.
 */
import PropTypes, { node, arrayOf, oneOfType } from 'prop-types'
import { ViewPropTypes } from 'react-native'

const CustomPropTypes = {
	...PropTypes,
	viewStyle: ViewPropTypes.style,
	children: oneOfType([node, arrayOf(node)]),
}

export default CustomPropTypes
