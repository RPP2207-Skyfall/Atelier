import React from 'react';
import QAItem from './QAItem.jsx';

//QA info from QandA, map individual question and answers to QAItem

const QAList = (props) => (
  <div className='question-and-answer-qalist'>
    {props.list.map((item, index) =>
     <QAItem item = {item} key = {index} handleAModalOpen={props.handleAModalOpen}/>
    )}
  </div>
);

export default QAList;