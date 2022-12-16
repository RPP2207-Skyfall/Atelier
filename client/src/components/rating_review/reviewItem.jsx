import React, { useState, useEffect } from 'react'
import ReviewPhotoList from './reviewPhoto/reviewPhotoList.jsx'
import Stars from './starRating/starRating.jsx'

const reviewItem = (props) => {
  var summaryDisplayLimit = 60
  var bodyDisplayLimit = 250
  var helpfulnessCount = props.reviewData.helpfulness || 0
  var dateOption = {
    day: "numeric",
    month: "long",
    year: "numeric"
  }
  var dateTime = new Date(props.reviewData.date).toLocaleDateString("en-US", dateOption)



  const [createDateTime, setCreateDateTime] = useState(dateTime)
  const [helpfulCount, setHelpfulCount] = useState(helpfulnessCount)
  const [partSummary, setPartSummary] = useState(null)
  const [partBody, setPartBody] = useState(null)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    if (props.reviewData.summary.length > summaryDisplayLimit) {
      setPartSummary(props.reviewData.summary.substring(0, summaryDisplayLimit) + "...")
    }

    if (props.reviewData.body.length > bodyDisplayLimit) {
      console.log(props.reviewData.body.length, bodyDisplayLimit)
      setPartBody(props.reviewData.body.substring(0, bodyDisplayLimit) + "...")
    }

    if (props.reviewData.body.length < bodyDisplayLimit) {
      setShowAll(true)
    }
  }, [])

  const showMoreOrLess = () => {
    setShowAll(!showAll)
  }

  const helpfulVote = () => {
    if (helpfulCount > helpfulnessCount) {
      setHelpfulCount(helpfulCount - 1)
    } else {
      setHelpfulCount(helpfulCount + 1)
    }
    // STILL NEED TO UPDATE API
  }

  // const reportReview = () => {
  //   console.log('report')
  // }


  return (
    <div className="reviewBlock">
      <div className="row">
        <div className="col-5">
          <Stars rating={props.reviewData.rating} />
        </div>
        <div className="col-7">
          {`${props.reviewData.reviewer_name}, ${createDateTime}`}
        </div>
      </div>

      <div className="row flex-column">
        {props.reviewData.summary.length <= summaryDisplayLimit ?
          <div className="reviewSummary">{`${props.reviewData.summary}`}</div> : <div>{partSummary}</div>
        }

        {showAll ?
          <div className="reviewBody">
            <div className="reviewText" data-testid='reviewText'>{`${props.reviewData.body}`}</div>
            {props.reviewData.photos.length !== 0 ? <ReviewPhotoList photoList={props.reviewData.photos} /> : null}
            {<div className="showLessSpan"><span data-testid="show-less-span" onClick={() => { showMoreOrLess() }}>Show less</span></div>}
          </div> : <div className="partial-ReviewText" data-testid='partial-ReviewText'>{partBody} <div className="showMoreSpan">{<span data-testid="show-more-span" onClick={() => { showMoreOrLess() }}>Show more</span>}</div></div>
        }


        {props.reviewData.recommend ? <div className="recommendCheck"><span> &#10003; </span>I recommend this product</div> : null}
        {props.reviewData.response !== null ? <>{props.reviewData.response.length !== 0 ? <div className="responseBlock" data-testid="response-block">{props.reviewData.response}</div> : null}</> : null}
      </div>

      <div className="row flex-column">
        <div className="helpfulCount" >Helpful? {<span className="helpful-click" data-testid="helpful-span" onClick={() => { helpfulVote() }}>Yes</span>} <span data-testid="helpful-count-span">{` (${helpfulCount})`} </span>  |  {<span onClick={() => { reportReview() }}>Report</span>}</div>
        <hr />
      </div>
    </div >


  )

}

export default reviewItem