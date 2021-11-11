import React from 'react'
import PropTypes from 'prop-types'

export const ReviewRow = ({ onClick, review }) => {
  return (
    <button
      aria-label="Select to view more information about this review"
      className="w-full flex items-center justify-between hover:bg-gray-50 transition-colors p-4"
      onClick={onClick}
    >
      <p className="text-gray-900 font-bold text-sm">{review.author}</p>
      <p className="text-xs text-violet-600 font-bold p-1.5 bg-violet-100 rounded-full">
        {review.rating}
      </p>
    </button>
  )
}

ReviewRow.propTypes = {
  onClick: PropTypes.func,
  review: PropTypes.object,
}
