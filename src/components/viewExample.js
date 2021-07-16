import React, {useState} from 'react';
import * as style from './viewExample.module.css'

const ViewExample  = ({imgSrc}) => {
    //set modal open state
    const [open, setOpen] = useState(false);
    const openMe = () => setOpen(true);
    const closeMe = () => setOpen(false);
    //Modal to display image
  return <div className={style.viewExample}>
      <button className={style.button} onClick={openMe}>View Example</button>
{open ? <div  className={style.modal}>
          <div className={style.modalContent}>
              <h2>Example Image:</h2>
          <img src={imgSrc} className={style.exampleImg} /> 
          <button className={style.closeButton} onClick={closeMe}>X</button>
          </div>
            
          
          
      </div> : null}
    
  </div>;
};
export default ViewExample