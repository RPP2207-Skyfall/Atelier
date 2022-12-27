/** @jest-environment jsdom */

import react from 'react';
import ProductInfo from "../../client/src/components/overview/parts/productInfo/ProductInfo.jsx";
import AddToCart from "../../client/src/components/overview/parts/addToCart/AddToCart.jsx";
import ImageGallery from "../../client/src/components/overview/parts/imageGallery/ImageGallery.jsx";
import StyleSelector from "../../client/src/components/overview/parts/styleSelector/StyleSelector.jsx";
import Overview from "../../client/src/components/overview/Overview.jsx";
import AddToBag from '../../client/src/components/overview/parts/addToCart/AddToBag.jsx'
import Thumbnail from "../../client/src/components/overview/parts/imageGallery/Thumbnails.jsx";
import DefaultView from "../../client/src/components/overview/parts/imageGallery/views/DefaultView.jsx";
import ZoomBox from "../../client/src/components/overview/parts/imageGallery/views/ZoomBox.jsx";
import helperFunctions from './overview_functions.js';
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
  "styles": {
      "product_id": "71697",
      "results": [
          {
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
          {
              "style_id": 444219,
              "name": "Desert Brown & Tan",
              "original_price": "140.00",
              "sale_price": null,
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80"
                  }
              ],
              "skus": {
                  "2580532": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "2580533": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "2580534": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "2580535": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "2580536": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "2580537": {
                      "quantity": 6,
                      "size": "XXL"
                  }
              }
          },
          {
              "style_id": 444220,
              "name": "Ocean Blue & Grey",
              "original_price": "140.00",
              "sale_price": "100.00",
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2761&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=938&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                  }
              ],
              "skus": {
                  "2580538": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "2580539": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "2580540": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "2580541": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "2580542": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "2580543": {
                      "quantity": 6,
                      "size": "XXL"
                  }
              }
          },
          {
              "style_id": 444221,
              "name": "Digital Red & Black",
              "original_price": "140.00",
              "sale_price": null,
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",
                      "url": "https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  }
              ],
              "skus": {
                  "2580544": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "2580545": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "2580546": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "2580547": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "2580548": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "2580549": {
                      "quantity": 6,
                      "size": "XXL"
                  }
              }
          },
          {
              "style_id": 444222,
              "name": "Sky Blue & White",
              "original_price": "140.00",
              "sale_price": "100.00",
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  }
              ],
              "skus": {
                  "2580550": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "2580551": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "2580552": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "2580553": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "2580554": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "2580555": {
                      "quantity": 6,
                      "size": "XXL"
                  }
              }
          },
          {
              "style_id": 444223,
              "name": "Dark Grey & Black",
              "original_price": "170.00",
              "sale_price": null,
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                  }
              ],
              "skus": {
                  "2580556": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "2580557": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "2580558": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "2580559": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "2580560": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "2580561": {
                      "quantity": 6,
                      "size": "XXL"
                  }
              }
          }
      ]
  },
  "current": {
      "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      "index": 0
  },
  "mainIndex": 0,
  "amount": 6,
  "currentThumbnails": [
      [
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
      ]
  ],
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
  "selectedQuant": 0,
  "zoomBox": false,
  "reviewData": [
      {
          "review_id": 1277434,
          "rating": 5,
          "summary": "test review",
          "recommend": false,
          "response": null,
          "body": "test review test review test review test review test review",
          "date": "2022-10-29T00:00:00.000Z",
          "reviewer_name": "sdfsa",
          "helpfulness": 1,
          "photos": []
      },
      {
          "review_id": 1277442,
          "rating": 5,
          "summary": "wer",
          "recommend": true,
          "response": null,
          "body": "sdfwerewtrretreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          "date": "2022-10-31T00:00:00.000Z",
          "reviewer_name": "asd",
          "helpfulness": 1,
          "photos": []
      },
      {
          "review_id": 1277421,
          "rating": 4,
          "summary": "",
          "recommend": false,
          "response": null,
          "body": "1231231231test testing testing testing testing testing",
          "date": "2022-10-29T00:00:00.000Z",
          "reviewer_name": "123",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1277420,
          "rating": 4,
          "summary": "",
          "recommend": true,
          "response": null,
          "body": "test the message from team one application! 7777711111",
          "date": "2022-10-29T00:00:00.000Z",
          "reviewer_name": "123",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1277484,
          "rating": 3,
          "summary": "",
          "recommend": true,
          "response": null,
          "body": "testing testing 123123 testing 123 testing   asdfaws;w",
          "date": "2022-11-09T00:00:00.000Z",
          "reviewer_name": "ee",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1277473,
          "rating": 1,
          "summary": "",
          "recommend": false,
          "response": null,
          "body": "reviews body need 50 characers. from team application",
          "date": "2022-11-05T00:00:00.000Z",
          "reviewer_name": "pyc",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 2456687,
                  "url": "https://res.cloudinary.com/dskwqzkmr/image/upload/v1667675743/z0xpoxshwj6e1nexrbgy.png"
              }
          ]
      },
      {
          "review_id": 1277445,
          "rating": 5,
          "summary": "you need these",
          "recommend": true,
          "response": null,
          "body": "i don't know why you're reading this review. BUY THEM NOW",
          "date": "2022-11-01T00:00:00.000Z",
          "reviewer_name": "true",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 2456663,
                  "url": "http://res.cloudinary.com/dnawad7p8/image/upload/v1667273952/atelier/tff8a5v3qwfgblfq0ngq.png"
              }
          ]
      },
      {
          "review_id": 1277436,
          "rating": 5,
          "summary": "good",
          "recommend": true,
          "response": null,
          "body": "very good very good very good very good very good very good",
          "date": "2022-10-30T00:00:00.000Z",
          "reviewer_name": "Hi",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1276246,
          "rating": 3,
          "summary": "It's okay",
          "recommend": true,
          "response": null,
          "body": "This product is not great, it is not bad, it is just ok. ",
          "date": "2022-08-27T00:00:00.000Z",
          "reviewer_name": "test",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1276245,
          "rating": 4,
          "summary": "Ok",
          "recommend": true,
          "response": null,
          "body": "Not great, not bad, just ok. I would not buy it again. ",
          "date": "2022-08-27T00:00:00.000Z",
          "reviewer_name": "test",
          "helpfulness": 0,
          "photos": []
      }
  ],
  "rating": 3.9,
  "done": true,
  "skuToBuy": null
}

