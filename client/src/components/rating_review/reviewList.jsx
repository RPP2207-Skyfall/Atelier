import React, { useState } from 'react';
import ReviewItem from './reviewItem.jsx'


const reviewList = (props) => {

  let datalength = props.reviewData.length


  return (
    <div className="reviewListContaier">
      <div>{`${datalength} reviews, sorted by `}</div>
      {props.reviewData.map((item, idx) =>
        <ReviewItem reviewData={item} key={idx} />
      )}
    </div>



  )

}

export default reviewList