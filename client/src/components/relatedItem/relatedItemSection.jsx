
import React, { useRef, useState, useEffect } from 'react';
import OutfitList from './parts/Outfit/OutfitList.jsx';
// import RelatedList from './parts/RelatedItem/RelatedList.jsx';
import Axios from 'axios';



const RelatedItem = (props) => {
  const mainItemId = props.CurrentItemID
  const [relatedList, updateRelatedList] = useState([])
  //current first index
  const [pickIndex, setPickIndex] = useState(4);
  //total card
  const [childLength, setChildLength] = useState(0);
  //starting point
  const [offsetCarousel, seOffsetCarousel] = useState(0);
  //one card width
  const [childWidth, setChildWidth] = useState(210);


  useEffect (()=> {
    getRelatedID(mainItemId)
    setChildLength(relatedList.length);
  }, [])

  const getRelatedID = async (mainID) => {
    const promise = await Axios.get('http://localhost:3000/relateItemsID', { params: { id: mainID } })
    Promise.resolve(promise)
    .then((response => {
      // console.log(response.data)
      updateRelatedList(response.data)
    }))
    .catch ((err) => {
    console.log(err.message)
    })
  };

  // const prevSlide = () => {
  //   seOffsetCarousel( offsetCarousel - childWidth);
  //   const myCarousel = document.getElementById("carousel-container").current.style = 'transform: translateX(' + ( 0 - offsetCarousel ) + 'px' + ')';
  //   setPickIndex(pickIndex - 1);
  //   // console.log(pickIndex);
  //   // console.log(childLength);
  //   if(pickIndex  <= 0) {
  //     console.log("END");
  //   }
  // }

  // const nextSlide = () => {
  //   seOffsetCarousel( offsetCarousel + childWidth);
  //   const myCarousel = document.getElementById("carousel-container") = 'transform: translateX(' + ( 0 - offsetCarousel ) + 'px' + ')';
  //   setPickIndex(pickIndex + 1);
  //   console.log(pickIndex);
  //   console.log(childLength);

  //   if(pickIndex >= childLength) {
  //     console.log("END");
  //   }
  // }


  return (
    <div className="main-container carousel-style">
      <h5>RELATED PRODUCTS</h5>
      <section className="carousel-upper">
      {/* arrw */}
      <span className="left-arrow" ></span>
      <span className="right-arrow"></span>
      <OutfitList relatedList = {relatedList} outfitList = {props.outfitList} toggleStar = {props.toggleStar} mainItemId = {mainItemId} outfit = {false}/>
      </section>
      <h5>YOUR OUTFIT</h5>
      <p>{JSON.stringify(props.outfitList)}</p>
      <section className="carousel-upper">
      <OutfitList outfitList = {props.outfitList} toggleStar = {props.toggleStar} mainItemId = {mainItemId} outfit = {true}/>
      </section>
    </div>
  )
}

export default RelatedItem;