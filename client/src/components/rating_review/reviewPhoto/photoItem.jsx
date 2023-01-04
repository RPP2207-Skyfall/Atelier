import React, { useState } from 'react'

const photoItem = (props) => {

  const [modal, setModal] = useState(false);

  const enableModal = () => {
    setModal(!modal)
  }



  return (
    <>
      <div className="thumbnail-Box"><img className="thumbnail-photo" src={`${props.photo.url}`} data-testid={`thumbnail-photo-${props.photo.id}`} onClick={() => { enableModal() }} alt={`thumbnail-photo-${props.photo.id}`} /></div>
      {modal ?
        <div className="modal" >
          <div className="overlay" data-testid={`overlay-${props.photo.id}`} onClick={() => { enableModal() }}>
            <div className="modal-content">
              <img className="modal-photo" loading="lazy" data-testid={`full-photo-${props.photo.id}`} src={`${props.photo.url}`} alt="enlarged-photo" />
              <button className="modal-closeBtn" data-testid={`close-${props.photo.id}`} onClick={() => { enableModal() }} >Close</button>
            </div>
          </div>
        </div> : null
      }
    </>
  )

}

export default photoItem