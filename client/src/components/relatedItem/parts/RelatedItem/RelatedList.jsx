import React from 'react';
import RelatedCard from './RelatedCard.jsx';
import Axios from 'axios';

class RelatedList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product_id: this.props.product_id || 71698,
      relatedItem_id: [],
      toggleFunc: this.props.toggleID
    }
    this.getRelatedID = this.getRelatedID.bind(this);
  }

  componentDidMount() {
    this.getRelatedID(this.state.product_id)
  }


  getRelatedID(searchID) {
    var url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${searchID}/related`
    var requestOption = {
      headers: {
        // "Content-Type": "application/json",
        "Authorization": process.env.REACT_APP_API_OVERVIEW_TOKEN
      },
      params: {
        product_id: searchID,
      }
    }
    Axios.get(url, requestOption)
      .then(res => {
        this.setState({
          relatedItem_id: res.data
        })
      })
      .catch(err => {
        console.log("Err: ", err)
      })
    }


  render() {
    // console.log('state', this.state.relatedItem_id)
    if (this.state.relatedItem_id.length === 0) {
      return (
        <p>Empty</p>
      )
    } else {
      return (
      <div className="carousel-container">
        {this.state.relatedItem_id.map((item, index) =>
        <RelatedCard item= {item} key= {index} id= {index} outfit = {this.props.outfitList} toggleOutfit = {this.props.toggleOutfit}/>
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