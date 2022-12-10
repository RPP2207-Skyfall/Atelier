import React from 'react';
import QuantitySelector from './QuantitySelector.jsx';

function AddToCart(props) {


  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  console.log('props in cart', props)

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
      <div className="add-to-cart-dropdown-open" onClick={handleOpen}>

        {
          Object.keys(props.currentStyle.skus).map((sku, i) => {
            let currentSku = sku;

            if (skus[currentSku].quantity > 0) {
              return (
                <div className="size-option" onClick={() => props.selectSize(skus[currentSku].size, skus[currentSku].quantity)} key={i} >
                  <p>{skus[currentSku].size}</p>
                </div>
              )
            }

          })
        }

        <QuantitySelector selectedQuant={props.selectedQuant} selectQuant={props.selectQuant}
        selected={props.selected} quant={props.sizeQuantity}/>
      </div>
    )
  } else if (props.selected) {
    return (
      <div className="add-to-cart-container">
        <div className="add-to-cart-dropdown-selected" onClick={handleOpen}>
          <h1 >{props.selected}</h1>
        </div>
        <QuantitySelector selectedQuant={props.selectedQuant} selectQuant={props.selectQuant}
        selected={props.selected} quant={props.sizeQuantity}/>
      </div>

    )
  } else {
    return (
      <div className="add-to-cart-container">
        <div className="upper-section-add-to-cart">
          <div className="add-to-cart-dropdown-closed" onClick={handleOpen}>
            <h3>SELECT SIZE</h3>
          </div>
          <QuantitySelector selectedQuant={props.selectedQuant} selectQuant={props.selectQuant}
          selected={props.selected} quant={props.sizeQuantity}/>
        </div>
        <div className="add-to-bag-container">
          <div className="add-to-bag-button">
            <p>ADD TO BAG</p>
            <div className="add-to-bag-plus">+</div>
          </div>
          <div className="add-to-bag-star">☆</div>
        </div>
      </div>
    )
  }

}

export default AddToCart;