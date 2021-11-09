import React from 'react'
import PropTypes from 'prop-types'

import { Logo } from './Icons/Logo'

export const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-gray-50 overflow-hidden">
      <header className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto">
          <Logo />
        </div>
      </header>
      <div className="container mx-auto overflow-auto">{children}</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}
