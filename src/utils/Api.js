import { axiosInstance } from '../config/Api'
import { apiEndPoints, baseApiUrl } from '../constants/Api'

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
