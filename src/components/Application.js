import React from 'react'
import useSize from '@react-hook/size'

import { useGetReviews } from '../hooks/useGetReviews'

import { getBarChartData } from '../utils/Chart'

import { Layout } from './Layout'
import { BarChart } from './charts/BarChart'
import { ReviewDetailsDrawer } from './ReviewDetailsDrawer'
import { ReviewsList } from './ReviewsList'

export const Application = () => {
  const chartWrapperRef = React.useRef()
  const { reviews } = useGetReviews()
  const [showDetailsDrawer, setShowDetailsDrawer] = React.useState(false)
  const [activeReview, setActiveReview] = React.useState(null)
  const [width] = useSize(chartWrapperRef)
  const chartData = getBarChartData(reviews)

  const onRowClick = (review) => {
    setActiveReview(review)
    setShowDetailsDrawer(true)
  }

  return (
    <Layout>
      <div className="flex h-full">
        <div className="w-1/2 flex flex-col ">
          <ReviewsList onRowClick={onRowClick} reviews={reviews} />
        </div>

        <div className="flex flex-col w-1/2">
          <div className="flex flex-col bg-white p-4 rounded-md shadow-sm" ref={chartWrapperRef}>
            <h2 className="font-bold text-lg text-gray-900">Total Reviews</h2>
            <BarChart data={chartData} width={width} />
          </div>
        </div>
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
    </Layout>
  )
}
