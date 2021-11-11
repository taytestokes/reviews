import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'

export const ReviewCard = ({ review }) => {
  const formattedDate = format(new Date(review.publish_date), 'MMMM do, yyyy')

  return (
    <div className="bg-white rounded-md shadow-sm">
      <div className="flex justify-between p-4">
        <p className="font-bold text-gray-900 py-1.5">{review.author}</p>
        <p className="text-violet-600 font-bold bg-violet-100 p-1.5 rounded-lg">{formattedDate}</p>
      </div>
      <div className="border-t-2 border-gray-100 p-4">
        <p>{review.body}</p>
      </div>
    </div>
  )
}

ReviewCard.propTypes = {
  review: PropTypes.object.isRequired,
}
