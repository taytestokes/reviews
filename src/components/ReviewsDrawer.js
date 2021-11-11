import React from 'react'
import PropTypes from 'prop-types'

import { Drawer } from './shared/Drawer'
import { ReviewCard } from './ReviewCard'

export const ReviewsDrawer = ({ onClose, reviews }) => {
  return (
    <Drawer onClose={onClose} title="Reviews">
      <div className="min-h-full space-y-6 pb-16">
        {reviews.map((review, index) => {
          return <ReviewCard key={`${review.rating}-${review.author}-${index}`} review={review} />
        })}
      </div>
    </Drawer>
  )
}

ReviewsDrawer.propTypes = {
  onClose: PropTypes.func.isRequired,
  reviews: PropTypes.array.isRequired,
}
