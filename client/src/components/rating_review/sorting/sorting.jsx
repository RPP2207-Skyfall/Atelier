import react, { useState } from 'react'

const SortMenu = (props) => {

  const [displaySortOption, setDisplaySortOption] = useState('none')
  const [sortOptionOnDisplay, setSortOptionOnDisplay] = useState(props.sortValue)
  const [sortingMethod, setSortingMethod] = useState(props.sortValue)

  const handleClick = () => {
    if (displaySortOption === 'none') {
      setDisplaySortOption('block')
    } else {
      setDisplaySortOption('none')
    }
  }

  const handleSortingClick = (value) => {
    setSortOptionOnDisplay(value)
    setDisplaySortOption('none')
    setSortingMethod(value)
    props.updateSortingMethod(value)
  }

  var style = {
    display: displaySortOption
  }

  return (

    <><span className="sort-dropdown" onClick={() => { handleClick() }}>{`${sortOptionOnDisplay}`}</span>
      <div className="sort-col col">
        <div className="row option-helpful" onClick={() => { handleSortingClick('helpful') }} style={style}>Helpful</div>
        <div className="row option-newest" onClick={() => { handleSortingClick('newest') }} style={style}>Newest</div>
        <div className="row option-relevant" onClick={() => { handleSortingClick('relevance') }} style={style}>Relevant</div>
      </div>
    </>
  )

}

export default SortMenu