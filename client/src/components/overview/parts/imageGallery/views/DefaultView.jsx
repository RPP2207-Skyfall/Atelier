import React, { useState, useEffect } from 'react';
import Thumbnail from '../Thumbnails.jsx';


function DefaultView (props) {


  if (props.mainPic.length === 0) {
    console.log(props)
    return (
      <div>
        loading
      </div>
    )
  } else {
    let currentStyle = props.mainPic.url;

    return (
      <div id="default-view">
        <h1>Default View</h1>

        <img src={currentStyle} alt="style" />

        <div id="slider">Slider</div>

      </div>
    )
  }


}

export default DefaultView;