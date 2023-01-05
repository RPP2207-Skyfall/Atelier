import React, { forwardRef, useState, useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';
import Axios from 'axios';

const OutfitList = forwardRef((props, carouselRef) => {
  const mainItemDetail = props.mainItemDetail


  // outfit empty
  if (props.metaData.length === 0 && props.outfit) {
    return (
      <div className="carousel-container" ref={ carouselRef }>
      {props.outfit &&
        <div className="carousel-box" onClick= {()=>{props.toggleStar(mainItemDetail.id)}}>
          <div className = "carousel-center">
            <div><h1>+</h1></div>
            <div>Add Current Item</div>
          </div>
        </div>}
      </div>
    )
  // related empty
  } else if (props.metaData.length === 0 && !props.outfit){
    return (
      <div className="carousel-container" ref={ carouselRef }>
        <div className="carousel-box">
          <div className = "carousel-center">
            <div>No Related Item</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
    <div className="carousel-container" ref={ carouselRef }>
     {props.outfit &&
        <div className="carousel-box" onClick= {()=>{props.toggleStar(mainItemDetail.id)}}>
          <div className = "carousel-center">
            <div><h1>+</h1></div>
            <div>Add Current Item</div>
          </div>
        </div>}
      {props.outfit && props.metaData.map((item, index) =>
        <OutfitCard item= {item} key= {index} toggleStar = {props.toggleStar} updateCurrentItem = {props.updateCurrentItem} mainItemDetail = {props.mainItemDetail} outfit = {props.outfit}/>
      )}
      {!props.outfit && props.metaData.map((item, index) =>
        <OutfitCard item= {item} key= {index} toggleStar = {props.toggleStar} updateCurrentItem = {props.updateCurrentItem} mainItemDetail = {props.mainItemDetail} outfit = {props.outfit}/>
      )}
    </div>
    )
  }
})



export default OutfitList;