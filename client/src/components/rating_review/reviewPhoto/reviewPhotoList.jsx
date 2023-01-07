import React, { useState } from 'react';
import PhotoItem from './photoItem.jsx'


const reviewPhotoList = (props) => {




  return (
    <div className="photoContainer">
      {props.photoList.map((photo) =>
        <PhotoItem photo={photo} key={photo.id} tracker={props.tracker} />
      )}
    </div>



  )

}

export default reviewPhotoList