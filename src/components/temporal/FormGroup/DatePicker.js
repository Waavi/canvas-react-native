/*
	https://github.com/mmazzarolo/react-native-modal-datetime-picker
 */
import React, { PureComponent } from 'react'
import { string } from 'prop-types'
import { Field } from 'redux-form'
import { View, Text } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'
import { t } from 'app/lang'
import { FormGroup } from './FormGroup'
import { formStyles, placeholderColor } from './formStyles'

export class DatePicker extends PureComponent {
    static propTypes = {
        name: string.isRequired,
        label: string.isRequired
    }

    state = {
        isVisible: false,
        date: null
    }

    handleChange = date => {
        this.setState({ date })
        this.onChange(moment(date).format('YYYY-MM-DD'))
        this.hide()
    }

    show = () => this.setState({ isVisible: true })
    hide = () => this.setState({ isVisible: false })
    focus = () => this.show()

    renderInput = data => {
        const { date } = this.state
        const {
            input: { value, onChange },
            meta: { touched, error },
            label,
            placeholder
        } = data
        this.onChange = onChange
        const hasValue = value !== null && value !== ''
        if (date === null && hasValue) {
            this.handleChange(moment(value).toDate())
        }
        const errorMsg = touched && error !== undefined ? error : null
        return (
            <FormGroup label={label} error={errorMsg} onPress={this.show}>
                {hasValue && <Text style={formStyles.inputText}>{moment(value).format('ll')}</Text>}
                {!hasValue && placeholder && <Text style={[formStyles.inputText, { color: placeholderColor }]}>{t(placeholder)}</Text>}
            </FormGroup>
        )
    }

    render() {
        const { name, label, placeholder, validate, ...restProps } = this.props
        const { isVisible, date } = this.state
        return (
            <View>
                <Field key={name} name={name} label={label} placeholder={placeholder} validate={validate} component={this.renderInput} />
                <DateTimePicker
                    isVisible={isVisible}
                    date={date || new Date()}
                    onConfirm={this.handleChange}
                    onCancel={this.hide}
                    titleIOS={t(label)}
                    cancelTextIOS={t('cancel')}
                    confirmTextIOS={t('accept')}
                    {...restProps}
                />
            </View>
        )
    }
}
