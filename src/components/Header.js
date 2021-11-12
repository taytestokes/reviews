import React from 'react'

import { Logo } from './Logo'

export const Header = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto p-4">
        <Logo />
      </div>
    </header>
  )
}
