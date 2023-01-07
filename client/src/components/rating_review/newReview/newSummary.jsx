import React, { useState, useEffect } from 'react';

const newSummary = (props) => {

  const placeholderText = '“Example: Best purchase ever!”'

  const handleTextareaChange = (e) => {
    // console.log(e.target.value)
    props.summaryInput(e.target.value)
  }
  const tracker = (element, widget) => {
    props.tracker(element, widget)
  }


  return (
    <>
      Review summary <span className="errMsg">{props.summaryErrorMsg}</span>
      <textarea className="summary-textarea" data-testid="summary-area" maxLength="60" type="text" placeholder={placeholderText} onChange={handleTextareaChange} onClick={() => { tracker('summary-textarea', 'new-review-modal') }}></textarea>
    </>
  )
}

export default newSummary