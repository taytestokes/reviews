import { axiosInstance } from '../config/PodiumAPI'

import { baseApiUrl, apiEndpoints } from '../constants/PodiumAPI'

/**
 * Add notes here
 */
export const getReviews = () => {
  return axiosInstance
    .get(baseApiUrl + apiEndpoints.REVIEWS)
    .then((response) => response.data)
    .catch((error) => error)
}
