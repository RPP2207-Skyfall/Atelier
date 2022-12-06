import React from 'react';

function AddToCart(props) {


  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  // console.log(props.currentStyle)

  if (props.currentStyle && Object.keys(props.currentStyle.skus).length === 0) {
    return (
      <div>
        OUT OF STOCK
      </div>
    )
  }

  if (open && props.currentStyle) {
    // console.log('Add to Cart', props.currentStyle.skus);
    let skus = props.currentStyle.skus
    return (
      <div id="add-to-cart-dropdown-closed" onClick={handleOpen}>

        {
          Object.keys(props.currentStyle.skus).map((sku, i) => {
            let currentSku = sku;

            if (skus[currentSku].quantity > 0) {
              return (
                <div onClick={() => props.selectSize(skus[currentSku].size)} key={i} >
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

}

export default AddToCart;