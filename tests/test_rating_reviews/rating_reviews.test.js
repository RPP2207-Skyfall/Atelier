/**
 * @jest-environment jsdom
 */

import react from 'react';
import ReviewWidget from "../../client/src/components/rating_review/ratingReview.jsx"
import ReviewList from "../../client/src/components/rating_review/reviewList.jsx"
import ReviewItem from '../../client/src/components/rating_review/reviewItem.jsx'
import { render, screen, waitFor, fireEvent, cleanup } from "@testing-library/react"
import { act } from 'react-dom/test-utils'
import testData from './test_data.js'
import '@testing-library/jest-dom';


afterEach(() => {
  cleanup()
})


describe("Jest default test", () => {
  test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });
})


describe("Review and rating widget", () => {
  it("should render Review and Rating widget when DOM is loaded", async () => {
    render(<ReviewWidget />);
    await waitFor(() => {
      screen.getByText("RATINGS & REVIEWS")
    })
  })
})


describe("ReviewList Component", () => {
  test("should render the first div of review list wwhen DOM is rendered", async () => {
    const { container } = render(<ReviewList reviewData={testData.reviewData_sample1} />);
    //console.log(container.firstChild.className)
    expect(container.firstChild.className).toBe('reviewBreakdown')
  })

  test("should render the amount of reviews accurately", async () => {
    const currentSortValue = 'relevant'
    const updateSortMethod = () => {
      console.log('updateSortMethod dummy function')
    }
    render(<ReviewList reviewData={testData.reviewData_sample1} currentSortValue={currentSortValue} updateSortMethod={updateSortMethod()} />
    );
    const addReviewBtn = screen.getByTestId('addReviewBtn-testId')
    expect(addReviewBtn).toBeInTheDocument()

  })
})

describe("ReviewItem Component", () => {
  test("Should Helpfulness count incremented by 1 when Yes is clicked  ", async () => {
    // const { container } = render(<ReviewItem reviewData={testData.reviewData_sample1} />);
    await act(async () => {
      render(<ReviewItem reviewData={testData.reviewData_sample1} />)
    })
    const spanToClick = screen.getByText('Yes')
    fireEvent.click(spanToClick)
    expect(await screen.getByTestId('helpful-count-span').textContent).toEqual(' (19) ')

  })

  test("Should show recommendation tickbox when reviewer recommended the product ", async () => {
    await act(async () => {
      render(<ReviewItem reviewData={testData.reviewData_sample2} />)
    })
    const tickBox = screen.queryByText('I recommend this product')
    expect(tickBox).toBeInTheDocument()

  })

  test("Should not show recommendation tickbox when reviewer did not recommend the product ", async () => {

    await act(async () => {
      render(<ReviewItem reviewData={testData.reviewData_sample1} />)
    })
    const tickBox = screen.queryByText('I recommend this product')
    expect(tickBox).not.toBeInTheDocument()

  })


  test("Should show response if CS team left a response ", async () => {
    await act(async () => {
      render(<ReviewItem reviewData={testData.reviewData_sample2} />)
    })
    const response = screen.queryByText("Glad you're enjoying the product!")
    expect(response).toBeInTheDocument()

  })

  test("Should not show response if CS team did not leave a response.", async () => {

    await act(async () => {
      render(<ReviewItem reviewData={testData.reviewData_sample1} />)
    })
    const response = screen.queryByText("Glad you're enjoying the product!")
    expect(response).not.toBeInTheDocument()

  })

  test("Should render review photos if reviewer submitted review photos.", async () => {
    await act(async () => {
      render(<ReviewItem reviewData={testData.reviewData_sample1} />)
    })

    const reviewPhoto = screen.getByAltText(/thumbnail-photo-2414648/i)
    expect(reviewPhoto).toBeInTheDocument()
  })
  test("Should not render review photos if reviewer did not submit review photos.", async () => {
    await act(async () => {
      render(<ReviewItem reviewData={testData.reviewData_sample2} />)
    })

    const reviewPhoto = screen.queryByText(/thumbnail-photo-2414648/i)
    expect(reviewPhoto).not.toBeInTheDocument()
  })
})

