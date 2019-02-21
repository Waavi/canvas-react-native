import React, { PureComponent } from 'react'
import { string, array, bool } from 'prop-types'
import { Field } from 'redux-form'
import { Text } from 'react-native'
import { connectActionSheet } from 'react-native-action-sheet'
import { t } from 'app/lang'
import { FormGroup } from './FormGroup'
import { formStyles, placeholderColor } from './formStyles'

@connectActionSheet
export class Select extends PureComponent {
    static propTypes = {
        name: string.isRequired,
        label: string.isRequired,
        options: array.isRequired,
        disabled: bool
    }

    handlePress = () => {
        const { options, disabled, showActionSheetWithOptions } = this.props
        if (!disabled) {
            showActionSheetWithOptions(
                {
                    options: [...options.map(o => o.label), t('cancel')],
                    cancelButtonIndex: options.length
                },
                buttonIndex => {
                    if (buttonIndex < options.length) {
                        const value = options[buttonIndex].value
                        this.onChange(value)
                    }
                }
            )
        }
    }

    renderInput = data => {
        const {
            input: { value, onChange },
            meta: { touched, error },
            label,
            placeholder
        } = data
        this.onChange = onChange
        const selectedOption = this.props.options.find(o => o.value === value)
        const valueStr = selectedOption ? selectedOption.label : null
        const errorMsg = touched && error !== undefined ? error : null
        return (
            <FormGroup label={label} error={errorMsg} onPress={this.handlePress}>
                {valueStr && <Text style={formStyles.inputText}>{valueStr}</Text>}
                {!valueStr && placeholder && <Text style={[formStyles.inputText, { color: placeholderColor }]}>{t(placeholder)}</Text>}
            </FormGroup>
        )
    }

    render() {
        const { name, label, placeholder, ...restProps } = this.props
        return <Field key={name} name={name} label={label} placeholder={placeholder} component={this.renderInput} {...restProps} />
    }
}
