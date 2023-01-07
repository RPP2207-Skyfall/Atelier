import react, { useState, useEffect } from 'react'
import helpers from '../helperFunctions/helper.js'
import Bar from "./ratingBar.jsx"

const ratingBreakdown = (props) => {

  const ratingObj = props.ratingObj
  const totalAmount = props.totalAmount
  const [individualRating, setIndividualRating] = useState([])
  const [fillPercentage, setFillPercentage] = useState(0)



  useEffect(() => {
    (async () => {
      let individualRating = await helpers.populateIndividualRating(ratingObj)
      // console.log(individualRating)
      setIndividualRating(individualRating)
    })()
  }, [ratingObj])



  return (
    <div className="rating-breakdownn-container">
      <div className="row breakdown-title">Rating Breakdown</div>
      {individualRating !== undefined ? individualRating.map((valueSet, idx) =>
        <Bar key={idx} idx={idx} tracker={props.tracker} totalAmount={totalAmount} star={valueSet[0]} ratingAmount={valueSet[1]} hanleFilterClicked={props.hanleFilterClicked} filterClicked={props.filterClicked} resetHighlighted={props.resetHighlighted} />
      ) : null}
    </div>

  )

}

export default ratingBreakdown
