import React from 'react'
import PropTypes from './utils/propTypes'

SlotTemplate.propTypes = {
	name: PropTypes.string,
	as: PropTypes.tag,
	children: PropTypes.oneOfType([PropTypes.children, PropTypes.func]),
}
SlotTemplate.defaultProps = {
	name: 'default',
	as: undefined,
	children: undefined,
}
export function SlotTemplate({ name, as: Tag, children, ...props }) {
	return Tag ? <Tag {...props}>{children}</Tag> : children
}
