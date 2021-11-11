import React from 'react'

import { getReviews } from '../api/Requests'

export const useGetReviews = () => {
  const [reviews, setReviews] = React.useState([])
  const [isLoadingReviews, setIsLoadingReviews] = React.useState(true)

  React.useEffect(() => {
    getReviews().then((response) => {
      setIsLoadingReviews(false)
      setReviews(response)
    })
  }, [])

  return {
    reviews,
    setReviews,
    isLoadingReviews,
  }
}
