import React, { useState } from 'react'
import ReviewPhotoList from './reviewPhoto/reviewPhotoList.jsx'

const reviewItem = (props) => {

  var helpfulnessCount = props.reviewData.helpfulness
  var dateOption = {
    day: "numeric",
    month: "long",
    year: "numeric"
  }
  var dateTime = new Date(props.reviewData.date).toLocaleDateString("en-US", dateOption)


  const [createDateTime, setCreateDateTime] = useState(dateTime)
  const [helpfulCount, setHelpfulCount] = useState(helpfulnessCount)

  const helpfulVote = () => {
    if (helpfulCount > helpfulnessCount) {
      setHelpfulCount(helpfulCount - 1)
    } else if (helpfulCount === helpfulnessCount) {
      setHelpfulCount(helpfulCount + 1)
    }
  }

  const reportReview = () => {
    console.log('report')
  }


  return (
    <div className="reviewBlock">
      <div className="row">
        <div className="col-4">
          stars
        </div>
        <div className="col-8">
          {`${props.reviewData.reviewer_name}, ${createDateTime}`}
        </div>
      </div>

      <div className="row flex-column">
        <div className="reviewSummary">{`${props.reviewData.summary}`}</div>
        <div className="reviewBody">
          <div className="reviewText">{`${props.reviewData.body}`}</div>
          {props.reviewData.photos.length !== 0 ? <ReviewPhotoList photoList={props.reviewData.photos} /> : null}
        </div>
        {props.reviewData.recommend ? <div className="recommendCheck"><span> &#10003; </span>I recommend this product</div> : null}
        {props.reviewData.response !== null ? <>{props.reviewData.response.length !== 0 ? <div className="responseBlock">{props.reviewData.response}</div> : null}</> : null}
      </div>

      <div className="row flex-column">
        <div className="helpfulCount">Helpful? {<span onClick={() => { helpfulVote() }}>Yes</span>} ({helpfulCount})  |  {<span onClick={() => { reportReview() }}>Report</span>}</div>
        <hr />
      </div>



    </div >


  )

}

export default reviewItem