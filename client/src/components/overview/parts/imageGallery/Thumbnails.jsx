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

    // console.log('props in thumbnauk', this.props)

    if (!this.props.images || this.props.images.length === 0 || !this.props.info.currentThumbnails) {
      console.log('error is thumbnails')
      console.log(this.props)
      return (
        <div>
          Loading
        </div>
      )
    }

    let currentSection = this.props.info.currentThumbnails[this.props.thumbnailSection]

    // console.log('thumbnails', this.props)

    if (this.props.info.expanded) {
      return (
        <div className="thumbnail-container" data-testid='thumbnail-test'>
          {
            currentSection.map((image, i) => {


              if (image.index === this.props.index) {
                return (
<<<<<<< HEAD
                  <div className="selected-icon" onClick={() => this.props.updateMainPic(image.index)} key={i}>
                    <img className="icon-image" loading="lazy" src={image.thumbnail_url} ></img>
=======
                  <div className="selected-icon" onClick={() => this.props.updateMainPic(image.index, 'selected-icon', 'overview')} key={i}>
                      <img className="icon-image" src={image.thumbnail_url} ></img>
>>>>>>> master
                  </div>
                )
              }
              return (
<<<<<<< HEAD
                <div className="icon" onClick={() => this.props.updateMainPic(image.index)} key={i}>
                  <img className="icon-image" loading="lazy" src={image.thumbnail_url} ></img>
=======
                <div className="icon" onClick={() => this.props.updateMainPic(image.index, 'icon', 'overview')} key={i}>
                    <img className="icon-image" src={image.thumbnail_url} ></img>
>>>>>>> master
                </div>
              )


            })

          }
<<<<<<< HEAD
          <div className="thumbnail-buttons">
            <button className="thumbnail-backwards" loading="lazy" onClick={() => this.props.updateThumbnailSection(-1)}>↑</button>
            <button className="thumbnail-forwards" loading="lazy" onClick={() => this.props.updateThumbnailSection(1)}>↓</button>
          </div>
=======
            <div className="thumbnail-buttons">
              <button className="thumbnail-backwards" onClick={() => this.props.updateThumbnailSection(-1, "thumbnail-backwards", 'overview')}>↑</button>
              <button className="thumbnail-forwards" onClick={() => this.props.updateThumbnailSection(1, "thumbnail-forwards", 'overview')}>↓</button>
            </div>
>>>>>>> master


        </div>
      )
    }


    if (this.props.info.expanded) {
      return (
        <div className="thumbnail-container" data-testid='thumbnail-test'>
          {
            currentSection.map((image, i) => {


              if (image.index === this.props.index) {
                return (
<<<<<<< HEAD
                  <div className="selected-icon" onClick={() => this.props.updateMainPic(image.index)} key={i}>
                    <img className="icon-image" loading="lazy" src={image.thumbnail_url} alt="icon-image"></img>
=======
                  <div className="selected-icon" onClick={() => this.props.updateMainPic(image.index, 'selected-icon', 'overview')} key={i}>
                    <img className="icon-image" src={image.thumbnail_url} alt="icon-image"></img>
>>>>>>> master
                  </div>
                )
              }
              return (
<<<<<<< HEAD
                <div className="icon" onClick={() => this.props.updateMainPic(image.index)} key={i}>
                  <img className="icon-image" loading="lazy" src={image.thumbnail_url} alt="icon-image"></img>
=======
                <div className="icon" onClick={() => this.props.updateMainPic(image.index, 'icon', 'overview')} key={i}>
                  <img className="icon-image" src={image.thumbnail_url} alt="icon-image"
                  width="50"
                  height="50"
                   ></img>
>>>>>>> master
                </div>
              )


            })

          }
          <div className="thumbnail-buttons">
            <button className="thumbnail-backwards" onClick={() => this.props.updateThumbnailSection(-1, "thumbnail-backwards", 'overview')}>↑</button>
            <button className="thumbnail-forwards" onClick={() => this.props.updateThumbnailSection(1, "thumbnail-forwards", 'overview')}>↓</button>
          </div>


        </div>
      )
    }

    return (
      <div className="thumbnail-container" data-testid='thumbnail-test'>
        {
          currentSection.map((image, i) => {


            if (image.index === this.props.index) {
              return (
<<<<<<< HEAD
                <div className="selected-thumbnail" onClick={() => this.props.updateMainPic(image.index)} key={i}>
                  <img className="thumbnail-image" loading="lazy" src={image.thumbnail_url} alt="thumbnail-image"></img>
=======
                <div className="selected-thumbnail" onClick={() => this.props.updateMainPic(image.index, 'selected-thumbnail', 'overview')} key={i}>
                  <img className="thumbnail-image" src={image.thumbnail_url} alt="thumbnail-image"
                    width="50"
                    height="50"
                  ></img>
>>>>>>> master
                </div>
              )
            }
            return (
<<<<<<< HEAD
              <div className="thumbnail" onClick={() => this.props.updateMainPic(image.index)} key={i}>
                <img className="thumbnail-image" loading="lazy" src={image.thumbnail_url} alt="thumbnail-image"></img>
=======
              <div className="thumbnail" onClick={() => this.props.updateMainPic(image.index, 'thumbnail', 'overview')} key={i}>
                <img className="thumbnail-image" src={image.thumbnail_url} alt="thumbnail-image"
                  width="50"
                  height="50"
                ></img>
>>>>>>> master
              </div>
            )


          })

        }
        <div className="thumbnail-buttons">
          <button className="thumbnail-backwards" onClick={() => this.props.updateThumbnailSection(-1, "thumbnail-backwards", 'overview')}>↑</button>
          <button className="thumbnail-forwards" onClick={() => this.props.updateThumbnailSection(1, "thumbnail-forwards", 'overview')}>↓</button>
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