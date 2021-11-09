import React from 'react'
import PropTypes from 'prop-types'

export const Logo = ({ color = '#ffffff' }) => {
  return (
    <svg fill={color} height="24" viewBox="0 0 20 24" width="20" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0V14.1448L6.85287 24H14.7902L10.6319 14.1448H20V0H0Z" fill={color} />
    </svg>
  )
}

Logo.propTypes = {
  color: PropTypes.string.isRequired,
}
