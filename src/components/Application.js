import React from 'react'
import useSize from '@react-hook/size'

import getUnixTime from 'date-fns/getUnixTime'
import format from 'date-fns/format'
import subMonths from 'date-fns/subMonths'
import isBefore from 'date-fns/isBefore'
import isAfter from 'date-fns/isAfter'
import subYears from 'date-fns/subYears'

import { useGetReviews } from '../hooks/useGetReviews'

import { getBarChartData } from '../utils/Chart'

import { Layout } from './Layout'
import { ReviewCard } from './ReviewCard'
import { LineChart } from './LineChart'
import { BarChart } from './charts/BarChart'
import { Drawer } from './shared/Drawer'

export const Application = () => {
  const chartWrapperRef = React.useRef()
  const { reviews } = useGetReviews()
  const [showDetailsDrawer, setShowDetailsDrawer] = React.useState(false)
  const [width] = useSize(chartWrapperRef)
  const chartData = getBarChartData(reviews)
  const totalReviewCount = reviews.length

  return (
    <Layout>
      <div className="flex flex-grow">
        <div className="flex flex-col flex-grow overflow-y-auto bg-white w-1/2 rounded-md shadow-sm">
          <div className="container p-4 border-b-2 border-gray-100">
            <h2 className="font-bold text-gray-900">User Reviews</h2>
          </div>
          <div className="flex flex-col">
            {reviews.map((review, index) => {
              console.log(review)
              return (
                <ReviewCard
                  key={`${review.rating}-${review.author}-${index}`}
                  onClick={() => setShowDetailsDrawer(true)}
                  review={review}
                />
              )
            })}
          </div>
        </div>

        <div className="flex flex-col w-1/2 px-4">
          <div
            className="flex flex-col bg-white p-4 mb-2 rounded-md shadow-sm"
            ref={chartWrapperRef}
          >
            <h2 className="font-bold text-gray-900">Total Reviews</h2>
            <BarChart data={chartData} width={width} />
          </div>
        </div>
      </div>

      {showDetailsDrawer ? <Drawer onClose={() => setShowDetailsDrawer(false)} /> : null}
    </Layout>
  )
}
