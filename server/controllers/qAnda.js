const Axios = require('axios');
require("dotenv").config();

exports.getProductQA = (req, res) => {
  var url = process.env.REACT_APP_API_QA_URL;
  var sortedQA = [];
  var requestOption = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": process.env.REACT_APP_API_QA_KEY
    },
    params: {
      product_id: product_id
    }
  };
  Axios.get(url, requestOption)
    .then(res => {
      if (res.data.results.length > 0) {
        sortedQA = res.data.results.sort(function(a,b) {
          return (b['question_helpfulness'] - a['question_helpfulness']);
        }
        res.send(sortedQA));
      } else {
        res.send([]);
      }
    })
    .catch(err => {
      console.log("Err: ", err)
    })
};
