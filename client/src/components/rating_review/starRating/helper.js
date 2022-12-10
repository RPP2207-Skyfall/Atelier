const helpers = {
  generateStars: async (rating, totalRating) => {
    var fullStars = Math.floor(rating)
    var decimal = rating - fullStars
    var starArray = []

    //testing
    // var fullStars = Math.floor(3.4) //3
    // var decimal = (3.4 - fullStars) // 0.5 = 3 quarters star

    //console.log(fullStars, parseFloat(decimal.toFixed(1)))
    if (decimal !== 0) {
      // console.log(decimal)
      var fillValue = parseFloat(decimal.toFixed(1)) * 100
      var incompleteStar = await helpers.calculateIncompleteStar(parseFloat(decimal.toFixed(1)))
      //console.log('incomplete star:', incompleteStar)
      for (let i = 0; i < totalRating; i++) {
        if (i < fullStars) {

          starArray.push(100)
        }
        if (i === fullStars) {
          starArray.push(fillValue)
        }
        if (i === fullStars + 1 || i < totalRating.length) {
          starArray.push(0)
        }
      }
      //console.log(this.state.starArray)
    } else {
      for (let i = 0; i < totalRating; i++) {
        if (i < fullStars) {

          starArray.push(100)
        }
        if (i >= fullStars || i < totalRating.length) {
          starArray.push(0)
        }

      }
      //console.log(this.state.starArray)
    }

    return starArray
  },
  calculateIncompleteStar: (decimal) => {

    // first quarter
    if (decimal < 0.5) {
      return 25;
    } else if (decimal >= 0.5 && decimal < 0.75) { // half
      return 50
    } else if (decimal >= 0.75 && decimal < 1) {  // 3 quarters
      return 75
    }
  }


}



export default helpers;