import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import FocusTrap from 'focus-trap-react'

import { FiArrowLeft } from 'react-icons/fi'

import { Scrim } from './Scrim'

export const Drawer = ({ children, onClose, title }) => {
  const [isActive, setIsActive] = React.useState(false)

  // Using a portal to place the drawer higher in the DOM hierarchy
  // since we heavily using z-index values
  const portalNode = document.querySelector('#drawer')

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
  const setDrawerInactive = () => {
    setIsActive(false)
  }

  // Sets is active after inital render
  // to trigger the transitions for the
  // drawer and scrim
  React.useEffect(() => {
    setIsActive(true)

    // Prevent the body from underneath the overlay from scrolling
    // if the content exceeds the viewport height
    document.querySelector('body').style.overflow = 'hidden'

    // Remove overflow style upon unmounting
    return () => {
      document.querySelector('body').style.overflow = null
    }
  }, [])

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 bottom-0 right-0 z-10">
      <Scrim isActive={isActive} />
      <FocusTrap
        active={isActive}
        focusTrapOptions={{
          clickOutsideDeactivates: () => hasBeenAnimatedRef.current,
          onDeactivate: setDrawerInactive,
        }}
      >
        <div
          className={`absolute top-0 right-0 bottom-0 z-30 transform transition-transform duration-200 ease-linear ${
            isActive ? 'translate-x-0' : 'translate-x-full'
          }  w-full sm:w-2/3 lg:w-1/3`}
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
          <div className="w-full bg-white flex p-4 border-b-2 border-gray-100">
            <button
              aria-label="Select to close the drawer"
              className="text-xl text-gray-600"
              onClick={setDrawerInactive}
            >
              <FiArrowLeft />
            </button>
            <h2 className="mx-auto font-bold text-gray-900">{title}</h2>
          </div>

          <div className="box-border h-full bg-gray-100 p-4 pb-4 overflow-y-auto">{children}</div>
        </div>
      </FocusTrap>
    </div>,
    portalNode,
  )
}

Drawer.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}
