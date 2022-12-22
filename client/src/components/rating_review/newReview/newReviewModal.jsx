import React, { useState, useEffect } from 'react';

const newReviewModal = (props) => {

  const handleCloseClick = () => {
    props.handleCloseReviewModal()
  }



  return (
    <>

      <div className="new_reviewmodal" >
        <div className="overlay" data-testid={`overlay-`} onClick={() => { handleCloseClick() }}>
          <div className="modal-content">
            modal window
            <button className="modal-closeBtn" data-testid={`close-`} onClick={() => { handleCloseClick() }} >Close</button>
          </div>
        </div>
      </div>


    </>
  )

}

export default newReviewModal