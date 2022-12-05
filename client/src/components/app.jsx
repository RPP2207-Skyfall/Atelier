import React from 'react';
import RatingReview from './rating_review/ratingReview.jsx'
import Overview from './overview/Overview.jsx';
import RelatedItem from './relatedItem/relatedItemSection.jsx';
<<<<<<< HEAD
=======
import QandA from './QA/QandA.jsx';

>>>>>>> master

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <>
        <h3>Ateiler</h3>
        <Overview />
        <RelatedItem />
        <QandA />
        <RatingReview />
<<<<<<< HEAD
        <RelatedItem />
=======

>>>>>>> master
      </>
    )
  }

}

export default App;