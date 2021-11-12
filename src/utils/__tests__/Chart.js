import { drawBarPath, getBarChartData } from '../Chart'

const testReviews = [
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
]

describe('getBarChartData', () => {
  test('should return a single data point for each rating after being rounded', () => {
    expect(getBarChartData(testReviews)).toHaveLength(6)
  })
})

describe('drawBarPath', () => {
  test('should return a path to draw a chart bar using the data it has been given', () => {
    const height = 10
    const width = 5
    const radius = 3
    const x = 20
    const y = 45

    const expectedResult = 'M20,45h2a3,3 0 0 1 3,3v7h-5v-7a3,3 0 0 1 3,-3Z'

    expect(
      drawBarPath({
        height,
        width,
        radius,
        x,
        y,
      }),
    ).toBe(expectedResult)
  })
})
