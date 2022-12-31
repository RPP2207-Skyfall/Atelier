const Axios = require('axios');
require("dotenv").config();

module.exports = {
  getProductQA: (req, res) => {
  var url = process.env.REACT_APP_API_QA_URL;
  var requestOption = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": process.env.REACT_APP_API_QA_KEY
    },
    params: {
      product_id: req.body.product_id,
      count: 15
    }
  };
  Axios.get(url, requestOption)
    .then(result => {
      res.send(result.data);
    })
    .catch(err => {
      console.log("Err: ", err);
      res.send(err);
    })
  }
};
