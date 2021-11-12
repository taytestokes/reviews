import React from 'react'
import PropTypes from 'prop-types'

import { ReviewRow } from './ReviewRow'

export const ReviewsList = ({ onRowClick, reviews, reviewsPerPage }) => {
  const [currentPage, setCurrentPage] = React.useState(1)

  const indexOfLastReview = currentPage * reviewsPerPage
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage
  const paginatedReviews = reviews.slice(indexOfFirstReview, indexOfLastReview)
  const isFirstPage = currentPage === 1
  const isLastPage = reviews[reviews.length - 1] === paginatedReviews[paginatedReviews.length - 1]

  return (
    <div className="bg-white rounded-md shadow-sm" data-testid="reviewsList">
      <div className="container flex items-center p-4 border-b-2 border-gray-100">
        <div className="w-full flex flex-col">
          <h2 className="font-bold text-lg text-gray-900">User Reviews</h2>
          <p className="text-xs text-gray-600">
            Showing {indexOfFirstReview + 1} to {indexOfLastReview} of {reviews.length} results
          </p>
        </div>

        <div className="ml-auto flex">
          <button
            className="w-18 text-sm p-2 bg-gray-800 hover:bg-gray-700 transition-colors ease-linear text-white rounded-md mr-2"
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
            className="w-18 text-sm p-2 bg-gray-800 hover:bg-gray-700 transition-colors ease-linear text-white rounded-md mr-2"
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

      <ul className="container">
        {paginatedReviews.map((review, index) => {
          return (
            <ReviewRow
              key={`${review.rating}-${review.author}-${index}`}
              onClick={() => onRowClick(review)}
              review={review}
            />
          )
        })}
      </ul>
    </div>
  )
}

ReviewsList.propTypes = {
  onRowClick: PropTypes.func.isRequired,
  reviews: PropTypes.array,
  reviewsPerPage: PropTypes.number.isRequired,
}
