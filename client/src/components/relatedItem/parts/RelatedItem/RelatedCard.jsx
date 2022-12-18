import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Star from './../Star/relateStarRating.jsx';

const RelatedCard = (props) => {

  const ID = props.item
  const [relatedItemDetails, updateRelatedItemDetails] = useState({})
  const [relatedItemRating, updateRelatedItemRating] = useState(3.5)
  const [featrueShow, toggleFeature] = useState (false)
  const [picLibrary, updatePicLibrary] = useState ([])
  const [currentPic, updateCurPic] = useState("https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg")
  const [starShow, toggleStar] = useState("emptyStar.png")

  useEffect (()=> {
    getRating(ID)
    getDetails(ID)
    getImage(ID)
    checkOutfit(ID, props.outfitList)
  }, [])

  const getDetails = async (id) => {
    await Axios.get('http://localhost:3000/getItemDetails', {params:{id: id}})
    .then((response) => {
      updateRelatedItemDetails(response.data)
      // console.log("API detail", response.data)
      return response.data
    })
    .catch((err) => {
      console.error(err)
    })
  }


  const getImage = async (id) => {
  await Axios.get('http://localhost:3000/getFirstImage', {params:{id: id}})
    .then((response) => {
      updatePicLibrary([response.data])
      updateCurPic(response.data)
      return response.data
    })
    // .then((picArr) => {
    //   updateCurPic(picArr[0])
    // })
    .catch((err) => {
      console.error(err)
    })
  }


  const getRating = async (id) => {
    await Axios.get('http://localhost:3000/getRating', {params:{id: id}})
    .then((response) => {
      updateRelatedItemRating(Number(response.data))
      // console.log('APIRate', response.data)
      return (Number(response.data))
    })
    .catch((err) => {
      console.error(err)
    })
  }

  const checkOutfit = (currentID, OutfitList)=>  {
    // console.log("checkOutfit", props.outfitList)
    var index = OutfitList.indexOf(currentID)
    var newList = OutfitList
    if (index === -1) {
      OutfitList.push(currentID)
      toggleStar("emptyStar.png")
    } else {
      newList.splice(index, 1)
      toggleStar("FillStar.png")
    }
  }

  const switchStar = (starShow) => {
    if (starShow === "FillStar.png") {
      toggleStar("emptyStar.png")
    } else {
      toggleStar("FillStar.png")
    }
  }



  // toggleStar() {
  //   console.log('check outfitList', this.props.outfit)
  //   var index = this.props.outfit.indexOf(this.props.item)
  //   if (index === -1) {
  //     var newList = this.props.outfit
  //     newList.push(this.props.item)
  //     console.log('after add', newList)
  //     this.props.toggleOutfit(newList)
  //   } else {
  //     var newList = this.props.outfit
  //     newList.splice(index, 1)
  //     console.log('after remove', newList)
  //     this.props.toggleOutfit(newList)
  //   }
  // }





  // if (relatedItemDetails.keys.length === 0) {
  //   return (
  //     <p>Loading....</p>
  //   )
  // } else {
    return (
      <div className="carousel-box">
          <div className="carousel-bg-img" style={{ backgroundImage: "url('" + currentPic + "')" }} ></div>
        <button className="star-btn" onClick= {()=>{props.toggleStar(ID, props.outfitList); switchStar(starShow)}}><img src={starShow}></img></button>
        <div className="category-box">
          <div className="category-title">{relatedItemDetails.category}</div>
          <div className="category-wrapper">
            <p>{relatedItemDetails.name}</p>
            <div className="price-box">
              ${relatedItemDetails.default_price}
            </div>
            <div className="star-box">
              <Star rating={relatedItemRating}/>
            </div>
          </div>
        </div>
      </div>
    )
  // }

}


export default RelatedCard;



// const getRelatedDetails = (relatedIDList) => {
//   const promiseArr = relatedIDList.map((id)=>{
//     return Axios.get('http://localhost:3000/getItemDetails', {params:{id: id}})
//     .then((response) => {
//       return response.data
//     })
//     .catch((err) => {
//       console.error(err)
//     })
//   })
//   Promise.all(promiseArr)
//   .then((array) => {
//     updateRelatedItemDetails(array)
//     console.log('DetailArray', array.slice())
//   })
// }