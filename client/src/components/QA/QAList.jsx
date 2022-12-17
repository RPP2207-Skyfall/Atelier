import React from 'react';
import QAItem from './QAItem.jsx';

//QA info from QandA, map individual question and answers to QAItem

const QAList = (props) => (
  <div className='question-and-answer-qalist' data-testid='question-and-answer-qalist'>
    {props.list.map((item) =>
     <QAItem item = {item} key={item.question_id} handleAModalOpen={props.handleAModalOpen} isAModalOpen={props.isAModalOpen} handleAModalClose={props.handleAModalClose} product_name={props.product_name}/>
    )}
  </div>
);

export default QAList;