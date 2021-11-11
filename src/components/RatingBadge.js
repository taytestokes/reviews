import React from 'react'
import PropTypes from 'prop-types'

export const RatingBadge = ({ rating }) => {
  return (
    <div className="flex bg-white p-6 rounded-md shadow-sm">
      <h3 className="text-lg font-bold text-gray-900">{rating}</h3>
    </div>
  )
}

RatingBadge.propTypes = {
  rating: PropTypes.number.isRequired,
}
