import React, { useState, useEffect } from 'react'
import helpers from '../helperFunctions/helper.js'

const bar = (props) => {

  const totalAmount = props.totalAmount
  const ratingAmount = props.ratingAmount
  const star = props.star
  const [fill, setFill] = useState(0)

  useEffect(() => {
    (async () => {
      let fillAmount = await helpers.calculateBarFillPercentage(totalAmount, ratingAmount)
      setFill(fillAmount)
    })()
  }, [totalAmount])

  return (

    <div className="row bar-chart">
      <span className="col-2 starname-bar">
        {`${star} Star`}
      </span>
      <div className="col-8 bar-section">
        <div className="bar-container" style={{ "backgroundColor": "grey", "width": "150px" }}>
          <hr className="green-bar" style={{ "width": `${fill}%`, "height": '10px' }} />
        </div>
      </div>
      <span className="col-2 rateAmount-bar">
        {`(${ratingAmount})`}
      </span>
    </div>
  );
}


export default bar

// "width": "100%"

// style = {{ "height": '10px', "backgroundColor": "grey" }}