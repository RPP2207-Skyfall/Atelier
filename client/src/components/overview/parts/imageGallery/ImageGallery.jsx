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

  handleClick(dir, clickData) {
    // move the mainSLide direction
    this.props.mainSlide(dir);
    // check to see if we need to update the thumbnail section
    this.props.checkThumbnailSection(dir);

    // track the clicks

    this.props.clickTracker(clickData)
  }


  render() {

    // console.log('propsimaggw gal', this.props.currentStyle.photos[this.props.info.mainIndex].url)

    if (this.props.zoomBox) {
      let index = this.props.info.mainIndex;
      return (
        <div className="expanded-again-image-gallery">
          <ZoomBox mainPic={this.props.currentStyle.photos[index].url}/>
        </div>
      )

    }

    if (this.props.info.styles.length !== 0 && !this.props.info.expanded ) {

      let index = this.props.info.mainIndex;

      // console.log('1')

      if (index === 0) {
        return (
          <div className="default-image-gallery" data-testid="image-gallery-test">

            <DefaultView  mainPic={this.props.currentStyle.photos[index].url} expand={this.props.handleExpand}  />
            <Thumbnail
              info={this.props.info} currentThumbnails={this.props.currentThumbnails} index={index} updateMainPic={this.props.updateMainPic}
              images={this.props.currentStyle.photos} section={this.props.thumbnailSection} updateThumbnailSection={this.props.updateThumbnailSection}
              checkThumb={this.props.checkThumb}
              thumbnailSection={this.props.thumbnailSection}
            />
            <div className="main-slider">
              {/* <button className="main-backward" onClick={() => this.handleClick(-1)}>←</button> */}
              <button className="main-forward" onClick={() => this.handleClick(1, {elem: 'main-forward', time: Date.now()})}>→</button>
            </div>
            {/* <button className="expand-button" onClick={() => this.props.handleExpand()}>expand</button> */}

          </div>
        )
      } else if (index === this.props.info.amount - 1) {
        return (
          <div className="default-image-gallery" data-testid="image-gallery-end-index">

            <DefaultView  mainPic={this.props.currentStyle.photos[index].url} expand={this.props.handleExpand} />
            <Thumbnail
              info={this.props.info} index={index} currentThumbnails={this.props.currentThumbnails} updateMainPic={this.props.updateMainPic}
              images={this.props.currentStyle.photos} section={this.props.thumbnailSection} updateThumbnailSection={this.props.updateThumbnailSection}
              checkThumb={this.props.checkThumb}
              thumbnailSection={this.props.thumbnailSection}
            />
            <div className="main-slider">
              <button className="main-backward" onClick={() => this.handleClick(-1, {elem: 'main-backward', time: Date.now()})}>←</button>
              {/* <button className="main-forward" onClick={() => this.handleClick(1)}>→</button> */}
            </div>
            {/* <button className="expand-button" onClick={() => this.props.handleExpand()}>expand</button> */}

          </div>
        )
      } else {
        return (
          <div className="default-image-gallery" data-testid="image-gallery-between-index">

            <DefaultView  mainPic={this.props.currentStyle.photos[index].url} expand={this.props.handleExpand} />
            <Thumbnail
              info={this.props.info} index={index}  currentThumbnails={this.props.currentThumbnails} updateMainPic={this.props.updateMainPic}
              images={this.props.currentStyle.photos} section={this.props.thumbnailSection} updateThumbnailSection={this.props.updateThumbnailSection}
              checkThumb={this.props.checkThumb}
              thumbnailSection={this.props.thumbnailSection}
            />
            <div className="main-slider">
              <button className="main-backward" onClick={() => this.handleClick(-1, {elem: 'main-backward', time: Date.now()})}>←</button>
              <button className="main-forward" onClick={() => this.handleClick(1, {elem: 'main-forward', time: Date.now()})}>→</button>
            </div>
            {/* <button className="expand-button" onClick={() => this.props.handleExpand()}>expand</button> */}

          </div>
        )
      }

    } else if (this.props.info.expanded) {
      let index = this.props.info.mainIndex;
      // console.log('expanede')

      if (index === 0) {
        return (
          <div className="expanded-image-gallery" data-testid='image-gallery-expanded-test'>
            <ExpandedView mainPic={this.props.currentStyle.photos[index].url} expand={this.props.handleExpand}/>
            <Thumbnail
              info={this.props.info} index={index} updateMainPic={this.props.updateMainPic}
              images={this.props.currentStyle.photos} section={this.props.thumbnailSection} updateThumbnailSection={this.props.updateThumbnailSection}
              checkThumb={this.props.checkThumb}
              thumbnailSection={this.props.thumbnailSection}
            />
            <div className="expanded-slider">

              <button className="expanded-backward" onClick={() => this.props.mainSlide(-1, {elem: 'expanded-backward', time: Date.now()})}>back</button>
              <button className="expanded-forward" onClick={() => this.props.mainSlide(1, {elem: 'expanded-forward', time: Date.now()})}>forward</button>
            </div>
            {/* <button onClick={() => this.props.handleExpand({elem: "current-style-selected", time: Date.now() })}>default</button> */}
            <button className="zoom-btn" onClick={() => this.props.zoom()}>ZOOM</button>
            <div className="main-slider">
              {/* <button className="main-backward" onClick={() => this.handleClick(-1)}>←</button> */}
              <button className="main-forward" onClick={() => this.handleClick(1, {elem: 'main-forward', time: Date.now()})}>→</button>

            </div>
          </div>
        )
      } else if (index === this.props.info.amount - 1) {
        return (
          <div className="expanded-image-gallery" data-testid='image-gallery-expanded-test'>
            <ExpandedView mainPic={this.props.currentStyle.photos[index].url} expand={this.props.handleExpand}/>
            <Thumbnail
              info={this.props.info} index={index} updateMainPic={this.props.updateMainPic}
              images={this.props.currentStyle.photos} section={this.props.thumbnailSection} updateThumbnailSection={this.props.updateThumbnailSection}
              checkThumb={this.props.checkThumb}
              thumbnailSection={this.props.thumbnailSection}
            />
            <div className="expanded-slider">

              <button className="expanded-backward" onClick={() => this.props.mainSlide(-1, {elem: 'expanded-backward', time: Date.now()})}>back</button>
              <button className="expanded-forward" onClick={() => this.props.mainSlide(1, {elem: 'expanded-forward', time: Date.now()})}>forward</button>
            </div>
            {/* <button onClick={() => this.props.handleExpand({elem: "current-style-selected", time: Date.now() })}>default</button> */}
            <button className="zoom-btn" onClick={() => this.props.zoom()}>ZOOM</button>
            <div className="main-slider">
              <button className="main-backward" onClick={() => this.handleClick(-1, {elem: 'main-backward', time: Date.now()})}>←</button>

              {/* <button className="main-forward" onClick={() => this.handleClick(1)}>→</button> */}
            </div>
          </div>
        )
      } else {
        return (
          <div className="expanded-image-gallery" data-testid='image-gallery-expanded-test'>
            <ExpandedView mainPic={this.props.currentStyle.photos[index].url} expand={this.props.handleExpand}/>
            <Thumbnail
              info={this.props.info} index={index} updateMainPic={this.props.updateMainPic}
              images={this.props.currentStyle.photos} section={this.props.thumbnailSection} updateThumbnailSection={this.props.updateThumbnailSection}
              checkThumb={this.props.checkThumb}
              thumbnailSection={this.props.thumbnailSection}
            />
            <div className="expanded-slider">

              <button className="expanded-backward" onClick={() => this.props.mainSlide(-1, {elem: 'expanded-backward', time: Date.now()})}>back</button>
              <button className="expanded-forward" onClick={() => this.props.mainSlide(1, {elem: 'expanded-forward', time: Date.now()})}>forward</button>
            </div>
            {/* <button onClick={() => this.props.handleExpand({elem: "current-style-selected", time: Date.now() })}>default</button> */}
            <button className="zoom-btn" onClick={() => this.props.zoom()}>ZOOM</button>
            <div className="main-slider">
              <button className="main-backward" onClick={() => this.handleClick(-1, {elem: 'main-backward', time: Date.now()})}>←</button>
              <button className="main-forward" onClick={() => this.handleClick(1, {elem: 'main-forward', time: Date.now()})}>→</button>

            </div>
          </div>
        )
      }


    }
    else {
      <div data-testid="image-gallery-sad-path">
        Please Try Again Later
      </div>

      return null;
    }
  }

}


export default ImageGallery;