const badState = {
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
  "styles": {
      // "product_id": "71697",
      // "results": [
      //     {
      //         "style_id": 444218,
      //         "name": "Forest Green & Black",
      //         "original_price": "140.00",
      //         "sale_price": null,
      //         "default?": true,
      //         "photos": [
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      //                 "index": 0
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80",
      //                 "index": 1
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80",
      //                 "index": 2
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      //                 "index": 3
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      //                 "index": 4
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      //                 "index": 5
      //             }
      //         ],
      //         "skus": {
      //             "2580526": {
      //                 "quantity": 8,
      //                 "size": "XS"
      //             },
      //             "2580527": {
      //                 "quantity": 16,
      //                 "size": "S"
      //             },
      //             "2580528": {
      //                 "quantity": 17,
      //                 "size": "M"
      //             },
      //             "2580529": {
      //                 "quantity": 10,
      //                 "size": "L"
      //             },
      //             "2580530": {
      //                 "quantity": 15,
      //                 "size": "XL"
      //             },
      //             "2580531": {
      //                 "quantity": 4,
      //                 "size": "XL"
      //             }
      //         }
      //     },
      //     {
      //         "style_id": 444219,
      //         "name": "Desert Brown & Tan",
      //         "original_price": "140.00",
      //         "sale_price": null,
      //         "default?": false,
      //         "photos": [
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80"
      //             }
      //         ],
      //         "skus": {
      //             "2580532": {
      //                 "quantity": 8,
      //                 "size": "XS"
      //             },
      //             "2580533": {
      //                 "quantity": 16,
      //                 "size": "S"
      //             },
      //             "2580534": {
      //                 "quantity": 17,
      //                 "size": "M"
      //             },
      //             "2580535": {
      //                 "quantity": 10,
      //                 "size": "L"
      //             },
      //             "2580536": {
      //                 "quantity": 15,
      //                 "size": "XL"
      //             },
      //             "2580537": {
      //                 "quantity": 6,
      //                 "size": "XXL"
      //             }
      //         }
      //     },
      //     {
      //         "style_id": 444220,
      //         "name": "Ocean Blue & Grey",
      //         "original_price": "140.00",
      //         "sale_price": "100.00",
      //         "default?": false,
      //         "photos": [
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2761&q=80"
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=938&q=80"
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
      //             }
      //         ],
      //         "skus": {
      //             "2580538": {
      //                 "quantity": 8,
      //                 "size": "XS"
      //             },
      //             "2580539": {
      //                 "quantity": 16,
      //                 "size": "S"
      //             },
      //             "2580540": {
      //                 "quantity": 17,
      //                 "size": "M"
      //             },
      //             "2580541": {
      //                 "quantity": 10,
      //                 "size": "L"
      //             },
      //             "2580542": {
      //                 "quantity": 15,
      //                 "size": "XL"
      //             },
      //             "2580543": {
      //                 "quantity": 6,
      //                 "size": "XXL"
      //             }
      //         }
      //     },
      //     {
      //         "style_id": 444221,
      //         "name": "Digital Red & Black",
      //         "original_price": "140.00",
      //         "sale_price": null,
      //         "default?": false,
      //         "photos": [
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",
      //                 "url": "https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      //             }
      //         ],
      //         "skus": {
      //             "2580544": {
      //                 "quantity": 8,
      //                 "size": "XS"
      //             },
      //             "2580545": {
      //                 "quantity": 16,
      //                 "size": "S"
      //             },
      //             "2580546": {
      //                 "quantity": 17,
      //                 "size": "M"
      //             },
      //             "2580547": {
      //                 "quantity": 10,
      //                 "size": "L"
      //             },
      //             "2580548": {
      //                 "quantity": 15,
      //                 "size": "XL"
      //             },
      //             "2580549": {
      //                 "quantity": 6,
      //                 "size": "XXL"
      //             }
      //         }
      //     },
      //     {
      //         "style_id": 444222,
      //         "name": "Sky Blue & White",
      //         "original_price": "140.00",
      //         "sale_price": "100.00",
      //         "default?": false,
      //         "photos": [
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      //             }
      //         ],
      //         "skus": {
      //             "2580550": {
      //                 "quantity": 8,
      //                 "size": "XS"
      //             },
      //             "2580551": {
      //                 "quantity": 16,
      //                 "size": "S"
      //             },
      //             "2580552": {
      //                 "quantity": 17,
      //                 "size": "M"
      //             },
      //             "2580553": {
      //                 "quantity": 10,
      //                 "size": "L"
      //             },
      //             "2580554": {
      //                 "quantity": 15,
      //                 "size": "XL"
      //             },
      //             "2580555": {
      //                 "quantity": 6,
      //                 "size": "XXL"
      //             }
      //         }
      //     },
      //     {
      //         "style_id": 444223,
      //         "name": "Dark Grey & Black",
      //         "original_price": "170.00",
      //         "sale_price": null,
      //         "default?": false,
      //         "photos": [
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      //             },
      //             {
      //                 "thumbnail_url": "https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //                 "url": "https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
      //             }
      //         ],
      //         "skus": {
      //             "2580556": {
      //                 "quantity": 8,
      //                 "size": "XS"
      //             },
      //             "2580557": {
      //                 "quantity": 16,
      //                 "size": "S"
      //             },
      //             "2580558": {
      //                 "quantity": 17,
      //                 "size": "M"
      //             },
      //             "2580559": {
      //                 "quantity": 10,
      //                 "size": "L"
      //             },
      //             "2580560": {
      //                 "quantity": 15,
      //                 "size": "XL"
      //             },
      //             "2580561": {
      //                 "quantity": 6,
      //                 "size": "XXL"
      //             }
      //         }
      //     }
      // ]
  },
  "current": {
      "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      "index": 0
  },
  "mainIndex": 0,
  "amount": 6,
  "currentThumbnails": [
      [
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
      ]
  ],
  "currentStyle": {
      "style_id": 444218,
      "name": "Forest Green & Black",
      "original_price": "140.00",
      "sale_price": null,
      "default?": true,
      "photos": [
          // {
          //     "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          //     "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
          //     "index": 0
          // },
          // {
          //     "thumbnail_url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          //     "url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80",
          //     "index": 1
          // },
          // {
          //     "thumbnail_url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          //     "url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80",
          //     "index": 2
          // },
          // {
          //     "thumbnail_url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
          //     "url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
          //     "index": 3
          // },
          // {
          //     "thumbnail_url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          //     "url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
          //     "index": 4
          // },
          // {
          //     "thumbnail_url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          //     "url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
          //     "index": 5
          // }
      ],
      "skus": {}
  },
  "thumbnailSection": 0,
  "selectedSize": null,
  "sizeQuant": 0,
  "selectedQuant": 0,
  "zoomBox": false,
  "reviewData": [
      {
          "review_id": 1277434,
          "rating": 5,
          "summary": "test review",
          "recommend": false,
          "response": null,
          "body": "test review test review test review test review test review",
          "date": "2022-10-29T00:00:00.000Z",
          "reviewer_name": "sdfsa",
          "helpfulness": 1,
          "photos": []
      },
      {
          "review_id": 1277442,
          "rating": 5,
          "summary": "wer",
          "recommend": true,
          "response": null,
          "body": "sdfwerewtrretreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          "date": "2022-10-31T00:00:00.000Z",
          "reviewer_name": "asd",
          "helpfulness": 1,
          "photos": []
      },
      {
          "review_id": 1277421,
          "rating": 4,
          "summary": "",
          "recommend": false,
          "response": null,
          "body": "1231231231test testing testing testing testing testing",
          "date": "2022-10-29T00:00:00.000Z",
          "reviewer_name": "123",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1277420,
          "rating": 4,
          "summary": "",
          "recommend": true,
          "response": null,
          "body": "test the message from team one application! 7777711111",
          "date": "2022-10-29T00:00:00.000Z",
          "reviewer_name": "123",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1277484,
          "rating": 3,
          "summary": "",
          "recommend": true,
          "response": null,
          "body": "testing testing 123123 testing 123 testing   asdfaws;w",
          "date": "2022-11-09T00:00:00.000Z",
          "reviewer_name": "ee",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1277473,
          "rating": 1,
          "summary": "",
          "recommend": false,
          "response": null,
          "body": "reviews body need 50 characers. from team application",
          "date": "2022-11-05T00:00:00.000Z",
          "reviewer_name": "pyc",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 2456687,
                  "url": "https://res.cloudinary.com/dskwqzkmr/image/upload/v1667675743/z0xpoxshwj6e1nexrbgy.png"
              }
          ]
      },
      {
          "review_id": 1277445,
          "rating": 5,
          "summary": "you need these",
          "recommend": true,
          "response": null,
          "body": "i don't know why you're reading this review. BUY THEM NOW",
          "date": "2022-11-01T00:00:00.000Z",
          "reviewer_name": "true",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 2456663,
                  "url": "http://res.cloudinary.com/dnawad7p8/image/upload/v1667273952/atelier/tff8a5v3qwfgblfq0ngq.png"
              }
          ]
      },
      {
          "review_id": 1277436,
          "rating": 5,
          "summary": "good",
          "recommend": true,
          "response": null,
          "body": "very good very good very good very good very good very good",
          "date": "2022-10-30T00:00:00.000Z",
          "reviewer_name": "Hi",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1276246,
          "rating": 3,
          "summary": "It's okay",
          "recommend": true,
          "response": null,
          "body": "This product is not great, it is not bad, it is just ok. ",
          "date": "2022-08-27T00:00:00.000Z",
          "reviewer_name": "test",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1276245,
          "rating": 4,
          "summary": "Ok",
          "recommend": true,
          "response": null,
          "body": "Not great, not bad, just ok. I would not buy it again. ",
          "date": "2022-08-27T00:00:00.000Z",
          "reviewer_name": "test",
          "helpfulness": 0,
          "photos": []
      }
  ],
  "rating": 3.9,
  "done": true,
  "skuToBuy": null
}

