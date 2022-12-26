
import React, { useRef, useState, useEffect } from 'react';
import OutfitList from './parts/Outfit/OutfitList.jsx';
// import RelatedList from './parts/RelatedItem/RelatedList.jsx';
import Axios from 'axios';



const RelatedItem = (props) => {
  const mainItemId = props.CurrentItemID
  const [relatedList, updateRelatedList] = useState([])
  //current first index
  const [pickIndex, setPickIndex] = useState(props.outfit ? props.outfitList.length : relatedList.length);
  //total card (can call by props.outfitList.length or relatedList.length)
  const [childLength, setChildLength] = useState(0);
  //starting point
  const [offsetCarousel, seOffsetCarousel] = useState(880);
  //one card width
  const [childWidth, setChildWidth] = useState(210);

  const [rightArrShow, setRightArr] = useState(true);

  const [leftArrShow, setLeftArr] = useState(false);


  useEffect (()=> {
    getRelatedID(mainItemId)
    //use .length directly avoid state.
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



  return (
    <div className="main-container carousel-style">
      <h5>RELATED PRODUCTS</h5>
      <section className="carousel-upper">
      {/* arrw */}
      <span className="left-arrow" ></span>
      <span className="right-arrow"></span>
        <div className="carousel">
          <OutfitList relatedList = {relatedList} outfitList = {props.outfitList} toggleStar = {props.toggleStar} mainItemId = {mainItemId} outfit = {false} updateCurrentItemID = {props.updateCurrentItemID}/>
        </div>
      </section>
      <h5>YOUR OUTFIT</h5>
        {/* <p>{JSON.stringify(props.outfitList)}</p> */}
      <section className="carousel-upper">
        <div className="carousel">
        <OutfitList outfitList = {props.outfitList} toggleStar = {props.toggleStar} mainItemId = {mainItemId} outfit = {true} updateCurrentItemID = {props.updateCurrentItemID}/>
        </div>
      </section>
    </div>
  )
}

export default RelatedItem;