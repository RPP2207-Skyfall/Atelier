import React, { useState, useEffect } from 'react';
import ReviewItem from './reviewItem.jsx'

class reviewList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewData: this.props.reviewData,
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

  // initializeData() {
  //   this.setState({
  //     reviewData: this.props.reviewData,
  //     displayReview: [this.props.reviewData[0], this.props.reviewData[1]]
  //   })
  // }

  // initializeLoadButton() {
  //   this.setState({
  //     loadBtn: true
  //   })
  // }

  handleMoreReviewClick() {
    var currentReviewIdx = this.state.displayReview.length //2
    console.log(currentReviewIdx)
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
      <div className="reviewListContaier">
        <div>{`${datalength} reviews, sorted by `}</div>
        {this.state.displayReview.map((item, idx) =>
          <ReviewItem reviewData={item} key={idx} />
        )}
        {this.state.loadBtn ? <button onClick={() => { this.handleMoreReviewClick() }}>More Reviews</button> : null}
        <></>
      </div>



    )
  }

}

export default reviewList