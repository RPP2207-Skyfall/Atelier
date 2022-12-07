import React, { useState, useEffect } from 'react';
import ProductInfo from './parts/productInfo/ProductInfo.jsx';
import StyleSelector from './parts/styleSelector/StyleSelector.jsx';
import AddToCart from './parts/addToCart/AddToCart.jsx';
import ImageGallery from './parts/ImageGallery/ImageGallery.jsx';
import axios from 'axios';

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
      selectedSize: null
    }

    this.mainSlide = this.mainSlide.bind(this);
    this.updateMainPic = this.updateMainPic.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.updateStyle = this.updateStyle.bind(this);
    this.updateThumbnailSection = this.updateThumbnailSection.bind(this);
    this.selectSize = this.selectSize.bind(this);
    this.checkThumbnailSection = this.checkThumbnailSection.bind(this);
  }

  updateStyle(style) {
    this.setState({
      currentStyle: style,
      mainIndex: 0,

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

  // checkThumb(dir) {
  //   this.setState({
  //     thumbnailSection: this.state.thumbnailSection + dir
  //   })
  //   // console.log('chceking thumb')
  //   // check to see if we are at the end of the current thumbnal
  // }

  checkThumbnailSection(dir) {
    let thumbnailLength = this.state.currentThumbnails[0].length;

    console.log('checking thumbnail section lenght', this.state.currentThumbnails[0].length)
    console.log('checking index', this.state.mainIndex)
    // if (this.state.index >= this.state.info.currentThumbnails[0].length) {
    //   console.log('length')
    // }

    // if the thumbnail length is greater than or equal to the current index
    if (this.state.mainIndex + dir > thumbnailLength - 1) {
      // set the state of the current section to be next

      // console.log(this.state.thumbnailSection)
      this.setState({
        thumbnailSection: 1
      })
    }

    if (this.state.mainIndex + dir <= thumbnailLength - 1) {
      // set the state of the current section to be next
      this.setState({
        thumbnailSection: 0
      })
    }
    // else set the state of the current section to be previous
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

      console.log(this.state.mainIndex)

    } else {
      this.setState({
        current: this.state.styles.results[0].photos[this.state.mainIndex + dir],
        mainIndex: this.state.mainIndex + dir
      })
    }

    console.log(this.state.mainIndex)

  }

  // handles thumbnail click
  updateMainPic(index) {
    this.setState({
      mainIndex: index
    })

  }

  getProductInfo(SKU) {

  }

  getGeneralInfo() {
    const generalUrl = process.env.REACT_APP_API_OVERVIEW_URL + `products`;

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

        // get general info (SKU and product info like name and description)
        this.setState({
          data: data,
          SKU: data[0].id
        })
        // console.log(this.state);
        return data;
      })
      .then((data) => {
        const SKU = data[0].id;
        const productUrl = process.env.REACT_APP_API_OVERVIEW_URL + `products/${SKU}/styles`;

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

        // get the info for the pictures, style and thumbnail

        .then((data) => {

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
            styles: data,
            current: data.results[0].photos[this.state.mainIndex],
            amount: data.results[0].photos.length,
            currentThumbnails: holder,
            currentStyle: data.results[0]
          })
          // console.log('data from product', data);
        })
      })
      .catch((err) => {
        console.error(err);
      })
  }

  selectSize(size) {
    // console.log('size attempted', size);
    this.setState({
      selectedSize: size
    })
  }


  componentDidMount() {
    this.getGeneralInfo()
  }

  render() {
    return (
      <div class="overview-container">
        <ProductInfo info={this.state} style={this.state.currentStyle}/>
        <StyleSelector styles={this.state.styles} currentStyle={this.state.currentStyle} updateStyle={this.updateStyle}/>
        <AddToCart currentStyle={this.state.currentStyle} selectSize={this.selectSize} selected={this.state.selectedSize}/>
        <ImageGallery
          info={this.state} currentStyle={this.state.currentStyle} mainSlide={this.mainSlide} updateMainPic={this.updateMainPic}
          handleExpand={this.handleExpand} thumbnailSection={this.state.thumbnailSection} updateThumbnailSection={this.updateThumbnailSection}
          checkThumbnailSection={this.checkThumbnailSection}
        />
      </div>
    )
  }
}


export default Overview;