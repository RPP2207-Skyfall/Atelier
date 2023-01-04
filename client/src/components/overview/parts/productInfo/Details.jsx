import React from 'react';

function Details(props) {

  console.log('props', props);
  return (
    <div className="main-product-details">
      <span className="product-details-desc"><p>{props.desc.description}</p></span>
      <span className="product-details-slogan"><p>{props.desc.slogan}</p></span>
    </div>
  )
}

export default Details;