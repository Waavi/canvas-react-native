import React, { PureComponent } from 'react'
import { func, element, oneOfType, arrayOf } from 'prop-types'
import { TouchableWithoutFeedback } from 'react-native'

export class FormGroupClear extends PureComponent {
    static propTypes = {
        onPress: func,
        children: oneOfType([element, arrayOf(element)])
    }

    render() {
        const { onPress, children } = this.props
        return <TouchableWithoutFeedback onPress={onPress}>{children}</TouchableWithoutFeedback>
    }
}
