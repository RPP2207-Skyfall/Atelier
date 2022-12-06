import React, { useState } from 'react';

function ExpandedView (props) {



  if (props.mainPic.length === 0) {
    return (
      <div>
        loading
      </div>
    )
  } else {
    let currentStyle = props.mainPic.url;

    return (
      <div id="expanded-view">
        <h1>Expanded View</h1>

        <img src={props.mainPic} alt="style" id="expanded-image" />

      </div>
    )
  }

}

export default ExpandedView;