import React from 'react'

import { getReviews } from '../api/Requests'

export const useGetReviews = () => {
  const [reviews, setReviews] = React.useState([])
  const [isLoadingReviews, setIsLoadingReviews] = React.useState(true)

  // Makes a fetch request using the api utils
  // to get all the reviews available upon initialization
  React.useEffect(() => {
    getReviews().then((response) => {
      setIsLoadingReviews(false)
      setReviews(response)
    })
  }, [])

  return {
    reviews,
    isLoadingReviews,
  }
}
