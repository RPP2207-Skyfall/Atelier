import React from 'react';
import ReviewList from './reviewList.jsx'
import Axios from 'axios';
import RatingSummary from './ratingSummary/ratingSummary.jsx'


class RatingReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product_id: props.product_id || 71698,
      reviewData: [],
      currentSortValue: 'relevant',
      metadata: {}

    }

  }

  componentDidMount() {
    this.getProductReviews(this.state.product_id)
    this.getReviewMetadata(this.state.product_id)
  }



  getProductReviews(product_id) {
    var url = process.env.REACT_APP_API_REVIEW_URL
    //console.log(url)
    var requestOption = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": process.env.REACT_APP_API_REVIEW_RATING_KEY
      },
      params: {
        product_id: product_id,
        count: 15,
        sort: this.state.currentSortValue
      }
    }
    Axios.get(url, requestOption)
      .then(res => {
        //console.log(res.data.results)
        this.setState({
          reviewData: res.data.results
        })
      })
      .catch(err => {
        console.log("getProductReviews Err: ", err)
      })
  }

  getReviewMetadata = async (product_id) => {
    var url = process.env.REACT_APP_API_REVIEW_METADATA_URL
    //console.log(url)
    var requestOption = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": process.env.REACT_APP_API_REVIEW_RATING_KEY
      },
      params: {
        product_id: product_id
      }
    }
    try {
      let res = await Axios.get(url, requestOption)
      this.setState({ metadata: res.data })
    } catch (err) {
      console.log("getReviewMetadata Err: ", err)
    }
  }


  updateSortMethod(sortMethod) {
    if (sortMethod !== this.state.currentSortValue) {
      this.setState({
        currentSortValue: sortMethod
      }, () => {
        this.getProductReviews(this.state.product_id)
      })

    }

  }



  render() {
    return (
      <div className="container ratingReview">
        <h6>RATINGS & REVIEWS</h6>
        <div className="row">
          <div className="col-4">
            <RatingSummary metadata={this.state.metadata} />
          </div>
          <div className="col-8">
            <ReviewList reviewData={this.state.reviewData} currentSortValue={this.state.currentSortValue} updateSortMethod={this.updateSortMethod.bind(this)} />
          </div>
        </div>
      </div>
    )
  }

}

export default RatingReview