import React from 'react'
import PropTypes from 'prop-types'

import { Drawer } from './shared/Drawer'
import { RatingBadge } from './RatingBadge'
import { ReviewCard } from './ReviewCard'

export const ReviewDetailsDrawer = ({ onClose, review }) => {
  return (
    <Drawer onClose={onClose} title="Review Details">
      <div className="w-full flex justify-center  pb-4">
        <RatingBadge rating={review.rating} />
      </div>

      <ReviewCard review={review} />
    </Drawer>
  )
}

ReviewDetailsDrawer.propTypes = {
  onClose: PropTypes.func.isRequired,
  review: PropTypes.object.isRequired,
}
