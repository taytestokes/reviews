import React from 'react'
import PropTypes from 'prop-types'

import { Logo } from './Logo'

export const Layout = ({ children }) => {
  return (
    <div className="w-full h-full bg-gray-100">
      <header className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto">
          <Logo />
        </div>
      </header>
      <div className="container mx-auto py-8 flex">{children}</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}
