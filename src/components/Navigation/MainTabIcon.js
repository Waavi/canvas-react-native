import React, { Component } from 'react'
import PropTypes from '#propTypes'
import { View, StyleSheet } from 'react-native'
import { Box, SText } from '@/components'
import { Colors, Metrics, BasicStyles } from '@/theme'
import { t } from '@/lang'

// eslint-disable-next-line
export class MainTabIcon extends Component {
	static defaultProps = {
		withAlert: false,
	}

	static propTypes = {
		name: PropTypes.string.isRequired,
		tintColor: PropTypes.string.isRequired,
		withAlert: PropTypes.bool,
	}

	render() {
		const { name, withAlert, tintColor } = this.props
		return (
			<Box
				cls="flex-1 center"
				style={[styles.container, withAlert ? styles.containerWithAlert : {}]}
			>
				{/* <Icon name={name} size={22} color={tintColor} /> */}
				<SText size={16} style={{ color: tintColor }}>
					{t(`nav.tabs.${name}`)}
				</SText>
				{withAlert && (
					<View style={styles.alertContainer}>
						<View style={styles.alert} />
					</View>
				)}
			</Box>
		)
	}
}

const scale = Metrics.scale.horizontal
const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	containerWithAlert: {
		paddingHorizontal: scale(6),
	},
	alertContainer: {
		position: 'absolute',
		right: 0,
	},
	alert: {
		...BasicStyles.sizeRounded(12),
		backgroundColor: Colors.red,
		marginLeft: scale(20),
		marginBottom: scale(20),
	},
})
