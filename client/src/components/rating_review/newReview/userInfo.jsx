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
  const handleEmailChange = (e) => {
    setNameAsteris(false)
    if (!e.target.value) {
      setNameAsteris(true)
    }
    props.useInfo('email', e.target.value)
  }

  return (
    <>
      <div className="nickname">
        What is your nickname? {nameAsteris ? <span className="asteris">*</span> : null}<span className="errMsg">{props.nicknameErrorMsg}</span>
        <div>
          <textarea className="nickname-textarea" maxLength="60" type="text" placeholder={nicknamePlaceholderText} onChange={handleNicknameChange} ></textarea>
          <div className="disclaimer">For privacy reasons, do not use your full name or email address</div>
        </div>
      </div>
      <div className="email">
        Your Email? {nameAsteris ? <span className="asteris">*</span> : null}<span className="errMsg">{props.emailErrorMsg}</span>
        <div>
          <textarea className="email-textarea" maxLength="60" type="text" placeholder={emailPlaceholderText} onChange={handleEmailChange} ></textarea>
          <div className="disclaimer">For authentication reasons, you will not be emailed</div>
        </div>
      </div>
    </>
  )
}

export default userInfo