import React, { useState, useEffect } from 'react';
import Axios from 'axios'

const OutfitCard = (props) => {
  const id = props.item
  const [detail, setDetail] = useState([]);
  const [imageList, setImage] = useState([]);
  const [rating, setRating] = useState(0);


  useEffect(() => {
    getRelatedDetails(id);
    getRating(id);
    getImages(id);
    console.log('anythings', imageList)
   }, [])

  const getRelatedDetails = (ID) => {
    var requestOption = {
      headers: {
        "Authorization": process.env.REACT_APP_API_OVERVIEW_TOKEN
      }
      // params: {
      //   product_id: IDList[x],
      // }
    }
    Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${ID}`, requestOption)
    .then(res => {
      // console.log(res.data)
      setDetail(res.data)
    })
    .catch(err => {
      console.log("Err: ", err)
    })
  }

  const getImages = (ID) =>  {
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
        console.log(data.results[0].photos);

        let thumbnails = data.results[0].photos;

        let holder = [];
        let box = [];

        for (var i = 0; i < thumbnails.length; i++) {

          thumbnails[i].index = i;
          box.push(thumbnails[i]);

          if (box.length === 3) {
            holder.push(box);
            box = [];
          }
        }
        console.log('state image', data.results[0].photos)
        setImage(data.results[0].photos)
      })
      .catch((err) => {
        console.error(err);
      })
  }

  const getRating = (ID) => {
    var requestOption = {
      headers: {
        "Authorization": process.env.REACT_APP_API_OVERVIEW_TOKEN
      },
      // params: {
      //   product_id: ID,
      // }
    }
    Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=${ID}`, requestOption)
    .then(res => {
      // console.log('meta', res)
      const rateObj = res.data.ratings;
      var numOfRate = 0;
      var points = 0;
      for (var key in rateObj) {
        points += (key * rateObj[key]);
        numOfRate += Number(rateObj[key]);
      }
      var averageRate = Math.round(points / numOfRate * 10) / 10;
      // console.log('aveRating', averageRate)
      setRating(averageRate)
      return averageRate;
    })
    .then(averageRate => {
      $(document).ready(function() {
        // Gets the span width of the filled-ratings span
        // this will be the same for each rating
        var star_rating_width = $('.fill-ratings span').width();
        // Sets the container of the ratings to span width
        // thus the percentages in mobile will never be wrong
        $('.star-ratings').width(averageRate / 100);
      });
    })
    .catch(err => {
      console.log("Err: ", err)
    })
  }



  const content = (
    <div className="carousel-box">

      <button className="star-btn">X</button>
      <div className="category-box">
        <div className="category-title">{detail.category}</div>
        <div className="category-wrapper">
          <p>{detail.name}</p>
          <div className="price-box">
            ${detail.default_price}
          </div>
          <div className="star-box">
            ★★★★★
          </div>
        </div>
      </div>
    </div>
  )
  return content

}



export default OutfitCard;