const expandedState = {
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
  "expanded": true,
  "styles": {
      "product_id": "71697",
      "results": [
          {
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
          {
              "style_id": 444219,
              "name": "Desert Brown & Tan",
              "original_price": "140.00",
              "sale_price": null,
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80"
                  }
              ],
              "skus": {
                  "2580532": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "2580533": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "2580534": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "2580535": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "2580536": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "2580537": {
                      "quantity": 6,
                      "size": "XXL"
                  }
              }
          },
          {
              "style_id": 444220,
              "name": "Ocean Blue & Grey",
              "original_price": "140.00",
              "sale_price": "100.00",
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2761&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=938&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                  }
              ],
              "skus": {
                  "2580538": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "2580539": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "2580540": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "2580541": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "2580542": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "2580543": {
                      "quantity": 6,
                      "size": "XXL"
                  }
              }
          },
          {
              "style_id": 444221,
              "name": "Digital Red & Black",
              "original_price": "140.00",
              "sale_price": null,
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",
                      "url": "https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  }
              ],
              "skus": {
                  "2580544": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "2580545": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "2580546": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "2580547": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "2580548": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "2580549": {
                      "quantity": 6,
                      "size": "XXL"
                  }
              }
          },
          {
              "style_id": 444222,
              "name": "Sky Blue & White",
              "original_price": "140.00",
              "sale_price": "100.00",
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  }
              ],
              "skus": {
                  "2580550": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "2580551": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "2580552": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "2580553": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "2580554": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "2580555": {
                      "quantity": 6,
                      "size": "XXL"
                  }
              }
          },
          {
              "style_id": 444223,
              "name": "Dark Grey & Black",
              "original_price": "170.00",
              "sale_price": null,
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                  }
              ],
              "skus": {
                  "2580556": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "2580557": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "2580558": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "2580559": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "2580560": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "2580561": {
                      "quantity": 6,
                      "size": "XXL"
                  }
              }
          }
      ]
  },
  "current": {
      "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      "index": 0
  },
  "mainIndex": 0,
  "amount": 6,
  "currentThumbnails": [
      [
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
      ]
  ],
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
      "skus": {}
  },
  "thumbnailSection": 0,
  "selectedSize": null,
  "sizeQuant": 0,
  "selectedQuant": 0,
  "zoomBox": false,
  "reviewData": [
      {
          "review_id": 1277434,
          "rating": 5,
          "summary": "test review",
          "recommend": false,
          "response": null,
          "body": "test review test review test review test review test review",
          "date": "2022-10-29T00:00:00.000Z",
          "reviewer_name": "sdfsa",
          "helpfulness": 1,
          "photos": []
      },
      {
          "review_id": 1277442,
          "rating": 5,
          "summary": "wer",
          "recommend": true,
          "response": null,
          "body": "sdfwerewtrretreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          "date": "2022-10-31T00:00:00.000Z",
          "reviewer_name": "asd",
          "helpfulness": 1,
          "photos": []
      },
      {
          "review_id": 1277421,
          "rating": 4,
          "summary": "",
          "recommend": false,
          "response": null,
          "body": "1231231231test testing testing testing testing testing",
          "date": "2022-10-29T00:00:00.000Z",
          "reviewer_name": "123",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1277420,
          "rating": 4,
          "summary": "",
          "recommend": true,
          "response": null,
          "body": "test the message from team one application! 7777711111",
          "date": "2022-10-29T00:00:00.000Z",
          "reviewer_name": "123",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1277484,
          "rating": 3,
          "summary": "",
          "recommend": true,
          "response": null,
          "body": "testing testing 123123 testing 123 testing   asdfaws;w",
          "date": "2022-11-09T00:00:00.000Z",
          "reviewer_name": "ee",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1277473,
          "rating": 1,
          "summary": "",
          "recommend": false,
          "response": null,
          "body": "reviews body need 50 characers. from team application",
          "date": "2022-11-05T00:00:00.000Z",
          "reviewer_name": "pyc",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 2456687,
                  "url": "https://res.cloudinary.com/dskwqzkmr/image/upload/v1667675743/z0xpoxshwj6e1nexrbgy.png"
              }
          ]
      },
      {
          "review_id": 1277445,
          "rating": 5,
          "summary": "you need these",
          "recommend": true,
          "response": null,
          "body": "i don't know why you're reading this review. BUY THEM NOW",
          "date": "2022-11-01T00:00:00.000Z",
          "reviewer_name": "true",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 2456663,
                  "url": "http://res.cloudinary.com/dnawad7p8/image/upload/v1667273952/atelier/tff8a5v3qwfgblfq0ngq.png"
              }
          ]
      },
      {
          "review_id": 1277436,
          "rating": 5,
          "summary": "good",
          "recommend": true,
          "response": null,
          "body": "very good very good very good very good very good very good",
          "date": "2022-10-30T00:00:00.000Z",
          "reviewer_name": "Hi",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1276246,
          "rating": 3,
          "summary": "It's okay",
          "recommend": true,
          "response": null,
          "body": "This product is not great, it is not bad, it is just ok. ",
          "date": "2022-08-27T00:00:00.000Z",
          "reviewer_name": "test",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1276245,
          "rating": 4,
          "summary": "Ok",
          "recommend": true,
          "response": null,
          "body": "Not great, not bad, just ok. I would not buy it again. ",
          "date": "2022-08-27T00:00:00.000Z",
          "reviewer_name": "test",
          "helpfulness": 0,
          "photos": []
      }
  ],
  "rating": 3.9,
  "done": true,
  "skuToBuy": null
}

