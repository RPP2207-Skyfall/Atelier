import React from 'react';

const RelatedCard = (props) => (
  <div className="carousel-box">
    <button className="star-btn">star</button>
    <div className="category-box">
      <div className="category-title">CATEGORY</div>
      <div className="category-wrapper">
        <p>Expanded Product Name With Extra Text</p>
        <div className="price-box">
          $123
        </div>
        <div className="star-box">
          ★★★★★
        </div>
      </div>
    </div>
  </div>
)



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