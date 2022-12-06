import React from 'react';

class Thumbnail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imageSection: 0
    }

    this.handleClick = this.handleClick.bind(this);
    this.slider = this.slider.bind(this);

  }


  handleClick(target, index) {
    this.props.updateMainPic(target, index);
  }

  slider(dir) {
    if (this.state.imageSection === 0 && dir === -1) {
      return;
    }
    if (this.state.imageSection === 1 && dir === 1) {
      return;
    }

    this.setState({
      imageSection: this.state.imageSection + dir
    })
  }

  render() {

    if (this.props.images.length === 0) {

      return (
        <div>
          Loading
        </div>
      )
    } else {

      let holder = [];
      let box = [];

      let imageData = this.props.images;


      for (var i = 0; i < imageData.length; i++) {
        imageData[i].index = i
        box.push(imageData[i]);

        if (box.length === 7) {
          holder.push(box);
          box = [];
        } else if (i === imageData.length - 1) {
          holder.push(box);
          box = [];
        }
      }

      let currentSection = holder[this.props.section];

      return (
        <div className="thumbnail-container">
          {
            currentSection.map((image, i) => {
              return (
                <div className="thumbnail" onClick={() => this.props.updateMainPic(image.index)} key={i}>
                   <img className="thumbnail-image" src={image.thumbnail_url} ></img>
                </div>
              )
            })
          }
          <div className="thumbnail-buttons">
            <button onClick={() => this.props.updateThumbnail(-1)}>backward thumb</button>
            <button onClick={() => this.props.updateThumbnail(1)}>forward thumb</button>
          </div>


        </div>
      )

    }

  }
}

export default Thumbnail;