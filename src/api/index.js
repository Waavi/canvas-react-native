import AppConfig from '@/config/app'
import Api from './config'
import endpoints from './endpoints'
import mock from './mock'

const ApiEndpoints = AppConfig.api.isMocked || !!AppConfig.isTest ? mock : endpoints(Api)

export default ApiEndpoints
