const Axios = require('axios');
require("dotenv").config();

exports.getItemDetails = (req, res) => {
  var ID = req.query.id;
  var requestOption = {
    headers: {
      "Authorization": process.env.REACT_APP_API_OVERVIEW_TOKEN,
      "Accept-Encoding": 'gzip',
      "Content-Encoding": 'gzip'
    }
  }
  Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${ID}`, requestOption)
    .then(response => {
      // console.log(response.data)
      return res.status(200).send(response.data)
    })
    .catch(err => {
      console.log("Err: ", err)
    })
}


