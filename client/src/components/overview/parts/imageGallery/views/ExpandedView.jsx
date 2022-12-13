import React, { useState, useEffect } from 'react';

function ExpandedView (props) {

  // document.addEventListener('mousemove', (event) => {
  //   console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
  // });

  // useEffect(() => {
  //   const img = document.getElementById('exp-img');

  //   var rect = img.getBoundingClientRect();
  //   console.log(rect.top, rect.right, rect.bottom, rect.left);

  //   console.log(img.clientHeight)

  //   console.log('img', img)
  // });


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
        <img className="expanded-image" id="exp-img" src={props.mainPic} alt="style" onClick={() => props.expand()}/>
      </div>
    )


  }

}

export default ExpandedView;