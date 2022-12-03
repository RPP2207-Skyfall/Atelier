import React, { useState, useEffect } from 'react';
import ReviewItem from './reviewItem.jsx'

class reviewList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewData: [],
      displayReview: [],
      loadBtn: false

    }
  }


  componentDidUpdate() {
    if (this.state.reviewData.length !== this.props.reviewData.length) {
      this.setState({
        reviewData: this.props.reviewData,
        displayReview: [this.props.reviewData[0], this.props.reviewData[1]]
      })
      if (this.props.reviewData.length > 2) {
        this.setState({
          loadBtn: true
        })
      }
    }
  }


  handleMoreReviewClick() {
    var currentReviewIdx = this.state.displayReview.length //2
    //console.log(currentReviewIdx)
    var newDisplayReview = this.state.displayReview
    if (this.state.reviewData.length > newDisplayReview.length) {
      for (let i = 0; i < 2; i++) {
        newDisplayReview.push(this.state.reviewData[currentReviewIdx])
        currentReviewIdx++
      }

      this.setState({
        displayReview: newDisplayReview
      })
    } else if (this.state.reviewData.length === newDisplayReview.length) {
      this.setState({
        loadBtn: false
      })
    }
  }




  render() {
    const datalength = this.state.reviewData.length
    return (
      <div className="reviewBreakdown">
        <div>{`${datalength} reviews, sorted by `}</div>
        <div className="reviewItemContaier">
          {this.state.displayReview.map((item, idx) =>
            <ReviewItem reviewData={item} key={idx} />
          )}
        </div>
        {this.state.loadBtn ? <button className="loadReviewBtn" onClick={() => { this.handleMoreReviewClick() }}>MORE REVIEWS</button> : null} <button className="addReviewBtn" >ADD A REVIEW +</button>
        <></>
      </div>



    )
  }

}

export default reviewList