import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import Star from './../Star/relateStarRating.jsx';
import ComparingChart from './../PopUp/ComparingChart.jsx';
import SmallPicBox from './../PopUp/HoverPhoto.jsx';
import RelatedAPI from './../../RelatedAPI.js'

const OutfitCard = (props) => {
  const itemID = props.item
  const [detail, setDetail] = useState({});
  const [rating, setRating] = useState(0);
  const [fearetureShow, toggleFeature] = useState (false)
  const [picLibrary, updatePicLibrary] = useState ([])
  const [currentPic, updateCurPic] = useState("")
  const [starShow, toggleStar] = useState("emptyStar.png")
  const [price, setPrice] = useState([])
  const [sale, setSale] = useState(false)

  useEffect(() => {
    getDetails(itemID);
    getImageAndPrice(itemID);
    getRating(itemID);
    // checkOutfit(itemID, props.outfitList)
   }, [])

  const getDetails = async (id) => {
    await Axios.get('http://localhost:3000/getItemDetails', { params: { id: id } })
      .then((response) => {
        setDetail(response.data)
        // console.log("API detail", response.data)
        return response.data
      })
      .catch((err) => {
        console.error(err)
      })
  }


  const getImageAndPrice = async (id) => {
  await Axios.get('http://localhost:3000/getImageAndPrice', {params:{id: id}})
    .then((response) => {
      if (response.data[0][0].thumbnail_url === null) {
        updateCurPic({thumbnail_url: "https://lyrictheatreokc.com/wp-content/uploads/2021/11/Ciao-Ciao-Image-Coming-Soon-500px.jpg"})
        return response.data
      } else {
        updatePicLibrary(response.data[0])
        updateCurPic(response.data[0][0])
        setPrice([response.data[1], response.data[2]])
        // console.log(response.data[2])
        if (response.data[2] !== null) {
        setSale(true)
        }
        return response.data
      }
    })
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

  // const switchStar = (starShow) => {
  //   if (starShow === "FillStar.png") {
  //     toggleStar("emptyStar.png")
  //   } else {
  //     toggleStar("FillStar.png")
  //   }
  // }

  // const checkOutfit = (currentID, OutfitList)=>  {
  //   var index = OutfitList.indexOf(currentID)
  //   var newList = OutfitList
  //   if (index === -1) {
  //     toggleStar("emptyStar.png")
  //   } else {
  //     toggleStar("FillStar.png")
  //   }
  // }

  const featureCompare = () => {
    var show = fearetureShow
    toggleFeature(!show)
  }

  const setCurPhoto = (url) => {
    updateCurPic({thumbnail_url: url})
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
        {props.outfit && <button className="star-btn" onClick= {()=>{props.toggleStar(itemID)}}>X</button>}
        {!props.outfit && <button className="star-btn" onClick= {() => {featureCompare()}}><img src="FillStar.png"></img></button>}
        <div className="sensor-box">
          <div  className="hidden-box">
          {picLibrary.map((item, index) =>
            <SmallPicBox item= {item} key= {index} setCurPhoto = {setCurPhoto}/>
          )}
          </div>
        </div>
        <div className="category-box">
          <div className="category-title" >{detail.category}</div>
          <div className="category-wrapper" onClick= {()=>{props.updateCurrentItem(itemID, detail.name)}}>
            <p>{detail.name}</p>
            {/* <div className="price-box">
              ${detail.default_price}
            </div> */}
              {sale && <span className="price-box"><div><s>${price[0]}</s></div> <div style={{color: 'red'}}>${price[1]}</div></span>}
              {!sale && <div className="price-box">${detail.default_price}</div>}

            <div className="star-box">
              <Star rating={rating}/>
            </div>
          </div>
        </div>
        {fearetureShow && <ComparingChart toggleFeature = {toggleFeature} compareFeatureDetail = {detail} mainFeature = {props.mainFeature}/>}
      </div>
    )
  }
}



export default OutfitCard;