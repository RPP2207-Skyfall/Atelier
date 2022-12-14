import React, { useState, useEffect } from 'react'
import ReviewPhotoList from './reviewPhoto/reviewPhotoList.jsx'
import Stars from './starRating/starRating.jsx'

const reviewItem = (props) => {
  var summaryDisplayLimit = 60
  var bodyDisplayLimit = 250
  var helpfulnessCount = props.reviewData.helpfulness || 0
  var review_id = props.reviewData.review_id
  var dateOption = {
    day: "numeric",
    month: "long",
    year: "numeric"
  }
  var dateTime = new Date(props.reviewData.date).toLocaleDateString("en-US", dateOption)



  const [createDateTime, setCreateDateTime] = useState(dateTime)
  const [helpfulCount, setHelpfulCount] = useState(helpfulnessCount)
  //const [isHelpful, setIsHelpful] = useState(false)
  const [partSummary, setPartSummary] = useState(null)
  const [partBody, setPartBody] = useState(null)
  const [showAll, setShowAll] = useState(false)
  const [report, setReport] = useState("Report")

  useEffect(() => {
    if (props.reviewData.summary.length > summaryDisplayLimit) {
      setPartSummary(props.reviewData.summary.substring(0, summaryDisplayLimit) + "...")
    }

    if (props.reviewData.body.length > bodyDisplayLimit) {
      //console.log(props.reviewData.body.length, bodyDisplayLimit)
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
    // if (helpfulCount > helpfulnessCount) {
    //   setHelpfulCount(helpfulCount - 1)
    // } else {
    setHelpfulCount(helpfulCount + 1)
    //}
    //setIsHelpful(!isHelpful)

    props.updateIsHelpful(review_id)

  }

  const reportReview = () => {
    setReport('Reported')
    props.reportReview(review_id)
  }

  const tracker = (element, widget) => {
    props.tracker(element, widget)
  }



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
            {props.reviewData.photos.length !== 0 ? <ReviewPhotoList photoList={props.reviewData.photos} tracker={tracker} /> : null}
            {<div className="showLessSpan"><span data-testid="show-less-span" onClick={() => { showMoreOrLess(); tracker('show-more-reviews-btn', 'review-item') }}>Show less</span></div>}
          </div> : <div className="partial-ReviewText" data-testid='partial-ReviewText'>{partBody} <div className="showMoreSpan">{<span data-testid="show-more-span" onClick={() => { showMoreOrLess(); tracker('load-more-review-btn', 'review-item') }}>Show more</span>}</div></div>
        }


        {props.reviewData.recommend ? <div className="recommendCheck"><span> &#10003; </span>I recommend this product</div> : null}
        {props.reviewData.response !== null ? <>{props.reviewData.response.length !== 0 ? <div className="responseBlock" data-testid="response-block">{props.reviewData.response}</div> : null}</> : null}
      </div>

      <div className="row flex-column">
        <div className="helpfulCount" >Helpful?
          {<span className="helpful-click" data-testid="helpful-span" onClick={() => { helpfulVote(); tracker('helpful-btn', 'review-item') }}>Yes</span>}
          <span data-testid="helpful-count-span">{` (${helpfulCount})`} </span>  |
          {<span className="report-click" data-testid='report-text' onClick={() => { reportReview(); tracker('report-btn', 'review-item') }}>{report}</span>}
        </div>
        <hr />
      </div>
    </div >


  )

}

export default reviewItem