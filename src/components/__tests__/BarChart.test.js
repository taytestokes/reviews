import React from 'react'
import { render, screen } from '@testing-library/react'
import { BarChart } from '../charts/BarChart'

describe('BarChart', () => {
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
    width: 500,
  }

  describe('BarChart', () => {
    test('that it renders correctly', () => {
      render(<BarChart {...defaultProps} />)
      const barChartElement = screen.getByTestId('BarChart')
      expect(barChartElement).toBeInTheDocument()
    })
  })
})
