import React from 'react'
import PropTypes from 'prop-types'

import { Logo } from './Logo'

export const Layout = ({ children }) => {
  return (
    <div className="w-screen min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white py-4">
        <div className="container mx-auto px-4">
          <Logo />
        </div>
      </header>
      <div className="container mx-auto flex flex-col flex-grow p-4">{children}</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}
