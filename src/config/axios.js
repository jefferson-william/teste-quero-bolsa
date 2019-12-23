import useAxios, { configure } from 'axios-hooks'
import Axios from 'axios'

export const baseUrl = 'https://testapi.io'

export const axios = Axios.create()

axios.defaults.baseURL = baseUrl

configure({ axios })

export default useAxios
