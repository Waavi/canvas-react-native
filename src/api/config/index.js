import { create, getToken, setToken, removeToken } from './api'
import API_STATUS from './utils/status'

const Api = create()

export default Api
export { getToken, setToken, removeToken, API_STATUS }
