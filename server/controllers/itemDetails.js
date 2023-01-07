const Axios = require('axios');
require("dotenv").config();


exports.getRelatedMetaData = async (req, res) => {
  var ID = req.query.id;
  // console.log('ID', ID)
  var requestOptionOne = {
    headers: {
      "Authorization": process.env.REACT_APP_API_REVIEW_RATING_KEY,
      "Content-Encoding": 'gzip'
    }
  }
  var requestOptionTwo = {
    headers: {
      "Authorization": process.env.REACT_APP_API_OVERVIEW_TOKEN,

      "Content-Encoding": 'gzip'
    }
  }
  var requestOptionThree = {
    headers: {
      "Authorization": process.env.REACT_APP_API_QA_KEY,
      "Content-Encoding": 'gzip'
    }
  }
  var requestOptionFour = {
    headers: {
      "Authorization": process.env.REACT_APP_API_RELATED_TOKEN,
      "Content-Encoding": 'gzip'
    }
  }

  await Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${ID}/related`, requestOptionOne)
    .then((result) => {
      var idArr = result.data;
      idArr.unshift(Number(ID))
      // console.log('idArr', idArr)
      return idArr
    })
    .then((idArr) => {
      //get details
      var promiseArr = [];
      for (var x = 0; x < idArr.length; x++) {
        id = idArr[x]
        promiseArr.push(Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}`, requestOptionTwo)
          .then((response) => {
            return response.data
          })
          .catch(err => {
            console.log("Err: ", err)
          }))
        promiseArr.push(Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/styles`, requestOptionThree)
          .then((response) => {
            return response.data
          })
          .catch(err => {
            console.log("Err: ", err)
          }))
        promiseArr.push(Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=${id}`, requestOptionFour)
          .then((response) => {
            var rateObj = response.data.ratings;
            return rateObj
          })
          .catch(err => {
            console.log("Err: ", err)
          }))
      }
      return promiseArr
    })
    .then(async (promiseArr) => {
      var metaData = await Promise.all(promiseArr)
      var returnData = [];
      for (var x = 0; x < metaData.length; x += 3) {
        var obj = metaData[x];
        obj.thumbnails = metaData[x + 1].results[0].photos || null
        obj.originalPrice = metaData[x + 1].results[0].original_price || null
        obj.salePrice = metaData[x + 1].results[0].sale_price || null
        var rateObj = metaData[x + 2];
        var numOfRate = 0;
        var points = 0;
        for (var key in rateObj) {
          points += (key * rateObj[key]);
          numOfRate += Number(rateObj[key]);
        }
        var averageRate = Math.round(points / numOfRate * 10) / 10;
        obj.rating = averageRate
        returnData.push(obj)
      }
      res.status(200).send(returnData)
    })
}

exports.getOutfitMetaData = async (req, res) => {
  var idArr = req.query["idArr"]
  // console.log(req.query);
  var requestOptionOne = {
    headers: {
      "Authorization": process.env.REACT_APP_API_REVIEW_RATING_KEY,
      "Content-Encoding": 'gzip'
    }
  }
  var requestOptionTwo = {
    headers: {
      "Authorization": process.env.REACT_APP_API_QA_KEY,
      "Content-Encoding": 'gzip'
    }
  }
  var requestOptionThree = {
    headers: {
      "Authorization": process.env.REACT_APP_API_OVERVIEW_TOKEN,
      "Content-Encoding": 'gzip'
    }
  }
  var promiseArr = [];
  for (var x = 0; x < idArr.length; x++) {
    id = idArr[x]
    promiseArr.push(Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}`, requestOptionOne)
      .then((response) => {
        return response.data
      })
      .catch(err => {
        console.log("Err4: ", err)
      }))
    promiseArr.push(Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/styles`, requestOptionTwo)
      .then((response) => {
        return response.data
      })
      .catch(err => {
        console.log("Err5: ", err)
      }))
    promiseArr.push(Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=${id}`, requestOptionThree)
      .then((response) => {
        var rateObj = response.data.ratings;
        return rateObj
      })
      .catch(err => {
        console.log("Err6: ", err)
      }))
  }
  var metaData = await Promise.all(promiseArr)
  var returnData = [];
  for (var x = 0; x < metaData.length; x += 3) {
    var obj = metaData[x];
    obj.thumbnails = metaData[x + 1].results[0].photos || null
    obj.originalPrice = metaData[x + 1].results[0].original_price || null
    obj.salePrice = metaData[x + 1].results[0].sale_price || null
    var rateObj = metaData[x + 2];
    var numOfRate = 0;
    var points = 0;
    for (var key in rateObj) {
      points += (key * rateObj[key]);
      numOfRate += Number(rateObj[key]);
    }
    var averageRate = Math.round(points / numOfRate * 10) / 10;
    obj.rating = averageRate
    returnData.push(obj)
  }
  res.status(200).send(returnData)
}

