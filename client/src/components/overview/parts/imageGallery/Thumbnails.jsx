import React from 'react';

class Thumbnail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentImage: [],
      images: []
    }

  }


  handleClick(target) {
    let thumbnail = target.thumbnail_url;
    let main = target.url;

    this.setState({
      currentImage: main
    })

    this.props.updateMainPic(target);

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
          {/* <p>{console.log('defined thumbnail', this.props)}</p> */}

          {

            this.props.images.map((style) => {
              return (
                <div>
                  <img src={style.thumbnail_url} onClick={() => this.handleClick(style)}/>
                </div>

              )
            })
          }
        </div>

      )
    }

  }
}

export default Thumbnail;