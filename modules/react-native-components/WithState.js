import { Component } from 'react'
import PropTypes from './utils/propTypes'

export class WithState extends Component {
	static propTypes = {
		// eslint-disable-next-line react/forbid-prop-types
		initialState: PropTypes.object.isRequired,
		children: PropTypes.func.isRequired, // (state, setState) => { ... }
	}
	constructor(props) {
		super(props)
		this.state = props.initialState
	}
	lazySetState = state => this.setState(state)
	render() {
		const { children } = this.props
		return children(this.state, this.lazySetState)
	}
}
