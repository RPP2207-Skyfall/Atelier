import React, { useState, useEffect } from 'react';
import Thumbnail from '../Thumbnails.jsx';


function DefaultView(props) {

  // if the main image thumbnail is currently in the second box of thumbnails,
  // then update the section to the next section

  // console.log(props)

  if (!props.mainPic) {

      return (
        <div className="default-view">
          {/* <h1>Default View</h1> */}
          <img className="default-image" src={props.mainPic} alt="style" onClick={() => props.expand()}/>
        </div>
      )

  }

  if (props.mainPic.length === 0) {
    return (
      <div>
        loading
      </div>
    )
  } else {

    return (
      <div className="default-view">
        {/* <h1>Default View</h1> */}

        <img className="default-image" src={props.mainPic} alt="style" onClick={() => props.expand()}/>

      </div>
    )
  }


}

export default DefaultView;