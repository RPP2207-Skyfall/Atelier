const Axios = require('axios');
require("dotenv").config();

exports.getItemDetails = (req,res) => {
  var ID = req.query.id;
  var requestOption = {
    headers: {
      "Authorization": process.env.REACT_APP_API_OVERVIEW_TOKEN
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


exports.getRelatedMetaData = async (req,res) => {
  var ID = req.query.id;
  var requestOption = {
    headers: {
      "Authorization": process.env.REACT_APP_API_OVERVIEW_TOKEN
    }
  }
  await Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${ID}/related`, requestOption)
  .then((result) => {
    var idArr = result.data;
    idArr.unshift(Number(ID))
    // console.log('idArr', idArr)
    return idArr
  })
  .then(async (idArr) => {
    //get details
    var itemDetails = [];
    for (var x = 0; x < idArr.length; x ++) {
      await Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${idArr[x]}`, requestOption)
      .then(result => {
        var detail = result.data;
        itemDetails.push(detail)
      })
    }
    return itemDetails
  })
  .then(async (itemDetails) => {
    //get images and price
    for (var x = 0; x < itemDetails.length; x ++) {
      var id = itemDetails[x].id
      await Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/styles`, requestOption)
      .then(response => {
        var thumbnails = response.data.results[0].photos
        var originalPrice = response.data.results[0].original_price
        var salePrice = response.data.results[0].sale_price
        itemDetails[x].thumbnails = thumbnails
        itemDetails[x].originalPrice = originalPrice
        itemDetails[x].salePrice = salePrice
      })
    }
    return itemDetails
  })
  .then(async (itemDetails) =>{
    //get rating
    for (var x = 0; x < itemDetails.length; x ++) {
      var id = itemDetails[x].id
      await Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=${id}`, requestOption)
      .then(rating => {
        const rateObj = rating.data.ratings;
        var numOfRate = 0;
        var points = 0;
        for (var key in rateObj) {
          points += (key * rateObj[key]);
          numOfRate += Number(rateObj[key]);
        }
        var averageRate = Math.round(points / numOfRate * 10) / 10;
        itemDetails[x].rating = averageRate
      })
    }
    res.status(200).send(itemDetails)
  })
  .catch(err => {
    console.log("Err: ", err)
  })
}

