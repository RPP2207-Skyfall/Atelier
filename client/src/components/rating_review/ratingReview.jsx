import React from 'react';
import ReviewList from './reviewList.jsx'
import Axios from 'axios';


class RatingReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product_id: props.product_id || 71698,
      reviewData: [],
      sortOption: 'relevant'

    }

  }

  componentDidMount() {
    this.getProductReviews(this.state.product_id)
  }



  getProductReviews(product_id) {
    var url = process.env.REACT_APP_API_REVIEW_RATING_URL
    console.log(url)
    var requestOption = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": process.env.REACT_APP_API_REVIEW_RATING_KEY
      },
      params: {
        product_id: product_id,
        count: 50,
        sort: this.state.sortOption
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

  updateSortMethod(sortMethod) {
    console.log('here', sortMethod)
    this.setState({
      sortOption: sortMethod
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
            <ReviewList reviewData={this.state.reviewData} updateSortMethod={this.updateSortMethod.bind(this)} />
          </div>
        </div>
      </div>
    )
  }

}

export default RatingReview