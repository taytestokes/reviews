import React from 'react'

import { useGetReviews } from '../hooks/useGetReviews'

import { getBarChartData } from '../utils/Chart'

import { Layout } from './Layout'
import { ReviewsBarChart } from './ReviewsBarChart'
import { ReviewDetailsDrawer } from './ReviewDetailsDrawer'
import { ReviewsList } from './ReviewsList'
import { ReviewsDrawer } from './ReviewsDrawer'
import { Loader } from './Loader'
import { TotalReviews } from './TotalReviews'

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

  const onViewReviewsClick = () => {
    setShowReviewsDrawer(true)
  }

  const totalReviews = reviews.length

  return (
    <Layout>
      {isLoadingReviews ? (
        <Loader />
      ) : (
        <div>
          <h1 className="text-2xl font-bold">Reviews Dashboard</h1>

          <div className="w-full h-full flex flex-col md:flex-row flex-grow pb-8 mt-8 md:space-x-8">
            <div className="w-full md:w-3/5">
              <ReviewsBarChart data={chartData} onBarClick={onBarClick} />
            </div>

            <div className="w-full md:w-2/5 mt-8 md:mt-0 flex">
              <TotalReviews onButtonClick={onViewReviewsClick} total={totalReviews} />
            </div>
          </div>

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
        <ReviewsDrawer onClose={() => setShowReviewsDrawer(false)} reviews={reviews} />
      ) : null}
    </Layout>
  )
}
