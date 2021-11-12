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

  return (
    <div className="bg-white rounded-md shadow-sm">
      <div className="container flex items-center p-4 border-b-2 border-gray-100">
        <div className="w-full flex flex-col">
          <h2 className="font-bold text-gray-900">User Reviews</h2>
          <p className="text-xs text-gray-600">
            Showing {indexOfFirstReview + 1} to {indexOfLastReview} of {reviews.length} results
          </p>
        </div>

        <div className="ml-auto flex">
          <button
            className="w-18 text-sm p-2 bg-gray-900 hover:bg-gray-800  text-white rounded-md mr-2 transition-colors"
            disabled={isFirstPage}
            onClick={() => {
              setCurrentPage((prevCurrentPage) => {
                return prevCurrentPage - 1
              })
            }}
          >
            Previous
          </button>
          <button
            className="w-18 text-sm p-2 bg-gray-900 hover:bg-gray-800 text-white rounded-md transition-colors"
            disabled={isLastPage}
            onClick={() => {
              setCurrentPage((prevCurrentPage) => {
                return prevCurrentPage + 1
              })
            }}
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
