import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'

import { Drawer } from './shared/Drawer'

export const ReviewDetailsDrawer = ({ onClose, review }) => {
  return (
    <Drawer onClose={onClose} title="Review Details">
      <div className="w-full flex justify-center  pb-4">
        <div className="flex bg-white p-6 rounded-md shadow-sm">
          <h3 className="text-lg font-bold text-gray-900">{review.rating}</h3>
        </div>
      </div>

      <div className="bg-white rounded-md shadow-sm">
        <div className="flex justify-between p-4">
          <p className="font-bold text-gray-900">{review.author}</p>
          <p className="text-gray-600">{format(new Date(review.publish_date), 'MMMM do, yyyy')}</p>
        </div>
        <div className="border-t-2 border-gray-100 p-4">
          <p>{review.body}</p>
        </div>
      </div>
    </Drawer>
  )
}

ReviewDetailsDrawer.propTypes = {
  onClose: PropTypes.func.isRequired,
  review: PropTypes.object.isRequired,
}
