import React, { useState, useEffect } from 'react';
import DefaultView from './views/DefaultView.jsx';
import ExpandedView from './views/ExpandedView.jsx';
import Thumbnail from './Thumbnails.jsx';
import axios from 'axios';


class ImageGallery extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(dir) {
    // move the mainSLide direction
    this.props.mainSlide(dir);
    // check to see if we need to update the thumbnail section
    this.props.checkThumbnailSection(dir);
  }


  render() {

    if (this.props.info.styles.length !== 0 && !this.props.info.expanded ) {

      // console.log(this.props)

      let index = this.props.info.mainIndex;


      return (
        <div className="default-image-gallery">
          <DefaultView  mainPic={this.props.currentStyle.photos[index].url} expand={this.props.handleExpand}/>
          <Thumbnail
            info={this.props.info} index={index} updateMainPic={this.props.updateMainPic}
            images={this.props.currentStyle.photos} section={this.props.thumbnailSection} updateThumbnailSection={this.props.updateThumbnailSection}
            checkThumb={this.props.checkThumb}
            thumbnailSection={this.props.thumbnailSection}
          />
          <div className="main-slider">
            <button className="main-backward" onClick={() => this.handleClick(-1)}>←</button>
            <button className="main-forward" onClick={() => this.handleClick(1)}>→</button>
          </div>
          {/* <button className="expand-button" onClick={() => this.props.handleExpand()}>expand</button> */}

        </div>
      )
    } else if (this.props.info.expanded) {
      let index = this.props.info.mainIndex;
      // console.log('expanede')

      return (
        <div class="expaned-image-gallery">
          <ExpandedView mainPic={this.props.currentStyle.photos[index].url} expand={this.props.handleExpand}/>
          <Thumbnail index={index} updateMainPic={this.props.updateMainPic} images={this.props.currentStyle.photos} section={this.props.thumbnailSection} updateThumbnail={this.props.updateThumbnail} />
          <div class="expanded-slider">
            <button class="expanded-backward" onClick={() => this.props.mainSlide(-1)}>back</button>
            <button class="expanded-forward" onClick={() => this.props.mainSlide(1)}>forward</button>
          </div>
          <button onClick={() => this.props.handleExpand()}>default</button>
        </div>
      )
    } else {

      return null;
    }
  }

}


export default ImageGallery;