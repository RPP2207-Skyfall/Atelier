import react, { useState, useEffect } from 'react'
import helpers from '../helperFunctions/helper.js'

const ratingBreakdown = (props) => {

  const ratingObj = props.ratingObj
  const [individualRating, setIndividualRating] = useState([])
  const [totalSubmitted, setTotalSubmitted] = useState([])

  let ratingBar = <></>


  useEffect(() => {
    (async () => {
      let individualRating = await helpers.populateIndividualRating(ratingObj)
      console.log(individualRating)
      setIndividualRating(individualRating)
    })()
  }, [ratingObj])



  return (
    <div className="rating-breakdownn-container">
      <div className="breakdown-title">Rating Breakdown</div>

      {individualRating !== undefined ? individualRating.map((eachDiv, idx) =>
        <div className={`${idx}-star `} key={idx}>
          {<span>{eachDiv[0]}
            <span className="progress_wrapper">
              <span className="progress_bar"></span>
            </span>
            {eachDiv[1]}</span>}
        </div>
      ) : null}
    </div>

  )

}

export default ratingBreakdown
