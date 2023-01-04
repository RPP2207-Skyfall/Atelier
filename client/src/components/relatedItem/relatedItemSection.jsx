
import React, { useRef, useState, useEffect } from 'react';
import OutfitList from './parts/Outfit/OutfitList.jsx';
// import RelatedList from './parts/RelatedItem/RelatedList.jsx';
import Axios from 'axios';

let pickIndex = 0;
let offsetCarousel = 0;
let childWidth = 0;
let childLength = 0;
let cardToShow = 4;

let OutfitPickIndex = 1;
let OutfitOffsetCarousel = 0;
let OutfitChildWidth = 0;
let OutfitChildLength = 0;


const RelatedItem = (props) => {
  const mainItemId = props.CurrentItemID
  const [oldID, setOldID] = useState(props.CurrentItemID)
  const [relatedList, updateRelatedList] = useState([])

  //arrow show
  const [leftArr, setLeftArr] = useState(false);
  const [rightArr, setRightArr] = useState(false);

  const [OutfitLeftArr, setOutfitLeftArr] = useState(false);
  const [OutfitRightArr, setOutfitRightArr] = useState(false);

  useEffect(() => {
    // console.log('rerender secection')
    getRelatedID(mainItemId)
    if (props.outfitList.length > 4) {
      setOutfitRightArr(true)
    }
    //use .length directly avoid state.
  }, [])

  // update ID render
  useEffect(() => {
    if (mainItemId !== oldID) {
      console.log('update ID useEffect')
      getRelatedID(mainItemId)
      setOldID(mainItemId)
      while (pickIndex >= -1) {
        prevSlide()
        pickIndex -= 1
      }
      if (props.outfitList.length > 4) {
        setOutfitRightArr(true)
        setOutfitLeftArr(false)
      } else {
        setOutfitRightArr(false)
        setOutfitLeftArr(false)
      }
    }
    getRelatedID(mainItemId)

  }, [mainItemId])

  const getRelatedID = async (mainID) => {
    const promise = await Axios.get('/relateItemsID', { params: { id: mainID } })
    Promise.resolve(promise)
      .then((response => {
        // console.log(response.data)
        if (response.data.length > 4) {
          setRightArr(true)
        }
        updateRelatedList(response.data)
      }))
      .catch((err) => {
        console.log(err.message)
      })
  };

  //related arrow func
  const myCarousel = useRef(null);
  const carouselOutbox = useRef(null);

  const prevSlide = () => {
    // console.log(pickIndex);
    if (pickIndex > 0) {
      pickIndex = pickIndex - 1;
      offsetCarousel = offsetCarousel - childWidth;
      myCarousel.current.style = 'transform: translateX(' + (0 - offsetCarousel) + 'px' + ')';
      setRightArr(true)

      if (pickIndex > 0) {
        setLeftArr(true)
      } else {
        setLeftArr(false)
      }
    }
  }

  const nextSlide = () => {
    childLength = myCarousel.current.childNodes.length; // 用來計算終點
    childWidth = carouselOutbox.current.offsetWidth / cardToShow;
    // console.log('childLength', childLength)
    // console.log('childWidth', childWidth)
    // （選取的的Card Index + 預設顯示數) 小於 Carousel 終點
    if ((pickIndex + cardToShow) < (childLength)) { // 正式的時候把 +1 拿掉
      pickIndex = pickIndex + 1;
      offsetCarousel = offsetCarousel + childWidth;
      myCarousel.current.style = 'transform: translateX(' + (0 - offsetCarousel) + 'px' + ')';
      setLeftArr(true);

      if ((pickIndex + cardToShow) === (childLength)) {
        setRightArr(false)
      } else {
        setRightArr(true)
      }
    }
  }

  //outfit arrow func

  const outfitCarousel = useRef(null);
  const outfitCarouselOutbox = useRef(null);

  const outfitPrevSlide = () => {
    // console.log(pickIndex);
    if (OutfitPickIndex > 1) {
      OutfitPickIndex = OutfitPickIndex - 1;
      OutfitOffsetCarousel = OutfitOffsetCarousel - OutfitChildWidth;
      outfitCarousel.current.style = 'transform: translateX(' + (0 - OutfitOffsetCarousel) + 'px' + ')';
      setOutfitRightArr(true)

      if (OutfitPickIndex > 1) {
        setOutfitLeftArr(true)
      } else {
        setOutfitLeftArr(false)
      }
    }
  }

  const outfitNextSlide = () => {
    OutfitChildLength = outfitCarousel.current.childNodes.length; // 用來計算終點
    OutfitChildWidth = outfitCarouselOutbox.current.offsetWidth / cardToShow;
    console.log('childLength', childLength)
    console.log('childWidth', childWidth)
    // （選取的的Card Index + 預設顯示數) 小於 Carousel 終點
    if ((OutfitPickIndex + cardToShow) < (OutfitChildLength + 1)) { // 正式的時候把 +1 拿掉
      OutfitPickIndex = OutfitPickIndex + 1;
      OutfitOffsetCarousel = OutfitOffsetCarousel + OutfitChildWidth;
      outfitCarousel.current.style = 'transform: translateX(' + (0 - OutfitOffsetCarousel) + 'px' + ')';
      setOutfitLeftArr(true);
      if ((OutfitPickIndex + cardToShow) === (OutfitChildLength + 1)) {
        setOutfitRightArr(false)
      } else {
        setOutfitRightArr(true)
      }
    }
  }

  //Error Boundary --- Customize it as you go
  if (props.CurrentItemID === undefined) {
    throw new Error ('no CurrentItemID detected');
  }

  return (
    <div className="main-container carousel-style">
      <h5>RELATED PRODUCTS</h5>
      <section className="carousel-upper">
        {/* arrw */}
        {leftArr ? <span className="left-arrow" onClick={() => prevSlide()}></span> : <></>}
        {rightArr ? <span className="right-arrow" onClick={() => nextSlide()}></span> : <></>}
        <div className="carousel" ref={carouselOutbox}>
          <OutfitList ref={myCarousel} relatedList={relatedList} outfitList={props.outfitList} toggleStar={props.toggleStar} mainItemId={mainItemId} outfit={false} updateCurrentItem={props.updateCurrentItem} />
        </div>
      </section>
      <h5>YOUR OUTFIT</h5>
      {/* <p>{JSON.stringify(props.outfitList)}</p> */}
      <section className="carousel-upper">
        {OutfitLeftArr ? <span className="left-arrow" onClick={() => outfitPrevSlide()}></span> : <></>}
        {OutfitRightArr ? <span className="right-arrow" onClick={() => outfitNextSlide()}></span> : <></>}
        <div className="carousel" ref={outfitCarouselOutbox}>
          <OutfitList ref={outfitCarousel} outfitList={props.outfitList} toggleStar={props.toggleStar} mainItemId={mainItemId} outfit={true} updateCurrentItem={props.updateCurrentItem} />
        </div>
      </section>
    </div>
  )
}

export default RelatedItem;