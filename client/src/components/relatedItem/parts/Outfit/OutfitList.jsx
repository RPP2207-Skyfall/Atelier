import React, { useState, useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';

const OutfitList = (props) => {
  // console.log('Outfitlist', props.outfitList)
  const content = (
  <div className="carousel-container">
    <div className="carousel-box">
    </div>

    {props.outfitList.map((item, index) =>
      <OutfitCard item= {item} key= {index} id= {index} outfit = {props.outfitList} toggleOutfit = {props.toggleOutfit}/>
    )}

  </div>
  )
  return content
}



export default OutfitList;