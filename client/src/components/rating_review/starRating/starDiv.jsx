import React, { useState, useEffect } from 'react'

const starDiv = (props) => {
  return (
    <>
      {props.starArray.map((width, idx) => {

        return (

          <div className="star-container" key={idx}>
            <div className="star-fill" style={{ "width": `${width}%` }}>
              <img className="star-outline" loading="lazy" alt="star-image" src="star.png"></img>
            </div>
          </div>

        )
      })
      }
    </>
  );
}


export default starDiv