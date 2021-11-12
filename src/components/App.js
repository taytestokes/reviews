import React from 'react'
import useSize from '@react-hook/size'

import { useGetReviews } from '../hooks/useGetReviews'

import { getBarChartData } from '../utils/Chart'

import { Layout } from './Layout'
import { BarChart } from './charts/BarChart'
import { ReviewDetailsDrawer } from './ReviewDetailsDrawer'
import { ReviewsList } from './ReviewsList'
import { ReviewsDrawer } from './ReviewsDrawer'
import { ReviewsListSkeleton } from './skeletons/ReviewsListSkeleton'
import { BarChartSkeleton } from './skeletons/BarChartSkeleton'

export const App = () => {
  const chartWrapperRef = React.useRef()

  const { reviews, isLoadingReviews } = useGetReviews()
  const [width] = useSize(chartWrapperRef)
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
      <h1 className="text-2xl font-bold">Reviews Dashboard</h1>

      <div
        className="w-full flex flex-col bg-white p-4 my-8 rounded-md shadow-sm"
        ref={chartWrapperRef}
      >
        {isLoadingReviews ? (
          <BarChartSkeleton />
        ) : (
          <React.Fragment>
            <h2 className="font-bold text-lg text-gray-900">Total Reviews</h2>
            <BarChart data={chartData} onBarClick={onBarClick} width={width} />
          </React.Fragment>
        )}
      </div>

      {isLoadingReviews ? (
        <ReviewsListSkeleton />
      ) : (
        <ReviewsList onRowClick={onReviewRowClick} reviews={reviews} />
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
