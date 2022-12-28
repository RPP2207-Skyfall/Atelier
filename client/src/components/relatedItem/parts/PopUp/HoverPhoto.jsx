import React, { useState, useEffect } from 'react';

const SmallPicBox = (props) => {

  return (
    <div className="small-box" style={{ backgroundImage: "url('" + props.item.thumbnail_url + "')" }} onClick= {()=>{props.setCurPhoto(props.item.thumbnail_url)}}></div>
  )
}

export default SmallPicBox;