import react, { useState } from 'react'

const SortMenu = (props) => {
  const sortOptionsArr = ['helpful', 'newest', 'relevance']
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

    setSortOptionOnDisplay(sortMethod)
    setDisplaySortOption('none')
    //setSortingMethod(sortMethod)
    props.updateSortMethod(sortMethod)
  }

  var style = {
    display: displaySortOption
  }

  return (

    <><span className="sort-dropdown" data-testid='sort-dropdown' onClick={() => { handleClick() }}>{`${sortOptionOnDisplay}`}</span>
      <div className="sort-col col">
        {sortOptionsArr.map((sortMethod, idx) =>
          <div className={`row option-${sortMethod}`} data-testid={`sort-options-${idx}`} key={idx} onClick={() => { handleSortingClick(sortMethod) }} style={style}>{sortMethod}</div>
        )}
      </div>
    </>
  )

}

export default SortMenu