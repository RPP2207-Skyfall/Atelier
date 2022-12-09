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
    return (

      <div className="quantity-selector-open" onClick={handleOpen}>
        <p className="quantity-number">thingy is open</p>
        <div className="quantity-dropdown-arrow">↓</div>
      </div>
    )
  }

}

export default QuantitySelector;