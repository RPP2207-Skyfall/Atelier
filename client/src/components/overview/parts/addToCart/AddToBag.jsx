import React from 'react';
import axios from 'axios';

function AddToBag(props) {


  const updateCart = (bag) => {

    // console.log(bag)

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

      // axios.post(url, requestOption)
      //   .then(res => {
      //     // ///console.log(res.data)
      //     // this.setState({
      //     //   reviewData: res.data.results
      //     // }, () => {
      //     //   resolve(this.state)
      //     // })
      //     console.log('res', res)
      //   })
      //   .catch(err => {
      //     console.log('err', err)
      //     // reject(err)
      //     // console.log("Err: ", err)
      //   })
    // })
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