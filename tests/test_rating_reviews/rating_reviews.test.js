/**
 * @jest-environment jsdom
 */

import react from 'react';
import ReviewWidget from "../../client/src/components/rating_review/ratingReview.jsx"
import ReviewList from "../../client/src/components/rating_review/reviewList.jsx"
import ReviewItem from '../../client/src/components/rating_review/reviewItem.jsx'
import SortMenu from '../../client/src/components/rating_review/sorting/sorting.jsx'
import helperFn from '../../client/src/components/rating_review/starRating/helper.js'
import RatingSummary from '../../client/src/components/rating_review/ratingSummary/ratingSummary.jsx'
import PhotoItem from '../../client/src/components/rating_review/reviewPhoto/photoItem.jsx'
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
  jest.mock('../../client/src/components/rating_review/reviewList.jsx')

  test("should render the first div of review list wwhen DOM is rendered", async () => {
    const { container } = render(<ReviewList reviewData={testData.reviewData_sample1} />);
    //console.log(container)
    expect(container.firstChild.className).toBe('reviewBreakdown')
  })

  test("should render the amount of reviews accurately", async () => {


    var reviewDataArr = [testData.reviewData_sample1, testData.reviewData_sample2, testData.reviewData_sample3]
    //console.log(reviewDataArr)

    render(<ReviewList reviewData={reviewDataArr} />)
    const reviewListElement = screen.getByTestId("review-amount")
    expect(reviewListElement).toBeInTheDocument();
    expect(reviewListElement).toHaveTextContent('3 reviews, sorted by ')

  })
  test("should not render the more review button when there is less than 2 reviews", async () => {
    const currentSortValue = 'relevant'
    const updateSortMethod = () => {
      console.log('updateSortMethod dummy function')
    }
    var reviewDataArr = [testData.reviewData_sample1, testData.reviewData_sample2, testData.reviewData_sample3]
    //console.log(reviewDataArr)

    //  render(<ReviewList reviewData={reviewDataArr} currentSortValue={currentSortValue} updateSortMethod={updateSortMethod()} />
    // );
    render(<ReviewList reviewData={reviewDataArr} />)

    const moreReviewBtn = screen.queryByText('MORE REVIEWS')
    expect(moreReviewBtn).not.toBeInTheDocument()

  })

  test.skip("should render the more review button if there are more than 2 reviews", async () => {
    const currentSortValue = 'relevant'
    const updateSortMethod = () => {
      console.log('updateSortMethod dummy function')
    }
    var reviewDataArr = [testData.reviewData_sample1, testData.reviewData_sample2, testData.reviewData_sample3]
    //console.log(reviewDataArr)

    //  render(<ReviewList reviewData={reviewDataArr} currentSortValue={currentSortValue} updateSortMethod={updateSortMethod()} />
    // );
    const { findByText } = render(<ReviewList reviewData={reviewDataArr} />)
    // screen.debug()
    const moreReviewBtn = await findByText('moreReviewBtn-testId')
    await waitFor(() => expect(moreReviewBtn).toBeInTheDocument())



  })

  test("should render the add review button", async () => {
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


describe("Sorting Component", () => {
  test("should render default sorting method relevant to relevance", async () => {
    var defaultSortValue = 'relevant'
    render(<SortMenu currentSortValue={defaultSortValue} />)
    const sortDefaultValue = screen.getByTestId("sort-dropdown")
    expect(sortDefaultValue).toBeInTheDocument();
    expect(sortDefaultValue).toHaveTextContent('relevance')

  })
  test("should render dropdown menu if user clicked the sort value ", async () => {
    var defaultSortValue = 'relevant'
    render(<SortMenu currentSortValue={defaultSortValue} />)
    const sortDefaultValue = screen.getByTestId("sort-dropdown")
    const sortDropdownOptions = screen.getByTestId("sort-options-1")
    fireEvent.click(sortDefaultValue)
    expect(sortDropdownOptions).toBeInTheDocument();
  })
  test("should render user selected sort method as current sort method if user clicked the sort option ", async () => {
    var defaultSortValue = 'relevant'
    var updateSortMethod = function () {
      console.log('updateSortMethod dummy function')
    }
    render(<SortMenu currentSortValue={defaultSortValue} updateSortMethod={updateSortMethod} />)
    const sortDefaultValue = screen.getByTestId("sort-dropdown")
    const sortDropdownOptions = screen.getByTestId("sort-options-1")
    fireEvent.click(sortDefaultValue)
    fireEvent.click(sortDropdownOptions)
    expect(sortDropdownOptions).toBeInTheDocument();
    expect(sortDefaultValue).toHaveTextContent('newest')
  })

  test("should render sort options in a stacking style in the dropdown menu", async () => {
    var defaultSortValue = 'relevant'
    var updateSortMethod = function () {
      console.log('updateSortMethod dummy function')
    }
    render(<SortMenu currentSortValue={defaultSortValue} updateSortMethod={updateSortMethod} />)
    const sortDefaultValue = screen.getByTestId("sort-dropdown")
    fireEvent.click(sortDefaultValue)
    const sortDropdownOptions = screen.getByTestId("sort-options-1")
    expect(sortDropdownOptions).toHaveStyle("display: block")
    fireEvent.click(sortDefaultValue)
    expect(sortDropdownOptions).toHaveStyle("display: none")
  })
  test("should display relevance if relevance is selected", async () => {
    var defaultSortValue = 'relevant'
    var updateSortMethod = function () {
      console.log('updateSortMethod dummy function')
    }
    render(<SortMenu currentSortValue={defaultSortValue} updateSortMethod={updateSortMethod} />)
    const sortDefaultValue = screen.getByTestId("sort-dropdown")
    fireEvent.click(sortDefaultValue)
    const sortDropdownOptions = screen.getByTestId("sort-options-1")
    expect(sortDropdownOptions).toHaveStyle("display: block")
    fireEvent.click(sortDefaultValue)
    expect(sortDropdownOptions).toHaveStyle("display: none")
  })

})

describe("ReviewItem Component", () => {
  test("Should Helpfulness count incremented by 1 when Yes is clicked  ", async () => {
    // const { container } = render(<ReviewItem reviewData={testData.reviewData_sample1} />);
    await act(async () => {
      render(<ReviewItem reviewData={testData.reviewData_sample1} />)
    })
    const spanToClick = screen.getByTestId('helpful-span')
    fireEvent.click(spanToClick)
    expect(await screen.getByTestId('helpful-count-span').textContent).toEqual(' (19) ')

  })
  test("Should Helpfulness count decremented by 1 when Yes is clicked the second time  ", async () => {
    // const { container } = render(<ReviewItem reviewData={testData.reviewData_sample1} />);
    await act(async () => {
      render(<ReviewItem reviewData={testData.reviewData_sample1} />)
    })
    const spanToClick = screen.getByTestId('helpful-span')
    fireEvent.click(spanToClick)
    fireEvent.click(spanToClick)
    expect(await screen.getByTestId('helpful-count-span').textContent).toEqual(' (18) ')

  })

  test("Should render 0 if helpfulness count is not found", async () => {
    // const { container } = render(<ReviewItem reviewData={testData.reviewData_sample1} />);
    await act(async () => {
      render(<ReviewItem reviewData={testData.reviewData_sample5} />)
    })

    expect(await screen.getByTestId('helpful-count-span').textContent).toEqual(' (0) ')

  })



  test("Should show recommendation tickbox when reviewer recommended the product ", async () => {
    await act(async () => {
      render(<ReviewItem reviewData={testData.reviewData_sample2} />)
    })
    const tickBox = screen.queryByText('I recommend this product')
    const responseBlock = screen.getByTestId('responseBlock')
    expect(tickBox).toBeInTheDocument()
    expect(responseBlock).toBeInTheDocument()
  })

  test("Should not show recommendation tickbox when response is a empty string ", async () => {

    await act(async () => {
      render(<ReviewItem reviewData={testData.reviewData_sample1} />)
    })
    const tickBox = screen.queryByText('I recommend this product')

    expect(tickBox).not.toBeInTheDocument()


  })
  test("Should not show recommendation tickbox when response is null ", async () => {

    await act(async () => {
      render(<ReviewItem reviewData={testData.reviewData_sample6} />)
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

  test.skip("Should show more review body if show more is clicked  ", async () => {
    // const { container } = render(<ReviewItem reviewData={testData.reviewData_sample1} />);
    await act(async () => {
      const reviewItem = render(<ReviewItem reviewData={testData.reviewData_sample4} />)
    })


    const spanToClick = screen.getByTestId('show-more-span')
    fireEvent.click(spanToClick)
    const showLessSpan = screen.getByTestId('show-less-span')
    expect(await screen.getByTestId('ReviewText')).toBeInTheDocument()
    expect(showLessSpan).toBeInTheDocument()

  })

  test("Should show less review body if show less is clicked  ", async () => {
    // const { container } = render(<ReviewItem reviewData={testData.reviewData_sample1} />);
    await act(async () => {
      const reviewItem = render(<ReviewItem reviewData={testData.reviewData_sample4} />)
    })
    const spanToClick1 = screen.getByTestId('show-more-span')
    fireEvent.click(spanToClick1)
    const spanToClick2 = screen.getByTestId('show-less-span')
    fireEvent.click(spanToClick2)
    expect(await screen.getByTestId('partial-ReviewText')).toBeInTheDocument()
    expect(spanToClick1).toBeInTheDocument()

  })
  test("Should only display first 60 characters of review summary if it is longer than 60 characters", async () => {
    await act(async () => {
      render(<ReviewItem reviewData={testData.reviewData_sample4} />)
    })
    var summaryDisplayLimit = 60
    var shortSummary = testData.reviewData_sample4.summary.substring(0, summaryDisplayLimit) + "..."

    const partialSummary = screen.queryByText(shortSummary)
    expect(partialSummary).toBeInTheDocument()

  })

  test("Should only display first 250 characters of review body if it is longer than 250 characters", async () => {
    await act(async () => {
      render(<ReviewItem reviewData={testData.reviewData_sample4} />)
    })
    var bodyDisplayLimit = 250
    var shortbody = testData.reviewData_sample4.body.substring(0, bodyDisplayLimit) + "..."

    const partialBody = screen.queryByText(shortbody)
    expect(partialBody).toBeInTheDocument()

  })



})

describe("PhotoItem Component", () => {
  test("Should render modal window with full size review photo if photo thumbnail is clicked", () => {
    var photo = {
      "id": 2414648,
      "url": "https://images.unsplash.com/photo-1560570803-7474c0f9af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
    }
    render(<PhotoItem photo={photo} />)
    const thumbnail = screen.getByTestId('thumbnail-photo-2414648')
    fireEvent.click(thumbnail)
    const fullPhoto = screen.getByTestId('full-photo-2414648')
    expect(fullPhoto).toBeInTheDocument()

  })

  test("Should close modal window if modal overlay is clicked", () => {
    var photo = {
      "id": 2414648,
      "url": "https://images.unsplash.com/photo-1560570803-7474c0f9af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
    }
    render(<PhotoItem photo={photo} />)
    //const fullPhoto = screen.getByTestId('full-photo-2414648')

    const thumbnail = screen.getByTestId('thumbnail-photo-2414648')
    fireEvent.click(thumbnail)
    const overlay = screen.getByTestId('overlay-2414648')
    fireEvent.click(overlay)

    expect(overlay).not.toBeInTheDocument()

  })
  test("Should close modal window if modal close button is clicked", () => {
    var photo = {
      "id": 2414648,
      "url": "https://images.unsplash.com/photo-1560570803-7474c0f9af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
    }
    render(<PhotoItem photo={photo} />)
    //const fullPhoto = screen.getByTestId('full-photo-2414648')

    const thumbnail = screen.getByTestId('thumbnail-photo-2414648')
    fireEvent.click(thumbnail)
    const closeBtn = screen.getByTestId('close-2414648')
    fireEvent.click(closeBtn)

    expect(closeBtn).not.toBeInTheDocument()

  })

})

describe("Helper functions", () => {
  test('generateStars should generate an array of fill amount of each star', async () => {
    const result = await helperFn.generateStars(3.4, 5)
    const expected = [100, 100, 100, 40, 0]
    expect(result).toEqual(expected)

  })
  test('generateStars should generate an empty array if rating is not a number', async () => {

    const result = await helperFn.generateStars('3.4', 5)
    const expected = []
    expect(result).toEqual(expected)

  })

  test("Should calculate average rating and the amount of rating and return them as an object", async () => {

    const ratingObj = {
      "1": "3",
      "2": "7",
      "3": "3",
      "4": "3",
      "5": "11"
    }

    const result = await helperFn.calculateAverageRating(ratingObj)
    const expected = { 'average': 3.4, 'totalRatingAmount': 27 }
    expect(result).toEqual(expected)

  })
  test("Should return both average and totalRatingAmount as 0 if input is NaN", async () => {

    const ratingObj = { 'undefined': 'undefined' }

    const result = await helperFn.calculateAverageRating(ratingObj)
    const expected = { 'average': 0, 'totalRatingAmount': 0 }
    expect(result).toEqual(expected)

  })
})