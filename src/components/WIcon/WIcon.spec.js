import React from 'react'
import { mount, shallow } from 'enzyme'
import { View } from 'react-native'
import { WIcon } from './WIcon'
import { VectorIcon } from './VectorIcon'

describe('Components/WIcon', () => {
	it('should use VectorIcon', () => {
		const props = { name: 'chevron' }
		const wrapper = shallow(<WIcon {...props} />)
		const innerText = wrapper.find(VectorIcon)
		expect(innerText.props()).toMatchObject(props)
	})
	it('should set a base style', () => {
		const wrapper = shallow(<WIcon />)
		const innerStyle = wrapper.find(VectorIcon).props().style
		expect(innerStyle).toBeTruthy()
		expect(innerStyle).toMatchSnapshot()
	})
	it('should have a "size" for each font family defined at Fonts catalog', () => {
		const sizes = [20, 22, 24]
		const wrapper = mount(
			<View>
				{sizes.map(size => (
					<WIcon key={size} size={sizes[size]} />
				))}
			</View>
		)
		expect(wrapper).toMatchSnapshot()
	})
	it('should have a "color" for each font family defined at Fonts catalog', () => {
		const colors = ['green', 'dark']
		const wrapper = mount(
			<View>
				{colors.map(color => (
					<WIcon key={color} color={colors[color]} />
				))}
			</View>
		)
		expect(wrapper).toMatchSnapshot()
	})
})
