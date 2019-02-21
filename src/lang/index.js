import RNLanguages from 'react-native-languages'
import i18n from 'i18n-js'
import en from './translations/en'
import es from './translations/es'

i18n.locale = RNLanguages.language
i18n.fallbacks = true
i18n.defaultLocale = 'en'

i18n.translations = { en, es }

export function getLang() {
	return i18n.currentLocale()
}
export function setLang(locale) {
	i18n.locale = locale
}
export const t = (...args) => i18n.t(...args)

export default i18n
