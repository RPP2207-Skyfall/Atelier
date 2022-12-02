import React, { useState, useEffect } from 'react';
import OutfitList from './parts/Outfit/OutfitList.jsx';
import RelatedList from './parts/RelatedItem/RelatedList.jsx';
import axios from 'axios';



function RelatedItem() {


  // const [info, getInfo] = useState([]);


  return (
    <div>
      <RelatedList />
      <OutfitList />
    </div>
  )
}

export default RelatedItem;