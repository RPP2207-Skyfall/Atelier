import React from 'react';

class Thumbnail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentThumbnail: 0
    }

    this.handleClick = this.handleClick.bind(this);
    this.slider = this.slider.bind(this);
    this.addThumbnailInfo = this.addThumbnailInfo.bind(this);

  }

  addThumbnailInfo(boxes) {

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
    }

    let currentSection = this.props.info.currentThumbnails[this.props.thumbnailSection]
    // console.log(this.props)

      // if (this.props.index >= currentSection.length) {
      //   this.props.updateThumbnailSection(1)
      //   console.log(this.props.index)
      // }
      console.log('currentSection', currentSection)

      return (
        <div className="thumbnail-container">
          {
            currentSection.map((image, i) => {


              if (image.index === this.props.index) {
                return (
                  <div className="selected-thumbnail" onClick={() => this.props.updateMainPic(image.index)} key={i}>
                      <img className="thumbnail-image" src={image.thumbnail_url} ></img>
                  </div>
                )
              }
              return (
                <div className="thumbnail" onClick={() => this.props.updateMainPic(image.index)} key={i}>
                    <img className="thumbnail-image" src={image.thumbnail_url} ></img>
                </div>
              )


            })

          }
            <div className="thumbnail-buttons">
              <button className="thumbnail-backwards" onClick={() => this.props.updateThumbnailSection(-1)}>↑</button>
              <button className="thumbnail-forwards" onClick={() => this.props.updateThumbnailSection(1)}>↓</button>
            </div>


        </div>
      )

      return (
        <div>
          there is an issue with this logic
        </div>
      )

    }




}

export default Thumbnail;