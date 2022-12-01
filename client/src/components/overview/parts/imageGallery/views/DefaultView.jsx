import React, { useState, useEffect } from 'react';

function DefaultView ({ expand }) {

  return (
    <div id="default-view">
      <h1>Default View</h1>

        <div id="sample-images">
          <div id="sample">image sample</div>
          <div id="sample">image sample</div>
          <div id="sample">image sample</div>
          <div id="sample">image sample</div>
        </div>

      <div id="slider">Slider</div>

    </div>
  )
}

export default DefaultView;