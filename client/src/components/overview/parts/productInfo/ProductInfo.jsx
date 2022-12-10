import React from 'react';

function ProductInfo(props) {

  if (props.info.data === undefined) {
    return (
      <div className="product-info">
        <div className="product-info-stars">Stars TEST</div>
        <div className="product-info-reviews">read all # reviews</div>
        <div className="product-info-category">category</div>
        <h2 className="product-info-title">name</h2>
        <div id="product-info-price">price</div>
      </div>
    )
  } else if (props.info.data.length !== 0 && props.style) {

    // console.log('product infor porps', props)

    return (
      <div className="product-info" data-testid="product-info-loaded">
        <h3>Product Info</h3>

        <div className="product-info-stars">Stars</div>
        <div className="product-info-reviews">read all # reviews</div>
        <div className="product-info-category">{props.info.data[0].category}</div>
        <h2 className="product-info-title">{props.style.name}</h2>
        <div id="product-info-price">{props.style.original_price}</div>

      </div>
    )
  }
  else {
    return (
      <div className="product-info">
        <div className="product-info-stars">Stars</div>
        <div className="product-info-reviews">read all # reviews</div>
        <div className="product-info-category">category</div>
        <h2 className="product-info-title">name</h2>
        <div id="product-info-price">price</div>
      </div>
    )

  }

}

export default ProductInfo;