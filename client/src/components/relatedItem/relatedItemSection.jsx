
import React, { useRef, useState, useEffect } from 'react';
import OutfitList from './parts/Outfit/OutfitList.jsx';
// import RelatedList from './parts/RelatedItem/RelatedList.jsx';
import Axios from 'axios';

let pickIndex = 0;
let offsetCarousel = 0;
let childWidth = 0;
let childLength = 0;
let cardToShow = 4;

const RelatedItem = (props) => {
  const mainItemId = props.CurrentItemID
  const [relatedList, updateRelatedList] = useState([])

  //arrow show
  const [leftArr, setLeftArr] = useState(false);
  const [rightArr, setRightArr] = useState(true);


  useEffect (()=> {
    // console.log('rerender secection')
    getRelatedID(mainItemId)
    //use .length directly avoid state.
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

  //arrow func
  const myCarousel = useRef(null);
  const carouselOutbox = useRef(null);

  const prevSlide = () => {
    console.log(pickIndex);
    if(pickIndex > 0) {
      pickIndex = pickIndex - 1;
      offsetCarousel = offsetCarousel - childWidth;
      myCarousel.current.style = 'transform: translateX(' + ( 0 - offsetCarousel ) + 'px' + ')';
      setRightArr(true)

      if(pickIndex > 0) {
        setLeftArr(true)
      } else {
        setLeftArr(false)
      }
    }
  }

  const nextSlide = () => {
    childLength = myCarousel.current.childNodes.length; // 用來計算終點
    childWidth = carouselOutbox.current.offsetWidth / cardToShow;
    console.log('childLength', childLength)
    console.log('childWidth', childWidth)
    // （選取的的Card Index + 預設顯示數) 小於 Carousel 終點
    if((pickIndex + cardToShow) < (childLength)) { // 正式的時候把 +1 拿掉
      pickIndex = pickIndex + 1;
      offsetCarousel = offsetCarousel + childWidth;
      myCarousel.current.style = 'transform: translateX(' + ( 0 - offsetCarousel ) + 'px' + ')';
      setLeftArr(true);

      if((pickIndex + cardToShow) === (childLength )) {
        setRightArr(false)
      } else {
        setRightArr(true)
      }
    }
  }



  return (
    <div className="main-container carousel-style">
      <h5>RELATED PRODUCTS</h5>
      <section className="carousel-upper">
      {/* arrw */}
      { leftArr ? <span className="left-arrow" onClick={() => prevSlide()}></span> : <></> }
      { rightArr ? <span className="right-arrow" onClick={() => nextSlide()}></span> : <></> }
        <div className="carousel" ref = { carouselOutbox }>
          <OutfitList ref = { myCarousel } relatedList = {relatedList} outfitList = {props.outfitList} toggleStar = {props.toggleStar} mainItemId = {mainItemId} outfit = {false} updateCurrentItemID = {props.updateCurrentItemID}/>
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