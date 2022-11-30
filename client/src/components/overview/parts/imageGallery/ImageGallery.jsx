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
      current: []
    }
    this.getImages = this.getImages.bind(this);
    this.updateMainPic = this.updateMainPic.bind(this);
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
          current: data.results[0].photos[0]
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
          <Thumbnail updateMainPic={this.updateMainPic} images={this.state.styles.results[0].photos} />
          <button onClick={() => this.setState({expanded: true})}>expand</button>
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