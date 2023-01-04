import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import Star from './../Star/relateStarRating.jsx';
import ComparingChart from './../PopUp/ComparingChart.jsx';
import SmallPicBox from './../PopUp/HoverPhoto.jsx';

const OutfitCard = (props) => {
  const itemDetail = props.item
  const [picLibrary, updatePicLibrary] = useState ([])
  const [currentPic, updateCurPic] = useState ({thumbnail_url: "https://lyrictheatreokc.com/wp-content/uploads/2021/11/Ciao-Ciao-Image-Coming-Soon-500px.jpg"})
  const [fearetureShow, toggleFeature] = useState (false)
  const originalPrice = props.item.originalPrice
  const salePrice = props.item.salePrice
  const sale = salePrice !== null

  useEffect(()=> {
    checkPicURL(props.item.thumbnails[0].thumbnail_url)
    updatePicLibrary(props.item.thumbnails)
  }, [])

  useEffect(()=> {
    checkPicURL(props.item.thumbnails[0].thumbnail_url)
    updatePicLibrary(props.item.thumbnails)

  }, [itemDetail])


  const featureCompare = () => {
    var show = fearetureShow
    toggleFeature(!show)
  }

  const setCurPhoto = (url) => {
    updateCurPic({thumbnail_url: url})
  }

  const checkPicURL = (itemURL) => {
    if (itemURL === null) {
      updateCurPic({thumbnail_url: "https://lyrictheatreokc.com/wp-content/uploads/2021/11/Ciao-Ciao-Image-Coming-Soon-500px.jpg"})
      updatePicLibrary([])
    } else {
      updateCurPic({thumbnail_url: props.item.thumbnails[0].thumbnail_url})
    }
  }

  if (itemDetail.length === 0 || itemDetail.rating === 0) {
    return (
      <p>Rendering</p>
    )
  } else {
    // console.log(id, imageList[0].thumbnail_url)
    return (
      <div className="carousel-box">
        <div className="carousel-bg-img" style={{ backgroundImage: "url('" + currentPic.thumbnail_url + "')" }} ></div>
        {props.outfit && <button className="star-btn" onClick= {()=>{props.toggleStar(itemDetail.id)}}>X</button>}
        {!props.outfit && <button className="star-btn" onClick= {() => {featureCompare()}}><img src="FillStar.png"></img></button>}
        <div className="sensor-box">
          <div  className="hidden-box">
          {picLibrary.map((item, index) =>
            <SmallPicBox item= {item} key= {index} setCurPhoto = {setCurPhoto}/>
          )}
          </div>
        </div>
        <div className="category-box">
          <div className="category-title" >{itemDetail.category}</div>
          <div className="category-wrapper" onClick= {()=>{props.updateCurrentItem(itemDetail.id, itemDetail.name)}}>
            <p>{itemDetail.name}</p>
            {/* <div className="price-box">
              ${detail.default_price}
            </div> */}
              {sale && <span className="price-box"><div><s>${originalPrice}</s></div> <div style={{color: 'red'}}>${salePrice}</div></span>}
              {!sale && <div className="price-box">${itemDetail.default_price}</div>}

            <div className="star-box">
              <Star rating={itemDetail.rating}/>
            </div>
          </div>
        </div>
        {fearetureShow && <ComparingChart toggleFeature = {toggleFeature} compareFeatureDetail = {itemDetail} mainItemDetail = {props.mainItemDetail}/>}
      </div>
    )
  }
}



export default OutfitCard;