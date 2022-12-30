const helpers = {
  generateStars: async (rating, totalRating) => {
    // console.log("rating", rating)
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
  },
  calculatePercentage: async (recommendObj) => {
    if (recommendObj) {
      var percentage = null
      var total = 0
      var recommended = 0
      for (let key in recommendObj) {

        if (key === 'true') {
          recommended += parseInt(recommendObj[key])
        }
        total += parseInt(recommendObj[key])
      }
      percentage = Math.round(((recommended / total) * 100) * 10) / 10

      //setPercentage(Math.round(((recommended / total) * 100) * 10) / 10)
      return percentage
    }

  },
  populateIndividualRating: async (ratingObj) => {
    if (ratingObj) {
      var individualRatingArr = []
      for (let key in ratingObj) {
        //var current = [<span>{`${key} Stars`}</span>, <span>{ratingObj[key]}</span>]
        var current = [key, ratingObj[key]]

        individualRatingArr.push(current)
      }
      return individualRatingArr
    }
  },
  calculateBarFillPercentage: (totalAmount, ratingAmount) => {

    if (isNaN(parseInt(totalAmount)) || isNaN(parseInt(ratingAmount))) {
      return 0
    }

    var fillAmount = Math.round(((parseInt(ratingAmount) / parseInt(totalAmount)) * 100) * 10) / 10
    //console.log('fillAmount', fillAmount)
    return fillAmount


  },
  addToFilterArr: (filterValue, filterMap) => {
    // toggle
    //console.log(filterValue, 'before ', filterMap)
    filterMap[filterValue] = !filterMap[filterValue]
    //console.log(filterValue, 'now: ', filterMap)
    return filterMap

  },
  filtering: (filterMap, originalReviewData, reviewData) => {
    //console.log('filterMap', filterMap)

    // if all filter are off
    if (Object.values(filterMap).every((value) => value === false)) {
      return originalReviewData
    }
    var filteredReviewArr = []

    for (let i = 0; i < originalReviewData.length; i++) {
      var currentData = originalReviewData[i].rating.toString()

      if (filterMap[currentData]) {
        //console.log('pushing', originalReviewData[i])
        filteredReviewArr.push(originalReviewData[i])
      }
    }


    return filteredReviewArr

  },
  breakdownCharacteristicsObj: (characteristicsObj) => {
    //console.log('received charObj', characteristicsObj)
    var definitionChart = {
      Fit: ['Too tight', 'Perfect', 'Too loosey'],
      Length: ['Too short', 'Perfect', 'Too long'],
      Comfort: ['Uncomforable', 'OK', 'Perfect'],
      Quality: ['Poor', 'What I expected', 'Great'],
      Size: ['Too small', 'Perfect', 'Too big'],
      Width: ['Too narrow', 'Perfect', 'Too wide']
    }

    // parseFloat(decimal.toFixed(1)) * 100

    var characteristicsArr = []
    for (let key in characteristicsObj) {
      var indicatorPercentage = (parseFloat(characteristicsObj[key].value) * 10).toFixed(1)
      var scaleLabelLeft = definitionChart[key][0]
      var scaleLabelMiddle = definitionChart[key][1]
      var scaleLabelRight = definitionChart[key][2]

      characteristicsArr.push(
        <div className="characteristic" key={characteristicsObj[key].id}>
          <div className="row character-name">{key}</div>
          <div className="row indicator-row">
            <span className="scale-background">
              <i className="indicator" style={{ "marginLeft": `${indicatorPercentage}%` }}>{'\u25B2'}</i>
            </span>
          </div>
          <div className="row scale-label">
            <span className="col-4 left-label">{scaleLabelLeft}</span>
            <span className="col-4 middle-label">{scaleLabelMiddle}</span>
            <span className="col-4 right-label">{scaleLabelRight}</span>
          </div>
        </div>
      )
    }
    return characteristicsArr

  },
  generateCharacteristicTable: (characteristicsObj, definitionObj) => {

    var characteristicTable = []

    for (let key in characteristicsObj) {

      characteristicTable.push(
        <div key={`${key}-row`}>

          <div className="char-title" key={key}>{key}</div>

          <div className="char-selection" key={'char-selection' + key} >

            {definitionObj[key].map((definition, idx) => {

              return (
                <span className="definition-name" key={'definition-name' + key + idx}>{definition}</span>
              )
            })}
          </div>
          <div className="char-input" key={'char-input' + key}>
            {definitionObj[key].map((definition, idx) => {

              return (
                <input key={'inputBtn' + key + idx} className="inputBtn" type="radio" name={`characteristic-select-${key}`} value={[characteristicsObj[key].id, idx + 1, definition]} />
              )
            })}
          </div>
        </div>
      )

    }
    return characteristicTable
  },
  checkReviewForm: (fromComponent, checkValue) => {

    if (fromComponent === 'newBody') {
      var requiredLength = 50
      var lengthRemaining = requiredLength - checkValue
      if (checkValue <= 50) {
        return [true, lengthRemaining]
      } else {
        return [false, lengthRemaining]
      }
    }
    else if (fromComponent === 'overallStar') {
      if (checkValue < 0) {
        return true
      } else {
        return false
      }
    }
  },
  storeImage: (currentStorage, files) => {

    for (let i = 0; i < files.length; i++) {
      //console.log(files[i])
      var imageObj = { preview: URL.createObjectURL(files[i]), raw: files[i] }
      currentStorage.push(imageObj)
    }

    return currentStorage

  },
  emailValidation: (input) => {
    //console.log(input.length)
    if (input.length > 0) {
      if (input.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )) {
        return true
      } else {
        return false
      }
    }
  }
}



export default helpers;

