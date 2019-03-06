import React from 'react'
import { shallow } from 'enzyme'
import { ActivityIndicator } from 'react-native'
import { WLoading } from './WLoading'

describe('Components/WLoading', () => {
	it('should be render ActivityIndicator native', () => {
		const wrapper = shallow(<WLoading active />)
		const innerIndicator = wrapper.find(ActivityIndicator)
		expect(innerIndicator).toBeTruthy()
		expect(wrapper).toMatchSnapshot()
	})
	it('should be not render ActivityIndicator native', () => {
		const wrapper = shallow(<WLoading active={false} />)
		const innerIndicator = wrapper.find(ActivityIndicator)
		expect(innerIndicator).toEqual({})
		expect(innerIndicator).toMatchSnapshot()
	})
})
