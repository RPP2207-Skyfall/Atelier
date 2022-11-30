import React, {useState, useEffect } from 'react';
import DefaultView from './views/DefaultView.jsx';
import ExpandedView from './views/ExpandedView.jsx';
import Thumbnail from './Thumbnails.jsx';

// import dotenv from 'dotenv';


class ImageGallery extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
      images: []
    }
    this.getImages = this.getImages.bind(this);
  }

  getImages() {

    let url = process.env.REACT_APP_API_KEY;
    console.log(url)


      //  fetch (process.env.API_KEY,
      //   {
      //     method: "GET",
      //     headers:
      //       {
      //         Authorization: process.env.TOKEN
      //       }
      //   }
      // )
      // .then(res => res.json())
      // .then((data) => {
      //   console.log(data);
      // })
      // .catch((err) => {
      //   console.error(err);
      // })
  }

  componentDidMount() {
    this.getImages();
  }

  render() {
    if (this.state.expanded === false) {
      return (
        <div id="image-gallery">
          <h3>ImageGallery</h3>
          <DefaultView />
          <Thumbnail />
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