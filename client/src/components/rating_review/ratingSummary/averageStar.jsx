import react, { useState, useEffect } from 'react'
import helpers from '../starRating/helper.js'

const averageStar = (props) => {

  const [starArray, setStarArray] = useState([])
  const totalRating = 5
  console.log(props.rating)

  useEffect(() => {
    (async () => {
      let starArray = await helpers.generateStars(props.rating, totalRating)
      setStarArray(starArray)
    })()
  }, [props.rating])

  return (
    <div className="star-bar">
      {starArray.map((width, idx) => {

        return (
          <div className="star-container" key={idx}>
            <div className="star-fill" style={{ "width": `${(width * 31)}px` }}>
              <img className="star-outline" alt="star-image" src="star.png"></img>
            </div>
          </div>
        );
      })
      }
    </div>
  )
}

export default averageStar


