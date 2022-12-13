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
      <div className="breakdown-chart">
        {individualRating !== undefined ? individualRating.map((eachDiv, idx) =>
          <div className={`${idx}-star`} key={idx}>{eachDiv[0]} bar {eachDiv[1]}</div>
        ) : null}
      </div>
    </div>
  )

}

export default ratingBreakdown