import React from 'react'

// import { getReviews } from './utils/PodiumAPI'

import { Layout } from './components/Layout'

export const Application = () => {
  // const [reviews, setReviews] = React.useState([])

  // React.useEffect(() => {
  //   getReviews().then((response) => {
  //     setReviews(response)
  //   })
  // }, [])

  return (
    <Layout>
      {/* {reviews.map((review) => {
        console.log({ review })
        return <div>{review.author}</div>
      })} */}
    </Layout>
  )
}
