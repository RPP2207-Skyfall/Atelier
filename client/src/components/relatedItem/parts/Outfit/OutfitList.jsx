import React, { useState, useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';

const OutfitList = (props) => {


  const toggleID = (id) => {
    console.log('current outfit list', props.outfitList)
      var index = props.outfitList.indexOf(id)
      if (index === -1) {
        var newList = props.outfitList
        newList.push(id)
        console.log('after add', newList)
        props.toggleOutfit(newList)
      } else {
        var newList = props.outfitList
        newList.splice(index, 1)
        console.log('after remove', newList)
        props.toggleOutfit(newList)
      }
    }

  // console.log('Outfitlist', props.outfitList)
  return (
  <div className="carousel-container" data-testid= "outfitList">
    <div className="carousel-box">
    </div>
    {props.outfitList.map((item, index) =>
      <OutfitCard item= {item} key= {index} id= {index} outfit = {props.outfitList} toggleID = {toggleID}/>
    )}
  </div>
  )
}



export default OutfitList;