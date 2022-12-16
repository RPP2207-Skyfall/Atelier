import React from 'react';
import axios from 'axios';

function AddToBag(props) {

  const generalUrl = process.env.REACT_APP_API_OVERVIEW_URL + `cart`

  const updateCart = (bag) => {

    axios({
      method: 'POST',
      parameters: {
        sku_id: bag.skuToBuy
      }
    })
    .then((response) => {
      console.log('res', response)
    })

  }

  // console.log(props)

  let bag = {
    sku: props.skuToBuy,
    quantity: props.selectedQuant,
  }

  return (
    <div className="add-to-bag-container">
      <div className="add-to-bag-button" onClick={() => updateCart(bag)}>
        <p>ADD TO BAG</p>
        <div className="add-to-bag-plus">+</div>
      </div>
      <div className="add-to-bag-star">☆</div>
    </div>
  )

}

export default AddToBag;