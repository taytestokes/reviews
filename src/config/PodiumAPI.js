import axios from 'axios'

import { baseApiUrl, apiEndpoints, requestMethods } from '../constants/PodiumAPI'

/**
 * This is the api key needed to append to headers of the request.
 */
const apiKey = 'H3TM28wjL8R4#HTnqk?c'

/**
 * HTTP instance that will be configured with a few defaults
 * that will be applied upon every request
 */
export const axiosInstance = axios.create({
    baseURL: baseApiUrl,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // The 'x-api-key' header will be used to send the api key with the request
        'x-api-key': apiKey
    },
    method: requestMethods.GET,
    validateStatus: status => status >= 200 && status < 300
})