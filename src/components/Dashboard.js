import React from 'react'
import useSize from '@react-hook/size'

import { useGetReviews } from '../hooks/useGetReviews'

import { getBarChartData } from '../utils/Chart'

import { Layout } from './Layout'
import { BarChart } from './charts/BarChart'
import { ReviewDetailsDrawer } from './ReviewDetailsDrawer'
import { ReviewsList } from './ReviewsList'
import { ReviewsDrawer } from './ReviewsDrawer'

export const Dashboard = () => {
  const chartWrapperRef = React.useRef()

  const { reviews } = useGetReviews()
  const [width] = useSize(chartWrapperRef)
  const chartData = getBarChartData(reviews)

  const [showDetailsDrawer, setShowDetailsDrawer] = React.useState(false)
  const [showReviewsDrawer, setShowReviewsDrawer] = React.useState(false)
  const [activeReview, setActiveReview] = React.useState(null)
  const [filteredReviews, setFilteredReviews] = React.useState(reviews)

  const onRowClick = (review) => {
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
      <div className="container mt-4">
        <h1 className="text-2xl font-bold">Reviews Dashboard</h1>
      </div>

      <div className="flex flex-col w-full mt-8">
        <div className="flex flex-col bg-white p-4 rounded-md shadow-sm" ref={chartWrapperRef}>
          <h2 className="font-bold text-lg text-gray-900">Total Reviews</h2>
          <BarChart data={chartData} onBarClick={onBarClick} width={width} />
        </div>
      </div>

      <div className="w-full flex flex-col mt-8">
        <ReviewsList onRowClick={onRowClick} reviews={reviews} />
      </div>

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
