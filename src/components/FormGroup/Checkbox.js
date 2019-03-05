import React, { PureComponent } from 'react'
import { string, number } from 'prop-types'
import { Field } from 'redux-form'
import { View, TouchableOpacity } from 'react-native'
import { Icon } from '@/components'
import { Colors } from '@/theme'
import { FormGroupClear } from './FormGroupClear'

export class Checkbox extends PureComponent {
	static propTypes = {
		name: string.isRequired,
		iconSize: number,
	}
	static defaultProps = {
		iconSize: 30,
	}

	renderInput = data => {
		const {
			input: { value, onChange },
			label,
			iconSize,
			CustomFormGroup,
			// eslint-disable-next-line
			...restParams
		} = data
		const checked = value === true
		const wrapper = {
			padding: 15,
			paddingRight: 0,
		}
		return (
			<FormGroupClear CustomFormGroup={CustomFormGroup} label={label}>
				<TouchableOpacity onPress={() => onChange(!checked)}>
					<View style={wrapper}>
						<Icon
							name={checked ? 'tick-1' : 'tick-0'}
							size={iconSize}
							color={checked ? Colors.brand : Colors.lightgray}
						/>
					</View>
				</TouchableOpacity>
			</FormGroupClear>
		)
	}

	render() {
		const { name, ...restProps } = this.props
		return <Field key={name} name={name} component={this.renderInput} {...restProps} />
	}
}
