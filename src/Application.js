import React from 'react'

import useSize from '@react-hook/size'

import { getReviews } from './utils/PodiumAPI'

import { Layout } from './components/Layout'
import { ReviewCard } from './components/ReviewCard'
import { LineChart } from './components/LineChart'

import getUnixTime from 'date-fns/getUnixTime'
import format from 'date-fns/format'

export const Application = () => {
  const chartWrapperRef = React.useRef()
  const [width] = useSize(chartWrapperRef)
  // const [isLaoding, setIsLoading] = React.useState(true)
  const [reviews, setReviews] = React.useState([])

  console.log({ reviews })

  React.useEffect(() => {
    getReviews().then((response) => {
      // setIsLoading(false)
      setReviews(response)
    })
  }, [])

  const structuredChartData = (reviews) =>
    reviews
      .filter((r, i) => i < 10)
      .map((review) => {
        console.log(format(new Date(review.publish_date), 'MMM'))

        return {
          label: '',
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
      <div className="flex flex-col">
        {reviews.map((review) => {
          return <ReviewCard key={review.author} review={review} />
        })}
      </div>
    </Layout>
  )
}
