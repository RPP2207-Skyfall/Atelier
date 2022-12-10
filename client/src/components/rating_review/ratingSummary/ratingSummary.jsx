import react, { useState, useEffect } from 'react'
import Star from './averageStar.jsx'
import Recommendation from './recommendation.jsx'
import RatingBreakdown from './ratingBreakdown.jsx'

const ratingSummary = (props) => {

  var ratingObj = props.metadata.ratings
  const [averageRating, setAverageRating] = useState(0)
  const [totalRatingAmount, setTotalRatigAmount] = useState(0)


  useEffect(() => {
    calculateAverageRating(ratingObj)
  }, [ratingObj])


  const calculateAverageRating = (ratingObj) => {

    var average = 0
    var totalScore = 0
    var totalRatingAmount = 0
    for (let key in ratingObj) {
      var currentValue = parseInt(ratingObj[key])
      totalRatingAmount += currentValue
      totalScore += (currentValue * key)
      //console.log(totalScore, totalRating)
    }

    average = Math.round((totalScore / totalRatingAmount) * 10) / 10

    if (isNaN(average)) {
      average = 0
    }
    setAverageRating(average)
    setTotalRatigAmount(totalRatingAmount)
    return
  }




  return (
    <>
      <div className="breakdown-container">
        <div className="row average-row">
          <div className="col-4 average-number-col">
            <div className="averageNumber">{averageRating}</div>
          </div>
          <div className="col-8 average-star-col">
            <div className="averageStar"><Star rating={averageRating} /></div>
          </div>
        </div>

        <div className="row recommend-row"><Recommendation percentage={props.metadata.recommended} /></div>
        <div className="row starchart-row"><RatingBreakdown totalAmount={totalRatingAmount} ratingObj={ratingObj} /></div>
        <div className="row product-breakdown-row">product-breakdown</div>
        <div className="row product-breakdown-row">product-breakdown</div>


      </div>

    </>
  )
}
export default ratingSummary