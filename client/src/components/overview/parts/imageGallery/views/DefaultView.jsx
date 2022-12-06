import React, { useState, useEffect } from 'react';
import Thumbnail from '../Thumbnails.jsx';


function DefaultView (props) {

  if (props.mainPic.length === 0) {
    return (
      <div>
        loading
      </div>
    )
  } else {

    return (
      <div id="default-view">
        <h1>Default View</h1>

        <img src={props.mainPic} alt="style" />

      </div>
    )
  }


}

export default DefaultView;