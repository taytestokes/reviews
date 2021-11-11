import React from 'react'
import PropTypes from 'prop-types'

import { ReviewRow } from './ReviewRow'

export const ReviewsList = ({ onRowClick, reviews }) => {
  const [currentPage, setCurrentPage] = React.useState(1)

  const reviewsPerPage = 10
  const indexOfLastReview = currentPage * reviewsPerPage
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage
  const paginatedReviews = reviews.slice(indexOfFirstReview, indexOfLastReview)
  const isFirstPage = currentPage === 1
  const isLastPage = reviews[reviews.length - 1] === paginatedReviews[paginatedReviews.length - 1]

  const handlePreviousCick = () => {
    setCurrentPage((prevCurrentPage) => {
      return prevCurrentPage - 1
    })
  }

  const handleNextClick = () => {
    setCurrentPage((prevCurrentPage) => {
      return prevCurrentPage + 1
    })
  }

  return (
    <div className="bg-white rounded-md shadow-sm">
      <div className="container flex items-center p-4 border-b-2 border-gray-100">
        <h2 className="font-bold text-lg text-gray-900">User Reviews</h2>
        <p className="text-xs text-gray-600 ml-2">
          Showing {indexOfFirstReview + 1} to {indexOfLastReview} of {reviews.length} results
        </p>

        <div className="ml-auto">
          <button
            className="w-18 text-sm p-2 bg-gray-100 text-gray-500 rounded-md mr-2 hover:bg-gray-200 transition-colors"
            disabled={isFirstPage}
            onClick={handlePreviousCick}
          >
            Previous
          </button>
          <button
            className="w-18 text-sm p-2 bg-gray-100 text-gray-500 rounded-md hover:bg-gray-200 transition-colors"
            disabled={isLastPage}
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>

      <div className="container">
        {paginatedReviews.map((review, index) => {
          return (
            <ReviewRow
              key={`${review.rating}-${review.author}-${index}`}
              onClick={() => onRowClick(review)}
              review={review}
            />
          )
        })}
      </div>
    </div>
  )
}

ReviewsList.propTypes = {
  onRowClick: PropTypes.func.isRequired,
  reviews: PropTypes.array,
}
