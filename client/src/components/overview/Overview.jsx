import React, { useState, useEffect } from 'react';
import ProductInfo from './parts/productInfo/ProductInfo.jsx';
import StyleSelector from './parts/styleSelector/StyleSelector.jsx';
import AddToCart from './parts/addToCart/AddToCart.jsx';
import ImageGallery from './parts/ImageGallery/ImageGallery.jsx';
import Axios from 'axios';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      SKU: null,
      expanded: false,
      styles: [],
      current: [],
      mainIndex: 0,
      amount: 0,
      currentThumbnails: [],
      currentStyle: null,
      thumbnailSection: 0,
      selectedSize: null,
      sizeQuant: 0,
      selectedQuant: 0,
      zoomBox: false,
      reviewData: [],
      rating: null,
      done: false
    }

    this.mainSlide = this.mainSlide.bind(this);
    this.updateMainPic = this.updateMainPic.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.updateStyle = this.updateStyle.bind(this);
    this.updateThumbnailSection = this.updateThumbnailSection.bind(this);
    this.selectSize = this.selectSize.bind(this);
    this.checkThumbnailSection = this.checkThumbnailSection.bind(this);
    this.makeImageHolder = this.makeImageHolder.bind(this);
    this.selectQuant = this.selectQuant.bind(this);
    this.zoom = this.zoom.bind(this);


    // api

    this.getData = this.getData.bind(this);

    this.getGeneralProducts = this.getGeneralProducts.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.makeThumbnailBoxes = this.makeThumbnailBoxes.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getAverageRating = this.getAverageRating.bind(this);
    this.setAverageRating = this.setAverageRating.bind(this);
  }

  zoom() {
    this.setState({
      zoomBox: !this.state.zoomBox
    })
  }

  updateStyle(style) {

    // update current thumbnails to be the thumbnails of the new style

    // console.log(style.photos)

    // console.log('style', style)

    let newThumbnails = this.makeThumbnailBoxes(style.photos);

    // console.log('style.photos', style.photos)



    // let otherThumb = this.makeThumbnailBoxes(style.photos);

    // console.log('new thunm', newThumbnails)
    // console.log('other thunm', otherThumb)


    this.setState({
      currentStyle: style,
      mainIndex: 0,
      currentThumbnails: newThumbnails
    })

    // console.log(this.state.currentStyle)
  }

  updateThumbnailSection(dir) {

    if (this.state.thumbnailSection === 0 && dir === -1) {
      return;
    }
    if (this.state.thumbnailSection === 1 && dir === 1) {
      return;
    }

    let newIndex = this.state.currentThumbnails[this.state.thumbnailSection + dir][0].index;

    console.log('newIndex', newIndex)


    this.setState({
      thumbnailSection: this.state.thumbnailSection + dir,
      mainIndex: newIndex
    })

  }


  checkThumbnailSection(dir) {
    let thumbnailLength = this.state.currentThumbnails[0].length;

    if ((this.state.mainIndex + dir === this.state.amount)) {
      return;
    }

    if (this.state.mainIndex + dir > thumbnailLength - 1) {

      this.setState({
        thumbnailSection: 1
      })
    }

    if (this.state.mainIndex + dir <= thumbnailLength - 1) {

      this.setState({
        thumbnailSection: 0
      })
    }

  }

  handleExpand() {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  // handles left or right main button click
  mainSlide(dir) {

    if (this.state.mainIndex === 0 && dir === -1) {
      return
    }

    if (this.state.mainIndex === this.state.amount - 1 && dir > 0) {
      return
    }

    if (this.state.mainIndex === 0) {
      this.setState({
        current: this.state.styles.results[0].photos[dir],
        mainIndex: this.state.mainIndex + dir
      })

    } else {
      this.setState({
        current: this.state.styles.results[0].photos[this.state.mainIndex + dir],
        mainIndex: this.state.mainIndex + dir
      })
    }

  }

  // handles thumbnail click
  updateMainPic(index) {
    this.setState({
      mainIndex: index
    })

  }


  getProductInfo(SKU) {

  }


  getData() {
    this.getGeneralProducts()
      .then((data) => {
        return this.getStyles(data.SKU)
      })
      .then((state) => {
        // console.log('state', state)
        return this.getReviews(state.styles.product_id);
      })
      .then((reviews) => {
        // console.log('reviews', reviews);
        return this.getAverageRating(reviews.reviewData)
      })
      .then((averageReview) => {
        return this.setAverageRating(averageReview);
      })
      .then((done) => {

        this.setState({
          done: true
        })
        // console.log('done', done)

        // make a state with done where it is verified that all api calls are done
      })
      .catch((err) => {
        console.log('ERR', err)
      })

  }

  getGeneralProducts() {
    // console.log('something in general product')
    const generalUrl = process.env.REACT_APP_API_OVERVIEW_URL + `products`;

    return new Promise((resolve, reject) => {
      fetch(generalUrl,
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

          // console.log('data after first call', data[1].id)
          this.setState({
            data: data,
            SKU: data[0].id
          }, () => {
            // console.log(this.state)
            resolve(this.state)
          });
        })
        .catch((err) => {
          reject(err)
          console.log('err: ', err);
        })
    })
  }

  // helpers

  makeThumbnailBoxes(thumbnails) {


    // let thumbnails = data.results[0].photos;

    let holder = [];
    let box = [];

    for (var i = 0; i < thumbnails.length; i++) {

      thumbnails[i].index = i;
      box.push(thumbnails[i]);

      if (box.length === 7) {
        holder.push(box);
        box = [];
      }

      if (i >= thumbnails.length - 1) {
        holder.push(box);
        box = [];
      }
      // console.log('box', box)
    }

    return holder;
  }

  getAverageRating(ratings) {

    let result = 0;

    for (let i = 0; i < ratings.length; i++) {
      result += ratings[i].rating;
    }

    return result / ratings.length;
  }

  setAverageRating(rating) {
    return new Promise((resolve, reject) => {
      this.setState({
        rating: rating
      }, () => {
        resolve(this.state);
      })

    })
  }



  getStyles(SKU) {
    const productUrl = process.env.REACT_APP_API_OVERVIEW_URL + `products/${SKU}/styles`;

    return new Promise((resolve, reject) => {

      fetch(productUrl,
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

          // console.log('data in styles', data)

          let holder = this.makeThumbnailBoxes(data.results[0].photos)

          this.setState({
            styles: data,
            current: data.results[0].photos[this.state.mainIndex],
            amount: data.results[0].photos.length,
            currentThumbnails: holder,
            currentStyle: data.results[0]
          }, () => {
            resolve(this.state)
          })
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  getReviews(product_id) {
    // console.log('id', id)

    var url = process.env.REACT_APP_API_REVIEW_URL

    return new Promise((resolve, reject) => {
      // console.log(url)
      var requestOption = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": process.env.REACT_APP_API_REVIEW_RATING_KEY
        },
        params: {
          product_id: product_id,
          count: 10
        }
      }
      Axios.get(url, requestOption)
        .then(res => {
          ///console.log(res.data)
          this.setState({
            reviewData: res.data.results
          }, () => {
            resolve(this.state)
          })
        })
        .catch(err => {
          reject(err)
          // console.log("Err: ", err)
        })
    })


  }




  // getGeneralInfo() {
  //   const generalUrl = process.env.REACT_APP_API_OVERVIEW_URL + `products`;

  //   fetch(generalUrl,
  //     {
  //       method: "GET",
  //       headers:
  //       {
  //         "Content-Type": "application/json",
  //         "Authorization": process.env.REACT_APP_API_OVERVIEW_TOKEN
  //       }
  //     }
  //   )
  //     .then(res => res.json())
  //     .then((data) => {

  //       // get general info (SKU and product info like name and description)

  //       // console.log('data Overview 172: ', data)

  //       this.setState({
  //         data: data,
  //         SKU: data[0].id
  //       })
  //       // console.log(this.state);
  //       return data;
  //     })
  //     .then((data) => {
  //       const SKU = data[0].id;
  //       const productUrl = process.env.REACT_APP_API_OVERVIEW_URL + `products/${SKU}/styles`;

  //       fetch(productUrl,
  //         {
  //           method: "GET",
  //           headers:
  //           {
  //             "Content-Type": "application/json",
  //             "Authorization": process.env.REACT_APP_API_OVERVIEW_TOKEN
  //           }
  //         }
  //       )
  //         .then(res => res.json())

  //         // get the info for the pictures, style and thumbnail

  //         .then((data) => {

  //         // console.log('data overview 201: ', data);

  //         let thumbnails = data.results[0].photos;


  //           let holder = [];
  //           let box = [];

  //           for (var i = 0; i < thumbnails.length; i++) {

  //             thumbnails[i].index = i;
  //             box.push(thumbnails[i]);

  //             if (box.length === 7) {
  //               holder.push(box);
  //               box = [];
  //             }

  //             if (i >= thumbnails.length - 1) {
  //               holder.push(box);
  //               box = [];
  //             }

  //           }

  //         //console.log('currentStyle', data.results[0])

  //         this.setState({
  //           styles: data,
  //           current: data.results[0].photos[this.state.mainIndex],
  //           amount: data.results[0].photos.length,
  //           currentThumbnails: holder,
  //           currentStyle: data.results[0]
  //         })
  //         // console.log('data from product', data);

  //         return data;
  //       })
  //       .then((data) => {

  //         var url = process.env.REACT_APP_API_REVIEW_RATING_URL
  //         // console.log(url)
  //         // console.log('data at 246', data.product_id)
  //         let product_id = data.product_id;
  //         var requestOption = {
  //           headers: {
  //             "Content-Type": "application/json",
  //             "Authorization": process.env.REACT_APP_API_REVIEW_RATING_KEY
  //           },
  //           params: {
  //             product_id: product_id,
  //             count: 10
  //           }
  //         }
  //         Axios.get(url, requestOption)
  //           .then(res => {
  //             ///console.log(res.data)
  //             this.setState({
  //               reviewData: res.data.results
  //             })

  //             return this.state;
  //           })
  //           .then((state) => {
  //             console.log(state)
  //           })

  //           .catch(err => {
  //             console.log("Err: ", err)
  //           })
  //       })

  //     })

  //     .catch((err) => {
  //       console.error(err);
  //     })
  // }

  selectSize(size, quant) {
    // console.log('size attempted', size);
    this.setState({
      selectedSize: size,
      sizeQuant: quant
    })
  }

  selectQuant(quant) {

    console.log('quant', quant);

    this.setState({
      selectedQuant: quant
    })
  }

  makeImageHolder(images) {


    let holder = [];
    let box = [];

    for (var i = 0; i < images.length; i++) {

      images[i].index = i;
      box.push(images[i]);

      if (box.length === 7) {
        holder.push(box);
        box = [];
      }

      if (i >= images.length - 1) {
        holder.push(box);
        box = [];
      }

    }
    return holder;
  }


  componentDidMount() {
    // this.getGeneralInfo()
    this.getData()
  }

  render() {

    if (this.state.done) {
      //console.log(this.state)
      if (this.state.expanded) {
        return (
          <div className="overview-container-expanded">
            <ImageGallery
              info={this.state} currentThumbnails={this.state.currentThumbnails} currentStyle={this.state.currentStyle} mainSlide={this.mainSlide} updateMainPic={this.updateMainPic}
              handleExpand={this.handleExpand} thumbnailSection={this.state.thumbnailSection} updateThumbnailSection={this.updateThumbnailSection}
              checkThumbnailSection={this.checkThumbnailSection} zoomBox={this.state.zoomBox} zoom={this.zoom}
            />
          </div>
        )
      }
      return (
        <div className="overview-container">
          <ProductInfo info={this.state} style={this.state.currentStyle} rating={this.state.rating} />
          <StyleSelector styles={this.state.styles} currentStyle={this.state.currentStyle} updateStyle={this.updateStyle} />
          <AddToCart
            currentStyle={this.state.currentStyle} selectSize={this.selectSize} selected={this.state.selectedSize}
            sizeQuantity={this.state.sizeQuant} selectedQuant={this.state.selectedQuant} selectQuant={this.selectQuant} />
          <ImageGallery
            info={this.state} currentThumbnails={this.state.currentThumbnails} currentStyle={this.state.currentStyle} mainSlide={this.mainSlide} updateMainPic={this.updateMainPic}
            handleExpand={this.handleExpand} thumbnailSection={this.state.thumbnailSection} updateThumbnailSection={this.updateThumbnailSection}
            checkThumbnailSection={this.checkThumbnailSection}
          />
        </div>
      )
    }


  }
}


export default Overview;