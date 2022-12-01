import React, {useState, useEffect } from 'react';
import DefaultView from './views/DefaultView.jsx';
import ExpandedView from './views/ExpandedView.jsx';
import Thumbnail from './Thumbnails.jsx';
import axios from 'axios';



class ImageGallery extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
      styles: [],
      current: [],
      mainIndex: 0,
      amount: 0
    }
    this.getImages = this.getImages.bind(this);
    this.updateMainPic = this.updateMainPic.bind(this);
    this.mainSlide = this.mainSlide.bind(this);
  }

  mainSlide(dir) {
    console.log(dir);

    console.log(this.state);

    if (this.state.mainIndex === 0 && dir === -1) {
      return
    }

    if (this.state.mainIndex === this.state.amount - 1 && dir > 0) {
      console.log('length', this.state)
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

  updateMainPic(picInfo) {
    console.log('pic info in image Gallery', picInfo)
    this.setState({
      current: picInfo
    })
  }

  getImages() {

    const url = process.env.REACT_APP_API_KEY + `products/71697/styles`;

       fetch (url,
        {
          method: "GET",
          headers:
            {
              "Content-Type": "application/json",
              "Authorization": process.env.REACT_APP_TOKEN
            }
        }
      )
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          styles: data,
          current: data.results[0].photos[this.state.mainIndex],
          amount: data.results[0].photos.length
        })
      })
      .catch((err) => {
        console.error(err);
      })
  }

  componentDidMount() {
    this.getImages();
  }

  render() {
    if (this.state.expanded === false && this.state.styles.length !== 0) {
      return (
        <div id="image-gallery">
          <h3>ImageGallery</h3>
          <DefaultView styles={this.state.styles} mainPic={this.state.current}/>
          <div id="main-slider">
            <button id="main-backward" onClick={() => this.mainSlide(-1)}>back</button>
            <button id="main-forward" onClick={() => this.mainSlide(1)}>forward</button>
          </div>
          <button onClick={() => this.setState({expanded: true})}>expand</button>
          <Thumbnail updateMainPic={this.updateMainPic} images={this.state.styles.results[0].photos} />
        </div>
      )
    } else {
      return (
        <div id="image-gallery">
          <h3>ImageGallery</h3>
          <ExpandedView />
          <Thumbnail />
          <button onClick={() => this.setState({expanded: false})}>default</button>
        </div>
      )
    }
  }




}


export default ImageGallery;