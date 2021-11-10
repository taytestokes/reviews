import React from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'

// This padding is applied to the svg to give
// some spacing between the parent elements border.
const SPACING = 40

const CHART_MARGINS = {
  bottom: 25,
  left: 25,
  right: 40,
  top: 25,
}

export const LineChart = ({ data, height = 300, width = 600 }) => {
  const lineRef = React.useRef()
  const xAxisRef = React.useRef()
  const xGridRef = React.useRef()
  const yAxisRef = React.useRef()
  const yGridRef = React.useRef()

  const { xValues, yValues } = data.reduce(
    (acc, datum) => {
      acc.xValues.push(datum.x)
      acc.yValues.push(datum.y)

      return acc
    },
    {
      xValues: [],
      yValues: [],
    },
  )

  const xDomain = d3.extent(xValues)
  // Since reviews are out of zero through five, we want the y domain to reflect that
  const yDomain = [0, 5]

  // Scales
  const xScale = d3
    .scaleTime()
    .domain(xDomain)
    .range([CHART_MARGINS.left, width - CHART_MARGINS.right])

  const yScale = d3
    .scaleLinear()
    .domain(yDomain)
    .range([height - CHART_MARGINS.bottom, CHART_MARGINS.top])

  // Axes
  const xAxis = d3
    .axisBottom(xScale)
    .tickValues(xValues)
    .tickFormat(d3.timeFormat('%b %d'))
    .tickSize(10)
    .tickSizeOuter(0)
  const yAxis = d3.axisLeft(yScale).ticks(yDomain[yDomain.length - 1])

  // Grids
  const xGrid = d3
    .axisBottom(xScale)
    .tickValues(xValues)
    .tickSize(-height + CHART_MARGINS.bottom)
    .tickFormat('')
  const yGrid = d3
    .axisLeft(yScale)
    .ticks(yDomain[yDomain.length - 1])
    .tickSize(-width)
    .tickFormat('')

  // Line Function
  const drawLinePath = d3
    .line()
    .curve(d3.curveNatural)
    .x((datum) => xScale(datum.x))
    .y((datum) => yScale(datum.y))

  // Effect to draw the x axis and x grid
  React.useLayoutEffect(() => {
    d3.select(xAxisRef.current).call(xAxis)
    // d3.select(xGridRef.current).call(xGrid)
  }, [data, xAxisRef.current, xAxis])

  // Effect to draw the y axis and y grid
  React.useLayoutEffect(() => {
    d3.select(yAxisRef.current).call(yAxis)
    d3.select(yGridRef.current).call(yGrid)
  }, [data, yAxisRef.current, yAxis])

  return (
    <svg
      height={height}
      preserveAspectRatio="xMinYMin meet"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Y Axis Group */}
      <g className="y-axis" ref={yAxisRef} transform={`translate(${CHART_MARGINS.left},0)`} />

      {/* YGrid Group*/}
      <g className="y-grid" ref={yGridRef} transform={`translate(${CHART_MARGINS.left},0)`} />

      {/* X Axis Group */}
      <g
        className="x-axis"
        ref={xAxisRef}
        transform={`translate(0,${height - CHART_MARGINS.bottom})`}
      />

      {/* X Grid Group */}
      <g
        className="x-grid"
        ref={xGridRef}
        transform={`translate(0,${height - CHART_MARGINS.bottom})`}
      />

      {/* Data Line */}
      <g>
        <path
          className="stroke-current"
          d={drawLinePath(data)}
          fill="none"
          ref={lineRef}
          stroke="#000000"
          strokeWidth={2}
          transform={`translate(0,0)`}
        />
      </g>

      {/* Data Points */}
      {data.map((datum) => {
        return (
          <circle
            className="stroke-current"
            cx={xScale(datum.x)}
            cy={yScale(datum.y)}
            fill="#ffffff"
            key={datum.x + datum.y}
            r={3}
            strokeWidth={3}
          />
        )
      })}
    </svg>
  )
}

LineChart.propTypes = {
  data: PropTypes.array.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
}
