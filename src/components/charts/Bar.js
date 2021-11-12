import React from 'react'
import PropTypes from 'prop-types'

import { drawBarPath } from '../../utils/Chart'

export const Bar = ({ ariaLabel, onBarClick, height, radius, width, x, y }) => {
  const barRef = React.useRef()

  return (
    <path
      aria-hidden={onBarClick ? false : true}
      aria-label={ariaLabel}
      className="fill-current text-violet-600 hover:text-violet-700 transition-all cursor-pointer"
      d={drawBarPath({
        height,
        radius,
        width,
        x,
        y,
      })}
      onClick={onBarClick}
      onKeyPress={(e) => {
        e.preventDefault()
        if (e.code === 'Enter' || e.code === 'Space') {
          onBarClick()
        }
      }}
      ref={barRef}
      role={onBarClick ? 'button' : null}
      tabIndex={onBarClick ? 0 : null}
    />
  )
}

Bar.propTypes = {
  ariaLabel: PropTypes.string,
  onBarClick: PropTypes.func,
  height: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
}
