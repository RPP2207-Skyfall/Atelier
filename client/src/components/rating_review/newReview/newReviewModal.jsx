import React, { useState, useEffect } from 'react';
import helpers from '../helperFunctions/helper.js'
import OverallStar from './overallStar.jsx'
import NewSummary from './newSummary.jsx'
import NewBody from './newBody.jsx'
import UploadPhoto from './uploadPhoto.jsx'
import UserInfo from './userInfo.jsx'

const newReviewModal = (props) => {

  const [characterTable, setCharacterTable] = useState([])
  const [star, setStar] = useState(0) // user input
  const [recommendSelection, setRecommendSelection] = useState(true) // user input
  const [characteristicSelection, setCharacteristicSelection] = useState({}) // user input
  const [charSelectionLength, setCharSelectionLength] = useState(0)
  const [summary, setSummary] = useState("") // user input
  const [body, setbody] = useState("") // user input
  const [charAsteris, setCharAsteris] = useState(true)
  const [nickname, setNickname] = useState("") // user input
  const [email, setEmail] = useState("")// user input
  const [uploadReady, setUploadReady] = useState(false)
  const [photoArr, setPhotoArr] = useState([]) // user input
  const [submitReady, setSubmitReady] = useState(false)

  // error
  const [errorStarMsg, setStarErrorMsg] = useState("")
  const [charErrorMsg, setCharErrorMsg] = useState("")
  const [summaryErrorMsg, setSummaryErrorMsg] = useState("")
  const [bodyErrorMsg, setBodyErrorMsg] = useState("")
  const [nicknameErrorMsg, setNicknameErrorMsg] = useState("")
  const [emailErrorMsg, setEmailErrorMsg] = useState("")
  const [UploadErrorMsg, setUploadErrorMsg] = useState("")




  const characteristicsObj = props.characteristics
  let characterTableLength = 0


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
      characterTableLength = characterTable.length

    })()
  }, [characteristicsObj])

  useEffect(() => {
    setStarErrorMsg("")
  }, [star])

  useEffect(() => {
    setSummaryErrorMsg("")
  }, [summary])
  useEffect(() => {
    setBodyErrorMsg("")
  }, [body])
  useEffect(() => {
    setNicknameErrorMsg("")
  }, [nickname])
  useEffect(() => {
    setEmailErrorMsg("")
  }, [email])

  // useEffect(() => {
  //   if (errorStarMsg.length === 0 && charErrorMsg.length === 0 && summaryErrorMsg.length === 0 && bodyErrorMsg.length === 0 && nicknameErrorMsg.length === 0 && emailErrorMsg.length === 0) {
  //     setSubmitReady(true)
  //   }

  // }, [errorStarMsg, charErrorMsg, summaryErrorMsg, bodyErrorMsg, nicknameErrorMsg, emailErrorMsg])

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
    //console.log(split)
    characteristicSelection[`${split[0]}`] = parseInt(split[1])
    setCharacteristicSelection(characteristicSelection)
    if (Object.keys(characteristicSelection).length === Object.keys(characteristicsObj).length) {
      setCharAsteris(false)
      setCharErrorMsg("")
    }
  }

  const summaryInput = (summary) => {
    setSummary(summary)
  }
  const bodyInput = (body) => {
    setbody(body)
  }

  const useInfo = (source, data) => {
    switch (source) {
      case "nickname":
        setNickname(data)
        break;
      case "email":
        setEmail(data)
        break;
    }
  }

  const addToPhotoArr = async (photoObjArr) => {
    // console.log('hi', photoObjArr)
    let photoArr = await helpers.cleanImageForUpload(photoObjArr)
    // console.log('bye', photoArr)
    setUploadReady(true)
    setPhotoArr(photoArr)
  }

  const handleSubmit = async () => {
    if (star === 0) {
      setStarErrorMsg("You must enter the following:")
      setSubmitReady(false)
    }
    if (Object.keys(characteristicSelection).length === 0) {
      setCharErrorMsg("You must enter the following:")
      setSubmitReady(false)
    }
    if (summary.length === 0) {
      setSummaryErrorMsg("You must enter the following:")
      setSubmitReady(false)
    }
    if (body.length === 0) {
      setBodyErrorMsg("You must enter the following:")
      setSubmitReady(false)
    }
    if (body.length < 50 && body.length !== 0) {
      setBodyErrorMsg("The review body is less than 50 characters")
      setSubmitReady(false)
    }
    if (nickname.length === 0) {
      setNicknameErrorMsg("You must enter the following:")
      setSubmitReady(false)
    }
    if (email.length === 0) {
      setEmailErrorMsg("You must enter the following:")
      setSubmitReady(false)
    }
    // email validation and upload validation
    let validEmail = await helpers.emailValidation(email)
    if (validEmail === false) {
      setEmailErrorMsg("The email address provided is not in correct email format.")
      setSubmitReady(false)
    }

    if (errorStarMsg.length === 0 && charErrorMsg.length === 0 && summaryErrorMsg.length === 0 && bodyErrorMsg.length === 0 && nicknameErrorMsg.length === 0 && emailErrorMsg.length === 0) {
      setSubmitReady(true)
    }
    var newReviewData = {
      "rating": star,
      "summary": summary,
      "body": body,
      "recommend": recommendSelection,
      "name": nickname,
      "email": email,
      "photos": photoArr,
      "characteristics": characteristicSelection
    }

    if (errorStarMsg.length === 0 && charErrorMsg.length === 0 && summaryErrorMsg.length === 0 && bodyErrorMsg.length === 0 && nicknameErrorMsg.length === 0 && emailErrorMsg.length === 0 && submitReady === true) {
      props.addNewReview(newReviewData)
    }


    /////Testing
    // var testData = {
    //   "rating": 5,
    //   "summary": "test summary",
    //   "body": "60characters-60characters-60characters-60characters-60characters-60characters-60characters",
    //   "recommend": true,
    //   "name": "jktest",
    //   "email": "jktest@gmail.com",
    //   "photos": ["blob:http://localhost:3000/61c56739-d85e-4749-b37e-9425ba56dbca"],
    //   "characteristics": { "240591": 1, "240592": 2, "240593": 3, "240594": 5 }
    // }
    // props.addNewReview(testData)
    //}

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
                <OverallStar starSelection={starSelection} errorStarMsg={errorStarMsg} />
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
                Characteristic: {charAsteris ? <span className="asteris">*</span> : null} <span className="errMsg">{charErrorMsg}</span>
                {characterTable}
              </div>

              <div className="review-summary-section">
                <NewSummary summaryInput={summaryInput} summaryErrorMsg={summaryErrorMsg} />
              </div>

              <div className="review-body-section">
                <NewBody bodyInput={bodyInput} bodyErrorMsg={bodyErrorMsg} />
              </div>

              <div className="photo-upload-section">
                <UploadPhoto UploadErrorMsg={UploadErrorMsg} addToPhotoArr={addToPhotoArr} />
              </div>

              <div className="user-info-section">
                <UserInfo useInfo={useInfo} nicknameErrorMsg={nicknameErrorMsg} emailErrorMsg={emailErrorMsg} />
              </div>

              <div className="button-section">
                <button className="review-modal-closeBtn" data-testid={`close-`} onClick={() => { handleCloseClick() }} >Close</button>
                <button className="review-modal-submitBtn" data-testid={`submit-`} onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )

}

export default newReviewModal