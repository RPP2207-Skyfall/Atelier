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
      product_name: props.product_name || "Blues Suede Shoes",
      reviewData: [],
      originalReviewData: [],
      currentSortValue: 'relevant',
      metadata: {},
      filterValue: '',
      filterMap: { '1': false, '2': false, '3': false, '4': false, '5': false },
      filterClicked: false,
      newReviewModalOpen: false
    }
  }

  componentDidMount() {
    this.getProductReviews(this.state.product_id)
    this.getReviewMetadata(this.state.product_id)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.newReviewPosted !== prevState.newReviewPosted) {
      this.getProductReviews(this.state.product_id)
      this.getReviewMetadata(this.state.product_id)
      this.setState({
        newReviewPosted: false
      })
    }
    if (prevProps.product_id !== this.props.product_id) {
      //console.log('there is a new product_id', prevProps.product_id, 'vs', this.props.product_id)
      this.setState({
        product_id: this.props.product_id
      })
      this.getProductReviews(this.props.product_id)
      this.getReviewMetadata(this.props.product_id)
    }

  }

  /***************************************/
  /**connect to express server**/

  async getProductReviews(product_id) {
    var requestOption = {
      product_id: product_id,
      sort: this.state.currentSortValue
    }
    //console.log(requestOption)

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
    var requestOption = {
      product_id: product_id
    }
    try {
      let getMetadat = await Axios.post('/metadata', requestOption)
      //console.log('gg', getMetadat)
      if (!getMetadat.data) {
        throw new Error('No data found')
      } else {
        this.setState({ metadata: getMetadat.data })
      }
    } catch (err) {
      console.log("getReviewMetadata Err: ", err)
    }
  }


  async addNewReview(inputData) {

    if (inputData !== undefined) {
      inputData["product_id"] = this.state.product_id
      //console.log('added productID: ', inputData)

      try {
        let addNewReview = await Axios.post('/addReview', inputData)
        //console.log(addNewReview)
        if (addNewReview.data === 'Created') {
          //console.log('review created')
          this.setState({
            newReviewModalOpen: !this.state.newReviewModalOpen
          })
        }

      } catch (err) {
        console.log("add new review Err: ", err)
      }
    }

  }

  async updateIsHelpful(review_id) {
    //console.log(review_id)
    var requestOption = {
      review_id: review_id
    }
    try {
      let markHelpful = await Axios.put('/helpful', requestOption)
      //console.log('helpful', markHelpful)
      if (markHelpful.status === 204) {
        console.log('marked helpful')
      }
    } catch (err) {
      console.log('mark helpful error: ', err)
    }

  }

  async reportReview(review_id) {
    var requestOption = {
      review_id: review_id
    }
    try {
      let reportReview = await Axios.put('/report', requestOption)
      if (reportReview.status === 204) {
        console.log('reported')
      }
    } catch (err) {
      console.log('report review error: ', err)
    }
  }
  /**connect to express server**/
  /***************************************/


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

  resetAllFilter() {
    this.setState({
      filterMap: { '1': false, '2': false, '3': false, '4': false, '5': false },
      filterClicked: false
    })
  }

  updateNewReviewModal() {
    this.setState({
      newReviewModalOpen: !this.state.newReviewModalOpen
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
              newReviewModalOpen={this.state.newReviewModalOpen}
              updateSortMethod={this.updateSortMethod.bind(this)}
              addNewReview={this.addNewReview.bind(this)}
              reportReview={this.reportReview.bind(this)}
              updateIsHelpful={this.updateIsHelpful.bind(this)}
              updateNewReviewModal={this.updateNewReviewModal.bind(this)}
            />

          </div>
        </div>
      </div>
    )
  }

}

export default RatingReview