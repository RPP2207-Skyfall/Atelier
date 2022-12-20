import React, { useState, useEffect } from 'react';
import RelatedCard from './RelatedCard.jsx';
import Axios from 'axios';

const RelatedList = (props) => {

// const [relatedList, updateRelatedList] = useState([])

//   useEffect (()=> {
//     updateRelatedList(props.relatedIDArr)
//     // console.log('passing from parent', props.relatedList)
//     // console.log('local state', relatedList)
//   }, [relatedList])

  if (props.relatedIDArr.length === 0) {
    return (
      <p>Rendering</p>
    )
  } else {
    return (
    <div className="carousel-container">
      {props.relatedIDArr.map((item, index) =>
      <RelatedCard item= {item} key= {index} outfitList = {props.outfitList} toggleStar = {props.toggleStar} mainItemId = {props.mainItemId}/>
      )}
    </div>
    )

  }
}


export default RelatedList;