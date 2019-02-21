import React from 'react'
import PropTypes from '#propTypes'
import { View, StyleSheet } from 'react-native'
import { Box } from './Box'
import { SText } from '../SText'
import { Colors } from '@/theme'

HrDivider.propTypes = {
	title: PropTypes.string.isRequired,
	textSize: PropTypes.string,
}
HrDivider.defaultProps = {
	textSize: 'size16',
}
export function HrDivider({ title, textSize = 'size16' }) {
	return (
		<Box cls="row-center mt-40 mb-20">
			<View style={styles.line} />
			<SText cls={`${textSize} black medium mx-s`}>{title}</SText>
			<View style={styles.line} />
		</Box>
	)
}

const styles = StyleSheet.create({
	line: {
		flex: 1,
		height: 3,
		backgroundColor: Colors.black,
	},
})
