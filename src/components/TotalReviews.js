import React from 'react'
import PropTypes from 'prop-types'

export const TotalReviews = ({ onButtonClick, total }) => {
  return (
    <div className="w-full flex flex-col bg-white p-4 rounded-md shadow-sm">
      <h2 className="font-bold text-lg text-gray-900">Total Reviews</h2>
      <div className="flex flex-col flex-grow items-center">
        <div className="w-full p-8 flex flex-col flex-grow items-center justify-center">
          <p className="font-bold text-8xl">{total}</p>
        </div>
        <button
          aria-label="Select to view all reviews"
          className="bg-gray-800 hover:bg-gray-700 transition-colors ease-linear p-4 w-full text-white rounded-md mt-auto"
          onClick={onButtonClick}
        >
          View Reviews
        </button>
      </div>
    </div>
  )
}

TotalReviews.propTypes = {
  onButtonClick: PropTypes.func,
  total: PropTypes.number,
}
