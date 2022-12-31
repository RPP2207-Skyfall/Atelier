import React, { useState } from 'react';
import QuantitySelector from './QuantitySelector.jsx';
import AddToBag from './AddToBag.jsx';

function AddToCart(props) {


  const [open, setOpen] = useState(false);
  const [noSelection, forceSelection] = useState(false);
  const [select, makeSelection] = useState(false);

  const selectSize = (size, quant, sku) => {
    makeSelection(!select);
    props.selectSize(size, quant, sku);


  }

  const handleNoSelection = () => {
    forceSelection(!noSelection);
    setOpen(!open);
  }

  const handleOpen = () => {
    setOpen(!open);
  };

  // console.log('props in cart', props)

  if (props.currentStyle && Object.keys(props.currentStyle.skus).length === 0) {
    return (
      <div data-testid="add-to-cart-out-of-stock">
        OUT OF STOCK
      </div>
    )
  }


  // console.log('props in add to cart', props)

  if (open && props.currentStyle && !noSelection) {
    console.log('Add to Cart open', props);
    let skus = props.currentStyle.skus
    return (
      <div className="add-to-cart-dropdown-open" data-testid='add-to-cart-open-test' onClick={handleOpen}>

        {
          Object.keys(props.currentStyle.skus).map((sku, i) => {
            let currentSku = sku;

            if (skus[currentSku].quantity > 0) {
              return (
                // <div className="size-option" onClick={() => props.selectSize(skus[currentSku].size, skus[currentSku].quantity, sku)} key={i} >
                <div className="size-option" onClick={() => selectSize(skus[currentSku].size, skus[currentSku].quantity, sku)} key={i} >
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
  } else if (open && props.currentStyle && noSelection) {
    let skus = props.currentStyle.skus
    return (
      <div className="add-to-cart-dropdown-open" onClick={handleOpen}>
        <h3>please select size</h3>

        {
          Object.keys(props.currentStyle.skus).map((sku, i) => {
            let currentSku = sku;

            if (skus[currentSku].quantity > 0) {
              return (
                <div className="size-option" onClick={() => props.selectSize(skus[currentSku].size, skus[currentSku].quantity, sku)} key={i} >
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
    console.log('im here')
    return (
      <div className="add-to-cart-container" data-testid='add-to-cart-selected'>
        <div className="upper-section-add-to-cart-selected">
          <div className="add-to-cart-dropdown-selected" onClick={handleOpen}>
            <h1 >{props.selected}</h1>
          </div>
          <QuantitySelector selectedQuant={props.selectedQuant} selectQuant={props.selectQuant}
          selected={props.selected} quant={props.sizeQuantity}/>
        </div>
          <AddToBag selectedQuant={props.selectedQuant} selectQuant={props.selectQuant}
          selected={props.selected} quant={props.sizeQuantity} style={props.currentStyle} skuToBuy={props.skuToBuy}
          likeOutfit={props.likeOutfit}/>
      </div>

    )
  } else {
    return (
      <div className="add-to-cart-container" data-testid="add-to-cart-selectSize-test">
        <div className="upper-section-add-to-cart">
          <div className="add-to-cart-dropdown-closed" onClick={handleOpen}>
            <h3>SELECT SIZE</h3>
          </div>
          <QuantitySelector selectedQuant={props.selectedQuant} selectQuant={props.selectQuant}
          selected={props.selected} quant={props.sizeQuantity}/>
        </div>
        <AddToBag selectedQuant={props.selectedQuant} selectQuant={props.selectQuant}
          selected={props.selected} quant={props.sizeQuantity} style={props.currentStyle} skuToBuy={props.skuToBuy}
          handleNoSelection={handleNoSelection} likeOutfit={props.likeOutfit}/>
      </div>
    )
  }

}

export default AddToCart;