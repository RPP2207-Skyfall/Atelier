const helpers = {
  generateStars: async (rating, totalRating) => {

    if (typeof rating !== 'number' || typeof totalRating !== 'number') {
      return []
    }
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
    //console.log(starArray)
    return starArray
  },
  calculateAverageRating: async (ratingObj) => {
    //console.log(ratingObj)
    if (typeof ratingObj !== 'object' || Array.isArray(ratingObj)) {
      return { 'average': 0, 'totalRatingAmount': 0 }
    }
    var average = 0
    var totalScore = 0
    var totalRatingAmount = 0
    for (let key in ratingObj) {
      var currentValue = parseInt(ratingObj[key])
      totalRatingAmount += currentValue
      totalScore += (currentValue * key)
      //console.log(totalScore, totalRatingAmount)
    }

    average = Math.round((totalScore / totalRatingAmount) * 10) / 10

    if (isNaN(average) || isNaN(totalRatingAmount)) {
      average = 0
      totalRatingAmount = 0
    }

    return { 'average': average, 'totalRatingAmount': totalRatingAmount }
  }


}



export default helpers;