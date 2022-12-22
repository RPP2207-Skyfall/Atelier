import React, { useState, useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';

const OutfitList = (props) => {
  const mainItemID = props.mainItemId

  // console.log('Outfitlist', props.outfitList)
  if (props.outfitList.length === 0 && props.outfit) {
    return (
      <div className="carousel-container">
      {props.outfit && <div className="carousel-box" onClick= {()=>{props.toggleStar(mainItemID, props.outfitList)}}></div>}
    </div>
    )
  } else {
    return (
    <div className="carousel-container">
      {props.outfit && <div className="carousel-box" onClick= {()=>{props.toggleStar(mainItemID,props.outfitList)}}></div>}
      {props.outfit && props.outfitList.map((item, index) =>
        <OutfitCard item= {item} key= {index} outfitList = {props.outfitList} toggleStar = {props.toggleStar} outfit = {props.outfit} updateCurrentItemID = {props.updateCurrentItemID}/>
      )}
      {!props.outfit && props.relatedList.map((item, index) =>
        <OutfitCard item= {item} key= {index} outfitList = {props.outfitList} toggleStar = {props.toggleStar} outfit = {props.outfit} updateCurrentItemID = {props.updateCurrentItemID}/>
      )}
    </div>
    )
  }
}



export default OutfitList;