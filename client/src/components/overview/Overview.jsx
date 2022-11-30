import React, { useState, useEffect } from 'react';
import ProductInfo from './parts/productInfo/ProductInfo.jsx';
import StyleSelector from './parts/styleSelector/StyleSelector.jsx';
import AddToCart from './parts/addToCart/AddToCart.jsx';
import ImageGallery from './parts/ImageGallery/ImageGallery.jsx';
import axios from 'axios';

const API_KEY = 'https://app-hrsei-api.herokuapp.com/api/fec2/:hr-rpp/products';


function Overview() {


  const [info, getInfo] = useState([]);

  // useEffect(() => {

  //   fetch (API_KEY,
  //       {
  //         method: "GET",
  //         headers:
  //           {
  //             Authorization: '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'
  //           }
  //       }
  //     )
  //     .then(res => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     })
  // })

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