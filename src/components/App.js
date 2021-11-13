import React from 'react'

import { getBarChartData } from '../utils/Chart'
import { getReviews } from '../utils/Api'

import { useFilteredReviews } from '../hooks/useFilteredReviews'

import { Layout } from './Layout'
import { ReviewsBarChart } from './ReviewsBarChart'
import { ReviewDetailsDrawer } from './ReviewDetailsDrawer'
import { ReviewsList } from './ReviewsList'
import { ReviewsDrawer } from './ReviewsDrawer'
import { Loader } from './Loader'
import { TotalReviews } from './TotalReviews'

export const App = () => {
  const [rawReviews, setRawReviews] = React.useState([])
  const [activeReview, setActiveReview] = React.useState(null)
  const [isLoadingReviews, setIsLoadingReviews] = React.useState(true)
  const [showDetailsDrawer, setShowDetailsDrawer] = React.useState(false)
  const [showReviewsDrawer, setShowReviewsDrawer] = React.useState(false)

  // Use the unfiltered reviews to get the data set needed
  // for the bar graph
  const chartData = getBarChartData(rawReviews)

  // Want to keep track of the total amount of raw reviews
  const totalReviews = rawReviews.length

  // Custom hook to manage filtering reviews
  const { filteredReviews, filterReviewsByRating, resetFilteredReviews } =
    useFilteredReviews(rawReviews)

  // Makes a fetch request using the api utils
  // to get all the reviews available upon initialization
  React.useEffect(() => {
    getReviews().then((response) => {
      setIsLoadingReviews(false)
      setRawReviews(response)
    })
  }, [])

  return (
    <Layout>
      {isLoadingReviews ? (
        <Loader />
      ) : (
        <div>
          <h1 className="text-2xl font-bold">Reviews Dashboard</h1>

          <div className="w-full h-full flex flex-col md:flex-row flex-grow pb-8 mt-8 md:space-x-8">
            <div className="w-full md:w-3/5">
              <ReviewsBarChart
                data={chartData}
                onBarClick={(rating) => {
                  filterReviewsByRating(rating)
                  setShowReviewsDrawer(true)
                }}
              />
            </div>

            <div className="w-full md:w-2/5 mt-8 md:mt-0 flex">
              <TotalReviews
                onButtonClick={() => {
                  setShowReviewsDrawer(true)
                }}
                total={totalReviews}
              />
            </div>
          </div>

          <ReviewsList
            onRowClick={(review) => {
              setActiveReview(review)
              setShowDetailsDrawer(true)
            }}
            reviews={rawReviews}
            reviewsPerPage={10}
          />
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
        <ReviewsDrawer
          onClose={() => {
            resetFilteredReviews()
            setShowReviewsDrawer(false)
          }}
          reviews={filteredReviews}
        />
      ) : null}
    </Layout>
  )
}
