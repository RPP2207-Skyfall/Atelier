import React, { useState, useEffect } from 'react';
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
      amount: 0,
      currentThumbnails: []
    }
    this.getImages = this.getImages.bind(this);
  }

  getImages() {

    // console.log('props in image', this.props)

    const url = process.env.REACT_APP_API_OVERVIEW_URL + `products/71697/styles`;

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
        // console.log(data);

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
      })
      .catch((err) => {
        console.error(err);
      })
  }



  componentDidMount() {
    this.getImages();
  }

  // this.state.expanded === false && this.state.styles.length !== 0

  render() {

    if (this.props.info.styles.length !== 0 && !this.props.info.expanded) {

      return (
        <div id="image-gallery">
          <h3>ImageGallery</h3>
          <DefaultView styles={this.props.info.styles} mainPic={this.props.info.current} />
          <div id="main-slider">
            <button id="main-backward" onClick={() => this.props.mainSlide(-1)}>back</button>
            <button id="main-forward" onClick={() => this.props.mainSlide(1)}>forward</button>
          </div>
          <button onClick={() => this.props.handleExpand()}>expand</button>
          <Thumbnail updateMainPic={this.props.updateMainPic} images={this.props.info.currentThumbnails} />
        </div>
      )
    } else if (this.props.info.expanded) {
      return (
        <div id="image-gallery">
          <h3>ImageGallery</h3>
          <ExpandedView styles={this.props.info.styles} mainPic={this.props.info.current} />
          <div id="expanded-slider">
            <button id="expanded-backward" onClick={() => this.props.mainSlide(-1)}>back</button>
            <button id="expanded-forward" onClick={() => this.props.mainSlide(1)}>forward</button>
          </div>
          <button onClick={() => this.props.handleExpand()}>default</button>
          <Thumbnail updateMainPic={this.props.updateMainPic} images={this.props.info.currentThumbnails} />
        </div>
      )
    } else {
      return null;
    }
  }

}


export default ImageGallery;