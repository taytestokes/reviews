import React from 'react'
import PropTypes from 'prop-types'

import { drawBarPath } from '../../utils/Chart'

export const Bar = ({ onBarClick, height, radius, width, x, y }) => {
  const barRef = React.useRef()

  return (
    <path
      className="fill-current text-violet-600 hover:text-violet-700 transition-all cursor-pointer"
      d={drawBarPath({
        height,
        radius,
        width,
        x,
        y,
      })}
      onClick={onBarClick}
      ref={barRef}
    />
  )
}

Bar.propTypes = {
  onBarClick: PropTypes.func,
  height: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
}
