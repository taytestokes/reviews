import React from 'react'
import PropTypes from 'prop-types'

export const ReviewRow = ({ onClick, review }) => {
  return (
    <button
      aria-label="Select to view more information about this review"
      className="flex hover:bg-gray-50 transition-colors p-4"
      onClick={onClick}
    >
      {review.author}
    </button>
  )
}

ReviewRow.propTypes = {
  onClick: PropTypes.func,
  review: PropTypes.object,
}
