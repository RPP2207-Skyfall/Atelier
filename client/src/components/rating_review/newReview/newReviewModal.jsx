import React, { useState, useEffect } from 'react';
import helpers from '../helperFunctions/helper.js'

const newReviewModal = (props) => {

  const [toggle, setToggle] = useState(-1)
  const [characterTable, setCharacterTable] = useState([])
  const characteristicsObj = props.characteristics

  const starMeaning = {
    "0star": "Poor",
    "1star": "Fair",
    "2star": "Average",
    "3star": "Good",
    "4star": "Great"
  }

  const definitionObj = {
    Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs loose']
  }

  const handleCloseClick = () => {
    props.handleCloseReviewModal()
  }

  const recommendSelect = (e) => {
    console.log(e.target.value)
  }


  useEffect(() => {
    (async () => {
      let characterTable = await helpers.generateCharacteristicTable(characteristicsObj, definitionObj)
      console.log(characterTable)
      setCharacterTable(characterTable)

    })()
  }, [characteristicsObj])



  return (
    <>

      <div className="new_reviewmodal" >
        <div className="overlay" data-testid={`overlay-`}>
          <div className="modal-content new-review-content">
            <div className="content-container">
              <div className="new-review-title">Write Your Review</div>
              <div className="new-review-subtitle">{`About the ${props.productName}`}</div>

              <div className="overall-rating-section">
                Your Overall Rating
                <div className="star-rating">
                  {[...Array(5)].map((star, idx) => {
                    return (
                      <button
                        type="button"
                        key={idx}
                        className={idx <= toggle ? "star-on" : "star-off"}
                        onClick={() =>
                          setToggle(idx)

                        }
                      >
                        <span className="star" key={idx}>&#9733;</span>
                      </button>
                    )
                  })}
                  <span className="star-meaning">{starMeaning[toggle + 'star']}</span>
                </div>
              </div>
              <div className="new-recommend-section" onChange={recommendSelect}>
                <div>Do you recommend this product? </div>
                <div>
                  <input type="radio" name="recommend-select" value="true" defaultChecked />  Yes
                </div>
                <div>
                  <input type="radio" name="recommend-select" value="false" />  No
                </div>
              </div>

              <div className="characteristic-table">
                {characterTable}
              </div>

              <div className="button-section">
                <button className="review-modal-closeBtn" data-testid={`close-`} onClick={() => { handleCloseClick() }} >Close</button>
                <button className="review-modal-submitBtn" data-testid={`submit-`} >Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )

}

export default newReviewModal