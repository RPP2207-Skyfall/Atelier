import react, { useState, useEffect } from 'react'
import helpers from '../helperFunctions/helper.js'

const productBreakdown = (props) => {

  var characteristicsObj = props.characteristicsObj
  const [characteristicsArr, setCharacteristicsArr] = useState([])



  useEffect(() => {
    (async () => {
      let characteristicsArr = await helpers.breakdownCharacteristicsObj(characteristicsObj)
      console.log(characteristicsArr)
      setCharacteristicsArr(characteristicsArr)
    })()
  }, [characteristicsObj])



  return (
    <>
      <div className="product-breakdown-container">
        {characteristicsArr}
      </div>
    </>
  )
}

export default productBreakdown