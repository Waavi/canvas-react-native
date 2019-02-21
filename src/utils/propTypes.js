import PropTypes, {
	string,
	number,
	func,
	node,
	object,
	shape,
	arrayOf,
	oneOfType,
} from 'prop-types'
import { ViewPropTypes, Text } from 'react-native'

/* 'cls' propType is recursive, so we have to deal with it using a lazy function */
function lazyFunction(f) {
	return function() {
		// eslint-disable-next-line prefer-rest-params
		return f.apply(this, arguments)
	}
}
const lazyClsType = lazyFunction(() => cls, [])
const cls = oneOfType([string, object, arrayOf(lazyClsType)])

const CustomPropTypes = {
	...PropTypes,
	viewStyle: ViewPropTypes.style,
	// eslint-disable-next-line react/forbid-foreign-prop-types
	textStyle: Text.propTypes.style,
	asset: number,
	children: oneOfType([node, arrayOf(node)]),
	navigation: shape({ navigate: func.isRequired }),
	cls,
}

export default CustomPropTypes
