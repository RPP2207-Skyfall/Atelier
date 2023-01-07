import React from 'react';
import ReviewItem from './reviewItem.jsx'
import SortMenu from './sorting/sorting.jsx'
import NewReviewModal from './newReview/newReviewModal.jsx'


class reviewList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewDataCopy: [],
      displayReview: [],
      loadBtn: false,
      newReviewModalOpen: this.props.newReviewModalOpen//false // set to true for development


    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.reviewDataCopy.length !== this.props.reviewData.length) {
      if (this.props.reviewData.length === 1) {
        this.setState({
          reviewDataCopy: this.props.reviewData,
          displayReview: [this.props.reviewData[0]]
        })

      } else if (this.props.reviewData.length >= 2) {
        this.setState({
          reviewDataCopy: this.props.reviewData,
          displayReview: [this.props.reviewData[0], this.props.reviewData[1]]
        })
      }
      if (this.props.reviewData.length > 2) {
        // console.log('length:', this.props.reviewData.length)
        this.setState({
          loadBtn: true
        })
      }
    }


    if (prevProps.reviewData !== this.props.reviewData) {
      if (this.props.reviewData.length === 1) {
        this.setState({ reviewDataCopy: this.props.reviewData }, () => {
          this.setState({
            reviewDataCopy: this.props.reviewData,
            displayReview: [this.props.reviewData[0]]
          })
        })
      }
      else if (this.props.reviewData.length >= 2) {
        this.setState({ reviewDataCopy: this.props.reviewData }, () => {
          this.setState({
            reviewDataCopy: this.props.reviewData,
            displayReview: [this.props.reviewData[0], this.props.reviewData[1]]
          })
        })
      }
    }

    if (prevProps.newReviewModalOpen !== this.props.newReviewModalOpen) {
      this.setState({
        newReviewModalOpen: this.props.newReviewModalOpen
      })
    }

  }


  handleMoreReviewClick() {
    var currentReviewIdx = this.state.displayReview.length //2
    var newDisplayReview = this.state.displayReview
    // console.log('lengths: ', this.state.reviewDataCopy.length, newDisplayReview.length)

    if (this.state.reviewDataCopy.length > newDisplayReview.length) {
      if (this.state.reviewDataCopy.length - newDisplayReview.length >= 2) {


        for (let i = 0; i < 2; i++) {
          //console.log(currentReviewIdx, ": ", this.state.reviewDataCopy[currentReviewIdx])
          newDisplayReview.push(this.state.reviewDataCopy[currentReviewIdx])
          currentReviewIdx++
        }

        this.setState({
          displayReview: newDisplayReview
        })
      }
      else {
        newDisplayReview.push(this.state.reviewDataCopy[this.state.reviewDataCopy.length - 1])
      }
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

  handleAddReviewClick() {
    this.props.updateNewReviewModal()
  }

  handleCloseReviewModal() {
    this.props.updateNewReviewModal()
  }

  tracker(element, widget) {
    this.props.tracker(element, widget)
  }


  render() {
    //console.log('reviewlist received: ', this.props.reviewData, this.state.displayReview)
    const datalength = this.props.reviewData.length
    return (
      <div className="reviewBreakdown">
        <div className="review-sort-bar" data-testid='review-amount'>{`${datalength} reviews,`}{datalength > 0 ? <> sorted by <SortMenu currentSortValue={this.props.currentSortValue} tracker={this.tracker.bind(this)} updateSortMethod={this.updateSortMethod.bind(this)} /></> : null}</div>
        <div className="reviewItemContaier">
          <div className="container-Content">
            {Array.isArray(this.state.displayReview) && datalength > 0 ? this.state.displayReview.map((item) =>
              < ReviewItem reviewData={item} key={item.review_id} reportReview={this.props.reportReview} updateIsHelpful={this.props.updateIsHelpful} tracker={this.tracker.bind(this)} />

            ) : null}
          </div>
        </div>
        {this.state.loadBtn ?
          <button className="loadReviewBtn" data-testid="moreReviewBtn-testId" onClick={() => { this.handleMoreReviewClick(); this.tracker('load more review button', 'reviewlist') }} >MORE REVIEWS</button> : null}
        <button className="addReviewBtn" data-testid="addReviewBtn-testId" onClick={() => { this.handleAddReviewClick(); this.tracker('write new review button', 'reviewlist') }} >ADD A REVIEW +</button>
        {
          this.state.newReviewModalOpen ?
            <NewReviewModal tracker={this.tracker.bind(this)} addNewReview={this.props.addNewReview} handleCloseReviewModal={this.handleCloseReviewModal.bind(this)} productName={this.props.productName} characteristics={this.props.characteristics} /> :
            null
        }
      </div >



    )
  }

}

export default reviewList