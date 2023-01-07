import React, { useState, useEffect } from 'react';


const userInfo = (props) => {

  const nicknamePlaceholderText = '“Example: jackson11!”'
  const emailPlaceholderText = "“Example: jackson11@email.com”"
  const [nameAsteris, setNameAsteris] = useState(true)



  const handleNicknameChange = (e) => {
    setNameAsteris(false)
    if (!e.target.value) {
      setNameAsteris(true)
    }
    props.useInfo('nickname', e.target.value)
  }
  const handleEmailChange = async (e) => {
    setNameAsteris(false)
    if (!e.target.value) {
      setNameAsteris(true)
    }

    props.useInfo('email', e.target.value)

  }

  const tracker = (element, widget) => {
    props.tracker(element, widget)
  }


  return (
    <>
      <div className="nickname" data-testid="nickname-div">
        What is your nickname? {nameAsteris ? <span className="asteris">*</span> : null}<span className="errMsg">{props.nicknameErrorMsg}</span>
        <div>
          <textarea className="nickname-textarea" data-testid="nickname-area" maxLength="60" type="text" placeholder={nicknamePlaceholderText} onChange={handleNicknameChange} onClick={() => { tracker('nickname-textarea', 'new-review-modal') }}></textarea>
          <div className="disclaimer">For privacy reasons, do not use your full name or email address</div>
        </div>
      </div>
      <div className="email" data-testid="email-div">
        Your Email? {nameAsteris ? <span className="asteris">*</span> : null}<span className="errMsg">{props.emailErrorMsg}</span>
        <div>
          <textarea className="email-textarea" data-testid="email-area" maxLength="60" type="text" placeholder={emailPlaceholderText} onChange={handleEmailChange} onClick={() => { tracker('email-textarea', 'new-review-modal') }}></textarea>
          <div className="disclaimer">For authentication reasons, you will not be emailed</div>
        </div>
      </div>
    </>
  )
}

export default userInfo