/** @jest-environment jsdom */

import react from 'react';
import ProductInfo from "../../client/src/components/overview/parts/productInfo/ProductInfo.jsx";
import AddToCart from "../../client/src/components/overview/parts/addToCart/AddToCart.jsx";
import ImageGallery from "../../client/src/components/overview/parts/imageGallery/ImageGallery.jsx";
import StyleSelector from "../../client/src/components/overview/parts/styleSelector/StyleSelector.jsx";
import Overview from "../../client/src/components/overview/Overview.jsx";
import { render, screen, waitFor, fireEvent, container, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';


const state = {
  "data": [
      {
          "id": 71697,
          "campus": "hr-rpp",
          "name": "Camo Onesie",
          "slogan": "Blend in to your crowd",
          "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
          "category": "Jackets",
          "default_price": "140.00",
          "created_at": "2022-05-11T19:38:15.373Z",
          "updated_at": "2022-05-11T19:38:15.373Z"
      },
      {
          "id": 71698,
          "campus": "hr-rpp",
          "name": "Bright Future Sunglasses",
          "slogan": "You've got to wear shades",
          "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
          "category": "Accessories",
          "default_price": "69.00",
          "created_at": "2022-05-11T19:38:15.373Z",
          "updated_at": "2022-05-11T19:38:15.373Z"
      },
      {
          "id": 71699,
          "campus": "hr-rpp",
          "name": "Morning Joggers",
          "slogan": "Make yourself a morning person",
          "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
          "category": "Pants",
          "default_price": "40.00",
          "created_at": "2022-05-11T19:38:15.373Z",
          "updated_at": "2022-05-11T19:38:15.373Z"
      },
      {
          "id": 71700,
          "campus": "hr-rpp",
          "name": "Slacker's Slacks",
          "slogan": "Comfortable for everything, or nothing",
          "description": "I'll tell you how great they are after I nap for a bit.",
          "category": "Pants",
          "default_price": "65.00",
          "created_at": "2022-05-11T19:38:15.373Z",
          "updated_at": "2022-05-11T19:38:15.373Z"
      },
      {
          "id": 71701,
          "campus": "hr-rpp",
          "name": "Heir Force Ones",
          "slogan": "A sneaker dynasty",
          "description": "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
          "category": "Kicks",
          "default_price": "99.00",
          "created_at": "2022-05-11T19:38:15.373Z",
          "updated_at": "2022-05-11T19:38:15.373Z"
      }
  ],
  "SKU": 71697,
  "expanded": false,
  "styles": [],
  "current": [],
  "mainIndex": 0,
  "amount": 0,
  "currentThumbnails": [],
  "currentStyle": {
    "style_id": 444218,
    "name": "Forest Green & Black",
    "original_price": "140.00",
    "sale_price": null,
    "default?": true,
    "photos": [
        {
            "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
            "index": 0
        },
        {
            "thumbnail_url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80",
            "index": 1
        },
        {
            "thumbnail_url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80",
            "index": 2
        },
        {
            "thumbnail_url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
            "index": 3
        },
        {
            "thumbnail_url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
            "index": 4
        },
        {
            "thumbnail_url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
            "index": 5
        }
    ],
    "skus": {
        "2580526": {
            "quantity": 8,
            "size": "XS"
        },
        "2580527": {
            "quantity": 16,
            "size": "S"
        },
        "2580528": {
            "quantity": 17,
            "size": "M"
        },
        "2580529": {
            "quantity": 10,
            "size": "L"
        },
        "2580530": {
            "quantity": 15,
            "size": "XL"
        },
        "2580531": {
            "quantity": 4,
            "size": "XL"
        }
    }
},
  "thumbnailSection": 0,
  "selectedSize": null,
  "sizeQuant": 0,
  "selectedQuant": 0
}


// describe("Jest default test", () => {
//   test('use jsdom in this test file', () => {
//     const element = document.createElement('div');
//     expect(element).not.toBeNull();
//   });
// })

describe("Jest default test", () => {
  test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });
})

describe("Overview Widget", () => {
  it("should render OVERVIEW widget when DOM is loaded", async () => {
    render(<Overview />);
    await waitFor(() => {
      screen.getByText("overview")
    })
  })
})


  describe('Overview', () => {

    test('Renders Product Info when no data is passed in: SAD PATH', () => {
      const { container } = render(<ProductInfo info={{}} style={{}} />)

      expect(container).toBeInTheDocument();
    });

    test('Renders Add To Cart when no data is passed in: SAD PATH', () => {
      const { container } = render(<AddToCart info={{}} style={{}} />)

      expect(container).toBeInTheDocument();
    });

    test('Renders Image Gallery when no data is passed in: SAD PATH', () => {
      const { container } = render(<ImageGallery info={{}} style={{}} />)

      expect(container).toBeInTheDocument();
    });

    test('Renders Style Selector when no data is passed in: SAD PATH', () => {
      const { container } = render(<ImageGallery info={{}} style={{}} />)

      expect(container).toBeInTheDocument();
    });




    // test('Renders product info when data is passed in', () => {
    //   const info = state;
    //   const style = state.currentStyle;
    //   const { container } = render(<ProductInfo info={{info}} style={{style}} />)


    //   // expect(queryByTestId(container, 'product-info')).toBeTruthy()

    //   expect(screen.findByTestId('product-info-loaded')).toBeInTheDocument();
    //   // expect(container).toBeInTheDocument();
    // })


})