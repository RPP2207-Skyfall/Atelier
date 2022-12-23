import React, { useState, useEffect } from 'react';

const newReviewModal = (props) => {

  const [toggle, setToggle] = useState(0)

  const handleCloseClick = () => {
    props.handleCloseReviewModal()
  }



  return (
    <>

      <div className="new_reviewmodal" >
        <div className="overlay" data-testid={`overlay-`}>
          <div className="modal-content new-review-content">
            <div className="content-container">
              <div className="new-review-title">Write Your Review</div>
              <div className="new-review-subtitle">{`About the ${props.productName}`}</div>

              <div className="overall-rating-section">
                <div className="star-rating">
                  {[...Array(5)].map((star, idx) => {
                    return (
                      <button
                        type="button"
                        key={idx}
                        className={idx <= toggle ? "star-on" : "star-off"}
                        onClick={() => setToggle(idx)}
                      >
                        <span className="star" key={idx}>&#9733;</span>
                      </button>
                    )
                  })}
                </div>
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