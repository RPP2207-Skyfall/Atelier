const Axios = require('axios');
require("dotenv").config();


exports.getImageAndPrice = (req,res) => {
  var ID = req.query.id;
  // console.log(ID)
  const url = process.env.REACT_APP_API_OVERVIEW_URL + `products/${ID}/styles`;
  var requestOption = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": process.env.REACT_APP_API_OVERVIEW_TOKEN
    }
  }
  Axios.get(url, requestOption)
    .then((response) => {
      // console.log('first image call', response.data.results[0].photos[0].thumbnail_url)
      // only send back first style, first photo thumbnail
      var thumbnails = response.data.results[0].photos
      var originalPrice = response.data.results[0].original_price
      var salePrice = response.data.results[0].sale_price

      // let thumbnails = response.data.results[0].photos[0].thumbnail_url;
      return res.status(200).send([thumbnails, originalPrice, salePrice])
    })
    .catch((err) => {
      console.error(err);
    })
}