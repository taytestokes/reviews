import React from 'react'
import PropTypes from 'prop-types'

import { Header } from './Header'

export const Layout = ({ children }) => {
  return (
    <div className="w-screen min-h-screen flex flex-col bg-gray-100 relative">
      <Header />
      <div className="container mx-auto flex flex-col flex-grow px-4 py-8">{children}</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}
