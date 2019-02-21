import { addDecorator } from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'
import { withNotes } from '@storybook/addon-ondevice-notes'

addDecorator(withKnobs)
addDecorator(withNotes)