const endAmount = {
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
  "styles": {
      "product_id": "71697",
      "results": [
          {
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
          {
              "style_id": 444219,
              "name": "Desert Brown & Tan",
              "original_price": "140.00",
              "sale_price": null,
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80"
                  }
              ],
              "skus": {
                  "2580532": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "2580533": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "2580534": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "2580535": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "2580536": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "2580537": {
                      "quantity": 6,
                      "size": "XXL"
                  }
              }
          },
          {
              "style_id": 444220,
              "name": "Ocean Blue & Grey",
              "original_price": "140.00",
              "sale_price": "100.00",
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2761&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=938&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                  }
              ],
              "skus": {
                  "2580538": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "2580539": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "2580540": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "2580541": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "2580542": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "2580543": {
                      "quantity": 6,
                      "size": "XXL"
                  }
              }
          },
          {
              "style_id": 444221,
              "name": "Digital Red & Black",
              "original_price": "140.00",
              "sale_price": null,
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",
                      "url": "https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  }
              ],
              "skus": {
                  "2580544": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "2580545": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "2580546": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "2580547": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "2580548": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "2580549": {
                      "quantity": 6,
                      "size": "XXL"
                  }
              }
          },
          {
              "style_id": 444222,
              "name": "Sky Blue & White",
              "original_price": "140.00",
              "sale_price": "100.00",
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  }
              ],
              "skus": {
                  "2580550": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "2580551": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "2580552": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "2580553": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "2580554": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "2580555": {
                      "quantity": 6,
                      "size": "XXL"
                  }
              }
          },
          {
              "style_id": 444223,
              "name": "Dark Grey & Black",
              "original_price": "170.00",
              "sale_price": null,
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                  }
              ],
              "skus": {
                  "2580556": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "2580557": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "2580558": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "2580559": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "2580560": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "2580561": {
                      "quantity": 6,
                      "size": "XXL"
                  }
              }
          }
      ]
  },
  "current": {
      "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      "index": 0
  },
  "mainIndex": 5,
  "amount": 6,
  "currentThumbnails": [
      [
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
      ]
  ],
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
      "skus": {}
  },
  "thumbnailSection": 0,
  "selectedSize": null,
  "sizeQuant": 0,
  "selectedQuant": 0,
  "zoomBox": false,
  "reviewData": [
      {
          "review_id": 1277434,
          "rating": 5,
          "summary": "test review",
          "recommend": false,
          "response": null,
          "body": "test review test review test review test review test review",
          "date": "2022-10-29T00:00:00.000Z",
          "reviewer_name": "sdfsa",
          "helpfulness": 1,
          "photos": []
      },
      {
          "review_id": 1277442,
          "rating": 5,
          "summary": "wer",
          "recommend": true,
          "response": null,
          "body": "sdfwerewtrretreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          "date": "2022-10-31T00:00:00.000Z",
          "reviewer_name": "asd",
          "helpfulness": 1,
          "photos": []
      },
      {
          "review_id": 1277421,
          "rating": 4,
          "summary": "",
          "recommend": false,
          "response": null,
          "body": "1231231231test testing testing testing testing testing",
          "date": "2022-10-29T00:00:00.000Z",
          "reviewer_name": "123",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1277420,
          "rating": 4,
          "summary": "",
          "recommend": true,
          "response": null,
          "body": "test the message from team one application! 7777711111",
          "date": "2022-10-29T00:00:00.000Z",
          "reviewer_name": "123",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1277484,
          "rating": 3,
          "summary": "",
          "recommend": true,
          "response": null,
          "body": "testing testing 123123 testing 123 testing   asdfaws;w",
          "date": "2022-11-09T00:00:00.000Z",
          "reviewer_name": "ee",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1277473,
          "rating": 1,
          "summary": "",
          "recommend": false,
          "response": null,
          "body": "reviews body need 50 characers. from team application",
          "date": "2022-11-05T00:00:00.000Z",
          "reviewer_name": "pyc",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 2456687,
                  "url": "https://res.cloudinary.com/dskwqzkmr/image/upload/v1667675743/z0xpoxshwj6e1nexrbgy.png"
              }
          ]
      },
      {
          "review_id": 1277445,
          "rating": 5,
          "summary": "you need these",
          "recommend": true,
          "response": null,
          "body": "i don't know why you're reading this review. BUY THEM NOW",
          "date": "2022-11-01T00:00:00.000Z",
          "reviewer_name": "true",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 2456663,
                  "url": "http://res.cloudinary.com/dnawad7p8/image/upload/v1667273952/atelier/tff8a5v3qwfgblfq0ngq.png"
              }
          ]
      },
      {
          "review_id": 1277436,
          "rating": 5,
          "summary": "good",
          "recommend": true,
          "response": null,
          "body": "very good very good very good very good very good very good",
          "date": "2022-10-30T00:00:00.000Z",
          "reviewer_name": "Hi",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1276246,
          "rating": 3,
          "summary": "It's okay",
          "recommend": true,
          "response": null,
          "body": "This product is not great, it is not bad, it is just ok. ",
          "date": "2022-08-27T00:00:00.000Z",
          "reviewer_name": "test",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1276245,
          "rating": 4,
          "summary": "Ok",
          "recommend": true,
          "response": null,
          "body": "Not great, not bad, just ok. I would not buy it again. ",
          "date": "2022-08-27T00:00:00.000Z",
          "reviewer_name": "test",
          "helpfulness": 0,
          "photos": []
      }
  ],
  "rating": 3.9,
  "done": true,
  "skuToBuy": null
}

