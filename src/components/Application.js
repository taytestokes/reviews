import React from 'react'
import getUnixTime from 'date-fns/getUnixTime'
import format from 'date-fns/format'
import useSize from '@react-hook/size'

import { useReviews } from '../hooks/useReviews'

import { Layout } from './Layout'
import { ReviewCard } from './ReviewCard'
import { LineChart } from './LineChart'

export const Application = () => {
  const chartWrapperRef = React.useRef()

  const [width] = useSize(chartWrapperRef)
  const { reviews } = useReviews()

  const structuredChartData = (reviews) =>
    reviews
      .filter((r, i) => i < 10)
      .map((review) => {
        console.log(format(new Date(review.publish_date), 'MMM'))

        return {
          // getUnixTime stamp returns a timestamp in milliseconds, we need seconds
          x: getUnixTime(new Date(review.publish_date)) * 1000,
          y: review.rating,
        }
      })

  return (
    <Layout>
      <div className="flex flex-col w-full">
        <div className="flex bg-white p-4 mb-2 rounded-md shadow-sm" ref={chartWrapperRef}>
          <LineChart data={structuredChartData(reviews)} width={width} />
        </div>
      </div>
    </Layout>
  )
}
