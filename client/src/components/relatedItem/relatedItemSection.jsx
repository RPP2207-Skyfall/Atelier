import React, { useState, useEffect } from 'react';
import OutfitList from './parts/Outfit/OutfitList.jsx';
import RelatedList from './parts/RelatedItem/RelatedList.jsx';
import axios from 'axios';



function RelatedItem() {


  const [outfit, toggleOutfit] = useState([71703, 71699, 71702]);


  return (
    <div className="main-container carousel-style">
      <section className="carousel-upper">
      <h5>RELATED PRODUCTS</h5>
      <RelatedList toggleOutfit = {toggleOutfit}/>
      </section>
      <h5>YOUR OUTFIT</h5>
      <section className="carousel-upper">
      <OutfitList outfitList = {outfit} toggleOutfit = {toggleOutfit}/>
      </section>
    </div>
  )
}

export default RelatedItem;