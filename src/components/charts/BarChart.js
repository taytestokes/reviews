import React from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'

import { Bar } from './Bar'

const CHART_MARGINS = {
  bottom: 25,
  left: 25,
  right: 40,
  top: 25,
}

export const BarChart = ({ data, height, onBarClick, width }) => {
  const xAxisRef = React.useRef()
  const yAxisRef = React.useRef()
  const yGridRef = React.useRef()

  const yValues = data.map((datum) => datum.y)
  const xValues = d3.extent(yValues)
  const xDomain = Object.keys(data).map(Number)
  const yDomain = [0, Math.ceil(xValues[xValues.length - 1] / 10) * 10]

  // Scales
  const xScale = d3
    .scaleBand()
    .domain(xDomain)
    .range([CHART_MARGINS.left, width - CHART_MARGINS.right], 0.3)
    .padding(0.25)

  const yScale = d3
    .scaleLinear()
    .domain(yDomain)
    .range([height - CHART_MARGINS.bottom, CHART_MARGINS.top])

  // Axes
  const xAxis = d3.axisBottom(xScale).tickValues(xDomain).tickSize(10).tickSizeOuter(0)
  const yAxis = d3.axisLeft(yScale).ticks(yValues.length)

  // Grids
  const yGrid = d3
    .axisLeft(yScale)
    .ticks(yValues.length)
    .tickSize(-width + CHART_MARGINS.right * 1.5)
    .tickFormat('')

  // Using an effect is the easiest way to work with
  // react to use d3 to render the axis and grid elements.
  React.useLayoutEffect(() => {
    d3.select(xAxisRef.current).call(xAxis)
    d3.select(yAxisRef.current).call(yAxis)
    d3.select(yGridRef.current).call(yGrid)
  }, [data])

  return (
    <svg
      data-testid="BarChart"
      height={height}
      preserveAspectRatio="xMinYMin meet"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Y Axis Group */}
      <g
        aria-hidden={true}
        className="y-axis"
        data-testid="yAxis"
        ref={yAxisRef}
        transform={`translate(${CHART_MARGINS.left},0)`}
      />
      {/* YGrid Group*/}
      <g
        aria-hidden={true}
        className="y-grid"
        data-testid="yGrid"
        ref={yGridRef}
        transform={`translate(${CHART_MARGINS.left},0)`}
      />
      {/* X Axis Group */}
      <g
        aria-hidden={true}
        className="x-axis"
        data-testid="xAxis"
        ref={xAxisRef}
        transform={`translate(0,${height - CHART_MARGINS.bottom})`}
      />

      {/* Bars */}
      <g>
        {data.map((datum) => {
          const barHeight = height - yScale(datum.y) - CHART_MARGINS.bottom
          const barWidth = xScale.bandwidth()

          return (
            <Bar
              ariaLabel={`Select to view reviews with a rating of ${datum.x}`}
              height={barHeight}
              key={datum.y + datum.x}
              onBarClick={() => onBarClick(datum.x)}
              radius={3}
              width={barWidth}
              x={xScale(datum.x)}
              y={yScale(datum.y)}
            />
          )
        })}
      </g>
    </svg>
  )
}

BarChart.propTypes = {
  data: PropTypes.array.isRequired,
  height: PropTypes.number,
  onBarClick: PropTypes.func,
  width: PropTypes.number,
}

BarChart.defaultProps = {
  ariaLabel: 'Barchart',
  height: 300,
  width: 600,
}
