import React, { useState, useEffect } from 'react';
import DefaultView from './views/DefaultView.jsx';
import ExpandedView from './views/ExpandedView.jsx';
import Thumbnail from './Thumbnails.jsx';
import ZoomBox from './views/ZoomBox.jsx';
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

    console.log('expanded', this.props)

    if (this.props.zoomBox) {
      return (
        <div className="expanded-again-image-gallery">
          <ZoomBox />
        </div>
      )

    }

    if (this.props.info.styles.length !== 0 && !this.props.info.expanded ) {

      let index = this.props.info.mainIndex;

      if (index === 0) {
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
              {/* <button className="main-backward" onClick={() => this.handleClick(-1)}>←</button> */}
              <button className="main-forward" onClick={() => this.handleClick(1)}>→</button>
            </div>
            {/* <button className="expand-button" onClick={() => this.props.handleExpand()}>expand</button> */}

          </div>
        )
      } else if (index === this.props.info.amount - 1) {
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
              {/* <button className="main-forward" onClick={() => this.handleClick(1)}>→</button> */}
            </div>
            {/* <button className="expand-button" onClick={() => this.props.handleExpand()}>expand</button> */}

          </div>
        )
      } else {
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
      }

    } else if (this.props.info.expanded) {
      let index = this.props.info.mainIndex;
      // console.log('expanede')

      return (
        <div className="expanded-image-gallery">
          <ExpandedView mainPic={this.props.currentStyle.photos[index].url} expand={this.props.handleExpand}/>
          <Thumbnail
            info={this.props.info} index={index} updateMainPic={this.props.updateMainPic}
            images={this.props.currentStyle.photos} section={this.props.thumbnailSection} updateThumbnailSection={this.props.updateThumbnailSection}
            checkThumb={this.props.checkThumb}
            thumbnailSection={this.props.thumbnailSection}
          />
          <div className="expanded-slider">
            <button className="expanded-backward" onClick={() => this.props.mainSlide(-1)}>back</button>
            <button className="expanded-forward" onClick={() => this.props.mainSlide(1)}>forward</button>
          </div>
          <button onClick={() => this.props.handleExpand()}>default</button>
          <button className="zoom-btn" onClick={() => this.props.zoom()}>ZOOM</button>
        </div>
      )
    }
    else {

      return null;
    }
  }

}


export default ImageGallery;