import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'
import { faStarHalfStroke, faSun } from '@fortawesome/free-regular-svg-icons'


class StarRating extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      fullStars: 0,
      halfStar: 0,
      quarterStar: 0,
      threeQuarterStar: 0,
      starArray: [],
      totalRating: 5
    }
  }

  componentDidMount() {
    this.generateStars()
  }

  async generateStars() {
    //var fullStars = Math.floor(this.props.rating) // if rating 3.8 fullstars = 3
    //var decimal = this.props.rating - fullStars

    //testing
    var fullStars = Math.floor(3.8) //3
    var decimal = (3.8 - fullStars) // 0.8 = 3 quarters star
    // var fullStars = Math.floor(3) //3
    // var decimal = (3 - fullStars) // 0
    // testinng



    console.log(fullStars, parseFloat(decimal.toFixed(1)))
    if (decimal !== 0) {
      var incompleteStar = await this.calculateIncompleteStar(parseFloat(decimal.toFixed(1)))
      console.log('incomplete star:', incompleteStar)
      for (let i = 0; i < this.state.totalRating; i++) {
        if (i < fullStars) {
          this.state.starArray.push('full')
        }
        if (i === fullStars) {
          if (incompleteStar === 25) {
            this.state.starArray.push('quarter')

          } else if (incompleteStar === 50) {
            this.state.starArray.push('half')

          } else if (incompleteStar === 75) {
            this.state.starArray.push('threeQuarters')

          }

        }
        if (i === fullStars + 1 || i < this.state.totalRating.length) {
          this.state.starArray.push('empty')
        }
      }
      console.log(this.state.starArray)
    } else {
      for (let i = 0; i < this.state.totalRating; i++) {
        if (i < fullStars) {
          this.state.starArray.push('full')
        }
        if (i >= fullStars || i < this.state.totalRating.length) {
          this.state.starArray.push('empty')
        }

      }
      console.log(this.state.starArray)

    }



  }

  calculateIncompleteStar(decimal) {
    // first quarter
    if (decimal < 0.5) {
      return 25;
    } else if (decimal >= 0.5 && decimal < 0.75) { // half
      return 50
    } else if (decimal >= 0.75 && decimal < 1) {  // 3 quarters
      return 75
    }
  }

  render() {

    return (
      <div>
        {

          this.state.starArray.map((item, idx) => {
            if (item === "full") {
              return <FontAwesomeIcon icon={faStar} key={idx} />
            } else if (item === "empty") {
              return <FontAwesomeIcon className="star" icon={emptyStar} key={idx} />
            } else if (item === "half") {
              return <FontAwesomeIcon icon={faStarHalfAlt} key={idx} />
            } else if (item === "quarter") {
              return <FontAwesomeIcon icon={faStarHalfStroke} key={idx} />
            } else if (item === "threeQuarters") {
              return <FontAwesomeIcon icon={faSun} key={idx} />
            }

          })

        }
      </div>

    )
  }


}

export default StarRating


//<div><FontAwesomeIcon icon={faStar} /></div>
//faStar, faStarAndCrescent, faStarHalf, faStarHalfAlt, faStarHalfStroke,

