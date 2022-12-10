import React from 'react';
import Axios from 'axios';
import Star from './../star/starRating.jsx';

class RelatedCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product_id: this.props.item,
      product_detail: [],
      rating: 0,
      currentPic: [],
      picList: [],
      hoverPicShow: false,
      compareBoxShow: false,
      starPic: "StarOutline.png",
    }
    this.getRelatedDetails = this.getRelatedDetails.bind(this);
    this.getRating = this.getRating.bind(this);
    this.getImages = this.getImages.bind(this);
    // this.picShow = this.picShow.bind(this);
    // this.compareShow = this.compareShow.bind(this);
    this.toggleStar = this.toggleStar.bind(this);
  }

  componentDidMount() {
    this.getRelatedDetails(this.state.product_id)
    this.getRating(this.state.product_id)
    this.getImages(this.state.product_id)
  }

  componentDidUpdate() {
    this.state.rating;

  }

  toggleStar() {
    // if (this.state.starPic === "StarOutline.png") {
    //   this.setState({
    //     starPic: "FillStar.png"
    //   })
    // } else {
    //   this.setState({
    //     starPic: "StarOutline.png"
    //   })
    // }
  }

  getImages(ID) {
    const url = process.env.REACT_APP_API_OVERVIEW_URL + `products/${this.state.product_id}/styles`;

    fetch(url,
      {
        method: "GET",
        headers:
        {
          "Content-Type": "application/json",
          "Authorization": process.env.REACT_APP_API_OVERVIEW_TOKEN
        }
      }
    )
      .then(res => res.json())
      .then((data) => {
        // console.log(data.results[0].photos);

        let thumbnails = data.results[0].photos;

        let holder = [];
        let box = [];

        for (var i = 0; i < thumbnails.length; i++) {

          thumbnails[i].index = i;
          box.push(thumbnails[i]);

          if (box.length === 3) {
            holder.push(box);
            box = [];
          }
        }

        this.setState({
          currentPic: data.results[0].photos,
          picList: holder
        })
      })
      .catch((err) => {
        console.error(err);
      })
  }



  getRelatedDetails(ID) {
    var requestOption = {
      headers: {
        "Authorization": process.env.REACT_APP_API_OVERVIEW_TOKEN
      }
      // params: {
      //   product_id: IDList[x],
      // }
    }
    Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${ID}`, requestOption)
    .then(res => {
      // console.log(res.data)
      this.setState({product_detail: res.data})
    })
    .catch(err => {
      console.log("Err: ", err)
    })
  }

  getRating(ID) {
    var requestOption = {
      headers: {
        "Authorization": process.env.REACT_APP_API_OVERVIEW_TOKEN
      },
      // params: {
      //   product_id: ID,
      // }
    }
    Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=${ID}`, requestOption)
    .then(res => {
      // console.log('meta', res)
      const rateObj = res.data.ratings;
      var numOfRate = 0;
      var points = 0;
      for (var key in rateObj) {
        points += (key * rateObj[key]);
        numOfRate += Number(rateObj[key]);
      }
      var averageRate = Math.round(points / numOfRate * 10) / 10;
      // console.log('aveRating', averageRate)
      this.setState({rating: averageRate})
      return averageRate;
    })
    .then(averageRate => {
      $(document).ready(function() {
        // Gets the span width of the filled-ratings span
        // this will be the same for each rating
        var star_rating_width = $('.fill-ratings span').width();
        // Sets the container of the ratings to span width
        // thus the percentages in mobile will never be wrong
        $('.star-ratings').width(averageRate / 100);
      });
    })
    .catch(err => {
      console.log("Err: ", err)
    })
  }


  render() {
    // console.log(this.state.product_detail.id, 'rating', this.state.rating)
    if (this.state.product_detail.length === 0 || this.state.currentPic.length === 0) {
      return (
        <p>Empty</p>
      )
    } else {
      return (
        <div className="carousel-box">
           <img className = "image-box" src={this.state.currentPic[0].url} alt="style" />
        <button className="star-btn" onClick={this.toggleStar()}><img src={this.state.starPic}></img></button>
        <div className="category-box">
          <div className="category-title">{this.state.product_detail.category}</div>
          <div className="category-wrapper">
            <p>{this.state.product_detail.name}</p>
            <div className="price-box">
            ${this.state.product_detail.default_price}
            </div>
            <div className="star-box">
              <Star rating={this.state.rating}/>
            </div>
          </div>
        </div>
      </div>
      )
    }
  }
}


export default RelatedCard;

