import React from 'react';
import RatingReview from './rating_review/ratingReview.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <>
        <h3>Ateiler</h3>
        <RatingReview />
      </>
    )
  }

}

export default App