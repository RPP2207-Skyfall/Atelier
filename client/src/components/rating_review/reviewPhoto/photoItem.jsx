import React, { useState } from 'react'

const photoItem = (props) => {

  const [modal, setModal] = useState(false);

  const enableModal = () => {
    setModal(!modal)
  }

  const tracker = (element, widget) => {
    props.tracker(element, widget)
  }



  return (
    <>
      <div className="thumbnail-Box"><img className="thumbnail-photo" src={`${props.photo.url}`} data-testid={`thumbnail-photo-${props.photo.id}`} onClick={() => { enableModal(); tracker('modal-open-btn', 'photoItem') }} alt={`thumbnail-photo-${props.photo.id}`} /></div>
      {modal ?
        <div className="modal" >
          <div className="overlay" data-testid={`overlay-${props.photo.id}`} onClick={() => { enableModal(); tracker('review-photo-overlay', 'photoItem') }}>
            <div className="modal-content">
              <img className="modal-photo" loading="lazy" data-testid={`full-photo-${props.photo.id}`} src={`${props.photo.url}`} alt="enlarged-photo" />
              <button className="modal-closeBtn" data-testid={`close-${props.photo.id}`} onClick={() => { enableModal(); tracker('modal-close-btn', 'photoItem') }} >Close</button>
            </div>
          </div>
        </div> : null
      }
    </>
  )

}

export default photoItem