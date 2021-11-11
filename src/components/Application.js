import React from 'react'
import useSize from '@react-hook/size'

import getUnixTime from 'date-fns/getUnixTime'
import format from 'date-fns/format'
import subMonths from 'date-fns/subMonths'
import isBefore from 'date-fns/isBefore'
import isAfter from 'date-fns/isAfter'
import subYears from 'date-fns/subYears'

import { useGetReviews } from '../hooks/useGetReviews'

import { Layout } from './Layout'

import { LineChart } from './LineChart'
import { BarChart } from './BarChart'

export const Application = () => {
  const chartWrapperRef = React.useRef()
  const { reviews } = useGetReviews()
  const [width] = useSize(chartWrapperRef)

  const structuredChartData = (reviews) => {
    const ratings = reviews.reduce((acc, review) => {
      const roundedRating = Math.round(review.rating)

      if (!acc[roundedRating]) {
        acc[roundedRating] = 1
      } else {
        acc[roundedRating] += 1
      }

      return acc
    }, {})

    return Object.keys(ratings).map((key) => {
      return {
        x: Number(key),
        y: ratings[key],
      }
    })
  }

  return (
    <Layout>
      <div className="flex flex-col w-full">
        <div className="flex bg-white p-4 mb-2 rounded-md shadow-sm" ref={chartWrapperRef}>
          <BarChart data={structuredChartData(reviews)} width={width} />
        </div>
      </div>
    </Layout>
  )
}
