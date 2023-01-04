import React from 'react';
import RatingReview from './rating_review/ratingReview.jsx'
import Overview from './overview/Overview.jsx';
import RelatedItem from './relatedItem/relatedItemSection.jsx';
import QandA from './QA/QandA.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      OutfitList: [71702],
      CurrentItemID: 71702,
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
    var index = this.state.OutfitList.indexOf(currentID)
    var newList = this.state.OutfitList
    if (index === -1) {
      newList.push(currentID)
      console.log(newList)
      this.setState({OutfitList: newList})
    } else {
      newList.splice(index, 1)
      console.log(newList)
      this.setState({OutfitList: newList})
    }
    // console.log(newList, this.state.OutfitList)
  }

  render() {
    return (
      <>
        <h3>Ateiler</h3>
        {/* <Overview /> */}
        {JSON.stringify(this.state.OutfitList)}
        <RelatedItem outfitList={this.state.OutfitList} toggleStar={this.toggleStar} CurrentItemID={this.state.CurrentItemID} updateCurrentItem={this.updateCurrentItem} />
        {/* <QandA product_name={this.state.CurrentItemName} product_id = {this.state.CurrentItemID}/> */}
        {/* <RatingReview product_id={this.state.CurrentItemID} product_name={this.state.CurrentItemName} /> */}
      </>
    )
  }

}

export default App;