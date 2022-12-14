import React, { useState, useEffect } from 'react';
import helpers from '../helperFunctions/helper.js'
const uploadPhoto = (props) => {
  const maximum = 5
  const [imageStorage, setImageStorage] = useState([])
  const [uploadFiles, setUploadFiles] = useState('')
  const [currentAmount, setCurrentAmount] = useState(0)
  const [uploadBtn, setUploadBtn] = useState(true)
  const [showLimit, setShowLimit] = useState(false)
  const [msg, setMsg] = useState("")
  const [thumbnails, setThumbnails] = useState()

  useEffect(() => {
    (async () => {
      // setShowLimit(false)
      console.log(uploadFiles)

      var currentStorage = imageStorage
      let newStorage = await helpers.storeImage(currentStorage, uploadFiles)

      setImageStorage(newStorage)
      setCurrentAmount(newStorage.length)
      if (newStorage.length !== 0) {
        props.addToPhotoArr(newStorage)
      }
      if (imageStorage.length === 5) {
        setUploadBtn(false)
      }

    })()
  }, [uploadFiles])


  const handleUploadClick = async (e) => {
    // console.log(e.target.files)
    setShowLimit(false)
    // console.log(e.target.files.length, imageStorage.length)
    if (e.target.files.length > 5) {
      setShowLimit(true)
      setMsg(`Maximum of ${maximum} images can be uploaded`)
    }
    else if (e.target.files.length + imageStorage.length > 5) {
      setShowLimit(true)
      setMsg(`Maximum of ${maximum - imageStorage.length} more images can be uploaded`)
    } else {
      setUploadFiles(e.target.files)
    }

  }

  const tracker = (element, widget) => {
    props.tracker(element, widget)
  }

  return (
    <>

      <div className="preview-container">
        {imageStorage.length > 0 ?
          imageStorage.map((item, idx) =>
            <div className="preview-thumbnail-box" key={idx}>
              <img className="thumbnail-photo" loading="lazy" src={item.preview} alt={`upload-image-${idx}`} />
            </div>
          ) : null
        }
      </div>
      {
        uploadBtn ?
          <>
            <div>
              <button type="button" className="upload-btn">
                <label htmlFor="upload-btn">
                  Upload image
                </label>
              </button>
              <input type="file" accept="image/*" id="upload-btn" name="review-image" multiple hidden
                onChange={handleUploadClick} onClick={() => { tracker('uploadImage-btn', 'new-review-modal') }} /> <span>{`(${currentAmount}/${maximum})`}</span>
            </div>
            {showLimit ? <span>{msg}</span> : null}
          </> : null
      }
    </>

  )
}

export default uploadPhoto

