import React from 'react';

function StyleSelector(props) {


  // console.log(props);


  if (props.styles.results) {

    return (
      <div className="style-container" data-testid="style-selector-test">

        <div className="style-name">Style > {props.currentStyle.name}</div>

        <div className="styles-holder">
          {
            props.styles.results.map((style, i) => {

              // console.log('style in selector: ', style)
              if (style.style_id === props.currentStyle.style_id) {
                return (
                  <div key={i} className="current-style-selected" onClick={() => props.updateStyle(style)}>
                    {/* <FontAwesomeIcon icon="fa-thin fa-circle-check" /> */}
                    <img className="selected-style-icon" src="checkmark.png" alt="style-icon-selected"></img>
                    <img className="style-image-selected" src={style.photos[0].thumbnail_url} key={i} alt="style-image-selected" />
                  </div>
                )
              } else {
                return (
                  <div key={i} className="current-style" onClick={() => props.updateStyle(style)}>
                    <img className="style-image" src={style.photos[0].thumbnail_url} key={i} alt="style-image" />
                  </div>
                )
              }
            })
          }
        </div>

      </div>
    )

  } else {
    return (
      <div data-testid='style-selector-sad-test'>
        Please check back later
      </div>
    )

    // return null;
  }
}

export default StyleSelector;