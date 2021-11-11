import React from 'react'
import { render, screen } from '@testing-library/react'
import { LineChart } from '../charts/LineChart'

describe('LineChart', () => {
  const defaultProps = {
    data: [
      {
        x: 1472340347000,
        y: 0.9,
      },
      {
        x: 1472426747000,
        y: 2.8,
      },
      {
        label: '',
        x: 1472513147000,
        y: 4.9,
      },
    ],
    height: 300,
    width: 500,
  }

  test('that it renders correctly', () => {
    render(<LineChart {...defaultProps} />)
    const lineChartElement = screen.getByTestId('linechart')
    expect(lineChartElement).toBeInTheDocument()
  })
})
