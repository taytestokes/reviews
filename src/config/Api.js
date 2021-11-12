import axios from 'axios'

// This is the api key needed to append to headers of the request.
const apiKey = 'H3TM28wjL8R4#HTnqk?c'

// HTTP instance that will be configured with a few defaults that will be applied upon every request
export const axiosInstance = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // The 'x-api-key' header will be used to send the api key with the request
    'x-api-key': apiKey,
  },
  validateStatus: (status) => status >= 200 && status < 300,
})
