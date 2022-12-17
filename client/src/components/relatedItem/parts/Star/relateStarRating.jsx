import React from 'react'
import helpers from './../../../rating_review/helperFunctions/helper.js'
import StarDiv from './../../../rating_review/starRating/starDiv.jsx'



class Relatestar extends React.Component {

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

export default Relatestar
