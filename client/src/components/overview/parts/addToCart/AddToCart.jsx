import React from 'react';

function AddToCart(props) {


  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  if (open && props.currentStyle) {
    console.log('Add to Cart', props.currentStyle.skus);
    let skus = props.currentStyle.skus
    return (
      <div id="add-to-cart-dropdown-closed" onClick={handleOpen}>

        {
          Object.keys(props.currentStyle.skus).map((sku) => {
            let currentSku = sku;

            if (skus[currentSku].quantity > 0) {
              return (
                <div onClick={() => props.selectSize(skus[currentSku].size)}>
                  <p>{skus[currentSku].size}</p>
                </div>
              )
            }

          })
        }
      </div>
    )
  } else if (props.selected) {
    return (
      <div id="add-to-cart-dropdown-selected" onClick={handleOpen}>
        <h1>{props.selected}</h1>
      </div>
    )
  } else {
    return (
      <div id="add-to-cart-dropdown-closed" onClick={handleOpen}>
        <h3>Select Size</h3>
      </div>
    )
  }


  // return (
  //   <div id="add-to-cart">
  //     <h3>AddToCart</h3>
  //     <div id="size-selector">Size Selector</div>
  //     <div id="quantity-selector">Quantity Selector</div>
  //     <div id="add-button">Add To Cart</div>
  //   </div>
  // )
}

export default AddToCart;