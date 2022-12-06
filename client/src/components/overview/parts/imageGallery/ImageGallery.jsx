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

  }

  // this.state.expanded === false && this.state.styles.length !== 0

  render() {

    if (this.props.info.styles.length !== 0 && !this.props.info.expanded ) {

      let index = this.props.info.mainIndex;


      return (
        <div id="image-gallery">
          <h3>ImageGallery</h3>
          <DefaultView  mainPic={this.props.currentStyle.photos[index].url} />
          <div id="main-slider">
            <button id="main-backward" onClick={() => this.props.mainSlide(-1)}>back</button>
            <button id="main-forward" onClick={() => this.props.mainSlide(1)}>forward</button>
          </div>
          <button onClick={() => this.props.handleExpand()}>expand</button>
          <Thumbnail updateMainPic={this.props.updateMainPic} images={this.props.currentStyle.photos} section={this.props.thumbnailSection} />
        </div>
      )
    } else if (this.props.info.expanded) {
      let index = this.props.info.mainIndex;
      console.log('expanede')

      return (
        <div id="image-gallery">
          <h3>ImageGallery</h3>
          <ExpandedView mainPic={this.props.currentStyle.photos[index].url} />
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