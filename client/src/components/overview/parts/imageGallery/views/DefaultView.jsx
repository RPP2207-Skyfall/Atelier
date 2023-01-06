import React, { useState, useEffect } from 'react';
import Thumbnail from '../Thumbnails.jsx';


function DefaultView(props) {

  // if the main image thumbnail is currently in the second box of thumbnails,
  // then update the section to the next section

  // console.log('props in default view', props)

  if (!props.mainPic) {
    console.log('no main pic, just loading thing')

      return (
        <div className="default-view">
          {/* <h1>Default View</h1> */}
          <img className="default-image"
          src=
"https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt="style"
          width="400"
          height="400"
    onClick={() => props.expand('default-image', 'overview')}/>
        </div>
      )

  }

  if (props.mainPic.length === 0) {
    return (
      <div>
        loading
      </div>
    )
  } else {

    return (
      <div className="default-view" data-testid="default-view-test">
        {/* <h1>Default View</h1> */}

        <img className="default-image"
        src={props.mainPic}
                  // src=
                  // "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        alt="style"
        width="400"
        height="400"
        onClick={() => props.expand('default-image', 'overview')}/>

      </div>
    )
  }


}

export default DefaultView;