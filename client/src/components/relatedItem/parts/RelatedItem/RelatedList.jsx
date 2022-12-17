import React, { useState, useEffect } from 'react';
import RelatedCard from './RelatedCard.jsx';
import Axios from 'axios';

const RelatedList = (props) => {

const [relatedList, updateRelatedList] = useState(props.relatedList)

  useEffect (()=> {
    // updateRelatedList(props.relatedList)
    console.log('passing from parent', props.relatedList)
    console.log('local state', relatedList)
  }, [])

  if (relatedList.length === 0) {
    return (
      <p>Rendering</p>
    )
  } else {
    return (
    <div className="carousel-container">
      {relatedList.map((item, index) =>
      <RelatedCard item= {item} key= {index} id= {index}/>
      )}
    </div>
    )

  }
}


export default RelatedList;