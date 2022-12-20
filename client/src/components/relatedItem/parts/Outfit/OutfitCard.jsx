import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import Star from './../Star/relateStarRating.jsx';

const OutfitCard = (props) => {
  const itemID = props.item
  const [detail, setDetail] = useState({});
  const [rating, setRating] = useState(0);
  const [featrueShow, toggleFeature] = useState (false)
  const [picLibrary, updatePicLibrary] = useState ([])
  const [currentPic, updateCurPic] = useState("")

  useEffect(() => {
    getDetails(itemID);
    getImage(itemID);
    getRating(itemID);
    console.log(itemID)
   }, [])

   const getDetails = async (id) => {
    await Axios.get('http://localhost:3000/getItemDetails', {params:{id: id}})
    .then((response) => {
      setDetail(response.data)
      // console.log("API detail", response.data)
      return response.data
    })
    .catch((err) => {
      console.error(err)
    })
  }


  const getImage = async (id) => {
  await Axios.get('http://localhost:3000/getFirstImage', {params:{id: id}})
    .then((response) => {
      if (response.data[0].thumbnail_url === null) {
        updateCurPic({thumbnail_url: "https://lyrictheatreokc.com/wp-content/uploads/2021/11/Ciao-Ciao-Image-Coming-Soon-500px.jpg"})
        return response.data
      } else {
        updatePicLibrary([response.data])
        updateCurPic(response.data[0])
        return response.data
      }
    })
    // .then((picArr) => {
    //   updateCurPic(picArr[0])
    // })
    .catch((err) => {
      console.error(err)
    })
  }


  const getRating = async (id) => {
    await Axios.get('http://localhost:3000/getRating', {params:{id: id}})
    .then((response) => {
      setRating(Number(response.data))
      // console.log('APIRate', response.data)
      // return (Number(response.data))
    })
    .catch((err) => {
      console.error(err)
    })
  }


  if (detail.length === 0 || rating === 0) {
    return (
      <p>Rendering</p>
    )
  } else {
    // console.log(id, imageList[0].thumbnail_url)
    return (
      <div className="carousel-box">
      <div className="carousel-bg-img" style={{ backgroundImage: "url('" + currentPic.thumbnail_url + "')" }} ></div>
      <button className="star-btn" onClick= {()=>{props.toggleStar(itemID, props.outfitList)}}>X</button>
      <div className="category-box">
        <div className="category-title">{detail.category}</div>
        <div className="category-wrapper">
          <p>{detail.name}</p>
          <div className="price-box">
            ${detail.default_price}
          </div>
          <div className="star-box">
            {rating}
            <Star rating={rating}/>
          </div>
        </div>
      </div>
    </div>
    )
  }
}



export default OutfitCard;