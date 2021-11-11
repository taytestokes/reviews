import React from 'react'
import PropTypes from 'prop-types'

import { Logo } from './icons/Logo'

export const Layout = ({ children }) => {
  return (
    <div className="w-screen min-h-screen flex flex-col bg-gray-100">
      <header className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto px-4">
          <Logo />
        </div>
      </header>
      <div className="container mx-auto flex flex-col flex-grow py-4">{children}</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}
