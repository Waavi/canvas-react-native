/* eslint-disable */
import React, { PureComponent } from 'react'
import { string, number, func, element, oneOfType, arrayOf } from 'prop-types'
import { StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Box, WText } from '@/components'
import { Metrics } from '@/theme'
import { t } from '@/lang'

export class FormGroupVertical extends PureComponent {
	static propTypes = {
		CustomFormGroup: element,
		label: string.isRequired,
		error: string,
		minHeight: number,
		labelMaxWidth: number,
		onPress: func,
		children: oneOfType([element, arrayOf(element)]),
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
					cls="col-top-stretch white px-s b-b"
					style={{ minHeight: Metrics.scale.vertical(minHeight) }}
				>
					<WText
						cls="mt-s size14 bold label"
						style={{ maxWidth: Metrics.scale.percentage.horizontal(labelMaxWidth) }}
					>
						{t(label)}
					</WText>
					<Box cls="col-center-left pt-5 pb-20">{children}</Box>
					{error && (
						<WText
							cls="error size12 left px-s pb-5"
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
