import React from 'react'
import PropTypes from './utils/propTypes'
import { WithState } from './WithState'

WithStateValue.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	initialValue: PropTypes.any,
	children: PropTypes.func.isRequired, // (value, setValue) => { ... }
}
WithStateValue.defaultProps = {
	initialValue: undefined,
}
export function WithStateValue({ initialValue, children }) {
	return (
		<WithState initialState={{ value: initialValue }}>
			{(state, setState) => children(state.value, value => setState({ value }))}
		</WithState>
	)
}
