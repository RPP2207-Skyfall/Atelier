import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <>
        <h3>Ateiler</h3>
        <Overview />
        <RatingReview />
        <RelatedItem />
        <QandA />
      </>
    )
  }

}

export default App;