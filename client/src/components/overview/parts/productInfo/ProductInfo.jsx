import React from 'react';

function ProductInfo(props) {


  if (props.info.data.length !== 0 && props.style) {

    // console.log('product infor porps', props)

    return (
      <div className="product-info">
        <h3>Product Info</h3>

        <div className="product-info-stars">Stars</div>
        <div className="product-info-reviews">read all # reviews</div>
        <div className="product-info-category">{props.info.data[0].category}</div>
        <h2 className="product-info-title">{props.style.name}</h2>
        <div id="product-info-price">{props.style.original_price}</div>

      </div>
    )
  } else {
    <div>
      prioduct info
    </div>

  }

}

export default ProductInfo;