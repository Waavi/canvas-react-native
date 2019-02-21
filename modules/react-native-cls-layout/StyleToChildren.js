import React from 'react'
import PropTypes from './utils/propTypes'

/**
 * Computes a style from a given one and the props and inject it to each child component.
 * @param {node|node[]} children the children
 * @param {Style} [style] base style to apply
 * @param {Style} [firstChildStyle] specific style applied only to the first child
 * @param {Style} [lastChildStyle] specific style applied only to the last child
 * @param {func} [propsToStyle] function that returns a style from a set of props
 */
StyleToChildren.propTypes = {
	children: PropTypes.children.isRequired,
	style: PropTypes.viewStyle,
	firstChildStyle: PropTypes.viewStyle,
	lastChildStyle: PropTypes.viewStyle,
	propsToStyle: PropTypes.func,
}
StyleToChildren.defaultProps = {
	style: undefined,
	firstChildStyle: undefined,
	lastChildStyle: undefined,
	propsToStyle: undefined,
}
export function StyleToChildren({
	children,
	style,
	firstChildStyle,
	lastChildStyle,
	propsToStyle,
}) {
	const childrenArray = React.Children.toArray(children)
	return React.Children.map(childrenArray, (child, index) =>
		React.cloneElement(child, {
			style: [
				style,
				propsToStyle && propsToStyle(child.props),
				child.props.style,
				index === 0 ? firstChildStyle : undefined,
				index === childrenArray.length - 1 ? lastChildStyle : undefined,
			],
		})
	)
}
