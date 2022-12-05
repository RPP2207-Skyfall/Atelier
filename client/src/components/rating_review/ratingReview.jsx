import React from 'react';
import ReviewList from './reviewList.jsx'
import Axios from 'axios';


class RatingReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product_id: props.product_id || 71698,
      reviewData: []

    }

  }

  componentDidMount() {

    this.getProductReviews(this.state.product_id)
  }



  getProductReviews(product_id) {
    var url = process.env.REACT_APP_API_REVIEW_RATING_URL
<<<<<<< HEAD
    console.log(url)
=======
    //console.log(url)
>>>>>>> master
    var requestOption = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": process.env.REACT_APP_API_REVIEW_RATING_KEY
      },
      params: {
        product_id: product_id,
        count: 10
      }
    }
    Axios.get(url, requestOption)
      .then(res => {
        ///console.log(res.data)
        this.setState({
          reviewData: res.data.results
        })
      })
      .catch(err => {
        console.log("Err: ", err)
      })
  }

  render() {
    return (
      <div className="container ratingReview">
        <h6>RATINGS & REVIEWS</h6>
        <div className="row">
          <div className="col-4">
            rating breakdown
          </div>
          <div className="col-8">
            <ReviewList reviewData={this.state.reviewData} />
          </div>
        </div>
      </div>
    )
  }

}

export default RatingReview