import React, { Component } from 'react'
import PropTypes from './utils/propTypes'
import { SlotContext } from './SlotContext'

export class Slot extends Component {
	static propTypes = {
		name: PropTypes.string,
		as: PropTypes.tag,
		required: PropTypes.bool,
		// eslint-disable-next-line react/forbid-prop-types
		bind: PropTypes.any,
		children: PropTypes.children,
	}
	static defaultProps = {
		name: 'default',
		as: undefined,
		required: false,
		bind: undefined,
		children: null,
	}
	static contextType = SlotContext

	render() {
		const { name, as: Tag, required, bind, children, ...props } = this.props
		const slotTemplates = (this.context || {}).slotTemplates
		const template = (slotTemplates && slotTemplates[name]) || undefined
		if (template) {
			if (template.props && typeof template.props.children === 'function') {
				return React.cloneElement(template, { children: template.props.children(bind) })
			}
			return template
		}
		if (required) console.warn(`The Slot ${name} is required`)
		return Tag ? <Tag {...props}>{children}</Tag> : children
	}
}
