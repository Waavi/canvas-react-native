import React, { Component } from 'react'
import PropTypes from '#propTypes'
import { ScrollView } from 'react-native'
import ClsStyles, { ClsCache } from '@modules/react-native-cls'
import {
	bgColorsClsStyles,
	borderClsStyles,
	flexClsStyles,
	childFlexClsStyles,
	roundnessClsStyles,
	shadowClsStyles,
	marginClsStyles,
	paddingClsStyles,
} from '@/theme/cls'

export class ScrollBox extends Component {
	static propTypes = {
		cls: PropTypes.string,
		contentContainerCls: PropTypes.string,
		style: PropTypes.viewStyle,
		contentContainerStyle: PropTypes.viewStyle,
	}
	static defaultProps = {
		cls: undefined,
		contentContainerCls: undefined,
		style: undefined,
		contentContainerStyle: undefined,
	}
	constructor(props) {
		super(props)
		this.clsCache = new ClsCache()
		this.contentContainerClsCache = new ClsCache()
	}
	render() {
		const { cls, contentContainerCls, style, contentContainerStyle, ...restProps } = this.props
		return (
			<ScrollView
				style={[clsStyles.getStyles(cls, this.clsCache), style]}
				contentContainerStyle={[
					contentContainerClsStyles.getStyles(
						contentContainerCls,
						this.contentContainerClsCache
					),
					contentContainerStyle,
				]}
				{...restProps}
			/>
		)
	}
}

const clsStyles = ClsStyles.merge([
	bgColorsClsStyles,
	borderClsStyles,
	childFlexClsStyles,
	roundnessClsStyles,
	shadowClsStyles,
	marginClsStyles,
])
const contentContainerClsStyles = ClsStyles.merge([flexClsStyles, paddingClsStyles])
