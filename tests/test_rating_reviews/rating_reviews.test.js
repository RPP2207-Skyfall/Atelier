/**
 * @jest-environment jsdom
 */

import react from 'react';
import ReviewWidget from "../../client/src/components/rating_review/ratingReview.jsx"
import ReviewList from "../../client/src/components/rating_review/reviewList.jsx"
import ReviewItem from '../../client/src/components/rating_review/reviewItem.jsx'
import SortMenu from '../../client/src/components/rating_review/sorting/sorting.jsx'
import helperFn from '../../client/src/components/rating_review/helperFunctions/helper.js'
// import RatingSummary from '../../client/src/components/rating_review/ratingSummary/ratingSummary.jsx'
import PhotoItem from '../../client/src/components/rating_review/reviewPhoto/photoItem.jsx'
import RatingBreakdown from '../../client/src/components/rating_review/breakdown/ratingBreakdown.jsx'
import Recommendation from '../../client/src/components/rating_review/breakdown/recommendation.jsx'
import Breakdown from '../../client/src/components/rating_review/breakdown/breakdown.jsx'
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
    expect(reviewListElement).toHaveTextContent('3 reviews, sorted by relevancehelpfulnewestrelevance')

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

    var reviewDataArr = [testData.reviewData_sample1, testData.reviewData_sample2, testData.reviewData_sample3, testData.reviewData_sample4, testData.reviewData_sample6]
    //console.log(reviewDataArr)

    // const wrapper = shallow(<ReviewList reviewData={reviewDataArr} />) as any
    // wrapper.setProps({ reviewDataArr })

    // expect(wrapper.instance().props.reviewData).toBeCalled()
    render(<ReviewList reviewData={reviewDataArr} />)
    // screen.debug()
    expect(await screen.getByTestId('moreReviewBtn-testId')).toBeInTheDocument()


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
    const updateIsHelpful = jest.fn()
    await act(async () => {
      render(<ReviewItem reviewData={testData.reviewData_sample1} updateIsHelpful={updateIsHelpful} />)
    })
    const spanToClick = screen.getByTestId('helpful-span')
    fireEvent.click(spanToClick)
    expect(await screen.getByTestId('helpful-count-span').textContent).toEqual(' (19) ')

  })

  test("Should render 0 if helpfulness count is not found", async () => {
    // const { container } = render(<ReviewItem reviewData={testData.reviewData_sample1} />);
    await act(async () => {
      render(<ReviewItem reviewData={testData.reviewData_sample5} />)
    })

    expect(await screen.getByTestId('helpful-count-span').textContent).toEqual(' (0) ')

  })



  test("Should show recommendation tickbox when product is recommended ", async () => {
    await act(async () => {
      render(<ReviewItem reviewData={testData.reviewData_sample2} />)
    })
    const tickBox = screen.queryByText('I recommend this product')
    const responseBlock = screen.getByTestId('response-block')
    expect(tickBox).toBeInTheDocument()
    expect(responseBlock).toBeInTheDocument()
  })

  test("Should not show recommendation tickbox when product is not recommended ", async () => {

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

  test("Should not show response if response is a empty string.", async () => {

    await act(async () => {
      render(<ReviewItem reviewData={testData.reviewData_sample1} />)
    })
    const response = screen.queryByText("Glad you're enjoying the product!")
    expect(response).not.toBeInTheDocument()

  })
  test("Should not show response if response is null.", async () => {

    await act(async () => {
      render(<ReviewItem reviewData={testData.reviewData_sample6} />)
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

  test("Should show the full review body and partial review body if show more and show less are toggled  ", async () => {
    // const { container } = render(<ReviewItem reviewData={testData.reviewData_sample1} />);
    await act(async () => {
      const reviewItem = render(<ReviewItem reviewData={testData.reviewData_sample4} />)
    })

    const showMoreSpan = screen.getByTestId('show-more-span')
    fireEvent.click(showMoreSpan)
    expect(await screen.getByTestId('reviewText')).toBeInTheDocument()
    const showLessSpan = screen.getByTestId('show-less-span')
    expect(showLessSpan).toBeInTheDocument()

    fireEvent.click(showLessSpan)

    expect(await screen.getByTestId('partial-ReviewText')).toBeInTheDocument()
    expect(showMoreSpan).toBeInTheDocument()

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

  test("Report button should be displayed as Reported when it is clicked.", async () => {
    const reportReview = jest.fn()
    await act(async () => {
      render(<ReviewItem reviewData={testData.reviewData_sample1} reportReview={reportReview} />)
    })
    expect(await screen.getByTestId('report-text').textContent).toEqual('Report')
    const spanToClick = screen.getByTestId('report-text')
    fireEvent.click(spanToClick)
    fireEvent.click(spanToClick)
    expect(await screen.getByTestId('report-text').textContent).toEqual('Reported')

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

describe("RatingBreakdown Component", () => {

  test('Should render rating bar chart', async () => {
    const ratingObj = { 1: "7", 2: "3", 3: "32", 4: "24", 5: "82" }
    const totalAmount = 148
    const reactUseState = react.useState
    const individualRating = [['1', '7'], ["2", "3"], ["2", "3"], ["2", "3"], ["5", "82"]]
    jest
      .spyOn(react, 'useState')
      .mockImplementationOnce(() => reactUseState(individualRating))

    await act(async () => {
      render(<RatingBreakdown ratingObj={ratingObj} totalAmount={totalAmount} />)
    })
    expect(await screen.getByTestId('bar-chart-0')).toBeInTheDocument()
  })
  test('Should not render rating bar chart if individualRating is undefined', async () => {
    const ratingObj = undefined
    const totalAmount = undefined
    const reactUseState = react.useState
    const individualRating = [['1', '7'], ["2", "3"], ["2", "3"], ["2", "3"], ["5", "82"]]
    jest
      .spyOn(react, 'useState')
      .mockImplementationOnce(() => reactUseState(individualRating))

    await act(async () => {
      render(<RatingBreakdown ratingObj={ratingObj} totalAmount={totalAmount} />)
    })

    expect(await screen.queryByText('1 Star')).not.toBeInTheDocument()
  })


})

describe("Recommendation Component", () => {
  test('Should render the precentage if precentage is not undefined', async () => {
    const recommendObj = { false: "27", true: "121" }
    await act(async () => {
      render(<Recommendation percentage={recommendObj} />)
    })
    expect(await screen.getByTestId('recommend-precent')).toBeInTheDocument()
    expect(await screen.getByTestId('recommend-precent').textContent).toEqual('81.8% of reviews recommend this product')
  })
  test('Should still render 0% if precentage is undefined', async () => {
    const recommendObj = undefined
    await act(async () => {
      render(<Recommendation percentage={recommendObj} />)
    })
    expect(await screen.getByTestId('recommend-precent')).toBeInTheDocument()
    expect(await screen.getByTestId('recommend-precent').textContent).toEqual('0% of reviews recommend this product')
  })
})

describe("Breakdown Component", () => {
  test('Should change classname to star-name-selected when any filter is clicked', async () => {
    const resetAllFilter = jest.fn()
    const hanleFilterClicked = jest.fn()
    await act(async () => {
      render(<Breakdown resetAllFilter={resetAllFilter} hanleFilterClicked={hanleFilterClicked} metadata={testData.metadata} />)
    })
    const filterBtn = screen.getByTestId("star-btn-3")
    fireEvent.click(filterBtn)
    expect(filterBtn.className).toBe('star-name-selected')
    fireEvent.click(filterBtn)
    expect(filterBtn.className).toBe('star-name')

  })
  test('Should render Remove all filters button if any filter is on', async () => {
    const resetAllFilter = jest.fn()
    const hanleFilterClicked = jest.fn()
    const filterClicked = true
    await act(async () => {
      render(<Breakdown resetAllFilter={resetAllFilter} hanleFilterClicked={hanleFilterClicked} filterClicked={filterClicked} metadata={testData.metadata} />)
    })

    const clearFilterBtn = screen.getByTestId("remove-filter-btn")
    expect(await screen.getByTestId('remove-filter-btn')).toBeInTheDocument()
    fireEvent.click(clearFilterBtn)

  })
  test('Should not render Remove all filters button if all filter is off', async () => {
    const resetAllFilter = jest.fn()
    const hanleFilterClicked = jest.fn()
    const filterClicked = false
    await act(async () => {
      render(<Breakdown resetAllFilter={resetAllFilter} hanleFilterClicked={hanleFilterClicked} filterClicked={filterClicked} metadata={testData.metadata} />)
    })

    const breakdownContainer = screen.getByTestId("breakdown-container")
    expect(breakdownContainer).not.toHaveTextContent('Remove all filters')

  })
  test('Test if resetAllFilter functio from props is being called', () => {
    const resetAllFilter = jest.fn()
    const hanleFilterClicked = jest.fn()
    const filterClicked = true

    render(<Breakdown resetAllFilter={resetAllFilter} hanleFilterClicked={hanleFilterClicked} filterClicked={filterClicked} metadata={testData.metadata} />)

    const clearFilterBtn = screen.getByTestId("remove-filter-btn")
    fireEvent.click(clearFilterBtn)
    expect(resetAllFilter).toHaveBeenCalled()

  })
})







describe("Helper functions", () => {
  //generateStars
  test('should generate an array of fill amount of each star', async () => {
    const result = await helperFn.generateStars(3.4, 5)
    const expected = [100, 100, 100, 40, 0]
    expect(result).toEqual(expected)

  })
  //generateStars
  test('should generate an empty array if rating is not a number.', async () => {

    const result = await helperFn.generateStars('3.4', 5)
    const expected = []
    expect(result).toEqual(expected)

  })
  //generateStars
  test('should generate an empty array if totalRating is not a number.', async () => {

    const result = await helperFn.generateStars(3.4, '5')
    const expected = []
    expect(result).toEqual(expected)

  })
  //calculateAverageRating
  test("should calculate average rating and the amount of rating and return them as an object", async () => {

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
  //calculateAverageRating
  test("should return both average and totalRatingAmount as 0 if input is NaN", async () => {

    const ratingObj = { 'undefined': 'undefined' }
    const result = await helperFn.calculateAverageRating(ratingObj)
    const expected = { 'average': 0, 'totalRatingAmount': 0 }
    expect(result).toEqual(expected)

  })
  //populateIndividualRating
  test("should populate individual rating", async () => {

    const ratingObj = {
      "1": "7",
      "2": "3",
      "3": "32",
      "4": "24",
      "5": "82"
    }
    const result = await helperFn.populateIndividualRating(ratingObj)
    const expected = [["1", "7"], ["2", "3"], ["3", "32"], ["4", "24"], ["5", "82"]]
    expect(result).toEqual(expected)
  })
  //calculateBarFillPercentage
  test("should return 0 if totalAmount cannot be converted to a number", async () => {

    const totalAmount = 'one-four-eight'
    const ratingAmount = "7"
    const result = await helperFn.calculateBarFillPercentage(totalAmount, ratingAmount)
    const expected = 0
    expect(result).toEqual(expected)
  })
  //calculateBarFillPercentage
  test("should return 0 if ratingAmount cannot be converted to a number", async () => {

    const totalAmount = '148'
    const ratingAmount = "seven"
    const result = await helperFn.calculateBarFillPercentage(totalAmount, ratingAmount)
    const expected = 0
    expect(result).toEqual(expected)
  })
  //calculateBarFillPercentage
  test("should calculate fill percentage for star rating if both totalAmount and ratingAmount can be converted to numbers", async () => {
    const totalAmount = 148
    const ratingAmount = "7"
    const result = await helperFn.calculateBarFillPercentage(totalAmount, ratingAmount)
    const expected = 4.7
    expect(result).toEqual(expected)
  })
  //addToFilterArr
  test("should toggle the boolean value of given rating in the filter map", async () => {
    const filterValue = 5
    const filterMap = { 1: false, 2: false, 3: false, 4: false, 5: false }
    const result = await helperFn.addToFilterArr(filterValue, filterMap)
    const expected = { 1: false, 2: false, 3: false, 4: false, 5: true }
    expect(result).toEqual(expected)
  })
  //filtering
  test("should show the original review data if all value in the filterMap are false", async () => {
    const filterMap = { 1: false, 2: false, 3: false, 4: false, 5: false }
    const originalReviewData = [testData.reviewData_sample1, testData.reviewData_sample2, testData.reviewData_sample3, testData.reviewData_sample4, testData.reviewData_sample5, testData.reviewData_sample6]
    const reviewData = [testData.reviewData_sample1, testData.reviewData_sample2, testData.reviewData_sample3, testData.reviewData_sample4, testData.reviewData_sample5, testData.reviewData_sample6]

    const result = await helperFn.filtering(filterMap, originalReviewData, reviewData)
    const expected = originalReviewData
    expect(result).toEqual(expected)
  })
  //filtering
  test("should only show review data that has rating that has a true value in the filterMap", async () => {
    const filterMap = { 1: false, 2: false, 3: false, 4: false, 5: true }
    const originalReviewData = [testData.reviewData_sample1, testData.reviewData_sample2, testData.reviewData_sample3, testData.reviewData_sample4, testData.reviewData_sample5, testData.reviewData_sample6]
    const reviewData = [testData.reviewData_sample1, testData.reviewData_sample2, testData.reviewData_sample3, testData.reviewData_sample4, testData.reviewData_sample5, testData.reviewData_sample6]

    const result = await helperFn.filtering(filterMap, originalReviewData, reviewData)
    const expected = [testData.reviewData_sample3, testData.reviewData_sample4, testData.reviewData_sample5, testData.reviewData_sample6]
    expect(result).toEqual(expected)
  })
  //breakdownCharacteristicsObj
  test("should generate an array of HTML elements that contains each characteristic id ", async () => {
    const characteristicsObj = testData.metadata2.characteristics
    const result = await helperFn.breakdownCharacteristicsObj(characteristicsObj)
    //console.log(result)
    const resultKeyArr = []
    for (let i = 0; i < result.length; i++) {
      resultKeyArr.push(result[i].key)
    }
    const expected = ['240591', '240592', '240593', '240594']
    expect(resultKeyArr).toEqual(expected)
  })
  //generateCharacteristicTable
  test("should generate an array of HTML elements that contains each characteristic name", async () => {
    const characteristicsObj = testData.metadata2.characteristics
    const result = await helperFn.generateCharacteristicTable(characteristicsObj)
    //console.log(result)
    const resultKeyArr = []
    for (let i = 0; i < result.length; i++) {
      resultKeyArr.push(result[i].key)
    }
    const expected = ['Fit-row', 'Length-row', 'Comfort-row', 'Quality-row']
    expect(resultKeyArr).toEqual(expected)
  })
  //checkReviewForm
  test("should return an array with boolean value true and the subtrahend of 50 minus summaryLength for newBody component", async () => {
    const fromComponent = 'newBody'
    const summaryLength = 47
    const result = await helperFn.checkReviewForm(fromComponent, summaryLength)
    const expected = [true, 3]
    expect(result).toEqual(expected)
  })
  // checkReviewForm
  test("should return an array with boolean value false and the subtrahend of 50 minus summaryLength for newBody component", async () => {
    const fromComponent = 'newBody'
    const summaryLength = 57
    const result = await helperFn.checkReviewForm(fromComponent, summaryLength)
    const expected = [false, -7]
    expect(result).toEqual(expected)
  })
  // checkReviewForm
  test("Should return true when checkValue is a negative number", async () => {
    const fromComponent = 'overallStar'
    const checkValue = -1
    const result = await helperFn.checkReviewForm(fromComponent, checkValue)
    const expected = true
    expect(result).toEqual(expected)
  })
  // checkReviewForm
  test("Should return false when checkValue is a positive number", async () => {
    const fromComponent = 'overallStar'
    const checkValue = 3
    const result = await helperFn.checkReviewForm(fromComponent, checkValue)
    const expected = false
    expect(result).toEqual(expected)
  })
  //storeImage
  global.URL.createObjectURL = jest.fn(() => {
    return 'blob:hello.png'
  })
  test("Should store new image blob data into the storage array", async () => {
    const currentStorage = []
    const file = new File(["hello"], "hello.png", { type: "image/png" })
    const files = [file];
    //console.log(files)
    const result = await helperFn.storeImage(currentStorage, files)
    //console.log(result)
    const expected = [{ preview: 'blob:hello.png' }]
    expect(result).toEqual(expected)
  })
  //emailValidation
  test("should return true if email match the format", async () => {
    const email = 'testemail@gmail.com'
    const result = await helperFn.emailValidation(email)
    const expected = true
    expect(result).toEqual(expected)
  })
  //emailValidation
  test("should return false if email does not match the format", async () => {

    const email = 'email'
    const result = await helperFn.emailValidation(email)
    const expected = false
    expect(result).toEqual(expected)
  })
  //emailValidation
  test("should return false if email length is 0", async () => {

    const email = ''
    const result = await helperFn.emailValidation(email)
    const expected = false
    expect(result).toEqual(expected)
  })
  //cleanImageForUpload
  test("Should only add all the values in photoObjArr into photoArr", async () => {
    const photoObjArr = [{ preview: "blob:http://localhost:3000/9ef6ff8b-23ff-4dca-b41f-3366b12722ea" }, { preview: "blob:http://localhost:3000/9ef6ff8b-23ff-4dca-b41f-3366b12722ea" }]
    const photoArr = ["blob:http://localhost:3000/9ef6ff8b-23ff-4dca-b41f-3366b12722ea", "blob:http://localhost:3000/9ef6ff8b-23ff-4dca-b41f-3366b12722ea"]
    const result = await helperFn.cleanImageForUpload(photoObjArr)
    const expected = photoArr
    expect(result).toEqual(expected)
  })
  // test("", async () => {

  //   const result = await helperFn.()
  //   const expected =
  //   expect(result).toEqual(expected)
  // })
})

