import React from 'react'
import PropTypes from 'prop-types'

export const ReviewCard = ({ review }) => {
  return <div className="flex bg-white p-4 mb-2 rounded-md shadow-sm">{review.author}</div>
}

ReviewCard.propTypes = {
  review: PropTypes.object,
}
