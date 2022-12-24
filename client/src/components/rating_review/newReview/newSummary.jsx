import React, { useState, useEffect } from 'react';

const newSummary = (props) => {

  const placeholderText = '“Example: Best purchase ever!”'

  const handleTextareaChange = (e) => {
    // console.log(e.target.value)
    props.summaryInput(e.target.value)
  }

  return (
    <>
      Review summary
      <textarea className="summary-textarea" maxLength="60" type="text" placeholder={placeholderText} onChange={handleTextareaChange} ></textarea>
    </>
  )
}

export default newSummary