const betweenAmount = {
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
  "styles": {
      "product_id": "71697",
      "results": [
          {
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
          {
              "style_id": 444219,
              "name": "Desert Brown & Tan",
              "original_price": "140.00",
              "sale_price": null,
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80"
                  }
              ],
              "skus": {
                  "2580532": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "2580533": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "2580534": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "2580535": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "2580536": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "2580537": {
                      "quantity": 6,
                      "size": "XXL"
                  }
              }
          },
          {
              "style_id": 444220,
              "name": "Ocean Blue & Grey",
              "original_price": "140.00",
              "sale_price": "100.00",
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2761&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=938&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                  }
              ],
              "skus": {
                  "2580538": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "2580539": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "2580540": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "2580541": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "2580542": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "2580543": {
                      "quantity": 6,
                      "size": "XXL"
                  }
              }
          },
          {
              "style_id": 444221,
              "name": "Digital Red & Black",
              "original_price": "140.00",
              "sale_price": null,
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",
                      "url": "https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  }
              ],
              "skus": {
                  "2580544": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "2580545": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "2580546": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "2580547": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "2580548": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "2580549": {
                      "quantity": 6,
                      "size": "XXL"
                  }
              }
          },
          {
              "style_id": 444222,
              "name": "Sky Blue & White",
              "original_price": "140.00",
              "sale_price": "100.00",
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  }
              ],
              "skus": {
                  "2580550": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "2580551": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "2580552": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "2580553": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "2580554": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "2580555": {
                      "quantity": 6,
                      "size": "XXL"
                  }
              }
          },
          {
              "style_id": 444223,
              "name": "Dark Grey & Black",
              "original_price": "170.00",
              "sale_price": null,
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                  }
              ],
              "skus": {
                  "2580556": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "2580557": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "2580558": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "2580559": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "2580560": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "2580561": {
                      "quantity": 6,
                      "size": "XXL"
                  }
              }
          }
      ]
  },
  "current": {
      "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      "index": 0
  },
  "mainIndex": 3,
  "amount": 6,
  "currentThumbnails": [
      [
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
      ]
  ],
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
      "skus": {}
  },
  "thumbnailSection": 0,
  "selectedSize": null,
  "sizeQuant": 0,
  "selectedQuant": 0,
  "zoomBox": false,
  "reviewData": [
      {
          "review_id": 1277434,
          "rating": 5,
          "summary": "test review",
          "recommend": false,
          "response": null,
          "body": "test review test review test review test review test review",
          "date": "2022-10-29T00:00:00.000Z",
          "reviewer_name": "sdfsa",
          "helpfulness": 1,
          "photos": []
      },
      {
          "review_id": 1277442,
          "rating": 5,
          "summary": "wer",
          "recommend": true,
          "response": null,
          "body": "sdfwerewtrretreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          "date": "2022-10-31T00:00:00.000Z",
          "reviewer_name": "asd",
          "helpfulness": 1,
          "photos": []
      },
      {
          "review_id": 1277421,
          "rating": 4,
          "summary": "",
          "recommend": false,
          "response": null,
          "body": "1231231231test testing testing testing testing testing",
          "date": "2022-10-29T00:00:00.000Z",
          "reviewer_name": "123",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1277420,
          "rating": 4,
          "summary": "",
          "recommend": true,
          "response": null,
          "body": "test the message from team one application! 7777711111",
          "date": "2022-10-29T00:00:00.000Z",
          "reviewer_name": "123",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1277484,
          "rating": 3,
          "summary": "",
          "recommend": true,
          "response": null,
          "body": "testing testing 123123 testing 123 testing   asdfaws;w",
          "date": "2022-11-09T00:00:00.000Z",
          "reviewer_name": "ee",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1277473,
          "rating": 1,
          "summary": "",
          "recommend": false,
          "response": null,
          "body": "reviews body need 50 characers. from team application",
          "date": "2022-11-05T00:00:00.000Z",
          "reviewer_name": "pyc",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 2456687,
                  "url": "https://res.cloudinary.com/dskwqzkmr/image/upload/v1667675743/z0xpoxshwj6e1nexrbgy.png"
              }
          ]
      },
      {
          "review_id": 1277445,
          "rating": 5,
          "summary": "you need these",
          "recommend": true,
          "response": null,
          "body": "i don't know why you're reading this review. BUY THEM NOW",
          "date": "2022-11-01T00:00:00.000Z",
          "reviewer_name": "true",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 2456663,
                  "url": "http://res.cloudinary.com/dnawad7p8/image/upload/v1667273952/atelier/tff8a5v3qwfgblfq0ngq.png"
              }
          ]
      },
      {
          "review_id": 1277436,
          "rating": 5,
          "summary": "good",
          "recommend": true,
          "response": null,
          "body": "very good very good very good very good very good very good",
          "date": "2022-10-30T00:00:00.000Z",
          "reviewer_name": "Hi",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1276246,
          "rating": 3,
          "summary": "It's okay",
          "recommend": true,
          "response": null,
          "body": "This product is not great, it is not bad, it is just ok. ",
          "date": "2022-08-27T00:00:00.000Z",
          "reviewer_name": "test",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1276245,
          "rating": 4,
          "summary": "Ok",
          "recommend": true,
          "response": null,
          "body": "Not great, not bad, just ok. I would not buy it again. ",
          "date": "2022-08-27T00:00:00.000Z",
          "reviewer_name": "test",
          "helpfulness": 0,
          "photos": []
      }
  ],
  "rating": 3.9,
  "done": true,
  "skuToBuy": null
}

