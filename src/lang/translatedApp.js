import React, { Component } from 'react'
import RNLanguages from 'react-native-languages'
import { setLang } from './index'

function handleLanguageChange({ language }) {
	setLang(language)
}

export default function translatedAppDecorator(TargetComponent) {
	return class TranslatedApp extends Component {
		componentWillMount() {
			RNLanguages.addEventListener('change', handleLanguageChange)
		}
		componentWillUnmount() {
			RNLanguages.addEventListener('change', handleLanguageChange)
		}
		render() {
			return <TargetComponent {...this.props} />
		}
	}
}
