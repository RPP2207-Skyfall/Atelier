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
    setDisplaySortOption('none')
  }

  var style = {
    display: displaySortOption
  }

  return (

    <><span className="sort-dropdown" onClick={() => { handleClick() }}>{`${sortOptionOnDisplay}`}</span>
      <div className="sort-col col">
        <div className="row option-helpful" onClick={() => { updateDisplay('helpful') }} style={style}>Helpful</div>
        <div className="row option-newest" onClick={() => { updateDisplay('newest') }} style={style}>Newest</div>
        <div className="row option-relevant" onClick={() => { updateDisplay('relevance') }} style={style}>Relevant</div>
      </div>
    </>
  )

}

export default SortMenu