const helpers = {

  selectSize: function(size, quant, skuToBuy) {
    // console.log('size attempted', size);
    // console.log('sku to byt', skuToBuy)

    // this.setState({
    //   selectedSize: size,
    //   sizeQuant: quant,
    //   skuToBuy: skuToBuy
    // })

    return
  },

  selectQuant: function(quant) {

    this.setState({
      selectedQuant: quant
    })
  },

  makeImageHolder: function(images) {

    let holder = [];
    let box = [];

    for (var i = 0; i < images.length; i++) {

      images[i].index = i;
      box.push(images[i]);

      if (box.length === 7) {
        holder.push(box);
        box = [];
      }

      if (i >= images.length - 1) {
        holder.push(box);
        box = [];
      }

    }
    return holder;
  },

  updateStyle: function(style) {

    let newThumbnails = this.makeThumbnailBoxes(style.photos);

    this.setState({
      currentStyle: style,
      mainIndex: 0,
      currentThumbnails: newThumbnails
    })

  }
}

const addToBag = {
  "selectedQuant": 0,
  "selected": null,
  "quant": 0,
  "style": {
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
  "skuToBuy": null
}


describe("Jest default test", () => {
  test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });
})

describe("Image Gallery", () => {

  test("should render the image gallery", async () => {
    render(<ImageGallery info={state} currentThumbnails={state.currentThumbnails} currentStyle={state.currentStyle}
      thumbnailSection={state.thumbnailSection}
    />)
    var ImageGalleryTest = screen.getByTestId('image-gallery-test');
    expect(ImageGalleryTest).toBeInTheDocument();
  });

  test("should render the image in expanded view", async () => {
    render(<ImageGallery info={expandedState} currentThumbnails={expandedState.currentThumbnails} currentStyle={expandedState.currentStyle}
      thumbnailSection={expandedState.thumbnailSection}
    />)
    var ImageGalleryExpandedTest = screen.getByTestId('image-gallery-expanded-test');
    expect(ImageGalleryExpandedTest).toBeInTheDocument();
  });

  test("should only render the back button on the last image", async () => {
    render(<ImageGallery info={endAmount} currentThumbnails={expandedState.currentThumbnails} currentStyle={expandedState.currentStyle}
      thumbnailSection={expandedState.thumbnailSection}
    />)
    var ImageGalleryExpandedTest = screen.getByTestId("image-gallery-end-index");
    expect(ImageGalleryExpandedTest).toBeInTheDocument();
  });

  test("should render both front and back buttons when main index is between", async () => {
    render(<ImageGallery info={betweenAmount} currentThumbnails={expandedState.currentThumbnails} currentStyle={expandedState.currentStyle}
      thumbnailSection={expandedState.thumbnailSection}
    />)
    var ImageGalleryBetweenTest = screen.getByTestId("image-gallery-between-index");
    expect(ImageGalleryBetweenTest).toBeInTheDocument();
  });

  test("should render the thumbnails", async () => {
    render(
      <Thumbnail
      info={state} currentThumbnails={state.currentThumbnails} index={0}
      images={state.currentStyle.photos} section={state.thumbnailSection}
      thumbnailSection={state.thumbnailSection}
    />
    )
    var ThumbnailTest = screen.getByTestId('thumbnail-test');
    expect(ThumbnailTest).toBeInTheDocument();
  });

  test("should render the default view", async () => {
    render(
      <DefaultView  mainPic={"https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"} />
    )
    var DefaultViewTest = screen.getByTestId('default-view-test');
    expect(DefaultViewTest).toBeInTheDocument();
  });

  test("should render the Zoom Box view", async () => {
    render(
      <ZoomBox mainPic={"https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"} />
    )
    var ZoomBoxTest = screen.getByTestId('zoom-box-test');
    expect(ZoomBoxTest).toBeInTheDocument();
  });



  // test("Image Gallery shoudld fail gracefully without data", async () => {
  //   render(<ImageGallery info={badState} currentThumbnails={{}} currentStyle={badState.currentStyle}
  //     thumbnailSection={{}}
  //   />)
  //   var ImageGallerySadTest = screen.getByTestId("image-gallery-sad-path");
  //   expect(ImageGallerySadTest).toBeInTheDocument();
  // });

})

