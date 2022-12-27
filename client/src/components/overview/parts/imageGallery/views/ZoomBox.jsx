import React, {useState, useEffect } from 'react';

function ZoomBox(props) {

  // const magnify = function(imgID, zoom) {
  //   var img, glass, w, h, bw;
  //   img = document.getElementById(imgID);

  //   /* Create magnifier glass: */
  //   glass = document.createElement("DIV");
  //   glass.setAttribute("class", "img-magnifier-glass");

  //   /* Insert magnifier glass: */
  //   img.parentElement.insertBefore(glass, img);

  //   /* Set background properties for the magnifier glass: */
  //   glass.style.backgroundImage = "url('" + img.src + "')";
  //   glass.style.backgroundRepeat = "no-repeat";
  //   glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  //   bw = 3;
  //   w = glass.offsetWidth / 2;
  //   h = glass.offsetHeight / 2;

  //   /* Execute a function when someone moves the magnifier glass over the image: */
  //   glass.addEventListener("mousemove", moveMagnifier);
  //   img.addEventListener("mousemove", moveMagnifier);

  //   /*and also for touch screens:*/
  //   glass.addEventListener("touchmove", moveMagnifier);
  //   img.addEventListener("touchmove", moveMagnifier);
  //   function moveMagnifier(e) {
  //     var pos, x, y;
  //     /* Prevent any other actions that may occur when moving over the image */
  //     e.preventDefault();
  //     /* Get the cursor's x and y positions: */
  //     pos = getCursorPos(e);
  //     x = pos.x;
  //     y = pos.y;
  //     /* Prevent the magnifier glass from being positioned outside the image: */
  //     if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
  //     if (x < w / zoom) {x = w / zoom;}
  //     if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
  //     if (y < h / zoom) {y = h / zoom;}
  //     /* Set the position of the magnifier glass: */
  //     glass.style.left = (x - w) + "px";
  //     glass.style.top = (y - h) + "px";
  //     /* Display what the magnifier glass "sees": */
  //     glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  //   }

  //   const getCursorPos = function (e) {
  //     var a, x = 0, y = 0;
  //     e = e || window.event;
  //     /* Get the x and y positions of the image: */
  //     a = img.getBoundingClientRect();
  //     /* Calculate the cursor's x and y coordinates, relative to the image: */
  //     x = e.pageX - a.left;
  //     y = e.pageY - a.top;
  //     /* Consider any page scrolling: */
  //     x = x - window.pageXOffset;
  //     y = y - window.pageYOffset;
  //     return {x : x, y : y};
  //   }
  // }

//   const halfHeight = zoom-box-img.offsetHeight / 2;
// var interval

// zoom-box-img.addEventListener('mousemove', function(e) {
//   const relativeY = e.clientY - zoom-box-img.getBoundingClientRect().top;
//   clearInterval(interval)
//   interval = setInterval(() => zoom-box-img.scrollTop += relativeY > halfHeight ? 10 : -10, 100)
// })

// zoom-box-img.addEventListener('mouseleave', () => {
//   clearInterval(interval)
// })

  // console.log('props in ZOOM', props)

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   magnify("myimage", 3)
  // });

  const getCursorPos = (img) =>{
      // var a, x = 0, y = 0;
      // let e = window.event;
      // /* Get the x and y positions of the image: */
      // a = img.getBoundingClientRect();
      // /* Calculate the cursor's x and y coordinates, relative to the image: */
      // x = e.pageX - a.left;
      // y = e.pageY - a.top;
      // /* Consider any page scrolling: */
      // x = x - window.pageXOffset;
      // y = y - window.pageYOffset;
      // // console.log({x : x, y : y})
      // return {x : x, y : y};
  }

    function moveMagnifier(img) {
      // var pos, x, y;
      // var e = window.event;
      /* Prevent any other actions that may occur when moving over the image */
      // e.preventDefault();
      /* Get the cursor's x and y positions: */
      // pos = getCursorPos(img);

      // console.log(pos);

      // x = pos.x;
      // y = pos.y;
      // /* Prevent the magnifier glass from being positioned outside the image: */
      // if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
      // if (x < w / zoom) {x = w / zoom;}
      // if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
      // if (y < h / zoom) {y = h / zoom;}
      // /* Set the position of the magnifier glass: */
      // glass.style.left = (x - w) + "px";
      // glass.style.top = (y - h) + "px";
      // /* Display what the magnifier glass "sees": */
      // glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }


  const follow = (img) => {

    const image = document.getElementById(img)
    // console.log('img', image)
    let rect = image.getBoundingClientRect(); // DOMRect {x: 105.0625, y: -68.65625, width: 1094.625, height: 859.5, top: -68.65625, …}


    image.addEventListener("mousemove", console.log(getCursorPos(image)))
    // image.addEventListener("mousemove", moveMagnifier(image))

    // console.log('evet', event);

    // console.log(startPos)


    // img.addEventListener("mousemove", getCursorPos)
    // let xPos =
  }


  useEffect(() => {
    follow("myimage");
  })

  return (
    <div className="zoom-box-container" data-testid='zoom-box-test'>
      <img  className='zoom-box-img' id="myimage" src={props.mainPic} alt="style"/>
    </div>
  )
}

export default ZoomBox;