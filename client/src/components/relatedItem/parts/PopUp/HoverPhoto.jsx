import React, { useState, useEffect } from 'react';

const SmallPicBox = (props) => {
  const startLoad = props.libraryLoad
  const [url, setURL] = useState("Loading_icon.gif")

  useEffect(() => {
    if (startLoad === true) {
      setURL(props.item.thumbnail_url)
    }
  }, [startLoad])
  // const loading = "Loading_icon.gif"
  // const url =  props.item.thumbnail_url
  return (
     <div className="small-box" style={{ backgroundImage: `url(${url})` }} onClick= {()=>{props.setCurPhoto(props.item.thumbnail_url)}}></div>
  )
}

export default SmallPicBox;