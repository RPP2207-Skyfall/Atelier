import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const ComparingChart = (props) => {
  const MainItemID = props.mainItemId;
  const [featureList, updateFeatureList] = useState({})

  useEffect(()=> {
    getComparingObj(MainItemID)
    // console.log(props)
  }, [])

  const getComparingObj = async (id) => {
    await Axios.get('http://localhost:3000/getItemDetails', {params:{id: id}})
    .then((response) => {
      const mainFeatureList = response.data.features
      var featureList = {};
      for (var x = 0; x < mainFeatureList.length; x ++) {
        featureList[mainFeatureList[x].feature] = [1, mainFeatureList[x].value]
      }
      return featureList
    })
    .then((featureList) => {
      const relatedFeatures = props.relatedFeatures
      // console.log(relatedFeatures)
      for (var x = 0; x < relatedFeatures.length; x ++) {
        if (featureList[relatedFeatures[x].feature] === undefined) {
          featureList[relatedFeatures[x].feature] = [2, relatedFeatures[x].value]
        } else {
          featureList[relatedFeatures[x].feature].push([2, relatedFeatures[x].value])
        }
      }
      // console.log(featureList)
      updateFeatureList(featureList)
    })
    .catch((err) => {
      console.error(err)
    })
  }
  const closeChart = () => {
    props.toggleFeature(false)
  }

  return (
    <div>
          <div className="modal-mask" onClick= {() => {closeChart()}}></div>
          <div className="modal-container"><p>chart here</p></div>
        </div>
  )
}

export default ComparingChart;