describe("Add To Cart", () => {

  test("should render the add to cart component", async () => {
    render(<AddToCart
      currentStyle={state.currentStyle} selected={state.selectedSize}
      sizeQuantity={state.sizeQuant} selectedQuant={state.selectedQuant} skuToBuy={state.skuToBuy}
    />
    )
    var AddToCartTest = screen.getByTestId('add-to-cart-selectSize-test');

    expect(AddToCartTest).toBeInTheDocument();
  });

  test("drop down should open when adding to cart", async () => {
    // render add to cart
    render(<AddToCart
      currentStyle={state.currentStyle} selected={state.selectedSize}
      sizeQuantity={state.sizeQuant} selectedQuant={state.selectedQuant} skuToBuy={state.skuToBuy}
    />
    )

    fireEvent.click(screen.getByText(/SELECT SIZE/i))

    var AddToCartDropdownTest = screen.getByTestId('add-to-cart-open-test');
    expect(AddToCartDropdownTest).toBeInTheDocument();
  });

  // test("select choice of selection", async () => {
  //   // render add to cart
  //   render(<AddToCart
  //     currentStyle={state.currentStyle} selectSize={helpers.selectSize} selected={state.selectedSize}
  //     sizeQuantity={state.sizeQuant} selectedQuant={state.selectedQuant}   skuToBuy={state.skuToBuy}
  //   />
  //   )

  //   // currentStyle={this.state.currentStyle} selectSize={this.selectSize} selected={this.state.selectedSize}
  //   // sizeQuantity={this.state.sizeQuant} selectedQuant={this.state.selectedQuant} selectQuant={this.selectQuant} skuToBuy={this.state.skuToBuy}
  //   // likeOutfit={this.likeOutfit}/>

  //   fireEvent.click(screen.getByText(/SELECT SIZE/i));
  //   fireEvent.click(screen.getByText(/M/i));

  //   var AddToCartDropdownSelectedTest = screen.getByTestId('add-to-cart-selected');
  //   expect(AddToCartDropdownSelectedTest).toBeInTheDocument();
  // });

  test("add to cart should read 'OUT OF STOCK' if there are no items in stock for the style", async () => {
    // render add to cart
    render(<AddToCart
      currentStyle={badState.currentStyle} selected={state.selectedSize}
      sizeQuantity={state.sizeQuant} selectedQuant={state.selectedQuant} skuToBuy={state.skuToBuy}
    />
    )

    var AddToCartOutOfStock = screen.getByTestId('add-to-cart-out-of-stock');
    expect(AddToCartOutOfStock).toBeInTheDocument();
  });

  test("add to bag should have force selection if nothing is selected", async () => {
    // render add to cart
    render(<AddToBag selectedQuant={addToBag.selectedQuant} selectQuant={addToBag.selectQuant}
      selected={addToBag.selected} quant={addToBag.sizeQuantity} style={addToBag.currentStyle} skuToBuy={addToBag.skuToBuy}
      likeOutfit={addToBag.likeOutfit}/>
    )

    var AddToBagUnselected = screen.getByTestId("add-to-bag-unselected-test");
    expect(AddToBagUnselected).toBeInTheDocument();
  });

  test("add to bag should have add to bag functionality", async () => {
    // render add to cart
    render(<AddToBag selectedQuant={addToBag.selectedQuant} selectQuant={addToBag.selectQuant}
      selected={"S"} quant={addToBag.sizeQuantity} style={addToBag.currentStyle} skuToBuy={addToBag.skuToBuy}
      likeOutfit={addToBag.likeOutfit}/>
    )
    var AddToBagSelected = screen.getByTestId("add-to-bag-selected-test");
    expect(AddToBagSelected).toBeInTheDocument();
  });


})

