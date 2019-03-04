/* eslint-disable */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableWithoutFeedback } from 'react-native'
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
		minHeight: 70,
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
				<Box
					cls="row-stretch-center px-s b-b"
					style={{ minHeight: Metrics.scale.vertical(minHeight) }}
				>
					<WText
						cls="mr-s bold label"
						size={14}
						style={{ maxWidth: Metrics.scale.percentage.horizontal(labelMaxWidth) }}
					>
						{label}
					</WText>
					<Box cls="flex-1 col-center-right">{children}</Box>
					{error && (
						<WText
							cls="error right px-s pb-5"
							size={12}
							numberOfLines={1}
							style={styles.error}
						>
							{error}
						</WText>
					)}
				</Box>
			</TouchableWithoutFeedback>
		)
	}
}

const styles = StyleSheet.create({
	error: {
		position: 'absolute',
		left: 0,
		bottom: 0,
		width: Metrics.screenWidth,
	},
})
