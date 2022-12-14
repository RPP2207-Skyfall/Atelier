import React from 'react';
import AnswerItem from './AnswerItem.jsx';

const AnswerList = (props) => (
  <div className='question-and-answer-answerlist' data-testid='question-and-answer-answerlist'>
    {props.list.map((item, index) =>
      <AnswerItem item={item} key={index} />
    )}
  </div>
);

export default AnswerList;