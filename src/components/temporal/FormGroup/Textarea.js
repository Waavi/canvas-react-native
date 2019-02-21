import React, { PureComponent } from 'react'
import { string, number } from 'prop-types'
import { Field } from 'redux-form'
import { TextInput } from 'react-native'
import { t } from 'app/lang'
import { FormGroupVertical } from './FormGroupVertical'
import { formStyles, placeholderColor } from './formStyles'

export class Textarea extends PureComponent {
    static propTypes = {
        name: string.isRequired,
        label: string.isRequired,
        placeholder: string,
        maxLength: number,
        minHeight: number,
        maxHeight: number
    }
    static defaultProps = {
        minHeight: 30,
        maxHeight: 150
    }

    state = { height: 30 }

    componentWillReceiveProps(nextProps) {
        if (nextProps.maxHeight !== this.props.maxHeight) {
            this.setHeight(this.innerHeight, nextProps)
        }
    }
    setHeight = (height, props = this.props) => {
        this.innerHeight = height
        this.setState({
            height: Math.max(props.minHeight, Math.min(height, props.maxHeight))
        })
    }
    setHeightFromEvent = e => this.setHeight(e.nativeEvent.contentSize.height)

    setRef = ref => {
        this.textInputRef = ref
    }

    focus = () => this.textInputRef.focus()

    renderInput = data => {
        const {
            input: { value, onChange, ...restInput },
            meta: { touched, error },
            icon,
            label,
            placeholder,
            minHeight,
            maxHeight,
            CustomFormGroup,
            style,
            ...restParams
        } = data
        const errorMsg = touched && error !== undefined ? error : null
        const heightStyle = touched ? { height: this.state.height, minHeight, maxHeight } : { minHeight, maxHeight }
        return (
            <FormGroupVertical CustomFormGroup={CustomFormGroup} icon={icon} label={label} error={errorMsg} onPress={this.focus}>
                <TextInput
                    ref={this.setRef}
                    multiline
                    value={value}
                    onChangeText={onChange}
                    onContentSizeChange={this.setHeightFromEvent}
                    placeholder={placeholder && t(placeholder)}
                    style={[formStyles.inputText, { alignSelf: 'stretch' }, heightStyle, style]}
                    placeholderTextColor={placeholderColor}
                    {...restParams}
                    {...restInput}
                />
            </FormGroupVertical>
        )
    }

    render() {
        const { name, ...restProps } = this.props
        return <Field key={name} name={name} component={this.renderInput} {...restProps} />
    }
}
