import React from 'react'

import { useGetReviews } from '../hooks/useGetReviews'

import { getBarChartData } from '../utils/Chart'

import { Layout } from './Layout'
import { ReviewsBarChart } from './ReviewsBarChart'
import { ReviewDetailsDrawer } from './ReviewDetailsDrawer'
import { ReviewsList } from './ReviewsList'
import { ReviewsDrawer } from './ReviewsDrawer'
import { Loader } from './Loader'

export const App = () => {
  const { reviews, isLoadingReviews } = useGetReviews()
  const chartData = getBarChartData(reviews)

  const [showDetailsDrawer, setShowDetailsDrawer] = React.useState(false)
  const [showReviewsDrawer, setShowReviewsDrawer] = React.useState(false)
  const [activeReview, setActiveReview] = React.useState(null)
  const [filteredReviews, setFilteredReviews] = React.useState(reviews)

  const onReviewRowClick = (review) => {
    setActiveReview(review)
    setShowDetailsDrawer(true)
  }

  const onBarClick = (rating) => {
    setFilteredReviews(
      reviews.filter((review) => review.rating >= rating && review.rating < rating + 1),
    )
    setShowReviewsDrawer(true)
  }

  return (
    <Layout>
      {isLoadingReviews ? (
        <Loader />
      ) : (
        <div>
          <h1 className="text-2xl font-bold">Reviews Dashboard</h1>
          <ReviewsBarChart data={chartData} onBarClick={onBarClick} />
          <ReviewsList onRowClick={onReviewRowClick} reviews={reviews} reviewsPerPage={10} />
        </div>
      )}

      {showDetailsDrawer ? (
        <ReviewDetailsDrawer
          onClose={() => {
            setActiveReview(false)
            setShowDetailsDrawer(false)
          }}
          review={activeReview}
          title="Review Details"
        />
      ) : null}
      {showReviewsDrawer ? (
        <ReviewsDrawer onClose={() => setShowReviewsDrawer(false)} reviews={filteredReviews} />
      ) : null}
    </Layout>
  )
}
