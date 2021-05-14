import React from 'react';
import * as style from './about.module.css'
import Header from '../components/header';
import Footer from "../components/footer";
const About  = () => {
  return <div>
      <Header></Header>
  <div className={style.secondaryHeader}>
      <h2>About Us</h2>
  </div>
  
  
  <Footer></Footer>
  </div>;
};
export default About