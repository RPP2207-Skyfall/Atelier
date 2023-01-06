import React from 'react';
import RatingReview from './rating_review/ratingReview.jsx'
import Overview from './overview/Overview.jsx';
import RelatedItem from './relatedItem/relatedItemSection.jsx';
import QandA from './QA/QandA.jsx';
import Tracker from './tracker.js'
import ErrorBoundary from './ErrorBoundary.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      OutfitList: [],
      CurrentItemID: 71700,
      CurrentItemName: "Blues Suede Shoes"
    }
    this.toggleStar = this.toggleStar.bind(this);
    this.updateCurrentItem = this.updateCurrentItem.bind(this);
  }


  updateCurrentItem(newID, newName) {
    console.log('update ID', newID, newName)
    this.setState({ CurrentItemID: newID })
    this.setState({ CurrentItemName: newName })
    // console.log(this.state.CurrentItemID)
  }

  toggleStar(currentID) {
    console.log('CURRENT ID', currentID)
    if (isNaN(currentID) === false) {
      var index = this.state.OutfitList.indexOf(currentID)
      var newList = this.state.OutfitList.slice()
      if (index === -1) {
        newList.push(currentID)
        console.log(newList)
        this.setState({OutfitList: newList})
      } else {
        newList.splice(index, 1)
        console.log(newList)
        this.setState({OutfitList: newList})
      }
    } else {
      console.log('not valid id pass')
    }
    // console.log(newList, this.state.OutfitList)
  }

  render() {
    return (
      <>
        <ErrorBoundary>
          <h3>Ateiler</h3>
          <button onClick={() => Tracker.userInteraction("button", "app")} >test</button>
          {/* <Overview outfitList={this.state.OutfitList} toggleStar={this.toggleStar} CurrentItemID={this.state.CurrentItemID} updateCurrentItem={this.updateCurrentItem} /> */}
          <RelatedItem outfitList={this.state.OutfitList} toggleStar={this.toggleStar} CurrentItemID={this.state.CurrentItemID} updateCurrentItem={this.updateCurrentItem} />
          {/* <QandA product_name={this.state.CurrentItemName} product_id={this.state.CurrentItemID} testy={''}/> */}
          {/* <RatingReview tracker={Tracker.userInteraction} product_id={this.state.CurrentItemID} product_name={this.state.CurrentItemName} /> */}
        </ErrorBoundary>
      </>
    )
  }

}

export default App;