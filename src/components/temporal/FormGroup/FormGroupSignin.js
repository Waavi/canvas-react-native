/* eslint-disable */
import React, { PureComponent } from 'react'
import { string, func, element, oneOfType, arrayOf } from 'prop-types'
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { Box, Icon, SText } from '@/components'
import { Colors } from '@/theme'

export class FormGroupSignin extends PureComponent {
	static propTypes = {
		icon: string,
		error: string,
		onPress: func,
		children: oneOfType([element, arrayOf(element)]),
	}

	render() {
		const { icon, error, onPress, children } = this.props
		return (
			<TouchableWithoutFeedback onPress={onPress}>
				<View>
					<Box cls="row-stretch-center px-s py-10" style={styles.underline}>
						{icon && (
							<Icon name={icon} size={15} color={Colors.white} style={styles.icon} />
						)}
						<Box cls="flex-1">{children}</Box>
					</Box>
					<SText cls="error size12" numberOfLines={1} style={styles.error}>
						{error || ' '}
					</SText>
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

const styles = StyleSheet.create({
	icon: {
		marginRight: 15,
	},
	underline: {
		borderBottomWidth: 1,
		borderBottomColor: Colors.white,
	},
	error: {},
})
