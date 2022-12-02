import React from 'react';
import Overview from './overview/Overview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <>
        <Overview />
        <h3>Ateiler</h3>
      </>
    )
  }

}

export default App