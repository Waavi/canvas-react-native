/*
 * this file requires a file .env at the root directory.
 * However, it does not refresh, so you need run "yarn refresh-dotenv".
 */
import {
	APP_NAME,
	APP_VERSION,
	WEB_URL,
	API_URL,
	API_KEY,
	ANALYTICS_UA,
	REDUX_PERSIST_KEY,
	REDUX_PERSIST_VERSION,
	REDUX_PERSIST_ACTIVE,
	STORYBOOK_SHOW,
} from 'react-native-dotenv' /* ___timestamp___2019-02-27___11:33:09___ */

const webUrl = WEB_URL

const isDev = __DEV__

const config = {
	projectName: APP_NAME,
	version: APP_VERSION,
	isDev,
	isProd: !isDev,
	useReactotron: isDev,
	disableWarningsYellowBox: false,
	webUrl,
	clientImageBaseUrl: `${webUrl}/c/`,
	analyticsUA: ANALYTICS_UA,
	api: {
		config: {
			baseURL: API_URL,
			headers: {
				'Content-Type': 'application/json',
				'X-Api-Key': API_KEY,
				'Accept-Language': 'es',
			},
			timeout: 10000,
		},
		header: {
			authToken: 'X-Auth-Token',
			userAlert: 'X-User-Alert',
		},
	},
	reduxPersist: {
		key: REDUX_PERSIST_KEY,
		version: REDUX_PERSIST_VERSION,
		active: REDUX_PERSIST_ACTIVE,
	},
	storybook: {
		show: STORYBOOK_SHOW === 'true',
	},
}

export default config
