import React from 'react'

import { getReviews } from './utils/PodiumAPI'

export const Application = () => {
  const [reviews, setReviews] = React.useState([])

  React.useEffect(() => {
    getReviews().then((response) => {
      setReviews(response)
    })
  }, [])

  return (
    <div>
      {reviews.map((review) => {
        console.log({ review })
        return <div>{review.author}</div>
      })}
    </div>
  )
}
