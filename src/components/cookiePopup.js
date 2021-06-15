import React, { useState, useEffect } from 'react'
import style from "./cookiePopup.module.css"

const CookiePopup  = () => {
    const [hide, setHide] = useState(true);
    const handleClose = () => {
      localStorage.setItem("cookieAgree", true);
      setHide(true);
    }
    useEffect(() => {
      if (localStorage.getItem("cookieAgree") == true) {
        setHide(true)
      }
      else{
        setHide(false)
      }
    }, [])
    return (
      <>
     <div className={style.modalbackground} style={{ display: hide ? 'none' : 'flex'  }}>
       <div className={style.modalContent}>
       This website uses cookies in order to offer you the most relevant information. Please accept cookies for optimal performance.
       <a className={style.decline} href="https://www.google.com">Decline</a>  <div className={style.accept} onClick={handleClose} href="">Accept</div>
       </div>
     </div>
      </>
    );
};
export default CookiePopup