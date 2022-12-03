import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import starElement from './starElement.jsx'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'
import { faStarHalfStroke, faSun } from '@fortawesome/free-regular-svg-icons'
// import { createUseStyles } from 'react-jss'


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
          var star = starElement.generateIncompleteStar('100%')

          this.state.starArray.push(star)
        }
        if (i === fullStars) {
          if (incompleteStar === 25) {

            this.state.starArray.push('25%')

          } else if (incompleteStar === 50) {
            this.state.starArray.push('50%')

          } else if (incompleteStar === 75) {
            this.state.starArray.push('75%')

          }

        }
        if (i === fullStars + 1 || i < this.state.totalRating.length) {
          this.state.starArray.push('0%')
        }
      }
      console.log(this.state.starArray)
    } else {
      for (let i = 0; i < this.state.totalRating; i++) {
        if (i < fullStars) {
          this.state.starArray.push('100%')
        }
        if (i >= fullStars || i < this.state.totalRating.length) {
          this.state.starArray.push('0%')
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
    // var width = '75%'
    // var test = starElement.generateIncompleteStar(width)
    // console.log(test)
    return (
      <div>

      </div>

    )
  }


}

export default StarRating



// var starAttribute = {
//  fontFamily: FontAwesome;
//   content: "\f005";
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100 %;
//   overflow: hidden;
//   color: #f80;
// }


// this.state.starArray.map((width, idx) => {
//   const widthValue = '75%'
//   const widthStyle = { '--width': widthValue }
//   // if (width === '100%') {
//   return <FontAwesomeIcon className="oneStar" style={widthStyle} icon={faStar} key={idx} />
//   //}

// })


// {
//   this.state.starArray.map((width, idx) => {
//     if (width === '100%') {
//       return <FontAwesomeIcon className="star" icon={faStar} key={idx} />
//     } else if (width === '0%') {
//       return <FontAwesomeIcon className="star" icon={emptyStar} key={idx} />
//     } else if (width === '50%') {
//       return <FontAwesomeIcon className="star" icon={faStarHalfAlt} key={idx} />
//     } else if (width === '25%') {
//       return <FontAwesomeIcon className="star" icon={faStarHalfStroke} key={idx} />
//     } else if (width === '75%') {
//       return <FontAwesomeIcon className="star" icon={faSun} key={idx} />
//     }
//   })



// }