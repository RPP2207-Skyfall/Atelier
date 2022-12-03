import React from 'react';
import ReactDOM from 'react-dom';
import RelatedItem from '../../client/src/components/relatedItem/relatedItemSection.jsx';
import { render } from "@testing-library/react"


// it("RelatedItem section renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<h5></h5>, div)
// })

// it("RelatedItem section renders without crashing", () => {
//   render(<RelatedItem/>)
// });


describe('RelatedItem component', () => {
  test('RelatedItem section renders without crashing', () => {
  render(<RelatedItem />);
  });
  })