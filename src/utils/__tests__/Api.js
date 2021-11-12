/**
 * This is not the actual axios module, rather
 * it is the mocked module that we created
 * in the __mocks__ folder
 */
import mockedAxios from 'axios'

import { getReviews } from '../Api'

const mockedReviews = [
  {
    rating: 3.3,
    publish_date: '2016-06-20T23:25:47.683518Z',
    id: '9788594946355',
    body: "All the world's a stage, and all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts.",
    author: 'Ms. Johann Murphy',
  },
  {
    rating: 2.2,
    publish_date: '2016-06-27T23:25:47.677622Z',
    id: '9781308835501',
    body: "Blow, blow, thou winter wind! Thou art not so unkind as man's ingratitude.",
    author: 'Felicita Tillman',
  },
  {
    rating: 4.6,
    publish_date: '2016-07-03T23:25:47.673848Z',
    id: '9796400192681',
    body: 'Can one desire too much of a good thing?.',
    author: 'Mrs. Destany Boyle PhD',
  },
]

describe('getReviews', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Success: Should return a collection of three reviews', () => {
    // Setup
    mockedAxios.create().get.mockResolvedValue({ data: mockedReviews })

    // Assertions
    return getReviews().then((data) => {
      expect(data).toHaveLength(3)
    })
  })
})
