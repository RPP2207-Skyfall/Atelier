
import React, { useState, useEffect } from 'react';
import OutfitList from './parts/Outfit/OutfitList.jsx';
import RelatedList from './parts/RelatedItem/RelatedList.jsx';
import Axios from 'axios';



const RelatedItem = (props) => {

  const [relatedList, updateRelatedList] = useState([])
  const [relatedItemDetails, updateRelatedItemDetails] = useState([])
  const [relatedItemImages, updateRelatedItemImages] = useState([])
  const [relatedItemRating, updateRelatedItemRating] = useState([])



  const getRelatedID = async (mainID) => {
    try {
      const list = await Axios.get('http://localhost:3000/relateItemsID', { params: { id: mainID } })
      getRelatedDetails(list.data)
      updateRelatedList(list.data)
      getImage(list.data)
      getRating(list.data)
    } catch (err) {
      console.log(err.message)
    }
  };

  const getRelatedDetails = (relatedIDList) => {
    const promiseArr = relatedIDList.map((id)=>{
      return Axios.get('http://localhost:3000/getItemDetails', {params:{id: id}})
      .then((response) => {
        return response.data
      })
      .catch((err) => {
        console.error(err)
      })
    })
    Promise.all(promiseArr)
    .then((array) => {
      updateRelatedItemDetails(array)
      console.log('DetailArray', array.slice())
    })
  }

  const getImage = (relatedIDList) => {
    const promiseArr = relatedIDList.map((id)=>{
      return Axios.get('http://localhost:3000/getFirstImage', {params:{id: id}})
      .then((response) => {
        //need to retun a promise
        return response.data
      })
      .catch((err) => {
        console.error(err)
      })
    })
    Promise.all(promiseArr)
    .then((array) => {
      updateRelatedItemImages(array)
      console.log('ImageArray', array.slice())
    })
  }

  const getRating = (relatedIDList) => {
    const promiseArr = relatedIDList.map((id)=>{
      return Axios.get('http://localhost:3000/getRating', {params:{id: id}})
      .then((response) => {
        return (Number(response.data))
      })
      .catch((err) => {
        console.error(err)
      })
    })
    Promise.all(promiseArr)
    .then((array) => {
      updateRelatedItemImages(array)
      console.log('RatingArr', array.slice())
    })
  }


  useEffect (()=> {
    getRelatedID(71700)
    console.log('use effect running')

  }, [])



  return (
    <div className="main-container carousel-style">
      <section className="carousel-upper">
      <h5>RELATED PRODUCTS</h5>
      <RelatedList relatedList = {relatedList} relatedItemDetails = {relatedItemDetails} relatedItemImages = {relatedItemImages} relatedItemRating = {relatedItemRating}/>
      </section>
      <h5>YOUR OUTFIT</h5>
      <section className="carousel-upper">
      {/* <OutfitList/> */}
      </section>
    </div>
  )
}

export default RelatedItem;