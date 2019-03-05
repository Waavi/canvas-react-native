import React from 'react'
import { mount, shallow } from 'enzyme'
import { Text, View } from 'react-native'
import { Fonts } from '@/theme'
import { WText } from './WText'

describe('Components/WText', () => {
	it('should be a wrapper of native Text', () => {
		const props = { children: 'text', numberOfLines: 1, onPress: () => {} }
		const wrapper = shallow(<WText {...props} />)
		const innerText = wrapper.find(Text)
		expect(innerText.props()).toMatchObject(props)
	})
	it('should set a base style', () => {
		const wrapper = shallow(<WText />)
		const innerStyle = wrapper.find(Text).props().style
		expect(innerStyle).toBeTruthy()
		expect(innerStyle).toMatchSnapshot()
	})
	it('should have a "class" for each font family defined at Fonts catalog', () => {
		const wrapper = mount(
			<View>
				{Object.keys(Fonts.type).map(type => (
					<WText key={type} cls={Fonts.type[type]}>
						test
					</WText>
				))}
			</View>
		)
		expect(wrapper).toMatchSnapshot()
	})
	it('should have a "class" for each font size defined at Fonts catalog', () => {
		const wrapper = mount(
			<View>
				{Object.keys(Fonts.size).map(size => (
					<WText key={size} cls={Fonts.size[size]}>
						test
					</WText>
				))}
			</View>
		)
		expect(wrapper).toMatchSnapshot()
	})
	it('should have the "classes": "title", "text", ...', () => {
		const classes = ['title', 'text', 'grow', 'left', 'center', 'right']
		const wrapper = mount(
			<View>
				{classes.map(cls => (
					<WText key={cls} cls={cls}>
						test
					</WText>
				))}
			</View>
		)
		expect(wrapper).toMatchSnapshot()
	})
})
