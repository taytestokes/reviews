import React from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'

const CHART_MARGINS = {
  bottom: 25,
  left: 25,
  right: 40,
  top: 25,
}

export const BarChart = ({ data, height = 300, width = 600 }) => {
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

  const [_, yMaxVal] = d3.extent(yValues)
  const xDomain = [0, 1, 2, 3, 4, 5]
  const yDomain = [0, yMaxVal]

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
  const yAxis = d3.axisLeft(yScale).ticks(5)

  // Grids
  const yGrid = d3.axisLeft(yScale).ticks(5).tickSize(-width).tickFormat('')

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
      aria-label="Line chart displaying the average review scores overtime"
      data-testid="BarChart"
      height={height}
      preserveAspectRatio="xMinYMin meet"
      role="img"
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

      {/* Bars */}
      <g>
        {data.map((datum, index) => {
          const barHeight = height - yScale(datum.y) - CHART_MARGINS.bottom
          const width = xScale.bandwidth()

          return (
            <path
              aria-hidden={true}
              className="fill-current text-violet-600"
              d={drawBarPath({
                height: barHeight,
                radius: 3,
                width: width,
                x: xScale(datum.x),
                y: yScale(datum.y),
              })}
              key={index}
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
  width: PropTypes.number,
}

export const drawBarPath = ({ x, y, width, height, radius }) =>
  `M${x},${y}h${width - radius}a${radius},${radius} 0 0 1 ${radius},${radius}v${
    height - radius
  }h${-width}v${-height + radius}a${radius},${radius} 0 0 1 ${radius},${-radius}Z`
