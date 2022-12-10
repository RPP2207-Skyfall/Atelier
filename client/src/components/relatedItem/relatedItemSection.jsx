
import React, { useState, useEffect } from 'react';
import OutfitList from './parts/Outfit/OutfitList.jsx';
import RelatedList from './parts/RelatedItem/RelatedList.jsx';
import axios from 'axios';



function RelatedItem() {


  const [outfit, toggleOutfit] = useState([71697, 71705, 71700]);


  const updateList = (idArr) => {
    toggleOutfit (idArr)
    console.log('parent state', outfit)
  }

  useEffect (()=> {
    console.log('outfit render')
  }, [outfit])
  // if (Array.isArray(outfit)) {
  //   var outfitArr = outfit
  // } else {
  //   var outfitArr = []
  // }



  return (
    <div className="main-container carousel-style">
      <section className="carousel-upper">
      <h5>RELATED PRODUCTS</h5>
      <RelatedList outfitList = {outfit} toggleOutfit = {updateList}/>
      </section>
      <h5>YOUR OUTFIT</h5>
      <section className="carousel-upper">
      <OutfitList outfitList = {outfit} toggleOutfit = {updateList}/>
      </section>
    </div>
  )
}

export default RelatedItem;