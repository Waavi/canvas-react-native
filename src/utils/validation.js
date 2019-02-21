import { t } from '@/lang'
import approve from 'approvejs'

const trimValue = value => (typeof value === 'string' ? value.toString().trim() : value)

export const createValidator = (value, rules) => {
	const result = approve.value(trimValue(value), rules)
	return result.approved ? undefined : result.errors[0]
}

export const requiredValidation = value =>
	createValidator(value, {
		required: {
			message: t('validation.required'),
		},
	})

export const minLengthValidation = min => value =>
	createValidator(value, {
		min: {
			min,
			message: t('validation.min', { count: min }),
		},
	})
export const maxLengthValidation = max => value =>
	createValidator(value, {
		max: {
			max,
			message: t('validation.max', { count: max }),
		},
	})
export const rangeLengthValidation = (min, max) => value =>
	createValidator(value, {
		min: {
			min,
			message: t('validation.min', { count: min }),
		},
		max: {
			max,
			message: t('validation.max', { count: max }),
		},
	})

export const emailValidation = value =>
	createValidator(value, {
		email: {
			message: t('validation.email'),
		},
	})

export const numericValidation = value =>
	createValidator(value, {
		numeric: {
			message: t('validation.numeric'),
		},
	})

export const rangeValueValidation = (min, max) => value => {
	if (value < min) {
		return t('validation.minValue', { value: min })
	}
	if (value > max) {
		return t('validation.maxValue', { value: max })
	}
	return undefined
}

export const sameAsValidation = (fieldName, errorMsg = 'validation.samePasswords') => (
	value,
	allValues
) => (value !== allValues[fieldName] ? t(errorMsg) : undefined)

export const checkedValidation = errorMsg => value => (value ? undefined : t(errorMsg))
export const selectOneValidation = (errorMsg = 'validation.selectOne') => value =>
	value !== undefined && value !== null ? undefined : t(errorMsg)

export default {
	required: requiredValidation,
	minLength: minLengthValidation,
	maxLength: maxLengthValidation,
	rangeLength: rangeLengthValidation,
	email: emailValidation,
	numeric: numericValidation,
	rangeValue: rangeValueValidation,
	sameAs: sameAsValidation,
	checked: checkedValidation,
	selectOne: selectOneValidation,
}
