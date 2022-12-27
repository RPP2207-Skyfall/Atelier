import React from 'react';
import ReviewList from './reviewList.jsx'
import Axios from 'axios';
import Breakdown from './breakdown/breakdown.jsx'
import helpers from './helperFunctions/helper.js'


class RatingReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product_id: props.product_id || 71700,
      product_name: props.product_name || "Slacker's Slacks",
      reviewData: [],
      originalReviewData: [],
      currentSortValue: 'relevant',
      metadata: {},
      filterValue: '',
      filterMap: { '1': false, '2': false, '3': false, '4': false, '5': false },
      filterClicked: false,
      reportReview: false
    }
  }

  componentDidMount() {
    this.getProductReviews(this.state.product_id)
    this.getReviewMetadata(this.state.product_id)
  }
  // componentDidUpdate(prevProps, prevState) {
  //   //console.log('line 30', prevState.filterClicked, this.state.filterClicked)
  //   console.log('???', this.state.filterClicked)
  //   // if (prevState.filterClicked !== this.state.filterClicked) {
  //   //   this.updateFilterMap(this.state.filterValue, this.state.reviewData)
  //   // }
  // }



  async getProductReviews(product_id) {
    var url = `${process.env.REACT_APP_API_REVIEW_LOCALHOST}reviews`
    //console.log(url)
    var requestOption = {
      product_id: product_id,
      count: 15,
      sort: this.state.currentSortValue
    }
    console.log(url, requestOption)
    try {
      let getReviewData = await Axios.post('/reviews', requestOption)
      // console.log(getReviewData)
      if (getReviewData.data.results.length === 0) {
        throw new Error('No data found')
      } else {
        this.setState({
          reviewData: getReviewData.data.results,
          originalReviewData: getReviewData.data.results
        })
      }
    }
    catch (err) {
      console.log("getProductReviews Err: ", err)
    }

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
      //console.log('gg', res)
      if (!res.data) {
        throw new Error('No data found')
      } else {
        this.setState({ metadata: res.data })
      }
    } catch (err) {
      console.log("getReviewMetadata Err: ", err)
    }
  }


  updateSortMethod(sortMethod) {
    console.log(sortMethod)
    if (sortMethod === 'relevance') {
      sortMethod = 'relevant'
    }
    if (sortMethod !== this.state.currentSortValue) {
      this.setState({
        currentSortValue: sortMethod
      }, () => {
        this.getProductReviews(this.state.product_id)
      })
    }
  }

  async hanleFilterClicked(filterValue, clicked) {
    //console.log(filterValue, 'new value')
    let filterMap = await helpers.addToFilterArr(filterValue, this.state.filterMap)
    this.setState({
      filterMap: filterMap,
      filterClicked: clicked
    }, async () => {
      let originalReviewData = this.state.originalReviewData
      let reviewData = this.state.reviewData
      let filtered = await helpers.filtering(filterMap, originalReviewData, reviewData)
      //console.log('before set to state: ', filtered)
      this.setState({
        reviewData: filtered
      })
    })

  }

  resetAllFilter() {
    this.setState({
      filterMap: { '1': false, '2': false, '3': false, '4': false, '5': false },
      filterClicked: false
    })
  }

  addNewReview() {
    console.log('trigger')
  }

  reportReview() {
    this.setState({
      reportReview: true
    })
  }


  render() {
    return (
      <div className="container ratingReview">
        <h6>RATINGS & REVIEWS</h6>
        <div className="row">
          <div className="col-4">
            <Breakdown metadata={this.state.metadata} hanleFilterClicked={this.hanleFilterClicked.bind(this)} filterClicked={this.state.filterClicked} resetAllFilter={this.resetAllFilter.bind(this)} />
          </div>
          <div className="col-8">
            <ReviewList
              reviewData={this.state.reviewData}
              productName={this.state.product_name}
              characteristics={this.state.metadata.characteristics}
              currentSortValue={this.state.currentSortValue}
              updateSortMethod={this.updateSortMethod.bind(this)}
              addNewReview={this.addNewReview.bind(this)}
              reportReview={this.reportReview.bind(this)}
            />

          </div>
        </div>
      </div>
    )
  }

}

export default RatingReview