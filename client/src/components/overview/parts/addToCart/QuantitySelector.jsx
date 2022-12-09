import React, { useState } from 'react';

function QuantitySelector(props) {


  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleQuantSelect = (quant) => {
    setOpen(!open);
    props.selectQuant(quant)
  }

  console.log('props in qunatSelect', props)

  if (props.selected && !open && props.selectedQuant === 1) {
    // console.log(props.quant)
    // first state: closed
    return (
      <div className="quantity-selector" onClick={handleOpen}>
        <p className="quantity-number">1</p>
        <div className="quantity-dropdown-arrow">↓</div>
      </div>
    )
  } else if (props.selected && open) {

      return (
        <div className="quantity-selector-open">
          {
            Array.from({length: props.quant}, (item, i) => {
              return (
                <div key={i} className="quantity-option" onClick={() => handleQuantSelect(i)}>
                  <p>{i}</p>
                </div>
              )
            })
          }
        </div>
      )

  } else if (!open && props.selected && props.selectedQuant > 0) {
    return (
      <div className="quantity-selector" onClick={handleOpen}>
        <p className="quantity-number">{props.selectedQuant}</p>
        <div className="quantity-dropdown-arrow">↓</div>
      </div>
    )
  }

  else {
    return (
      <div className="quantity-selector" onClick={handleOpen}>
        <p className="quantity-number">error</p>
        <div className="quantity-dropdown-arrow">↓</div>
      </div>
    )
  }

}

export default QuantitySelector;