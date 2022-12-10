import React from 'react'
import helpers from './helper.js'
import StarDiv from './starDiv.jsx'



class StarRating extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      starArray: [],
      totalRating: 5
    }
  }

  async componentDidMount() {
    // this.generateStars()
    let starArray = await helpers.generateStars(this.props.rating, this.state.totalRating)
    //console.log(starArray)
    this.setState({ starArray: starArray })
  }

  render() {
    //console.log('star array in review item: ', this.state.starArray)
    return (
      <div className="star-bar">
        <StarDiv starArray={this.state.starArray} />
      </div>
    )
  }


}

export default StarRating
