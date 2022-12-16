import React from 'react';
import axios from 'axios';

function AddToBag(props) {


  const updateCart = (bag) => {

    var url = process.env.REACT_APP_API_OVERVIEW_URL + `cart`

      axios({
        method: 'post',
        url: url,
        headers:
          {
            "Content-Type": "application/json",
            "Authorization": process.env.REACT_APP_API_OVERVIEW_TOKEN
          } ,
        data: {
          sku_id: bag.sku
        }
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })

  }

  const forceSelection = () => {
    console.log('force selection', props);
    props.handleNoSelection()
  }

  const addToList = () => {
    console.log('propsInList', props)
    props.likeOutfit(props);
  }

  // console.log(props)

  console.log('props in addtobag', props)

  let bag = {
    sku: props.skuToBuy,
    quantity: props.selectedQuant,
  }

  if (!props.selected) {
    return (
      <div className="add-to-bag-container">
        <div className="add-to-bag-button" onClick={() => forceSelection()}>
          <p>ADD TO BAG</p>
          <div className="add-to-bag-plus">+</div>
        </div>
        <div className="add-to-bag-star" onClick={() => addToList()}>☆</div>
      </div>
    )
  } else {
    return (
      <div className="add-to-bag-container">
        <div className="add-to-bag-button" onClick={() => updateCart(bag)}>
          <p>ADD TO BAG</p>
          <div className="add-to-bag-plus">+</div>
        </div>
        <div className="add-to-bag-star" onClick={() => addToList()}>☆</div>
      </div>
    )
  }



}

export default AddToBag;