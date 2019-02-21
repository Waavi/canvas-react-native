import React from 'react'
import PropTypes from './utils/propTypes'
import { SlotTemplate } from './SlotTemplate'
import { SlotContext } from './SlotContext'

SlotLayout.propTypes = {
	layout: PropTypes.children,
	content: PropTypes.children,
	children: PropTypes.children, // layout as children
}
SlotLayout.defaultProps = {
	layout: undefined,
	content: undefined,
	children: undefined,
}
export function SlotLayout({ layout, content, children }) {
	const slotTemplates = getSlotTemplates(content)
	return (
		<SlotContext.Provider value={{ slotTemplates }}>{layout || children}</SlotContext.Provider>
	)
}

export function getSlotTemplates(content) {
	const contentArray = Array.isArray(content) ? content : [content]
	return contentArray.reduce((byName, child) => {
		if (child) {
			const name = child.props.slot || (child.type === SlotTemplate && child.props.name)
			if (typeof name === 'string') {
				return {
					[name]: child,
					...byName,
				}
			}
			return {
				...byName,
				default: [...(byName.default || []), child],
			}
		}
		return byName
	}, {})
}
