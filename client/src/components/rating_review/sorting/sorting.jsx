import react, { useState } from 'react'

const SortMenu = (props) => {

  const [displaySortOption, setDisplaySortOption] = useState('none')
  const [sortOptionOnDisplay, setSortOptionOnDisplay] = useState('relevent')

  const handleClick = () => {
    if (displaySortOption === 'none') {
      setDisplaySortOption('block')
    } else {
      setDisplaySortOption('none')
    }
  }

  const updateDisplay = (value) => {
    setSortOptionOnDisplay(value)
  }

  var style = {
    display: displaySortOption
  }

  return (

    <><span className="sort-dropdown" onClick={() => { handleClick() }}>{`${sortOptionOnDisplay}`}</span>
      <div className="option-helpful" onClick={() => { updateDisplay('helpful') }} style={style}>Helpful</div>
      <div className="option-newest" onClick={() => { updateDisplay('newest') }} style={style}>Newest</div>
      <div className="option-relevant" onClick={() => { updateDisplay('relevant') }} style={style}>Relevant</div>
    </>
  )

}

export default SortMenu