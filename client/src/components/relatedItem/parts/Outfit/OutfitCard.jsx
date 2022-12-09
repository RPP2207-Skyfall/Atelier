import React, { useState, useEffect } from 'react';
import Axios from 'axios'

const OutfitCard = (props) => (
  <div className="carousel-box">
    <button className="star-btn">X</button>
    <div className="category-box">
      <div className="category-title">CATEGORY</div>
      <div className="category-wrapper">
        <p>Testing Intro</p>
        <div className="price-box">
          $332
        </div>
        <div className="star-box">
          ★★★★★
        </div>
      </div>
    </div>
  </div>
)



export default OutfitCard;