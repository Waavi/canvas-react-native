import { Colors } from '@theme'

export const LinearGradientTypes = () => ({
    _base: {
        gradientData: {
            colors: Colors.redGradient,
            start: { x: 0, y: 0 },
            end: { x: 1, y: 1 }
        }
    },
    reverse: {
        gradientData: {
            start: { x: 1, y: 1 },
            end: { x: 0, y: 0 }
        }
    },
    horizontal: {
        gradientData: {
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 }
        }
    },
    'horizontal-reverse': {
        gradientData: {
            start: { x: 1, y: 0.5 },
            end: { x: 0, y: 0.5 }
        }
    },
    light: {
        gradientData: {
            colors: Colors.lightRedGradient
        }
    },
    white: {
        gradientData: {
            colors: [Colors.background, Colors.background]
        }
    }
})
