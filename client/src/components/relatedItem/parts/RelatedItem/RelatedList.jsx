import React from 'react';
import RelatedCard from './RelatedCard.jsx';

const RelatedList = (props) => (
  <div className="carousel-container">
    <RelatedCard />
    <RelatedCard />
    <RelatedCard />
    <RelatedCard />
    <RelatedCard />

     {/* {props.list.map((item, index) =>
      <RelatedCard item= {item} key= {index} id= {index} />
    )} */}

  </div>
)



export default RelatedList;