
import React, { useState, useEffect } from 'react';
import OutfitList from './parts/Outfit/OutfitList.jsx';
import RelatedList from './parts/RelatedItem/RelatedList.jsx';
import axios from 'axios';



function RelatedItem() {


  const [outfit, toggleOutfit] = useState([71703, 71699, 71702]);


  return (
    <div className="main-container carousel-style">
      <section className="carousel-upper">
<<<<<<< HEAD
      <h5>RELATED PRODUCTS</h5>
      <RelatedList toggleOutfit = {toggleOutfit}/>
=======
        <h5>RELATED PRODUCTS</h5>
        <RelatedList />
>>>>>>> master
      </section>
      <h5>YOUR OUTFIT</h5>
      <section className="carousel-upper">
<<<<<<< HEAD
      <OutfitList outfitList = {outfit} toggleOutfit = {toggleOutfit}/>
=======
        <OutfitList />
>>>>>>> master
      </section>
    </div>
  )
}

export default RelatedItem;