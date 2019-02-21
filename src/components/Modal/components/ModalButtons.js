import React, { Component } from 'react'
import PropTypes from '#propTypes'
import { Box } from '@/components/Layout/Box'
import { Button } from '@/components/Button'

export class ModalButtons extends Component {
	static propTypes = {
		dismissBtnText: PropTypes.string,
		buttons: PropTypes.arrayOf(
			PropTypes.shape({
				text: PropTypes.string.isRequired,
				onPress: PropTypes.func.isRequired,
				variant: PropTypes.string,
			})
		),
		onModalDismiss: PropTypes.func.isRequired,
	}
	static defaultProps = {
		dismissBtnText: undefined,
		buttons: [],
	}
	handleDismiss = () => {
		const { onModalDismiss } = this.props
		onModalDismiss()
	}
	handleActionAndDismiss = action => {
		const { onModalDismiss } = this.props
		if (action) {
			action()
		}
		onModalDismiss()
	}
	render() {
		const { dismissBtnText, buttons } = this.props
		let allButtons = buttons || []
		if (dismissBtnText) {
			allButtons = [
				...allButtons,
				{
					text: dismissBtnText,
					variant: buttons.length === 1 ? 'white' : 'white mt-10',
				},
			]
		}
		if (allButtons.length === 2) {
			const [btn1, btn2] = allButtons
			return (
				<Box cls="self-stretch row-center mt-s" style={{}}>
					<Button
						cls={['flex-1 mr-5', btn2.variant || 'green']}
						text={btn2.text}
						onPress={() => this.handleActionAndDismiss(btn2.onPress)}
					/>
					<Button
						cls={['flex-1 ml-5', btn1.variant || 'green']}
						text={btn1.text}
						onPress={() => this.handleActionAndDismiss(btn1.onPress)}
					/>
				</Box>
			)
		}
		if (allButtons.length > 0) {
			return (
				<Box cls="self-stretch mt-s px-2s">
					{allButtons.map(({ text, onPress, variant = 'green' }, index) => (
						<Button
							// eslint-disable-next-line react/no-array-index-key
							key={index}
							cls={['mb-10', variant]}
							text={text}
							onPress={() => this.handleActionAndDismiss(onPress)}
						/>
					))}
				</Box>
			)
		}
		return null
	}
}
