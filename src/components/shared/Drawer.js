import React from 'react'
import PropTypes from 'prop-types'
import FocusTrap from 'focus-trap-react'

import { Scrim } from './Scrim'

export const Drawer = ({ children, onClose }) => {
  const [isActive, setIsActive] = React.useState(false)

  const drawerRef = React.useRef(null)
  // This hasBeenAnimatedRef is used to track
  // if the component has been animated and tells
  // the focus trap if any outside clicks should deactivate it
  // This essentially prevents double clicks from the user
  // and allows the animation to finish before setting focus
  const hasBeenAnimatedRef = React.useRef(false)

  // Turns the active state off the drawer
  // which will trigger the closing animation
  // and start the onAnimationEnd event
  // that will call the onClose method
  // and close this component
  const negateActiveState = () => {
    setIsActive(false)
  }

  // Returns an object containing the the
  // drawer functions that we want to expose
  // when rendered using the render props pattern
  const getExposedDrawerFunctions = () => ({
    negateActiveState,
  })

  // Sets is active after inital render
  // to trigger the transitions for the
  // drawer and scrim
  React.useEffect(() => {
    setIsActive(true)
  }, [])

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-10">
      <Scrim isActive={isActive} />
      <FocusTrap
        active={isActive}
        focusTrapOptions={{
          clickOutsideDeactivates: () => hasBeenAnimatedRef.current,
          onDeactivate: negateActiveState,
        }}
      >
        <div
          className={`absolute top-0 right-0 bottom-0 z-30 transform transition-transform duration-150 ease-linear ${
            isActive ? 'translate-x-0' : 'translate-x-full'
          } p-5 bg-white w-1/3`}
          onTransitionEnd={(e) => {
            // Only want this event listener to
            // trigger only for the drawer element
            if (e.target === drawerRef.current) {
              if (!isActive) {
                onClose()
              }
              // Sets the ref to true to then allow outside
              // click events from the focus trapped drawer
              // after the animation has completed
              hasBeenAnimatedRef.current = true
            }
          }}
          ref={drawerRef}
          role="presentation"
        >
          <button onClick={negateActiveState}>Cick Me</button>
          {typeof children === 'function' ? children(getExposedDrawerFunctions()) : children}
        </div>
      </FocusTrap>
    </div>
  )
}

Drawer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  onClose: PropTypes.func.isRequired,
}
