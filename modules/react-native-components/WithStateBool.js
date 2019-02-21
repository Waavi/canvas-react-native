import PropTypes from './utils/propTypes'
import { WithStateValue } from './WithStateValue'

export const WithStateBool = WithStateValue
WithStateBool.propTypes = {
	initialValue: PropTypes.bool,
	children: PropTypes.func.isRequired, // (value, setValue) => { ... }
}
WithStateBool.defaultProps = {
	initialValue: false,
}
