import React from 'react';
import * as style from './footer.module.css'
import logo from '../images/logo-yellow.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'



const Footer  = () => { 
  return <div className={style.footer} >
      <div className={style.newsLetterRow}>
          <div className={style.newsLetterInfo}>
          <h2 className={style.subscribeHeader}>Subscribe to our Newsletter</h2>
<div className={style.newsLetterDescription}>Never Miss Anything From CostToBuild By Signing Up To Our Newsletter.
</div>
          </div>
          <div className={style.newsLetterForm}>
              <input className={style.newsletterInput} placeholder="Enter Your Email"></input><div className={style.submitButton}> <FontAwesomeIcon icon={faPaperPlane} /></div>
          </div>

      </div>


      <div className={style.footerMainRow}>
          <div className={style.logoColumn}>
              <img className={style.logo} src={logo} />
              <div className={style.tagLine}>Easily determine the cost to build a new home or garage</div>
              <div className={style.socials}></div>
          </div>
          <div className={style.contactUsColumn}>
              <h2 className={style.contactUsHeader}>Contact Us</h2>
              <div className={style.address}>333 Logan Street, North Logan, Utah 84321</div>
              <div className={style.phone}> 323.233.2342</div>
              <div className={style.email}>build@costtobuild.met</div>
          </div>

          <div className={style.LinkColumn}>
          <h2 className={style.linkHeader}>Helpful Links</h2>
          <div className={style.linkRow}><a href="/blogList">Blog</a>
          </div>
          </div>
      </div>
<div className={style.copywriteRow}>
© 2021 CostToBuild - Powered by Crookston Custom Designs
</div>


  </div>;
};
export default Footer