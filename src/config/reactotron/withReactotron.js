import AppConfig from '@/config/app'
// eslint-disable-next-line
import Reactotron from 'reactotron-react-native'

export default function withReactotron(TargetComponent) {
	return AppConfig.useReactotron ? Reactotron.overlay(TargetComponent) : TargetComponent
}
