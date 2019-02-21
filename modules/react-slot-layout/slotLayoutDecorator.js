import React from 'react'
import { SlotLayout } from './SlotLayout'

export function slotLayout(TargetComponent) {
	return function ExampleLayout({ children, ...props }) {
		return (
			<SlotLayout content={children}>
				<TargetComponent {...props} />
			</SlotLayout>
		)
	}
}
