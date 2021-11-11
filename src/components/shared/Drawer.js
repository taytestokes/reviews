import React from 'react'
import PropTypes from 'prop-types'

import { Scrim } from './Scrim'

export const Drawer = ({ children, orientation }) => {
  const [isActive, setIsActive] = React.useState(false)

  React.useEffect(() => {
    setIsActive(true)
  }, [])

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-10">
      <Scrim isActive={isActive} />
      <div
        className={`absolute top-0 right-0 bottom-0 z-30 transform transition-transform duration-150 ease-linear ${
          isActive ? 'translate-x-0' : 'translate-x-full'
        } p-5 bg-white w-1/3`}
      >
        {typeof children === 'function' ? children() : children}
      </div>
    </div>
  )
}

Drawer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  orientation: PropTypes.string,
}
