import React from 'react'

import { getReviews } from './utils/PodiumAPI'

import { Layout } from './components/Layout'
import { ReviewCard } from './components/ReviewCard'

export const Application = () => {
  // const [isLaoding, setIsLoading] = React.useState(true)
  const [reviews, setReviews] = React.useState([])

  React.useEffect(() => {
    getReviews().then((response) => {
      // setIsLoading(false)
      setReviews(response)
    })
  }, [])

  return (
    <Layout>
      <div className="flex flex-col w-1/3">
        {reviews.map((review) => {
          return <ReviewCard key={review.author} review={review} />
        })}
      </div>
      <div className="w-2/3 px-4"></div>
    </Layout>
  )
}
