/* eslint-disable */

import React, { PureComponent } from 'react'
import { string } from 'prop-types'
import { Field } from 'redux-form'
import { TextInput } from 'react-native'
import { t } from '@/lang'
import { FormGroup } from './FormGroup'
import { formStyles, placeholderColor } from './formStyles'

export class Text extends PureComponent {
	static propTypes = {
		name: string.isRequired,
		label: string.isRequired,
		placeholder: string,
		textAlign: string,
	}
	static defaultProps = {
		textAlign: 'right',
	}

	setRef = ref => {
		this.textInputRef = ref
	}

	handleFocus = () => this.textInputRef.focus()

	renderInput = data => {
		const {
			input: { value, onChange, ...restInput },
			meta: { touched, error },
			icon,
			label,
			placeholder,
			CustomFormGroup,
			textAlign,
			style,
			...restParams
		} = data
		const errorMsg = touched && error !== undefined ? error : null
		return (
			<FormGroup
				CustomFormGroup={CustomFormGroup}
				icon={icon}
				label={label}
				error={errorMsg}
				onPress={this.handleFocus}
			>
				<TextInput
					ref={this.setRef}
					value={value}
					onChangeText={onChange}
					placeholder={placeholder && t(placeholder)}
					textAlign={textAlign}
					style={[formStyles.inputText, { alignSelf: 'stretch' }, style]}
					placeholderTextColor={placeholderColor}
					{...restParams}
					{...restInput}
				/>
			</FormGroup>
		)
	}

	render() {
		const { name, ...restProps } = this.props
		return <Field key={name} name={name} component={this.renderInput} {...restProps} />
	}
}
