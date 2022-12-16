import React from 'react';
import RelatedCard from './RelatedCard.jsx';
import Axios from 'axios';

class RelatedList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      relatedList: this.props.relatedList,
      relatedItemDetails:  this.props.relatedItemDetails,
      relatedItemImages:  this.props.relatedItemImages,
      relatedItemRating:  this.props.relatedItemRating
    }
    // this.getRelatedID = this.getRelatedID.bind(this);
  }


  render() {
    // console.log('state', this.state.relatedItem_id)
    if (this.state.relatedList.length === 0) {
      return (
        <p>Empty.................................................</p>
      )
    } else {
      return (
      <div className="carousel-container">
        {this.state.relatedList.map((item, index) =>
        <RelatedCard details= {this.state.relatedItemDetails[index]} image= {this.state.relatedItemImages[index]} rating= {this.state.relatedItemRating[index]}/>
        )}
      </div>
      )
    }
  }
}

// const RelatedList = (props) => (
//   <div className="carousel-container">
//     <RelatedCard />
//     <RelatedCard />
//     <RelatedCard />
//     <RelatedCard />
//     <RelatedCard />
//   </div>
// )





export default RelatedList;