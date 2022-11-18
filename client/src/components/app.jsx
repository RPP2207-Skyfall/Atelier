import React from 'react';
import QandA from './QA/QandA.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <>
        <h3>Ateiler</h3>
        <QandA />
      </>
    )
  }

}

export default App;