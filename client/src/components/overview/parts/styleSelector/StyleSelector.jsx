import React from 'react';

function StyleSelector(props) {


  // console.log(props);


  if (props.styles.results) {

    return (
      <div className="style-container">

        <h3>Style Selector</h3>
        <div className="style-name">Style > {props.currentStyle.name}</div>

        <div className="styles-holder">
          {
                props.styles.results.map((style, i) => {

                  return (
                    <div key={i} className="current-style" onClick={() => props.updateStyle(style)}>
                      <img className="style-image" src={style.photos[0].thumbnail_url} key={i} />
                    </div>
                  )
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