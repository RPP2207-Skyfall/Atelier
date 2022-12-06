import React from 'react';

function StyleSelector(props) {


  if (props.styles.results) {

    return (
      <div id="style-selector">

        <h3>Style Selector</h3>
        <div id="style-name">Style > {props.currentStyle.name}</div>

        {
              props.styles.results.map((style) => {

                return (
                  <div id="current-style" onClick={() => props.updateStyle(style)}>
                    <img src={style.photos[0].thumbnail_url} />
                  </div>
                )
              })
        }
      </div>
    )

  } else {
    return null;
  }
}

export default StyleSelector;