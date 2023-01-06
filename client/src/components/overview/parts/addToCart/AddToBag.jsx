import React from 'react';
import axios from 'axios';
import Tracker from '../../../tracker.js';

function AddToBag(props) {


  const updateCart = (bag, elem, widget) => {

    Tracker.userInteraction(elem, widget);

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

  const forceSelection = (elem, widget) => {
    // console.log('force selection', props);
    Tracker.userInteraction(elem, widget);
    props.handleNoSelection();
  }

  const addToList = () => {
    // console.log('propsInList', props)
    props.likeOutfit(props);
  }

  // console.log(props)

  // console.log('props in addtobag', props)

  let bag = {
    sku: props.skuToBuy,
    quantity: props.selectedQuant,
  }

  if (!props.selected) {
    return (
      <div className="add-to-bag-container" data-testid="add-to-bag-unselected-test">
        <div className="add-to-bag-button" onClick={() => forceSelection('add-to-bag-button', 'overview')}>
          <p>ADD TO BAG</p>
          <div className="add-to-bag-plus">+</div>
        </div>
        <div className="add-to-bag-star" onClick={() => addToList('like-outfit-button', 'overview')}>☆</div>
      </div>
    )
  } else {
    return (
      <div className="add-to-bag-container" data-testid="add-to-bag-selected-test">
        <div className="add-to-bag-button" onClick={() => updateCart(bag, 'add-to-bag-button', 'overview')}>
          <p>ADD TO BAG</p>
          <div className="add-to-bag-plus">+</div>
        </div>
        <div className="add-to-bag-star" onClick={() => addToList('like-outfit-button', 'overview')}>☆</div>
      </div>
    )
  }



}

export default AddToBag;