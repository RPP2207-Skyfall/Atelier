import react, { useState, useEffect } from 'react'

const recommendation = (props) => {

  const recommendObj = props.percentage
  var result = 0
  const [percentage, setPercentage] = useState(0)


  useEffect(() => {
    calculatePercentage(recommendObj)
    // console.log(recommendObj)
    // var total = 0
    // var recommended = 0
    // for (let key in recommendObj) {

    //   if (key === 'true') {
    //     recommended += parseInt(recommendObj[key])
    //   }
    //   total += parseInt(recommendObj[key])
    // }

    // result = Math.round(((recommended / total) * 100) * 10) / 10
    // console.log('gg', result)
  }, [recommendObj])

  // useEffect(() => {
  //   setPercentage(result)
  // }, [result])

  const calculatePercentage = (recommendObj) => {
    if (recommendObj) {
      console.log(recommendObj)
      var total = 0
      var recommended = 0
      for (let key in recommendObj) {

        if (key === 'true') {
          recommended += parseInt(recommendObj[key])
        }
        total += parseInt(recommendObj[key])
      }

      setPercentage(Math.round(((recommended / total) * 100) * 10) / 10)
    }

  }





  return (
    <div className="recommend-precent">{`${percentage}% of reviews recommend this product`}</div>
  )

}

export default recommendation