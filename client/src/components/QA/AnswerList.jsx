import React from 'react';
import AnswerItem from './AnswerItem.jsx';

const AnswerList = (props) => (
  <div className='question-and-answer-answerlist' data-testid='question-and-answer-answerlist'>
    {props.list.map((item) =>
      <AnswerItem item={item} key={item.id} />
    )}
  </div>
);

export default AnswerList;