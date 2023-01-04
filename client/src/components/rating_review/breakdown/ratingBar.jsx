import React, { useState, useEffect } from 'react'
import helpers from '../helperFunctions/helper.js'

const bar = (props) => {

  const totalAmount = props.totalAmount
  const ratingAmount = props.ratingAmount
  const star = props.star
  const [fill, setFill] = useState(0)
  const [clicked, setClicked] = useState(props.filterClicked)
  const [highlighted, setHighlighted] = useState(false)

  useEffect(() => {
    (async () => {
      let fillAmount = await helpers.calculateBarFillPercentage(totalAmount, ratingAmount)
      setFill(fillAmount)
    })()
  }, [totalAmount])

  useEffect(() => {
    setHighlighted(false)
  }, [props.resetHighlighted])



  const hanleFilterClicked = (selectedStar, click) => {
    setClicked(click)
    setHighlighted(!highlighted)

    props.hanleFilterClicked(selectedStar, click)
  }




  return (

    <div className="row bar-chart" data-testid={`bar-chart-${props.idx}`}>
      <span className="col-2 starname-bar">
        <span className={highlighted ? 'star-name-selected' : 'star-name'} data-testid={`star-btn-${props.idx}`} onClick={() => { hanleFilterClicked(star, !clicked) }}>{`${star} Star`}</span>
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

