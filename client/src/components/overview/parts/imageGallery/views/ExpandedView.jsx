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
      <div className="expanded-view">
        {/* <h1>Default View</h1> */}
        <img className="expanded-image" src={props.mainPic} alt="style" onClick={() => props.expand()}/>
      </div>
    )
  }

}

export default ExpandedView;