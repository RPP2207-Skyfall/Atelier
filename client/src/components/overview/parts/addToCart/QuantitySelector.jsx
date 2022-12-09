import React, { useState } from 'react';

function QuantitySelector(props) {


  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };



  if (props.selected && !open) {
    console.log(props.quant)
    // first state: closed
    return (
      <div className="quantity-selector" onClick={handleOpen}>
        <p className="quantity-number">1</p>
        <div className="quantity-dropdown-arrow">↓</div>
      </div>
    )
  } else if (props.selected && open) {

      // return (
      //   <div className="quantity-selector-open">
      //     {
      //       props.quant.map((item, i) => {
      //         return (
      //           <div className="quantity-option">
      //             <p>{i}</p>
      //           </div>
      //         )
      //       })
      //     }
      //   </div>
      // )

      return null;
  }

}

export default QuantitySelector;