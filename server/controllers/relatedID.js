const Axios = require('axios');
require("dotenv").config();


exports.getRelatedItemsID = (req, res) => {
  var requestOption = {
    headers: {
      "Authorization": process.env.REACT_APP_API_OVERVIEW_TOKEN,
      "Accept-Encoding": 'gzip',
      "Content-Encoding": 'gzip'
    }
  }
  var ID = req.query.id
  Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${ID}/related`, requestOption)
    .then(result => {
      // console.log('getRelatedItemsID run')
      return res.status(200).send(result.data)
    })
    .catch(err => {
      console.log("Err: ", err)
    })
}

