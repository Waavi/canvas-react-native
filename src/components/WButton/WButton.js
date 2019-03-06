import React, { Component } from 'react'
import PropTypes from '#propTypes'
import { ClsCache } from '@modules/react-native-cls'
import { TouchableOpacity, View, Text } from 'react-native'
import clsStyles from './clsStyles'
import { WLinearGradient } from '../WLinearGradient'

export class WButton extends Component {
	static propTypes = {
		cls: PropTypes.cls,
		text: PropTypes.string.isRequired,
		onPress: PropTypes.func.isRequired,
		disabled: PropTypes.bool,
		numberOfLines: PropTypes.number,
		wrapperStyle: PropTypes.viewStyle,
		style: PropTypes.viewStyle,
		textStyle: PropTypes.textStyle,
	}
	static defaultProps = {
		cls: undefined,
		disabled: false,
		numberOfLines: 1,
		wrapperStyle: undefined,
		style: undefined,
		textStyle: undefined,
	}
	constructor(props) {
		super(props)
		this.cache = new ClsCache()
	}

	render() {
		const {
			cls,
			text,
			onPress,
			disabled = false,
			numberOfLines = 1,
			wrapperStyle,
			style,
			textStyle,
		} = this.props
		const {
			wrapper: wrapperClsStyle,
			view: viewClsStyle,
			text: textClsStyle,
			gradient: gradientStyle,
		} = clsStyles.getStyles(disabled ? 'disabled' : cls, this.cache)
		const innerViewStyle = [viewClsStyle, style]
		const content = (
			<View style={innerViewStyle}>
				<Text numberOfLines={numberOfLines} style={[textClsStyle, textStyle]}>
					{text}
				</Text>
			</View>
		)

		return (
			<TouchableOpacity
				disabled={disabled}
				onPress={onPress}
				style={[wrapperClsStyle, wrapperStyle]}
			>
				{gradientStyle ? (
					<WLinearGradient style={gradientStyle} direction="horizontal" color="secondary">
						{content}
					</WLinearGradient>
				) : (
					content
				)}
			</TouchableOpacity>
		)
	}
}
