import React from 'react';
import OutfitCard from './OutfitCard.jsx';

const OutfitList = (props) => (
  <div className="carousel-container">
    <OutfitCard />
    <OutfitCard />
    <OutfitCard />
    <OutfitCard />
    <OutfitCard />

     {/* {props.list.map((item, index) =>
      <OutfitCard item= {item} key= {index} id= {index} />
    )} */}

  </div>
)



export default OutfitList;