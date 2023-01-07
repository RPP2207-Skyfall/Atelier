import React from 'react';
import OverviewStars from './OverviewStars.jsx';

function ProductInfo(props) {


  // console.log('product info', props.info.reviewData.length)

  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  }


  console.log('props in PI', props)


  if (props.info.data === undefined) {
    return (
      <div className="product-info" data-testid="product-info-no-data">
        <div className="product-info-stars">Stars TEST</div>
        <div className="product-info-reviews">read all # reviews</div>
        <div className="product-info-category">category</div>
        <h2 className="product-info-title">name</h2>
        <div id="product-info-price">price</div>
      </div>
    )
  } else if (!props.desc) {
    let reviewNum = props.info.reviewData.length;

    return (
      <div className="product-info" data-testid="product-info-loaded-test">

        {/* <div className="product-info-stars">Stars</div> */}
        <OverviewStars rating={props.rating} />

        <div className="product-info-reviews" onClick={() => handleScroll()}>read all {reviewNum} reviews</div>
        {/* {
          props.desc.category
          ? <div className="product-info-category">{props.desc.category}</div>
          : null
        } */}
        <div className="product-info-category">no category</div>
        <h2 className="product-info-title">no name</h2>
        <h2 className="product-info-title">no name</h2>
        <div id="product-info-price">no price</div>

      </div>
    )
  } else if (props.info.data.length !== 0 && props.style && props.rating && !props.style.sale_price) {

    // console.log('product infor porps', props.desc)
    let reviewNum = props.info.reviewData.length;

    return (
      <div className="product-info" data-testid="product-info-loaded-test">

        {/* <div className="product-info-stars">Stars</div> */}
        <OverviewStars rating={props.rating} />

        <div className="product-info-reviews" onClick={() => handleScroll()}>read all {reviewNum} reviews</div>
        {
          props.desc.category
            ? <div className="product-info-category">{props.desc.category}</div>
            : null
        }
        {/* <div className="product-info-category">{props.desc.category}</div> */}
        <h2 className="product-info-title">{props.desc.name}</h2>
        <h2 className="product-info-title">{props.style.name}</h2>
        <div id="product-info-price">{props.style.original_price}</div>

      </div>
    )
  } else if (props.style.sale_price) {
    let reviewNum = props.info.reviewData.length;
    return (
      <div className="product-info" data-testid="product-info-loaded">

        {/* <div className="product-info-stars">Stars</div> */}
        <OverviewStars rating={props.rating} />

        <div className="product-info-reviews">read all {reviewNum} reviews</div>
        {
          props.desc.category
            ? <div className="product-info-category">{props.desc.category}</div>
            : <div className="product-info-category"></div>
        }
        <h2 className="product-info-title">{props.desc.name}</h2>
        <h2 className="product-info-title">{props.style.name}</h2>
        <s id="product-info-price" style={{ color: 'red' }}>{props.style.original_price} </s>
        <div id="product-info-price-sale" >{props.style.sale_price} </div>

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