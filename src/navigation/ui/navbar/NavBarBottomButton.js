import React from 'react'
import { number, string, bool } from 'prop-types'
import { ViewPropTypes, View, StyleSheet } from 'react-native'
import { WText, WIcon } from '@/components'
import { Colors, Metrics, BasicStyles } from '@/theme'
import { t } from '@/lang'

NavBarBottomButton.propTypes = {
	name: string.isRequired,
	icon: string,
	withAlert: bool,
	color: string,
	size: number,
	style: ViewPropTypes.style,
}
NavBarBottomButton.defaultProps = {
	icon: '',
	withAlert: false,
	color: Colors.black,
	size: 18,
	style: undefined,
}
export function NavBarBottomButton({ name, withAlert, color, size, style, icon, ...iconProps }) {
	return (
		<View style={[styles.container, withAlert ? styles.containerWithAlert : {}, style]}>
			{!!icon && <WIcon name={icon} color={color} size={size} {...iconProps} />}
			<WText size={12} style={{ color }}>
				{t(`nav.tabs.${name}`).toUpperCase()}
			</WText>
			{withAlert && (
				<View style={styles.alertContainer}>
					<View style={styles.alert} />
				</View>
			)}
		</View>
	)
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
