import React, {useState, useEffect } from 'react';
import DefaultView from './views/DefaultView.jsx';
import ExpandedView from './views/ExpandedView.jsx';

function ImageGallery() {

  const [expand, expanded] = useState(0);

  if (expand === 0) {
    return (
      <div id="image-gallery">
        <h3>ImageGallery</h3>
        <DefaultView expand={0}/>
        <button onClick={() => expanded(expand + 1)}>expand</button>
      </div>
    )
  } else {
    return (
      <div id="image-gallery">
        <h3>ImageGallery</h3>
        <ExpandedView />
        <button onClick={() => expanded(expand - 1)}>default</button>
      </div>
    )
  }


}

export default ImageGallery;