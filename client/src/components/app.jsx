import React from 'react';
import RatingReview from './rating_review/ratingReview.jsx'
import Overview from './overview/Overview.jsx';
import RelatedItem from './relatedItem/relatedItemSection.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <>
        <h3>Ateiler</h3>
        <Overview />
        <RatingReview />
        <RelatedItem />
      </>
    )
  }

}

export default App