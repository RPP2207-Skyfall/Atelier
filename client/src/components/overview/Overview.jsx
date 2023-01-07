import React, { useState, useEffect } from 'react';
import ProductInfo from './parts/productInfo/ProductInfo.jsx';
import StyleSelector from './parts/styleSelector/StyleSelector.jsx';
import AddToCart from './parts/addToCart/AddToCart.jsx';
import ImageGallery from './parts/imageGallery/ImageGallery.jsx';
import Details from './parts/productInfo/Details.jsx'
import Axios from 'axios';
import helpers from './overviewHelpers.js';
import api from './overviewApi.js';
import Tracker from '../tracker.js'
// import image from '../../../server/index.js';


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
      done: false,
      skuToBuy: null,
      shouldOptimize: false,
      currentPID: 71700,
      description: []
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
    this.likeOutfit = this.likeOutfit.bind(this);


    // api

    this.getData = this.getData.bind(this);

    this.getGeneralProducts = this.getGeneralProducts.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.setAverageRating = this.setAverageRating.bind(this);

  }


  // Add outfit to carousel

  likeOutfit(outfit) {

    this.props.toggleStar(this.state.currentPID)

  }


  componentDidUpdate(prevProps) {

    if (prevProps !== this.props) {

      this.getData(this.props.CurrentItemID)
    }

  }


  // for expanded view:

  zoom() {
    this.setState({
      zoomBox: !this.state.zoomBox,
    })
  }


  // for Styles + thumbnail interaction:

  updateStyle(style, elem, widget) {

    Tracker.userInteraction(elem, widget);
    let newThumbnails = helpers.makeThumbnailBoxes(style.photos);
    console.log('new thumbnails', newThumbnails)
    this.setState({
      currentStyle: style,
      mainIndex: 0,
      currentThumbnails: newThumbnails
    })
  }


  handleExpand(elem, widget) {
    Tracker.userInteraction(elem, widget);
    if (elem === 'zoom-box-img') {
      this.setState({
        expanded: !this.state.expanded,
        zoomBox: false
      })
    } else {
      this.setState({
        expanded: !this.state.expanded
      })
    }

  }


  updateThumbnailSection(dir, elem, widget) {

    Tracker.userInteraction(elem, widget);

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



  // handles left or right main button click for image gallery (main image)
  mainSlide(dir, elem, widget) {

    Tracker.userInteraction(elem, widget);

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

  // handles thumbnail click: updates the main picture when a thumbnail is clicked
  updateMainPic(index, elem, widget) {
    Tracker.userInteraction(elem, widget);

    this.setState({
      mainIndex: index
    })

  }


  // controller

  getData(id = id || 71700) {

    // console.log('id in get data', id)

    Promise.all([this.getGeneralProducts(id), this.getStyles(id), this.getReviews(id)])
      .then((results) => {

        // console.log('from promise.all', results);

        this.setState({
          // ----- general info ------- //


          data: results[0].data,
          currentPID: results[0].id,
          description: results[0].desc,

          // ------ styles ------ //

          styles: results[1][0],
          current: results[1][0].results[0].photos[0],
          amount: results[1][0].results[0].photos.length,
          currentThumbnails: results[1][1],
          currentStyle: results[1][0].results[0],

          // ---- get reviews & set reviews -------- ///

          reviewData: results[2][0],
          rating: results[2][1],
          done: true

        }
      })
      .catch((err) => {
        console.log('there is an error with teh promis.all')
      })


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


  // API Calls:

  getStyles(SKU) {
    const productUrl = process.env.REACT_APP_API_OVERVIEW_URL + `products/${SKU}/styles`;

    return new Promise((resolve, reject) => {

      fetch(productUrl,
        {
          method: "GET",
          headers:
          {
            "Content-Type": "application/json",
            "Authorization": process.env.REACT_APP_API_OVERVIEW_TOKEN,
            "Content-Encoding": 'gzip'
          }
        }
      )
        .then(res => res.json())
        .then((data) => {


          let holder = helpers.makeThumbnailBoxes(data.results[0].photos);

          // this.setState({
          //   styles: data,
          //   current: data.results[0].photos[this.state.mainIndex],
          //   amount: data.results[0].photos.length,
          //   currentThumbnails: holder,
          //   currentStyle: data.results[0]
          // }, () => {
          //   resolve(this.state)
          // })

          resolve([data, holder])

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
          "Authorization": process.env.REACT_APP_API_REVIEW_RATING_KEY,
          "Content-Encoding": 'gzip'
        },
        params: {
          product_id: product_id,
          count: 10
        }
      }
      Axios.get(url, requestOption)
        .then(res => {

          // this.setState({
          //   reviewData: res.data.results
          // }, () => {
          //   resolve(this.state)
          // })

          let avgReview = helpers.getAverageRating(res.data.results)

          resolve([res.data.results, avgReview]);
        })
        .catch(err => {
          reject(err)
          // console.log("Err: ", err)
        })
    })


  }

  getGeneralProducts(id) {
    console.log('something in general product')
    const generalUrl = process.env.REACT_APP_API_OVERVIEW_URL + `products`;


    return new Promise((resolve, reject) => {
      fetch(generalUrl,
        {
          method: "GET",
          headers:
          {
            "Content-Type": "application/json",
            "Authorization": process.env.REACT_APP_API_OVERVIEW_TOKEN,
            "Content-Encoding": 'gzip'
          }
        }
      )
        .then(res => res.json())
        .then((data) => {


          let desc = null;
          for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
              desc = data[i];
            }
          }


          // old stuff -------------

          // this.setState({
          //   data: data,
          //   currentPID: id,
          //   description: desc
          // }, () => {


          //   resolve(this.state)
          // });

          // new stuff ------------

          resolve({ data, id, desc })
        })
        .catch((err) => {
          reject(err)
          console.log('err: ', err);
        })
    })
  }

  // for size selector and sku seletion when adding to bag

  selectSize(size, quant, skuToBuy) {
    this.setState({
      selectedSize: size,
      sizeQuant: quant,
      skuToBuy: skuToBuy
    })
  }

  selectQuant(quant) {
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
    this.getData()
  }

  render() {

    if (this.state.data === undefined) {
      throw new Error('no data detected');
    }

    if (this.state.done) {
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

        <>
          <div className="overview-container" data-testid="overview-test">
            <div className="image-gallery-container">
              <ImageGallery
                info={this.state} currentThumbnails={this.state.currentThumbnails} currentStyle={this.state.currentStyle} mainSlide={this.mainSlide} updateMainPic={this.updateMainPic}
                handleExpand={this.handleExpand} thumbnailSection={this.state.thumbnailSection} updateThumbnailSection={this.updateThumbnailSection}
                checkThumbnailSection={this.checkThumbnailSection}
              />
            </div>
            <div className="product-info-container">
              <ProductInfo info={this.state} style={this.state.currentStyle} rating={this.state.rating} desc={this.state.description} />
              <StyleSelector styles={this.state.styles} currentStyle={this.state.currentStyle} updateStyle={this.updateStyle} />
              <AddToCart
                currentStyle={this.state.currentStyle} selectSize={this.selectSize} selected={this.state.selectedSize}
                sizeQuantity={this.state.sizeQuant} selectedQuant={this.state.selectedQuant} selectQuant={this.selectQuant} skuToBuy={this.state.skuToBuy}
                likeOutfit={this.likeOutfit} />
            </div>
          </div>
          <div className="details-container">
            {this.state.description ? <Details desc={this.state.description} /> : null}
          </div>
        </>
      )
    }

    else {
      return (
        <div>
          having some issues...
          please try again later
        </div>
      )
    }


  }
}


export default Overview;