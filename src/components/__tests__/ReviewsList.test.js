import React from 'react'
import { render, screen } from '@testing-library/react'
import fireEvent from '@testing-library/user-event'

import { ReviewsList } from '../ReviewsList'

const defaultProps = {
  onRowClick: jest.fn(),
  reviews: [
    {
      rating: 0.3,
      publish_date: '2016-09-05T23:25:47.642350Z',
      id: '9783221620868',
      body: 'The fool doth think he is wise, but the wise man knows himself to be a fool.',
      author: 'Kaley Schiller',
    },
    {
      rating: 1.4,
      publish_date: '2016-09-04T23:25:47.642388Z',
      id: '9793364045824',
      body: 'Can one desire too much of a good thing?.',
      author: 'Fay Lemke',
    },
    {
      rating: 2.2,
      publish_date: '2016-09-03T23:25:47.642545Z',
      id: '9784620626604',
      body: "How bitter a thing it is to look into happiness through another man's eyes!",
      author: 'Tatyana Olson',
    },
    {
      rating: 3.4,
      publish_date: '2016-09-02T23:25:47.642587Z',
      id: '9790650579209',
      body: 'For ever and a day.',
      author: 'Brett Gutmann',
    },
    {
      rating: 4.2,
      publish_date: '2016-09-01T23:25:47.642664Z',
      id: '9792161462025',
      body: 'For ever and a day.',
      author: 'Sean Zboncak',
    },
    {
      rating: 5,
      publish_date: '2016-08-31T23:25:47.642684Z',
      id: '9783110055856',
      body: "All the world's a stage, and all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts.",
      author: 'Alexzander Armstrong',
    },
  ],
  reviewsPerPage: 3,
}

describe('ReviewsList', () => {
  test('renders correctly', () => {
    render(<ReviewsList {...defaultProps} />)

    expect(screen.getByText('User Reviews')).toBeInTheDocument()
  })

  test('the previous button should be disabled when on the first page of user reviews', () => {
    render(<ReviewsList {...defaultProps} />)

    const previousBtnElement = screen.getByText('Previous')
    const nextButtonElement = screen.getByText('Next')

    expect(previousBtnElement).toBeDisabled()

    fireEvent.click(nextButtonElement)

    expect(previousBtnElement).toBeEnabled()
  })

  test('the next button should be disabled when on the last page user reviews', () => {
    render(<ReviewsList {...defaultProps} />)

    const nextButtonElement = screen.getByText('Next')

    expect(nextButtonElement).toBeEnabled()

    fireEvent.click(nextButtonElement)

    expect(nextButtonElement).toBeDisabled()
  })
})
