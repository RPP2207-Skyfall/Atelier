import React, { useState } from 'react'

const photoItem = (props) => {

  return (
    <div><img className="photo" src={`${props.photo.url}`} /></div>
  )

}

export default photoItem