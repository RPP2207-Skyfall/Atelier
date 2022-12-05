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
      productInfo: [],
      SKU: null,
      expanded: false,
      styles: [],
      current: [],
      mainIndex: 0,
      amount: 0,
      currentThumbnails: []
    }

    this.mainSlide = this.mainSlide.bind(this);
    this.updateMainPic = this.updateMainPic.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
  }

  handleExpand() {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  mainSlide(dir) {

    console.log('dir', dir)

    if (this.state.mainIndex === 0 && dir === -1) {
      return
    }

    if (this.state.mainIndex === this.state.amount - 1 && dir > 0) {
      return
    }

    if (this.state.mainIndex === 0) {
      this.setState({
        current: this.state.styles.results[0].photos[dir],
        mainIndex: dir
      })

    } else {
      this.setState({
        current: this.state.styles.results[0].photos[this.state.mainIndex + dir],
        mainIndex: this.state.mainIndex + dir
      })
    }

  }

  updateMainPic(picInfo, index) {
    this.setState({
      current: picInfo,
      mainIndex: index
    })
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
            currentThumbnails: holder
          })

          this.setState({
            productInfo: data
          })
          // console.log('data from product', data);
        })
      })
      .catch((err) => {
        console.error(err);
      })
  }


  componentDidMount() {
    this.getGeneralInfo()
  }

  render() {
    return (
      <div>
        <ProductInfo info={this.state}/>
        <StyleSelector />
        <AddToCart />
        <ImageGallery info={this.state} mainSlide={this.mainSlide} updateMainPic={this.updateMainPic} handleExpand={this.handleExpand}/>
      </div>
    )
  }
}


export default Overview;