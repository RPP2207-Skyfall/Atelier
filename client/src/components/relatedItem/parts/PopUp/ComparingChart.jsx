import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const ComparingChart = (props) => {
  const MainItemName = props.mainItemDetail.name;
  const MainFeature = props.mainItemDetail.features;
  const CompareItemName = props.compareFeatureDetail.name;
  const CompareFeature = props.compareFeatureDetail.features;
  var featureObj = {};
  // const [featureObj, updateFeatureObj] = useState({})

  for (var index in MainFeature) {
    var key = MainFeature[index].feature
    if (featureObj[key] === undefined) {
      featureObj[key] = [[1, MainFeature[index].value]]
    } else {
      featureObj[key].push([1, MainFeature[index].value])
    }
  }
  for (var index in CompareFeature) {
    var key = CompareFeature[index].feature
    if (featureObj[key] === undefined) {
      featureObj[key] = [[2, CompareFeature[index].value]]
    } else {
      featureObj[key].push([2, CompareFeature[index].value])
    }
  }

  // console.log(featureObj)


  var tableChart = `<table>`
  for (var key in featureObj) {
    var first = "";
    var second = key;
    var third = "";
    var featureArr = featureObj[key]
    for (var x = 0; x < featureArr.length; x ++) {
      if (featureArr[x][0] == 1) {
        if (featureArr[x][1] === true) {
          first = 'V'
        } else if (featureArr[x][1] === false || featureArr[x][1] === null){
          first = 'X'
        } else {
          first = featureArr[x][1]
        }
      }
      if (featureArr[x][0] == 2) {
        if (featureArr[x][1] === true) {
          third = 'V'
        } else if (featureArr[x][1] === false || featureArr[x][1] === null){
          third = 'X'
        } else {
          third = featureArr[x][1]
        }
      }
    }
    var insert = `<tr>
      <th><h6>${first}</h6></th>
      <th><p>${second}</p></th>
      <th><h6>${third}</h6></th>
    </tr>`;
    tableChart += insert
  }
  tableChart += "</table>"



  const closeChart = () => {
    props.toggleFeature(false)
  }

  return (
    <div>
      <div className="modal-mask" onClick= {() => {closeChart()}}></div>
      <div className="modal-container"><h6>COMPARING</h6>
        <span className= "modal-name">
          <div>
            <h5><b>{MainItemName}</b></h5>
          </div>
          <div>
            <h5><b>{CompareItemName}</b></h5>
          </div>
        </span>
        <div className="compare-table" dangerouslySetInnerHTML={{__html: tableChart}} />
      </div>
    </div>
  )
}

export default ComparingChart;

/*
  The comparison modal window will pull up and compare the characteristics present for each product.
  The modal should be titled “Comparing”.  The characteristics to be compared are the same as those
  which appear on the Overview module for each product separately.
 */