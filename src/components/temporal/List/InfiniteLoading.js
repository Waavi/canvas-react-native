import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { BasicStyles, Colors, Metrics } from 'app/theme'

export function InfiniteLoading({ active, color = Colors.brand, backgroundWhite = false }) {
    return (
        active && (
            <View style={[styles.container, { backgroundColor: backgroundWhite ? Colors.white : Colors.background }]}>
                <ActivityIndicator animating={active} color={color} size="large" />
            </View>
        )
    )
}

const styles = StyleSheet.create({
    container: {
        ...BasicStyles.container.base,
        marginBottom: Metrics.grid.baseSpacing * 2
    }
})
