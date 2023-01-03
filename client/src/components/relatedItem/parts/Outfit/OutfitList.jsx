import React, { forwardRef, useState, useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';
import Axios from 'axios';

const OutfitList = forwardRef((props, carouselRef) => {
  const mainItemID = props.mainItemId
  const [mainFeature, updateMainFeature] = useState([])

  useEffect(() => {
    getMainFeature(mainItemID)
    // console.log(props)
  }, [])

  const getMainFeature = async (id) => {
    await Axios.get('/getItemDetails', { params: { id: id } })
      .then((response) => {
        updateMainFeature(response.data)
        // console.log(response.data)
      })
  }

  // console.log('Outfitlist', props.outfitList)
  if (props.outfitList.length === 0 && props.outfit) {
    return (
      <div className="carousel-container" ref={carouselRef}>
        {props.outfit &&
          <div className="carousel-box" onClick={() => { props.toggleStar(mainItemID, props.outfitList) }}>
            <div className="carousel-center">
              <div><h1>+</h1></div>
              <div>Add Current Item</div>
            </div>
          </div>}
      </div>
    )
  } else {
    return (
      <div className="carousel-container" ref={carouselRef}>
        {props.outfit &&
          <div className="carousel-box" onClick={() => { props.toggleStar(mainItemID, props.outfitList) }}>
            <div className="carousel-center">
              <div><h1>+</h1></div>
              <div>Add Current Item</div>
            </div>
          </div>}
        {props.outfit && props.outfitList.map((item, index) =>
          <OutfitCard item={item} key={index} outfitList={props.outfitList} toggleStar={props.toggleStar} outfit={props.outfit} updateCurrentItem={props.updateCurrentItem} mainFeature={mainFeature} />
        )}
        {!props.outfit && props.relatedList.map((item, index) =>
          <OutfitCard item={item} key={index} outfitList={props.outfitList} toggleStar={props.toggleStar} outfit={props.outfit} updateCurrentItem={props.updateCurrentItem} mainFeature={mainFeature} />
        )}
      </div>
    )
  }
})



export default OutfitList;