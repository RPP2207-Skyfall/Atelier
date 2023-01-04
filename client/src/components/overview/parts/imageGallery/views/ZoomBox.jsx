import React, { useState, useEffect, useRef } from 'react';

function ZoomBox(props) {

  const [isPanning, setPanning] = useState(false);
  const [image, setImage] = useState();
  const [position, setPosition] = useState({
    oldX: 700,
    oldY: 500,
    x: 0,
    y: 0,
    z: 1,
  })

  const containerRef = useRef();

  const onLoad = (e) => {
    setImage({
      width: e.target.naturalWidth,
      height: e.target.naturalHeight,
    });
  };

  const onMouseDown = (e) => {
    e.preventDefault();
    setPanning(true);
    setPosition({
      ...position,
      oldX: e.clientX,
      oldY: e.clientY
    });
  };

  // const onWheel = (e) => {
  //   if (e.deltaY) {
  //     const sign = Math.sign(e.deltaY) / 10;
  //     const scale = 1 - sign;
  //     const rect = containerRef.current.getBoundingClientRect();
  //     setPosition({
  //       ...position,
  //       x: position.x * scale - (rect.width / 2 - e.clientX + rect.x) * sign,
  //       y: position.y * scale - (image.height * rect.width / image.width / 2 - e.clientY + rect.y) * sign,
  //       z: position.z * scale,
  //     });
  //   }
  // };


  useEffect(() => {
    const mouseup = () => {
      setPanning(false);
    };

    setPanning(true)

    const rect = containerRef.current.getBoundingClientRect();

    // console.log('rect', rect)


    const mousemove = (event) => {
      if (isPanning) {
        if (event.clientX < rect.width && event.clientX > rect.x && event.clientY > rect.y && event.clientY < rect.height) {
          setPosition({
            ...position,
            // x: position.x + event.clientX - position.oldX,
            // y: position.y + event.clientY - position.oldY,
            // oldX: event.clientX,
            // oldY: event.clientY,
            x: position.x - event.clientX + position.oldX,
            y: position.y - event.clientY + position.oldY,
            oldX: event.clientX,
            oldY: event.clientY,
          });
        }

      }
    };


    window.addEventListener('mouseup', mouseup);
    window.addEventListener('mousemove', mousemove);

    return () => {
      window.removeEventListener('mouseup', mouseup)
      window.removeEventListener('mousemove', mousemove)
    }

  })

  return (
    <div className="zoom-box-container" data-testid='zoom-box-test'
      ref={containerRef}
      onMouseDown={onMouseDown}
    // onWheel={onWheel}
    >
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${position.z})`,
        }}
      >

        <img className='zoom-box-img' loading="lazy" id="myimage" src={props.mainPic}
          onLoad={onLoad}
          alt="style" />
      </div>

    </div>
  )
}

export default ZoomBox;