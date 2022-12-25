const Axios = require('axios');
require("dotenv").config();

exports.getRating = (req, res) => {
  var ID = req.query.id
  var requestOption = {
    headers: {
      "Authorization": process.env.REACT_APP_API_OVERVIEW_TOKEN
    }
  }
  Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=${ID}`, requestOption)
    .then(rating => {
      // console.log('meta', res)
      const rateObj = rating.data.ratings;
      var numOfRate = 0;
      var points = 0;
      for (var key in rateObj) {
        points += (key * rateObj[key]);
        numOfRate += Number(rateObj[key]);
      }
      var averageRate = Math.round(points / numOfRate * 10) / 10;
      //console.log('aveRating', averageRate)
      //notice the returning data is String
      return res.status(200).send(String(averageRate))
    })
    .catch(err => {
      console.log("Err: ", err)
    })
}

