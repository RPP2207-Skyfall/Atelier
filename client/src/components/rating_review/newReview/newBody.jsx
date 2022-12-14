import React, { useState, useEffect } from 'react';
import helpers from '../helperFunctions/helper.js'

const newBody = (props) => {

  const [asteris, setAsteris] = useState(true)
  const placeholderText = '“Why did you like the product or not?”'
  const [summaryLength, setSummaryLength] = useState(0)
  const [lengthRemaining, setLengthRemaining] = useState(0)



  useEffect(() => {
    (async () => {
      let lengthCheckResults = await helpers.checkReviewForm('newBody', summaryLength)
      setAsteris(lengthCheckResults[0])
      setLengthRemaining(lengthCheckResults[1])
    })()

  }, [summaryLength])

  const handleTextareaChange = (e) => {
    setSummaryLength(e.target.value.length)
    props.bodyInput(e.target.value)
  }
  const tracker = (element, widget) => {
    props.tracker(element, widget)
  }

  return (
    <>
      Review body {asteris ? <span className="asteris" data-testid='asteris'>*</span> : null} <span className="errMsg" data-testid="errMsg">{props.bodyErrorMsg}</span>
      <textarea className="body-textarea" data-testid="body-textarea" maxLength="1000" type="text" placeholder={placeholderText} onChange={handleTextareaChange} onClick={() => { tracker('body-textarea', 'new-review-modal') }}></textarea>
      {lengthRemaining > 0 ? <span className="minimum-Char" data-testid="remaining">Minimum required characters left: {lengthRemaining}</span> : <span data-testid="minmum-reached" className="minimum-Char">Minimum reached</span>}
    </>
  )
}

export default newBody