import React from 'react'
import { render, screen } from '@testing-library/react'

import { BarChart } from '../charts/BarChart'

const defaultProps = {
  data: [
    {
      x: 0,
      y: 6,
    },
    {
      x: 1,
      y: 17,
    },
    {
      x: 2,
      y: 19,
    },
    {
      x: 3,
      y: 19,
    },
    {
      x: 4,
      y: 27,
    },
    {
      x: 5,
      y: 12,
    },
  ],
  height: 300,
  onBarClick: jest.fn(),
  width: 500,
}

describe('BarChart', () => {
  test('it should render the bar chart correctly', () => {
    render(<BarChart {...defaultProps} />)

    const barChartElement = screen.getByTestId('BarChart')
    expect(barChartElement).toBeInTheDocument()
  })

  test('should render the y axis', () => {
    render(<BarChart {...defaultProps} />)

    const yAxisElement = screen.getByTestId('yAxis')
    expect(yAxisElement).toBeInTheDocument()
  })

  test('should render the x axis', () => {
    render(<BarChart {...defaultProps} />)

    const xAxisElement = screen.getByTestId('xAxis')
    expect(xAxisElement).toBeInTheDocument()
  })

  test('should render the y grid', () => {
    render(<BarChart {...defaultProps} />)

    const yGridElement = screen.getByTestId('yGrid')
    expect(yGridElement).toBeInTheDocument()
  })

  test('should render a bar for each data point', () => {
    render(<BarChart {...defaultProps} />)

    const barElements = screen.getAllByRole('button')
    expect(barElements).toHaveLength(6)
  })

  test('should not render a bar for when data set is empty', () => {
    render(<BarChart {...defaultProps} data={[]} />)

    const barElements = screen.queryAllByRole('button')
    expect(barElements).toHaveLength(0)
  })
})
