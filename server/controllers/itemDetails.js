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
  // console.log('ID', ID)
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
    var itemPromise = idArr.map(async (id) => {
      const response = await Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}`, requestOption)
      return response.data
    })
    
    return itemPromise
    })
    .then(async (itemPromise) => {
      //get image and price
      var itemDetails = await Promise.all(itemPromise)
      var itemPromise = itemDetails.map(async (obj) => {
        var id = obj.id
        const photoAndPrice = await Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/styles`, requestOption)
        var thumbnails = photoAndPrice.data.results[0].photos
        var originalPrice = photoAndPrice.data.results[0].original_price
        var salePrice = photoAndPrice.data.results[0].sale_price
        obj.thumbnails = thumbnails
        obj.originalPrice = originalPrice
        obj.salePrice = salePrice
        return obj
      })
      return itemPromise
    })
    .then(async(itemPromise) => {
      var itemDetails = await Promise.all(itemPromise)
      var itemPromise = itemDetails.map(async (obj) => {
        var id = obj.id
        const rating = await Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=${id}`, requestOption)
        var rateObj = rating.data.ratings;
        var numOfRate = 0;
        var points = 0;
        for (var key in rateObj) {
          points += (key * rateObj[key]);
          numOfRate += Number(rateObj[key]);
        }
        var averageRate = Math.round(points / numOfRate * 10) / 10;
        obj.rating = averageRate
        return obj
      })
      return itemPromise
    })
    .then(async(itemPromise) => {
      var itemDetails = await Promise.all(itemPromise)
      res.status(200).send(itemDetails)
    })
  .catch(err => {
    console.log("Err: ", err)
  })
}


exports.getOutfitMetaData = async (req, res) => {
  var idArr = req.query["idArr"]
  // console.log(req.query);
  var requestOption = {
    headers: {
      "Authorization": process.env.REACT_APP_API_OVERVIEW_TOKEN
    }
  }

    //get details
    var itemPromise = idArr.map(async (id) => {
      const response = await Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}`, requestOption)
      return response.data
    })

    Promise.all(itemPromise)
    .then(async (itemPromiseSolve) => {
      //get image and price
      var itemDetails = itemPromiseSolve
      var itemPromise = itemDetails.map(async (obj) => {
        var id = obj.id
        const photoAndPrice = await Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/styles`, requestOption)
        var thumbnails = photoAndPrice.data.results[0].photos
        var originalPrice = photoAndPrice.data.results[0].original_price
        var salePrice = photoAndPrice.data.results[0].sale_price
        obj.thumbnails = thumbnails
        obj.originalPrice = originalPrice
        obj.salePrice = salePrice
        return obj
      })
      return itemPromise
    })
    .then(async(itemPromise) => {
      var itemDetails = await Promise.all(itemPromise)
      var itemPromise = itemDetails.map(async (obj) => {
        var id = obj.id
        const rating = await Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=${id}`, requestOption)
        var rateObj = rating.data.ratings;
        var numOfRate = 0;
        var points = 0;
        for (var key in rateObj) {
          points += (key * rateObj[key]);
          numOfRate += Number(rateObj[key]);
        }
        var averageRate = Math.round(points / numOfRate * 10) / 10;
        obj.rating = averageRate
        return obj
      })
      return itemPromise
    })
    .then(async(itemPromise) => {
      var itemDetails = await Promise.all(itemPromise)
      res.status(200).send(itemDetails)
    })
  .catch(err => {
    console.log("Err: ", err)
  })
}

