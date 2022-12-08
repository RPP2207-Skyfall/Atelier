import React from 'react';
import Axios from 'axios';

class RelatedCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product_id: this.props.item,
      product_detail: [],
      rating: 0,

    }
    this.getRelatedDetails = this.getRelatedDetails.bind(this);
  }

  componentDidMount() {
    this.getRelatedDetails(this.state.product_id)
  }

  getRelatedDetails(ID) {
    console.log(ID)
    var requestOption = {
      headers: {
        "Authorization": process.env.REACT_APP_API_OVERVIEW_TOKEN
      }
      // params: {
      //   product_id: IDList[x],
      // }
    }
    Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${ID}`, requestOption)
    .then(res => {
      console.log(res.data)
      this.setState({product_detail: res.data})
    })
    .catch(err => {
      console.log("Err: ", err)
    })
  }

  render() {
    console.log("category", this.state.product_detail.default_price)
    if (this.state.product_detail.length === 0) {
      return (
        <p>Empty</p>
      )
    } else {
      return (
        <div className="carousel-box">
        <button className="star-btn">star</button>
        <div className="category-box">
          <div className="category-title">{this.state.product_detail.category}</div>
          <div className="category-wrapper">
            <p>{this.state.product_detail.name}</p>
            <div className="price-box">
            ${this.state.product_detail.default_price}
            </div>
            <div className="star-box">
              ★★★★★
            </div>
          </div>
        </div>
      </div>
      )
    }
  }
}


export default RelatedCard;

//data type
// [
//   {
//         "id": 1,
//         "name": "Camo Onesie",
//         "slogan": "Blend in to your crowd",
//         "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
//         "category": "Jackets",
//         "default_price": "140"
//     },
//   {
//         "id": 2,
//         "name": "Bright Future Sunglasses",
//         "slogan": "You've got to wear shades",
//         "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
//         "category": "Accessories",
//         "default_price": "69"
//     },
//   {
//         "id": 3,
//         "name": "Morning Joggers",
//         "slogan": "Make yourself a morning person",
//         "description": "Whether you're a morning person or not. Whether you're gym bound or not. Everyone looks good in joggers.",
//         "category": "Pants",
//         "default_price": "40"
//     },
//     // ...
// ]