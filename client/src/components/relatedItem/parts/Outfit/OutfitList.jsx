import React, { useState, useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';

const OutfitList = (props) => {
  const mainItemID = props.mainItemId

  // console.log('Outfitlist', props.outfitList)
  if (props.outfitList.length === 0) {
    return (
      <div className="carousel-container" data-testid= "outfitList">
        <div className="carousel-box" onClick= {()=>{props.toggleStar(mainItemID, props.outfitList)}}></div>
      </div>
    )
  } else {
    return (
    <div className="carousel-container" data-testid= "outfitList">
      <div className="carousel-box" onClick= {()=>{props.toggleStar(mainItemID,props.outfitList)}}>
      </div>
      {props.outfitList.map((item, index) =>
        <OutfitCard item= {item} key= {index} outfitList = {props.outfitList} toggleStar = {props.toggleStar}/>
      )}
    </div>
    )
  }
}



export default OutfitList;