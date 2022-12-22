import React, { useState, useEffect } from 'react';

const newReviewModal = (props) => {

  const handleCloseClick = () => {
    props.handleCloseReviewModal()
  }



  return (
    <>

      <div className="new_reviewmodal" >
        <div className="overlay" data-testid={`overlay-`} onClick={() => { handleCloseClick() }}>
          <div className="modal-content new-review-content">
            <div className="new-review-title">Write Your Review</div>
            {<div className="new-review-subtitle">{`About the ${props.productName}`}</div>}
            <div className="button-section">
              <button className="review-modal-closeBtn" data-testid={`close-`} onClick={() => { handleCloseClick() }} >Close</button>
              <button className="review-modal-submitBtn" data-testid={`submit-`} >Submit</button>
            </div>
          </div>
        </div>
      </div>


    </>
  )

}

export default newReviewModal