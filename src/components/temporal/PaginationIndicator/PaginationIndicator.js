import React, { Component } from 'react'
import { number, string, any } from 'prop-types'
import { View, StyleSheet } from 'react-native'
import { Box } from 'app/components'
import { Colors, Metrics } from 'app/theme'
import { range } from 'lodash'

export class PaginationIndicator extends Component {
    static propTypes = {
        length: number.isRequired,
        current: number.isRequired,
        cls: string,
        style: any
    }

    renderIndicator = i => {
        const { current } = this.props
        return <View key={i} style={i === current ? [styles.base, styles.selected] : styles.base} />
    }
    render() {
        const { length, cls, style } = this.props
        return (
            <Box cls={`row-center m-20 ${cls}`} style={style}>
                {range(length).map(this.renderIndicator)}
            </Box>
        )
    }
}

const width = Metrics.scale.horizontal(7)
const styles = StyleSheet.create({
    base: {
        width,
        height: width,
        borderRadius: width,
        backgroundColor: Colors.white,
        marginHorizontal: width * 1.5,
        opacity: 0.3
    },
    selected: {
        width: width * 1.5,
        height: width * 1.5,
        marginHorizontal: width,
        opacity: 1
    }
})
