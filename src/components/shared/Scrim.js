import React from 'react'
import PropTypes from 'prop-types'

export const Scrim = ({ isActive }) => {
  return (
    <div
      className={`fixed top-0 left-0 bottom-0 right-0 z-20 bg-gray-800 ${
        isActive ? 'opacity-50' : 'opacity-0'
      } transform transition-opacity duration-150 ease-linear`}
    />
  )
}

Scrim.propTypes = {
  isActive: PropTypes.bool.isRequired,
}
