import React, { useState, useEffect } from 'react';
import ReviewItem from './reviewItem.jsx'
import SortMenu from './sorting/sorting.jsx'


class reviewList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewDataCopy: [],
      displayReview: [],
      loadBtn: false
      // incomingSortValue: this.props.currentSortValue,
      // sortValueTracker: ''

    }
  }

  // componentDidMount() {
  //   this.setState({
  //     sortValueTracker: this.state.incomingSortValue,
  //   })

  // }


  componentDidUpdate(prevProps, prevState) {

    if (this.state.reviewDataCopy.length !== this.props.reviewData.length) {
      this.setState({
        reviewDataCopy: this.props.reviewData,
        displayReview: [this.props.reviewData[0], this.props.reviewData[1]]
      })
      if (this.props.reviewData.length > 2) {
        this.setState({
          loadBtn: true
        })
      }
    }

    if (prevProps.reviewData !== this.props.reviewData) {
      this.setState({ reviewDataCopy: this.props.reviewData }, () => {
        this.setState({
          reviewDataCopy: this.props.reviewData,
          displayReview: [this.props.reviewData[0], this.props.reviewData[1]]
        })
      })
    }

  }


  handleMoreReviewClick() {
    var currentReviewIdx = this.state.displayReview.length //2
    //console.log(currentReviewIdx)
    var newDisplayReview = this.state.displayReview
    if (this.state.reviewDataCopy.length > newDisplayReview.length) {
      for (let i = 0; i < 2; i++) {
        newDisplayReview.push(this.state.reviewDataCopy[currentReviewIdx])
        currentReviewIdx++
      }

      this.setState({
        displayReview: newDisplayReview
      })
    } else if (this.state.reviewDataCopy.length === newDisplayReview.length) {
      this.setState({
        loadBtn: false
      })
    }
  }

  updateSortMethod(sortMethod) {
    this.props.updateSortMethod(sortMethod)
    this.setState({
      sortValueTracker: sortMethod
    })

  }




  render() {
    const datalength = this.state.reviewDataCopy.length
    return (
      <div className="reviewBreakdown">
        <div className="review-sort-bar">{`${datalength} reviews, sorted by `}{datalength > 0 ? <SortMenu currentSortValue={this.props.currentSortValue} updateSortMethod={this.updateSortMethod.bind(this)} /> : null}</div>
        <div className="reviewItemContaier">
          <div className="container-Content">
            {this.state.displayReview.map((item) =>
              <ReviewItem reviewData={item} key={item.review_id} />
            )}
          </div>
        </div>
        {this.state.loadBtn ? <button className="loadReviewBtn" onClick={() => { this.handleMoreReviewClick() }}>MORE REVIEWS</button> : null} <button className="addReviewBtn" >ADD A REVIEW +</button>
        <></>
      </div>



    )
  }

}

export default reviewList