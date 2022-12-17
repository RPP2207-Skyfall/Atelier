/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import RelatedItem from '../../client/src/components/relatedItem/relatedItemSection.jsx';
import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom';
import RelatedList from '../../client/src/components/relatedItem/parts/Outfit/OutfitList.jsx'
import OutfitList from '../../client/src/components/relatedItem/parts/RelatedItem/RelatedList.jsx'
import OutfitCard from '../../client/src/components/relatedItem/parts/Outfit/OutfitCard.jsx'
import Star from '../../client/src/components/rating_review/starRating/starRating.jsx'


describe("Jest default test", () => {
  test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });
})

// describe("Review and rating widget", () => {
//   it("should render Review and Rating widget when DOM is loaded", async () => {
//     render(<RelatedItem />);
//     await waitFor(() => {
//       screen.getByText("YOUR OUTFIT")
//     })
//   })
// })

/*******Testing props passing to childrens*******/

test('Should render OutfitCard', () => {
  const rating = 3.5
  const imageList = "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
  const toggleID = () => {}
  const id = 71697
  const detail = {name: "testingName", category: "shoes", default_price: 88}


  render(<OutfitCard id = {id} detail = {detail} imageList = {imageList} rating = {rating} toggleID = {toggleID}/>);
  const response = screen.querybyText("testingName")
  expect(response).toBeInTheDocument();
})


test('Should render RelatedCard', () => {
  const rating = 3.5
  const imageList = "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
  const toggleID = () => {}
  const id = 71697
  const detail = {name: "testingName", category: "shoes", default_price: 88}


  render(<RelatedCard id = {id} detail = {detail} imageList = {imageList} rating = {rating} toggleID = {toggleID}/>);
  const response = screen.querybyText("testingName")
  expect(response).toBeInTheDocument();
})

test('Should render OutfitList', () => {
  const toggleID = () => {}
  const outfitList = [71697, 71697, 71697]
  render(<OutfitList outfitList = {outfitList} toggleID = {toggleID}/>);
  const response = screen.querybyText("outfitList")
  expect(response).toBeInTheDocument();
})

test('Should render RelatedList', () => {
  const toggleID = () => {}
  const relateItem_id = [71697, 71697, 71697]
  render(<RelatedList relateItem_id = {relateItem_id} toggleID = {toggleID}/>);
  const response = screen.querybyText("RelatedList")
  expect(response).toBeInTheDocument();
})



/*************************************************/