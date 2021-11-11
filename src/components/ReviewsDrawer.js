import React from 'react'
import PropTypes from 'prop-types'

import { Drawer } from './shared/Drawer'

export const ReviewDetailsDrawer = ({ onClose }) => {
  return <Drawer onClose={onClose} title="Review Details"></Drawer>
}

ReviewDetailsDrawer.propTypes = {
  onClose: PropTypes.func.isRequired,
  reviews: PropTypes.array.isRequired,
}
