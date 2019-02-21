import React, { PureComponent } from 'react'
import { string, number } from 'prop-types'
import { Field } from 'redux-form'
import { View, TouchableOpacity } from 'react-native'
import { Icon } from 'app/components'
import { Colors } from 'app/theme'
import { FormGroup } from './FormGroup'

export class Checkbox extends PureComponent {
    static propTypes = {
        name: string.isRequired,
        label: string.isRequired,
        iconSize: number
    }
    static defaultProps = {
        iconSize: 30
    }

    renderInput = data => {
        const {
            input: { value, onChange },
            label,
            iconSize,
            CustomFormGroup,
            ...restParams
        } = data
        const checked = value === true
        return (
            <FormGroup CustomFormGroup={CustomFormGroup} label={label}>
                <TouchableOpacity onPress={() => onChange(!checked)}>
                    <View style={{ padding: 15, paddingRight: 0 }}>
                        <Icon name={checked ? 'tick-1' : 'tick-0'} size={iconSize} color={checked ? Colors.brand : Colors.lightgray} />
                    </View>
                </TouchableOpacity>
            </FormGroup>
        )
    }

    render() {
        const { name, ...restProps } = this.props
        return <Field key={name} name={name} component={this.renderInput} {...restProps} />
    }
}
