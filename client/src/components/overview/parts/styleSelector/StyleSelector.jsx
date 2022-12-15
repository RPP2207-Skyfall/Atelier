import React from 'react';

function StyleSelector(props) {


  console.log(props);


  if (props.styles.results) {

    return (
      <div className="style-container">

        <div className="style-name">Style > {props.currentStyle.name}</div>

        <div className="styles-holder">
          {
                props.styles.results.map((style, i) => {

                  console.log('style in selector: ', style)
                  if (style.style_id === props.currentStyle.style_id) {
                    return (
                      <div key={i} className="current-style-selected" onClick={() => props.updateStyle(style)}>
                        <img className="style-image-selected" src={style.photos[0].thumbnail_url} key={i} />
                      </div>
                    )
                  } else {
                    return (
                      <div key={i} className="current-style" onClick={() => props.updateStyle(style)}>
                        <img className="style-image" src={style.photos[0].thumbnail_url} key={i} />
                      </div>
                    )
                  }
                })
          }
        </div>

      </div>
    )

  } else {
    return null;
  }
}

export default StyleSelector;