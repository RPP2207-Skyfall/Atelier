import React, { useState } from 'react';

function ExpandedView (props) {

  if (props.mainPic.length === 0) {
    return (
      <div>
        loading
      </div>
    )
  } else {

    return (
      <div id="expanded-view">
        {/* <h1>Expanded View</h1> */}
        <img class="expanded-image" src={props.mainPic} alt="style" onClick={() => props.expand()}/>
      </div>
    )
  }

}

export default ExpandedView;