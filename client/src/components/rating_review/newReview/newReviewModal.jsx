import React, { useState, useEffect } from 'react';
import helpers from '../helperFunctions/helper.js'
import OverallStar from './overallStar.jsx'
import NewSummary from './newSummary.jsx'
import NewBody from './newBody.jsx'

const newReviewModal = (props) => {

  const [characterTable, setCharacterTable] = useState([])
  const [star, setStar] = useState(0)
  const [recommendSelection, setRecommendSelection] = useState(true)
  const [characteristicSelection, setCharacteristicSelection] = useState({})
  const [summary, setSummary] = useState("")
  const [body, setbody] = useState("")

  const characteristicsObj = props.characteristics


  const definitionObj = {
    Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs loose']
  }


  useEffect(() => {
    (async () => {
      let characterTable = await helpers.generateCharacteristicTable(characteristicsObj, definitionObj)
      //console.log(characterTable)
      setCharacterTable(characterTable)

    })()
  }, [characteristicsObj])

  const handleCloseClick = () => {
    props.handleCloseReviewModal()
  }

  const starSelection = (idx) => {
    //console.log(idx)
    setStar(idx + 1)

  }

  const recommendSelect = (e) => {
    //console.log(e.target.value)
    setRecommendSelection(e.target.value)
  }

  const characteristicSelect = (e) => {
    var split = e.target.value.split(',')
    characteristicSelection[split[0]] = split[2]
    setCharacteristicSelection(characteristicSelection)
  }

  const summaryInput = (summary) => {
    setSummary(summary)
  }
  const bodyInput = (body) => {
    setbody(body)
  }

  const handleSubmit = () => {
    //props.addNewReview()
  }


  return (
    <>

      <div className="new_reviewmodal" >
        <div className="overlay" data-testid={`overlay-`}>
          <div className="modal-content new-review-content">
            <div className="content-container">
              <div className="new-review-title">Write Your Review</div>
              <div className="new-review-subtitle">{`About the ${props.productName}`}</div>

              <div className="overall-rating-section">
                <OverallStar starSelection={starSelection} />
              </div>
              <div className="new-recommend-section" onChange={recommendSelect}>
                <div>Do you recommend this product? </div>
                <div className="input-radio">
                  <input type="radio" name="recommend-select" value="true" defaultChecked />  Yes
                </div>
                <div className="input-radio">
                  <input type="radio" name="recommend-select" value="false" />  No
                </div>
              </div>

              <div className="characteristic-table" onChange={characteristicSelect}>
                Characteristic:
                {characterTable}
              </div>

              <div className="review-summary-section">
                <NewSummary summaryInput={summaryInput} />
              </div>

              <div className="review-body-section">
                <NewBody bodyInput={bodyInput} />
              </div>





              <div className="button-section">
                <button className="review-modal-closeBtn" data-testid={`close-`} onClick={() => { handleCloseClick() }} >Close</button>
                <button className="review-modal-submitBtn" data-testid={`submit-`} >Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )

}

export default newReviewModal