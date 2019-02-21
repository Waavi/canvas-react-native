import React from 'react'
import { View } from 'react-native'
import { StyleToChildren } from './StyleToChildren'
import PropTypes from './utils/propTypes'

/**
 * Function that creates a custom Grid with ClsStyles functionality.
 * Due to the style of a Grid doesn't change too often, the ClsStyles are not cached.
 * @param {Object} obj object with parameters.
 * @param {Object} obj.padding the padding values for the grid.
 * @param {Object} obj.padding.left left padding for the grid.
 * @param {Object} obj.padding.right right padding for the grid.
 * @param {Object} obj.padding.top top padding for the grid.
 * @param {Object} obj.padding.bottom bottom padding for the grid.
 * @param {Object} obj.padding.inner inner spacing between children components.
 * @param {ClsStyles} obj.clsStyles contains all the "cls-styles".
 * @param {Function} [obj.propsToStyle] function that generate a style from the props (when scrollable = true it will be applied to the outer container).
 * @param {Object} [obj.propTypes] extra prop-types that will be added to the grid
 * @param {Object} [obj.defaultProps] extra default-props that will be added to the grid
 */
export function createGrid({ padding, clsStyles, propsToStyle, propTypes, defaultProps }) {
	function Grid(props) {
		const { direction, align, cls, style, children } = props
		const gridStyle = {
			flexDirection: direction,
			alignItems: align,
			paddingLeft: padding.left || 0,
			paddingRight: padding.right || 0,
			paddingTop: padding.top || 0,
			paddingBottom: padding.bottom || 0,
		}
		const innerSpace = padding.inner || 0
		const itemStyle = { [direction === 'row' ? 'marginRight' : 'marginBottom']: innerSpace }
		const lastItemStyle = direction === 'row' ? { marginRight: 0 } : { marginBottom: 0 }
		return (
			<View
				style={[
					clsStyles.getStyles(cls),
					propsToStyle ? propsToStyle(props) : undefined,
					gridStyle,
					style,
				]}
			>
				<StyleToChildren
					style={itemStyle}
					lastChildStyle={lastItemStyle}
					propsToStyle={({ flex }) => ({
						flex: flex || 1,
						flexBasis: (flex - 1) * innerSpace,
					})}
				>
					{children}
				</StyleToChildren>
			</View>
		)
	}
	Grid.propTypes = {
		direction: PropTypes.oneOf(['row', 'column']).isRequired,
		align: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch']),
		cls: PropTypes.string,
		style: PropTypes.viewStyle,
		children: PropTypes.children.isRequired,
		...(propTypes || {}),
	}
	Grid.defaultProps = {
		cls: undefined,
		align: 'stretch',
		style: undefined,
		...(defaultProps || {}),
	}
	return Grid
}
