import { connect } from 'react-redux'
import {
	createNavigationReducer,
	reduxifyNavigator,
	createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'
import AppSwitchNavigator from '@/navigation/navigators/AppSwitchNavigator'

export const middleware = createReactNavigationReduxMiddleware(
	'navigation',
	state => state.navigation
)

export const reducer = createNavigationReducer(AppSwitchNavigator)

const App = reduxifyNavigator(AppSwitchNavigator, 'navigation')
const mapStateToProps = state => ({ state: state.navigation })
export const ReduxifiedAppNavigator = connect(
	mapStateToProps,
	null,
	null,
	{ forwardRef: true }
)(App)
