import React, { useState, useEffect } from 'react';
import OutfitList from './parts/Outfit/OutfitList.jsx';
import RelatedList from './parts/RelatedItem/RelatedList.jsx';
import axios from 'axios';



function RelatedItem() {


  // const [info, getInfo] = useState([]);


  return (
    <div className="main-container carousel-style">
      <section className="carousel-upper">
      <h5>RELATED PRODUCTS</h5>
      <RelatedList />
      </section>
      <h5>RELATED PRODUCTS</h5>
      <section className="carousel-upper">
      <OutfitList />
      </section>
    </div>
  )
}

export default RelatedItem;