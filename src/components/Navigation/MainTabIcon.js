import React, { Component } from 'react'
import PropTypes from '#propTypes'
import { Box, SText } from '@/components'
import { t } from '@/lang'

// eslint-disable-next-line
export class MainTabIcon extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		tintColor: PropTypes.string.isRequired,
		withAlert: PropTypes.bool.isRequired,
	}

	render() {
		const { name, withAlert = false, tintColor } = this.props
		return (
			<Box cls="flex-1 center">
				{/* <Icon name={name} size={22} color={tintColor} /> */}
				<SText size={16} style={{ color: tintColor }}>
					{t(`nav.tabs.${name}`)}
				</SText>
			</Box>
		)
	}
}
