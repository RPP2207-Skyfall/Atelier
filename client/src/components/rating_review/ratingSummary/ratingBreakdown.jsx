import react, { useState, useEffect } from 'react'

const ratingBreakdown = (props) => {

  var ratingObj = props.ratingObj
  const [individualRating, setIndividualRating] = useState([])
  const [totalSubmitted, setTotalSubmitted] = useState([])

  let ratingBar = <></>

  useEffect(() => {
    populateIndividualRating(ratingObj)
  }, [ratingObj])

  const populateIndividualRating = (ratingObj) => {
    if (ratingObj) {
      var individualRatingArr = []
      for (let key in ratingObj) {
        var current = [<span>{`${key} Stars`}</span>, <span>{ratingObj[key]}</span>]

        individualRatingArr.push(current)
      }
      console.log(individualRatingArr)
      setIndividualRating(individualRatingArr)
    }
  }






  return (
    <div className="rating-breakdownn-container">
      <div className="breakdown-title">Rating Breakdown</div>
      <div className="breakdown-chart">
        {individualRating.map((eachDiv, idx) =>
          <div className={`${idx}-star`} key={idx}>{eachDiv[0]} bar {eachDiv[1]}</div>
        )}
      </div>
    </div>
  )

}

export default ratingBreakdown