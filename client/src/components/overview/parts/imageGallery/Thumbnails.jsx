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

    if (this.props.images === undefined) {

      return (
        <div>
          Loading
        </div>
      )
    } else {
      return (

        <div>

          {
            this.props.images[this.state.imageSection].map((image) => {
              return (
                <div>
                  <img src={image.thumbnail_url} onClick={() => this.handleClick(image, image.index)}/>
                </div>
              )
            })
          }

          <button onClick={() => this.slider(-1)}>backward</button>
          <button onClick={() => this.slider(1)}>forward</button>
        </div>

      )
    }

  }
}

export default Thumbnail;