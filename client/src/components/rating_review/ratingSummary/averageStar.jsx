import react, { useState, useEffect } from 'react'
import helpers from '../starRating/helper.js'
import StarDiv from '../starRating/starDiv.jsx'

const averageStar = (props) => {

  const [starArray, setStarArray] = useState([])
  const totalRating = 5

  useEffect(() => {
    (async () => {
      let starArray = await helpers.generateStars(props.rating, totalRating)
      setStarArray(starArray)
    })()
  }, [props.rating])

  //console.log('star array in average star: ', starArray)
  return (
    <div className="star-bar">
      <StarDiv starArray={starArray} />
    </div>
  )
}

export default averageStar


