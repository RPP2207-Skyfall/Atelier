const Axios = require('axios');
require("dotenv").config();

module.exports = {

  get_product_reviews: (req, res) => {
    //console.log('review req', req.body)

    var url = process.env.REACT_APP_API_REVIEW_URL
    var requestOption = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": process.env.REACT_APP_API_REVIEW_RATING_KEY
      },
      params: {
        product_id: req.body.product_id,
        count: 15,
        sort: req.body.sort
      }
    }

    Axios(url, requestOption)
      .then((result) => {
        //console.log(result.data)
        res.send(result.data)
      })
      .catch((err) => {
        console.log('get product review error: ', err)
        res.send(err)
      })
  },

  get_metadata: (req, res) => {
    //console.log('metadata req', req.body)
    var url = process.env.REACT_APP_API_REVIEW_METADATA_URL
    var requestOption = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": process.env.REACT_APP_API_REVIEW_RATING_KEY
      },
      params: {
        product_id: req.body.product_id
      }
    }

    Axios(url, requestOption)
      .then((result) => {
        //console.log(result.data)
        res.send(result.data)
      })
      .catch((err) => {
        console.log('get metadata error: ', err)
        res.send(err)
      })
  },
  add_new_review: (req, res) => {

  },
  mark_helpful: (req, res) => {

  },
  report_review: (req, res) => {

  },

}