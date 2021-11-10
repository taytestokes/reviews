import { axiosInstance, baseApiUrl, apiEndPoints } from './Config'

/**
 * Method: GET
 * Endpoint: /reviews
 */
export const getReviews = () => {
  return axiosInstance
    .get(baseApiUrl + apiEndPoints.REVIEWS)
    .then((response) => response.data)
    .catch((error) => error)
}
