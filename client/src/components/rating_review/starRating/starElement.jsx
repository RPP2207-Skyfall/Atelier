import React from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const starElement = {
  generateIncompleteStar: (width) => {
    console.log('helper received width: ', width)

    if (width === '100%') {
      return <FontAwesomeIcon className="star" icon={faStar} key={idx} />
    } else if (width === '0%') {
      return <FontAwesomeIcon className="star" icon={emptyStar} key={idx} />
    } else if (width === '50%') {
      return <FontAwesomeIcon className="star" icon={faStarHalfAlt} key={idx} />
    } else if (width === '25%') {
      return <FontAwesomeIcon className="star" icon={faStarHalfStroke} key={idx} />
    } else if (width === '75%') {
      return <FontAwesomeIcon className="star" icon={faSun} key={idx} />
    }




  }
}

export default starElement