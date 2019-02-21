import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { linkTo } from '@storybook/addon-links'
import { WelcomeScreen } from './Welcome'

storiesOf('Welcome', module).add('to Storybook', () => <WelcomeScreen showApp={linkTo('Button')} />)
