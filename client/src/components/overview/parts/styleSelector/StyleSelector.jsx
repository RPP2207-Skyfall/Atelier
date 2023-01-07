import React from 'react';
import Tracker from '../../../tracker.js';

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
                  <div key={i} className="current-style-selected" onClick={() => props.updateStyle(style, "current-style-selected", 'overview')}>
                    {/* <FontAwesomeIcon icon="fa-thin fa-circle-check" /> */}
                    <img className="selected-style-icon" src="checkmark.png" alt="checkmark-image"></img>
                    <img className="style-image-selected" alt="style-image-selector-image" src={style.photos[0].thumbnail_url} key={i} />
                  </div>
                )
              } else {
                return (
                  <div key={i} className="current-style" onClick={() => props.updateStyle(style, "current-style-selected", 'overview')}>
                    <img className="style-image" alt="style-image" src={style.photos[0].thumbnail_url} key={i} />
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