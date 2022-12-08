import React from 'react';

function ProductInfo(props) {


  if (props.info.data.length !== 0 && props.style) {

    // console.log('product infor porps', props)

    return (
      <div id="product-info">
        <h3>Product Info</h3>

        <div id="stars">Stars</div>
        <div id="overview-reviews">read all # reviews</div>
        <div id="product-category">{props.info.data[0].category}</div>
        <div id="title">{props.style.name}</div>
        <div id="price">{props.style.original_price}</div>

      </div>
    )
  } else {
    <div>
      prioduct info
    </div>

  }

}

export default ProductInfo;