// This is used to construct the data set that
// will be passed to the review count bar chart.
export const getBarChartData = (reviews) => {
  const ratings = reviews.reduce((acc, review) => {
    const roundedRating = Math.round(review.rating)

    if (!acc[roundedRating]) {
      acc[roundedRating] = 1
    } else {
      acc[roundedRating] += 1
    }

    return acc
  }, {})

  return Object.keys(ratings).map((key) => {
    return {
      x: Number(key),
      y: ratings[key],
    }
  })
}

// Will calculate and return the path used to draw the bar inside
// of the bar chart.
export const drawBarPath = ({ height, width, radius, x, y }) =>
  `M${x},${y}h${width - radius}a${radius},${radius} 0 0 1 ${radius},${radius}v${
    height - radius
  }h${-width}v${-height + radius}a${radius},${radius} 0 0 1 ${radius},${-radius}Z`
