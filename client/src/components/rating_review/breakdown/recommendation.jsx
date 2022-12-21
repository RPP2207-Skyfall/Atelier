import react, { useState, useEffect } from 'react'
import helpers from '../helperFunctions/helper.js'

const recommendation = (props) => {

  const recommendObj = props.percentage
  var result = 0
  const [percentage, setPercentage] = useState(0)


  useEffect(() => {

    (async () => {
      let percentage = await helpers.calculatePercentage(recommendObj)
      //console.log('sss', percentage)
      setPercentage(percentage)
    })()
  }, [recommendObj])


  return (

    <div className="recommend-precent">{`${percentage !== undefined ? percentage : null}% of reviews recommend this product`}</div>

  )

}

export default recommendation