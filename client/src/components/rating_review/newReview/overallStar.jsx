import React, { useState, useEffect } from 'react';


const overallStar = (props) => {

  const [starSelected, setStarSelected] = useState(-1)

  const starMeaning = {
    "0star": "Poor",
    "1star": "Fair",
    "2star": "Average",
    "3star": "Good",
    "4star": "Great"
  }

  useEffect(() => {
    props.starSelection(starSelected)
  }, [starSelected])

  const handleStarClick = (idx) => {
    setStarSelected(idx)
    //props.starSelection(starSelected)
  }


  return (
    <>
      Your Overall Rating
      <div className="star-rating">
        {[...Array(5)].map((star, idx) => {
          return (
            <button
              type="button"
              key={idx}
              className={idx <= starSelected ? "star-on" : "star-off"}
              onClick={() =>
                handleStarClick(idx)

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