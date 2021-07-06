import React from 'react';
import * as style from './calc.module.css'
import Header from '../components/header';
import Footer from "../components/footer";


const Calc  = () => {


  
  return <div>
  <title>House Calculator | Cost To Build</title>
  <Header></Header>
  <div className={style.secondaryHeader}>
      <h2>Home Cost Estimator</h2>
  </div>



  <div className={style.calcHolder}>
  
    <div className={style.breadcrumbs}>
      <li className={ `${style.breadcrumb} ${style.active}` }> Main Floor</li>
      <li className={style.breadcrumb}>General</li>
      <li className={style.breadcrumb}>Basement</li>
      <li className={style.breadcrumb}> Garage</li>
      <li className={style.breadcrumb}>Upper Floors</li>
      <li className={style.breadcrumb}> Kitchens</li>
      <li className={style.breadcrumb}> Bathrooms</li>
      <li className={style.breadcrumb}> Finishes</li>
      <li className={style.breadcrumb}>Other</li>
      <li className={style.breadcrumb}> Location</li>
      <li className={style.breadcrumb}> Summary</li>
    </div>
    <div className={style.intro}>Answer the questions to get a detailed cost summary for a new home.</div>
<h1 className={style.calcSectionTitle}>Main Floor Information</h1>
<div className={style.subSection}>
<h2 className={style.calcSubTitle}>Main Floor Living Area:</h2>
<div className={style.explainerText}>Enter the square footage of the living area on the main floor. The living area does not include areas such as garages, porches or decks.</div>
<div className={style.inputRow}>
<div className={style.inputs}>
<input className={style.numbInput} type="number"/> <strong>sf</strong> 
</div><a className={style.example}>View Example</a>
</div>

</div>

<div className={style.subSection}>
<h2 className={style.calcSubTitle}>Main floor ceiling height:</h2>
<div className={style.explainerText}>Enter the main floor ceiling height. This is the distance in feet from the floor to the ceiling. The standard ceiling height is 8 feet, but they are often upgraded to 9' or 10'.</div>

<div className={style.inputRow}>
  <div className={style.inputs}>
<input className={style.radioInput} type="radio" id="8ft" name="ri1" value="8"/>
<label  className={style.radioLabel} for="8ft">8ft</label>
<input className={style.radioInput} type="radio" id="9ft" name="ri1" value="9"/>
<label className={style.radioLabel}  for="9ft">9ft</label>
<input  className={style.radioInput}type="radio" id="10ft" name="ri1" value="10"/>
<label className={style.radioLabel}  for="10ft">10ft</label>
<input className={style.radioInput} type="radio" id="11ft" name="ri1" value="11"/>
<label className={style.radioLabel}  for="11ft">11ft</label>
<input className={style.radioInput} type="radio" id="12ft" name="ri1" value="12"/>
<label className={style.radioLabel} for="12ft">12ft</label>
</div>
<a className={style.example}>View Example</a>
</div>
</div>

<div className={style.subSection}>
<h2 className={style.calcSubTitle}>Slab on grade</h2>
<div className={style.explainerText}>Will this be a slab on grade home? If you select "No" the program will calculate your home assuming it will have a crawl space or a basement. Slab on grade will calculate your main floor as concrete.</div>

<div className={style.inputRow}>
  <div className={style.inputs}>
<input className={style.radioInput} type="radio" id="8ft" name="ri2" value="yes"/>
<label  className={style.radioLabel} for="8ft">Yes </label>
<input className={style.radioInput} type="radio" id="9ft" name="ri2" value="no"/>
<label className={style.radioLabel}  for="9ft">No</label>

</div>
<a className={style.example}>View Example</a>
</div>
</div>

<div className={style.subSection}>
<h2 className={style.calcSubTitle}>Covered porch area:</h2>
<div className={style.explainerText}>This is the total area of all the porches on your home which will not have usable area underneath it. Porches are covered exterior areas which have a concrete floor. Deck area will be entered later.</div>
<div className={style.inputRow}>
<div className={style.inputs}>
<input className={style.numbInput} type="number"/> <strong>sf</strong> 
</div><a className={style.example}>View Example</a>
</div>
</div>

<div className={style.subSection}>
<h2 className={style.calcSubTitle}>Covered Porch w/ Cold Storage Under:</h2>
<div className={style.explainerText}>This is the total area of all the porches on your home which will have usable area underneath it. Often times the area underneath will be used for cold storage.</div>
<div className={style.inputRow}>
<div className={style.inputs}>
<input className={style.numbInput} type="number"/> <strong>sf</strong> 
</div><a className={style.example}>View Example</a>
</div>

</div>


<div className={style.buttonRow}>
  <div className={style.button}>Next</div>
  <div className={style.button}>Calculate</div>
</div>


  </div>

  <Footer></Footer>
</div>;
};
export default Calc