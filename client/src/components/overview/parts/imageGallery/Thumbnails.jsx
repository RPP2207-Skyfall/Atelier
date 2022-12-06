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

        if (box.length === 3) {
          holder.push(box);
          box = [];
        }
      }

      let currentSection = holder[this.props.section];

      console.log('props in thumb', this.props)
      return (
        <div>
          {
            currentSection.map((image) => {
              return (
                <div onClick={() => this.props.updateMainPic(image.index)}>
                   <img src={image.thumbnail_url}></img>
                </div>
              )
            })
          }

        </div>
      )

      // return (

      //   console.log(holder)
      //   <div>

      //     {
      //       currentSection.map((image) => {
      //         console.log(image);
      //         return (
      //           <div>
      //             <img id="gallery-thumbnail" src={image.thumbnail_url} onClick={() => this.handleClick(image, image.index)}/>
      //           </div>
      //         )
      //       })
      //     }

      //     <button onClick={() => this.slider(-1)}>backward</button>
      //     <button onClick={() => this.slider(1)}>forward</button>
      //   </div>

      // )

    }

  }
}

export default Thumbnail;