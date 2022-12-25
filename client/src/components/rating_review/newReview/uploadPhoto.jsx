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
      //console.log(uploadFiles.length)

      var currentStorage = imageStorage
      let newStorage = await helpers.storeImage(currentStorage, uploadFiles)

      setImageStorage(newStorage)
      setCurrentAmount(newStorage.length)



      if (imageStorage.length === 5) {
        setUploadBtn(false)
      }

    })()
  }, [uploadFiles])


  const handleUploadClick = async (e) => {
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

  return (
    <>

      <div className="preview-container">
        {imageStorage.length > 0 ?
          imageStorage.map((item, idx) =>
            <div className="preview-thumbnail-box" key={idx}>
              <img className="thumbnail-photo" src={item.preview} alt={`upload-image-${idx}`} />
            </div>
          ) : null
        }
      </div>
      {
        uploadBtn ?
          <>
            <div>
              <label htmlFor="upload-btn">
                Upload image
              </label>
              <input type="file" accept="image/*" id="upload-btn" name="review-image" multiple hidden
                onChange={handleUploadClick} /> <span>{`(${currentAmount}/${maximum})`}</span>
            </div>
            {showLimit ? <span>{msg}</span> : null}
          </> : null
      }
    </>

  )
}

export default uploadPhoto

