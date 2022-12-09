import react, { useState } from 'react'

const SortMenu = (props) => {
  const sortOptionsArr = ['helpful', 'newest', 'relevant']
  const [displaySortOption, setDisplaySortOption] = useState('none')
  const [sortOptionOnDisplay, setSortOptionOnDisplay] = useState('relevance')



  const handleClick = () => {
    if (displaySortOption === 'none') {
      setDisplaySortOption('block')
    } else {
      setDisplaySortOption('none')
    }
  }

  const handleSortingClick = (sortMethod) => {
    var displayValue = sortMethod
    if (sortMethod === 'relevant') {
      displayValue = 'relevance'
    }
    setSortOptionOnDisplay(displayValue)
    setDisplaySortOption('none')
    //setSortingMethod(sortMethod)
    props.updateSortMethod(sortMethod)
  }

  var style = {
    display: displaySortOption
  }

  return (

    <><span className="sort-dropdown" onClick={() => { handleClick() }}>{`${sortOptionOnDisplay}`}</span>
      <div className="sort-col col">
        {sortOptionsArr.map((sortMethod, idx) =>
          <div className={`row option-${sortMethod}`} key={idx} onClick={() => { handleSortingClick(sortMethod) }} style={style}>{sortMethod}</div>
        )}
      </div>
    </>
  )

}

export default SortMenu