import React from 'react';

class Thumbnail extends React.Component {
  constructor(props) {
    super(props)

  }


  handleClick(target, index) {

    this.props.updateMainPic(target, index);

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

            this.props.images.map((style, index) => {
              if (index > 3) {
                return
              }
              return (
                <div>
                  <img src={style.thumbnail_url} onClick={() => this.handleClick(style, index)}/>
                </div>
              )
            })

          }

          <button>forward</button>
          <button>backward</button>
        </div>

      )
    }

  }
}

export default Thumbnail;