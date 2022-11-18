import React from 'react';
import Search from './Search.jsx';


class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      QA : []
    }
  };

  render() {
    return (
      <div className='question-and-answer-container'>
        <h4>QUESTIONS & ANSWERS</h4>
        <Search />
      </div>
    )
  }
};

export default QandA;