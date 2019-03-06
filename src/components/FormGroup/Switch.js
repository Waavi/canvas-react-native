/* eslint-disable */
import React, { PureComponent } from 'react'
import { string } from 'prop-types'
import { Field } from 'redux-form'
import { Switch as NativeSwitch } from 'react-native'
import { Colors } from '@/theme'
import { FormGroup } from './FormGroup'

export class Switch extends PureComponent {
	static propTypes = {
		name: string.isRequired,
		label: string.isRequired,
	}

	renderInput = data => {
		const {
			input: { value, onChange },
			label,
			...restParams
		} = data
		return (
			<FormGroup label={label}>
				<NativeSwitch
					value={value === true}
					onValueChange={onChange}
					onTintColor={Colors.brand}
					{...restParams}
				/>
			</FormGroup>
		)
	}

	render() {
		const { name, ...restProps } = this.props
		return <Field key={name} name={name} component={this.renderInput} {...restProps} />
	}
}
