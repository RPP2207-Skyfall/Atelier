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
        <div className="default-image-gallery">
          <DefaultView  mainPic={this.props.currentStyle.photos[index].url} />
          <Thumbnail updateMainPic={this.props.updateMainPic} images={this.props.currentStyle.photos} section={this.props.thumbnailSection} updateThumbnail={this.props.updateThumbnail} />
          <div className="main-slider">
            <button className="main-backward" onClick={() => this.props.mainSlide(-1)}>backMain</button>
            <button className="main-forward" onClick={() => this.props.mainSlide(1)}>forwardMain</button>
          </div>
          <button className="expand-button" onClick={() => this.props.handleExpand()}>expand</button>

        </div>
      )
    } else if (this.props.info.expanded) {
      let index = this.props.info.mainIndex;
      console.log('expanede')

      return (
        <div class="expaned-image-gallery">
          <ExpandedView mainPic={this.props.currentStyle.photos[index].url} />
          <div class="expanded-slider">
            <button class="expanded-backward" onClick={() => this.props.mainSlide(-1)}>back</button>
            <button class="expanded-forward" onClick={() => this.props.mainSlide(1)}>forward</button>
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