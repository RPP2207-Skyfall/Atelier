require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000
const Axios = require('axios')

app.use(express.json());

app.use(express.static(path.join(__dirname, '/../client/dist')));

// app.listen(process.env.PORT);
// console.log(`Server listening at http://localhost:${process.env.PORT}`);


//API use for Related Item

app.get('/relateItems', (req, res) => {
  var requestOption = {
    headers: {
      "Authorization": process.env.REACT_APP_API_OVERVIEW_TOKEN
    }
  }
  Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${ID}`, requestOption)
  .then(idList => {
    // console.log(res.data)
    return res.status(200).send(idList)
  })
  .catch(err => {
    console.log("Err: ", err)
  })
})

app.get('/rating', (req, res) => {
  var ID = req.data
  var ratingNum = 0;
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
      // console.log('aveRating', averageRate)
      ratingNum = averageRate;
      return averageRate;
    })
    .catch(err => {
      console.log("Err: ", err)
    })
  return res.status(200).send(ratingNum);
})

app.get('images', (req,res) => {
  var ID = req.data
  const url = process.env.REACT_APP_API_OVERVIEW_URL + `products/${ID}/styles`;
  fetch(url,
    {
      method: "GET",
      headers:
      {
        "Content-Type": "application/json",
        "Authorization": process.env.REACT_APP_API_OVERVIEW_TOKEN
      }
    }
  )
    .then(res => res.json())
    .then((data) => {
      // console.log(data.results[0].photos);
      let thumbnails = data.results[0].photos;
      res.status(200).send(thumbnails[0].thumbnail_url)
    })
    .catch((err) => {
      console.error(err);
    })
})

/******************************************/





app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`)
})