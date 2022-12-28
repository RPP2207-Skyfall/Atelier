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

    Axios.get(url, requestOption)
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

    Axios.get(url, requestOption)
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
    // console.log(req.body.review_id)
    Axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_API_REVIEW_RATING_KEY
    var url = `${process.env.REACT_APP_API_REVIEW_HELPFUL}/${req.body.review_id}/helpful`

    Axios.put(url)
      .then((result) => {
        //console.log('here', result)
        res.sendStatus(204)
      })
      .catch((err) => {
        console.log('mark helpful error: ', err)
        res.send(err)
      })
  },
  report_review: (req, res) => {
    console.log(req.body.review_id)
    Axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_API_REVIEW_RATING_KEY
    var url = `${process.env.REACT_APP_API_REVIEW_HELPFUL}/${req.body.review_id}/report`
    Axios.put(url)
      .then((result) => {
        //console.log('here', result)
        res.sendStatus(204)
      })
      .catch((err) => {
        console.log('report review error: ', err)
        res.send(err)
      })
  },

}