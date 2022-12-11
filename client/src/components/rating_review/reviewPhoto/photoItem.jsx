import React, { useState } from 'react'

const photoItem = (props) => {

  const [modal, setModal] = useState(false);

  const enableModal = () => {
    setModal(!modal)
  }



  return (
    <>
      <div className="thumbnail-Box"><img className="thumbnail-photo" src={`${props.photo.url}`} onClick={() => { enableModal() }} alt={`thumbnail-photo-${props.photo.id}`} /></div>
      {modal ?
        <div className="modal">
          <div className="overlay" onClick={() => { enableModal() }}>
            <div className="modal-content">
              <img className="modal-photo" src={`${props.photo.url}`} alt="enlarged-photo" />
              <button className="modal-closeBtn" onClick={() => { enableModal() }} >Close</button>
            </div>
          </div>
        </div> : null
      }
    </>
  )

}

export default photoItem