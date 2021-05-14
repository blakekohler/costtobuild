import React from 'react';
import * as style from "./header.module.css"
import logo from '../images/logo-yellow.png';

const Header  = () => {
  return <div className={style.topNav}>
      <div className={style.grayHeader}>
          Powered by Crookston Custom Designs
          <a href="https://www.crookstondesigns.com/" className={style.yellowCallOut}>View Our Plans</a>
      </div>
      <div className={style.navRow}>
      <a href="/"><img className={style.logo} src={logo}/></a>
<nav className={style.nav}>
    <ul>
        <li><a>Calculators</a></li>
        <li><a>Plans</a></li>
        <li><a>About Us</a></li>
        <li><a>Sign In</a></li>
    </ul>
</nav>
      </div>

</div>;
};
export default Header