import React from 'react'
import PropTypes from './utils/propTypes'

/**
 * Computes a style from a given one and the props and inject it to the child component.
 * @param {node|node[]} children the children
 * @param {Style} [style] base style to apply
 * @param {func} [propsToStyle] function that returns a style from a set of props
 */
StyleToChild.propTypes = {
	children: PropTypes.node.isRequired,
	style: PropTypes.viewStyle,
	propsToStyle: PropTypes.func,
}
StyleToChild.defaultProps = {
	style: undefined,
	propsToStyle: undefined,
}
export function StyleToChild({ children: child, style, propsToStyle }) {
	return React.cloneElement(child, {
		style: [style, propsToStyle && propsToStyle(child.props), child.props.style],
	})
}
