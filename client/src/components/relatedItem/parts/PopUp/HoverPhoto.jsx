import React, { useState, useEffect } from 'react';

const SmallPicBox = (props) => {
  const url =  props.item.thumbnail_url
  return (
    <div className="small-box" aria-label = {`other item photos`} style={{ backgroundImage: "url('" + url + "')" }} onClick= {()=>{props.setCurPhoto(url)}}></div>
  )
}

export default SmallPicBox;