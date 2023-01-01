import react, { useState, useEffect } from 'react'
import Star from './averageStar.jsx'
import Recommendation from './recommendation.jsx'
import RatingBreakdown from './ratingBreakdown.jsx'
import helpers from '../helperFunctions/helper.js'
import ProductBreakdown from "./productBreakdown.jsx"

const breakdown = (props) => {
  var ratingObj = props.metadata.ratings
  var characteristicsObj = props.metadata.characteristics
  const [averageRating, setAverageRating] = useState(0)
  const [totalRatingAmount, setTotalRatigAmount] = useState(0)
  const [resetHighlighted, setResetHighlighted] = useState(false)


  useEffect(() => {
    (async () => {
      let avg = await helpers.calculateAverageRating(ratingObj)
      // console.log(avg)
      setAverageRating(avg.average)
      setTotalRatigAmount(avg.totalRatingAmount)
    })()

  }, [ratingObj])

  const resetAllFilter = () => {
    props.resetAllFilter()
    setResetHighlighted(true)
  }





  return (
    <>
      <div className="breakdown-container">
        <div className="row average-row">
          <div className="col-4 average-number-col">
            <div className="averageNumber" data-testid="averageRating">{averageRating}</div>
          </div>
          <div className="col-8 average-star-col">
            <div className="averageStar"><Star rating={averageRating} /></div>
          </div>
        </div>

        <div className="row recommend-row"><Recommendation percentage={props.metadata.recommended} /></div>
        <div className="row starchart-row"><RatingBreakdown totalAmount={totalRatingAmount} ratingObj={ratingObj} hanleFilterClicked={props.hanleFilterClicked} filterClicked={props.filterClicked} resetHighlighted={resetHighlighted} /></div>
        {props.filterClicked ? <div className="remove-all-filter-btn" data-testid="remove-filter-btn"><button onClick={() => resetAllFilter()}>Remove all filters</button></div> : null}
        <div className="row product-breakdown-row"><ProductBreakdown characteristicsObj={characteristicsObj} /></div>



      </div>

    </>
  )
}
export default breakdown