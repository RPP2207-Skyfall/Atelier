import React from 'react';
import RatingReview from './rating_review/ratingReview.jsx'
import Overview from './overview/Overview.jsx';
import RelatedItem from './relatedItem/relatedItemSection.jsx';
import QandA from './QA/QandA.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      OutfitList: [],
      CurrentItemID: 71698
    }
    this.toggleStar = this.toggleStar.bind(this);
    this.updateCurrentItemID = this.updateCurrentItemID.bind(this);
  }


  updateCurrentItemID(newID) {
    console.log('update ID', newID)
    this.setState({CurrentItemID: newID})
  }

  toggleStar(currentID) {
    var index = this.state.OutfitList.indexOf(currentID)
    var newList = this.state.OutfitList
    if (index === -1) {
      newList.push(currentID)
      this.setState({OutfitList: newList})
    } else {
      newList.splice(index, 1)
      this.setState({OutfitList: newList})
    }
  }

  render() {
    return (
      <>
        <h3>Ateiler</h3>
        {/* <Overview /> */}
        <RelatedItem outfitList = {this.state.OutfitList} toggleStar = {this.toggleStar} CurrentItemID = {this.state.CurrentItemID} updateCurrentItemID = {this.updateCurrentItemID}/>
        {/* <QandA product_name={'Camo Windblocker'}/> */}
        {/* <RatingReview /> */}
      </>
    )
  }

}

export default App;