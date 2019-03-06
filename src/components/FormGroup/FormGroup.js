/* eslint-disable */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Box } from '@/components/Layout'
import { WText } from '@/components/WText'
import { Metrics } from '@/theme'

export class FormGroup extends PureComponent {
	static propTypes = {
		CustomFormGroup: PropTypes.element,
		label: PropTypes.string.isRequired,
		error: PropTypes.string,
		minHeight: PropTypes.number,
		labelMaxWidth: PropTypes.number,
		onPress: PropTypes.func,
		children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
	}
	static defaultProps = {
		minHeight: 40,
		labelMaxWidth: 50,
	}

	render() {
		const {
			CustomFormGroup,
			label,
			error,
			minHeight,
			labelMaxWidth,
			onPress,
			children,
		} = this.props
		if (CustomFormGroup) {
			return <CustomFormGroup {...this.props} />
		}
		return (
			<TouchableWithoutFeedback onPress={onPress}>
				<View style={styles.wrapper}>
					<Box
						cls="mb-10 px-s b-b"
						style={{ minHeight: Metrics.scale.vertical(minHeight) }}
					>
						<WText
							cls="mb-5 bold label"
							size={14}
							style={{ maxWidth: Metrics.scale.percentage.horizontal(labelMaxWidth) }}
						>
							{label}
						</WText>
						<Box>{children}</Box>
					</Box>
					{error && (
						<WText
							cls="error px-s pb-5"
							size={12}
							numberOfLines={1}
							style={styles.error}
						>
							{error}
						</WText>
					)}
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

const styles = StyleSheet.create({
	wrapper: {
		marginBottom: 10,
		paddingBottom: 15,
	},
	error: {
		position: 'absolute',
		left: 0,
		bottom: 0,
		width: Metrics.screenWidth,
	},
})
