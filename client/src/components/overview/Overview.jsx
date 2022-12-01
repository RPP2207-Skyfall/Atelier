import React, { useState, useEffect } from 'react';
import ProductInfo from './parts/productInfo/ProductInfo.jsx';
import StyleSelector from './parts/styleSelector/StyleSelector.jsx';
import AddToCart from './parts/addToCart/AddToCart.jsx';
import ImageGallery from './parts/ImageGallery/ImageGallery.jsx';
import axios from 'axios';



function Overview() {


  const [info, getInfo] = useState([]);


  return (
    <div>
      <ProductInfo />
      <StyleSelector />
      <AddToCart />
      <ImageGallery />
    </div>
  )
}

export default Overview;