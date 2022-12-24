import React, { useState, useEffect } from 'react';
import helpers from '../helperFunctions/helper.js'

const overallStar = (props) => {

  const [asteris, setAsterisk] = useState(true)
  const [starSelected, setStarSelected] = useState(-1)

  const starMeaning = {
    "0star": "Poor",
    "1star": "Fair",
    "2star": "Average",
    "3star": "Good",
    "4star": "Great"
  }


  useEffect(() => {
    (async () => {
      props.starSelection(starSelected)
      let checkRated = await helpers.checkReviewForm('overallStar', starSelected)
      setAsterisk(checkRated)
    })()
  }, [starSelected])

  const handleStarClick = (e, idx) => {
    switch (e.detail) {
      case 1:
        console.log('clicked')
        setStarSelected(idx);
        break;
      case 2:
        console.log('clicked')
        setStarSelected(-1);
        break;
    }

  }


  return (
    <>
      Your Overall Rating  {asteris ? <span className="asteris">*</span> : null}
      <div className="star-rating">
        {[...Array(5)].map((star, idx) => {
          return (
            <button
              type="button"
              key={idx}
              className={idx <= starSelected ? "star-on" : "star-off"}
              onClick={(e) => {
                handleStarClick(e, idx)
              }

              }
            >
              <span className="star" key={idx}>&#9733;</span>
            </button>
          )
        })}
        <span className="star-meaning">{starMeaning[starSelected + 'star']}</span>
      </div>
    </>
  )
}

export default overallStar