describe("Style Selector", () => {

  test("should render the style selector component when provided data", async () => {
    render(<StyleSelector
      styles={state.styles} currentStyle={state.currentStyle}
    />
    )
    var StyleSelectorTest = screen.getByTestId('style-selector-test');

    expect(StyleSelectorTest).toBeInTheDocument();
  });

  test("style selector should fail gracefully when no data is provided", async () => {
    render(<StyleSelector
      styles={{}} currentStyle={{}}
    />
    )
    var StyleSelectorSadTest = screen.getByTestId('style-selector-sad-test');
    expect(StyleSelectorSadTest).toBeInTheDocument();
  });

});

describe("Product Info", () => {

  test("should render the product info component", async () => {
    render(
      <ProductInfo info={state} style={state.currentStyle} rating={state.rating} />
    )
    var ProductInfoTest = screen.getByTestId('product-info-loaded-test');

    expect(ProductInfoTest).toBeInTheDocument();
  });

  test("product info component should fail gracefully when no data is provided", async () => {
    render(
      <ProductInfo info={{}} style={{}} rating={{}} />
    )
    var ProductInfoSadTest = screen.getByTestId('product-info-no-data');

    expect(ProductInfoSadTest).toBeInTheDocument();
  });

})

// describe("Overview", () => {
//   test("should render Overview component", async () => {
//     // render add to cart
//     render(<Overview/>)

//     var Overview = screen.getByTestId('overview-test');
//     expect(Overview).toBeInTheDocument();
//   });
// })





//   describe('Overview', () => {

//     test('Renders Product Info when no data is passed in: SAD PATH', () => {
//       const { container } = render(<ProductInfo info={{}} style={{}} />)

//       expect(container).toBeInTheDocument();
//     });

//     test('Renders Add To Cart when no data is passed in: SAD PATH', () => {
//       const { container } = render(<AddToCart info={{}} style={{}} />)

//       expect(container).toBeInTheDocument();
//     });

//     test('Renders Image Gallery when no data is passed in: SAD PATH', () => {
//       const { container } = render(<ImageGallery info={{}} style={{}} />)

//       expect(container).toBeInTheDocument();
//     });

//     test('Renders Style Selector when no data is passed in: SAD PATH', () => {
//       const { container } = render(<ImageGallery info={{}} style={{}} />)

//       expect(container).toBeInTheDocument();
//     });




//     // test('Renders product info when data is passed in', () => {
//     //   const info = state;
//     //   const style = state.currentStyle;
//     //   const { container } = render(<ProductInfo info={{info}} style={{style}} />)


//     //   // expect(queryByTestId(container, 'product-info')).toBeTruthy()

//     //   expect(screen.findByTestId('product-info-loaded')).toBeInTheDocument();
//     //   // expect(container).toBeInTheDocument();
//     // })


// })