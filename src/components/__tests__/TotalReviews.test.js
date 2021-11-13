import React from 'react'
import { render, screen } from '@testing-library/react'

import { TotalReviews } from '../TotalReviews'

const defaultProps = { onButtonClick: jest.fn(), total: 50 }

describe('TotalReviews', () => {
  test('renders displaying the total amount of reviews', () => {
    render(<TotalReviews {...defaultProps} />)

    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText('View Reviews')).toBeInTheDocument()
  })
})
