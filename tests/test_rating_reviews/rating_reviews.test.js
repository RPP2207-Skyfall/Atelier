
/**
 * @jest-environment jsdom
 */

import react from 'react';
import ReviewList from "../../client/src/components/rating_review/ratingReview.jsx"
import ReviewItem from "../../client/src/components/rating_review/reviewItem.jsx"
import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom';

describe("Jest default test", () => {
  test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });
})
// describe("ReviewList Component", () => {
//   it("should render review summaries wwhen API responds", async () => {
//     render(<ReviewList />);
//     await waitFor(() => {
//       screen.getByText("Helpful?")
//     })
//   })
// })

describe("Review and rating widget", () => {
  it("should render Review and Rating widget when DOM is loaded", async () => {
    render(<ReviewList />);
    await waitFor(() => {
      screen.getByText("RATINGS & REVIEWS")
    })
  })
})

// describe("ReviewList Component", () => {
//   it("helpfulness count should increment by 1 when Yes button is clicked", () => {
//     render(<ReviewItem />);

//     const helpfulCountSpan = screen.getByText("Yes")
//     fireEvent.click(helpfulCountSpan)
//     expect(onClick).toHaveBeenCalledTimes(1);

//   })
// })

