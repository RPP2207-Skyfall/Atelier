import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import Star from './../Star/relateStarRating.jsx';

const OutfitCard = (props) => {
  const id = props.item
  const [detail, setDetail] = useState([]);
  const [imageList, setImage] = useState([]);
  const [rating, setRating] = useState(0);


  useEffect(() => {
    getRelatedDetails(id);
    getImages(id);
    getRating(id);
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
        // console.log(data.results[0].photos);

        let thumbnails = data.results[0].photos;


        setImage(thumbnails[0].thumbnail_url)

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
      setRating (averageRate)
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

  // const toggleID = () => {
  //   console.log('check outfitList', props.outfit)
  //     var index = props.outfit.indexOf(id)
  //     if (index === -1) {
  //       var newList = props.outfit
  //       newList.push(id)
  //       console.log('after add', newList)
  //       props.toggleOutfit(newList)
  //     } else {
  //       var newList = props.outfit
  //       newList.splice(index, 1)
  //       console.log('after remove', newList)
  //       props.toggleOutfit(newList)
  //     }
  //   }



  if (imageList.length === 0 || detail.length === 0 || rating === 0) {
    return (
      <p>Rendering</p>
    )
  } else {
    // console.log(id, imageList[0].thumbnail_url)
    return (
      <div className="carousel-box">
      <img className = "image-box" src={imageList} alt="style" />
      <button className="star-btn" onClick= {()=>{toggleID(id)}}>X</button>
      <div className="category-box">
        <div className="category-title">{detail.category}</div>
        <div className="category-wrapper">
          <p>{detail.name}</p>
          <div className="price-box">
            ${detail.default_price}
          </div>
          <div className="star-box">
            <Star rating={rating}/>
          </div>
        </div>
      </div>
    </div>
    )
  }
}



export default OutfitCard;