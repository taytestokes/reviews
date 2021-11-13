import React from 'react'

const reviewsReducer = (initialReviews, action) => {
  switch (action.type) {
    case 'UPDATE_REVIEWS':
      return action.payload
    case 'FILTER_BY_RATING':
      return initialReviews.filter(
        (review) => review.rating >= action.payload && review.rating < action.payload + 1,
      )
    case 'RESET_REVIEWS':
      return action.payload
    default:
      return action.payload
  }
}

export const useFilteredReviews = (initialReviews) => {
  const [filteredReviews, dispatch] = React.useReducer(reviewsReducer, initialReviews)

  // Dispatches an action with the rating to filter by
  const filterReviewsByRating = (rating) => {
    dispatch({
      type: 'FILTER_BY_RATING',
      payload: rating,
    })
  }

  // Resets the reviews
  const resetFilteredReviews = () => {
    dispatch({
      type: 'RESET_REVIEWS',
      payload: initialReviews,
    })
  }

  // Dispatches an action containing the inital reviews
  // upon the execution of this hook
  React.useEffect(() => {
    dispatch({
      type: 'UPDATE_REVIEWS',
      payload: initialReviews,
    })
  }, [initialReviews])

  return {
    filteredReviews,
    filterReviewsByRating,
    resetFilteredReviews,
  }
}
