import React, {useState} from 'react';

import * as style from './calc.module.css'
import Header from '../components/header';
import Footer from "../components/footer";
import ViewExample from "../components/viewExample";
const module = typeof window !== `undefined` ? require("module") : null;


const Basement  = () => {
  var searchParams = new URLSearchParams(window.location.search)
  const [inputs, setInputs] = useState({
    main_floor_sf: searchParams.get('main_floor_sf') ? searchParams.get('main_floor_sf') : 1000,
    main_floor_height: searchParams.get('main_floor_height') ? searchParams.get('main_floor_height') : 8,
    slab_on_grade: searchParams.get('slab_on_grade') ? searchParams.get('slab_on_grade') : "Yes",
    porch_sf: searchParams.get('porch_sf') ? searchParams.get('porch_sf') : 0,
    cov_porch_sf: searchParams.get('cov_porch_sf') ? searchParams.get('cov_porch_sf') : 0,
    deck_sf: searchParams.get('deck_sf') ? searchParams.get('deck_sf') : 0,
    covered_deck_sf: searchParams.get('covered_deck_sf') ? searchParams.get('covered_deck_sf') : 0,
    roof_slope: searchParams.get('roof_slope') ? searchParams.get('roof_slope') : 6,
    building_class: searchParams.get('building_class') ? searchParams.get('building_class') : 3,
    basement: searchParams.get('basement') ? searchParams.get('basement') : "No",
    basement_walkout: searchParams.get('basement_walkout') ? searchParams.get('basement_walkout') : "No",
    basement_finished_sf: searchParams.get('basement_finished_sf') ? searchParams.get('basement_finished_sf') : 0,
    basement_unfinished_sf: searchParams.get('basement_unfinished_sf') ? searchParams.get('basement_unfinished_sf') : 0,
    basement_height: searchParams.get('basement_height') ? searchParams.get('basement_height') : 8,
    garage: searchParams.get('garage') ? searchParams.get('garage') : "Yes",
    garage_sf: searchParams.get('garage_sf') ? searchParams.get('garage_sf') : 0,
    garage_height: searchParams.get('garage_height') ? searchParams.get('garage_height') : 9,
    garage_cars: searchParams.get('garage_cars') ? searchParams.get('garage_cars') : 2,
    garage_suspended: searchParams.get('garage_suspended') ? searchParams.get('garage_suspended') : "No",
    floor2: searchParams.get('floor2') ? searchParams.get('floor2') : "No",
    floor2_sf: searchParams.get('floor2_sf') ? searchParams.get('floor2_sf') : 0,
    floor2_height: searchParams.get('floor2_height') ? searchParams.get('floor2_height') : 8,
    floor3: searchParams.get('floor3') ? searchParams.get('floor3') : "No",
    floor3_sf: searchParams.get('floor3_sf') ? searchParams.get('floor3_sf') : 0,
    floor3_height: searchParams.get('floor3_height') ? searchParams.get('floor3_height') : 8,
    loft: searchParams.get('loft') ? searchParams.get('loft') : "No",
    loft_sf: searchParams.get('loft_sf') ? searchParams.get('loft_sf') : 0,
    loft_height: searchParams.get('loft_height') ? searchParams.get('loft_height') : 8,
    kitchen: searchParams.get('kitchen') ? searchParams.get('kitchen') : 1,
    kitchen_size: searchParams.get('kitchen_size') ? searchParams.get('kitchen_size') : 1,
    cabinet_grade: searchParams.get('cabinet_grade') ? searchParams.get('cabinet_grade') : 1,
    countertop: searchParams.get('countertop') ? searchParams.get('countertop') : "Formica",
    kitchenettes: searchParams.get('kitchenettes') ? searchParams.get('kitchenettes') : 0,
    bath_cust: searchParams.get('bath_cust') ? searchParams.get('bath_cust') : 0,
    bath_cust_shower_sf: searchParams.get('bath_cust_shower_sf') ? searchParams.get('bath_cust_shower_sf') : 16,
    bath_full: searchParams.get('bath_full') ? searchParams.get('bath_full') : 0,
    bath_3_4: searchParams.get('bath_3_4') ? searchParams.get('bath_3_4') : 0,
    bath_1_2: searchParams.get('bath_1_2') ? searchParams.get('bath_1_2') : 0,
    bath_grade: searchParams.get('bath_grade') ? searchParams.get('bath_grade') : "1",
    siding1: searchParams.get('siding1') ? searchParams.get('siding1') : "Vinyl",
    siding2: searchParams.get('siding2') ? searchParams.get('siding2') : "Brick",
    siding2_percent: searchParams.get('siding2_percent') ? searchParams.get('siding2_percent') : 0,
  trim_grade: searchParams.get('trim_grade') ? searchParams.get('trim_grade') : "1",
  flooring_grade: searchParams.get('flooring_grade') ? searchParams.get('flooring_grade') : "1",
  septic: searchParams.get('septic') ? searchParams.get('septic') : "No",
  propan_tanks: searchParams.get('propan_tanks') ? searchParams.get('propan_tanks') : 0,
  fire_gas_vented: searchParams.get('fire_gas_vented') ? searchParams.get('fire_gas_vented') : 0,
  fire_gas_unvented: searchParams.get('fire_gas_unvented') ? searchParams.get('fire_gas_unvented') : 0,
  fire_brick: searchParams.get('fire_brick') ? searchParams.get('fire_brick') : 0,
  fire_woodstove: searchParams.get('fire_woodstove') ? searchParams.get('fire_woodstove') : 0,
  fire_protection: searchParams.get('fire_protection') ? searchParams.get('fire_protection') : 0, 
  });

  const handleChange = (event) => {
    searchParams.set([event.target.name], event.target.value);
    var newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
    window.history.replaceState(null, '', newRelativePathQuery);
    console.log(newRelativePathQuery);
    setInputs(values => ({ ...values, [event.target.name]: event.target.value }));
    sessionStorage.setItem([event.target.name], event.target.value);
  };



  return <div>
  <title>House Calculator | Cost To Build</title>
  <Header></Header>
  <div className={style.secondaryHeader}>
      <h2>Home Cost Estimator</h2>
  </div>




  <div className={style.calcHolder}>
  
    <div className={style.breadcrumbs}>
      <li className={style.breadcrumb}> Main Floor</li>
      <li className={style.breadcrumb}>General</li>
      <li className={`${style.breadcrumb} ${style.active}`}>Basement</li>
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
<h1 className={style.calcSectionTitle}>Basement Information</h1>


<div className={style.subSection}>
  <h2 className={style.calcSubTitle}>Will Your Home Have a Basement?</h2>
  <div className={style.explainerText}>In many areas it is common to have a basement. A basement is a living area which is below the main floor and typically below grade.
  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
     <input className={style.radioInput} type="radio" id="basement1" value="Yes" name="basement" onChange={handleChange}  checked={inputs.basement == "Yes"}/> 
     <label className={style.radioLabel} for="basement1">Yes</label>
     <input className={style.radioInput} type="radio" id="basement2" value="No" name="basement" onChange={handleChange}  checked={inputs.basement == "No"}/>
     <label className={style.radioLabel} for="basement2">No</label>
    </div>
    <ViewExample imgSrc="https://www.costtobuild.net/images/basement.jpg"></ViewExample>
  </div>
</div>

<div className={style.subSection}>
  <h2 className={style.calcSubTitle}>Walk out Basement:</h2>
  <div className={style.explainerText}>
  If your lot slopes from front to back you can have a walk out basement. A walkout basement is where the basement floor is the same height as the backyard ground level.
  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
     <input className={style.radioInput} type="radio" name="basement_walkout" id="walkout1" value="Yes"  onChange={handleChange}  checked={inputs.basement_walkout == "Yes"}/>
     <label className={style.radioLabel} for="walkout1">Yes</label>
     <input className={style.radioInput} type="radio" name="basement_walkout" id="walkout2" value="No" onChange={handleChange}  checked={inputs.basement_walkout == "No"}/>
     <label className={style.radioLabel} for="walkout2">No</label>
    </div>
    <ViewExample imgSrc="https://www.costtobuild.net/images/basement_walkout.jpg"></ViewExample>
  </div>
</div>



<div className={style.subSection}>
<h2 className={style.calcSubTitle}>Finished Area in Basement:</h2>
<div className={style.explainerText}>This is the total area in your basement which you intend to finish at the time you build.</div>
<div className={style.inputRow}>
<div className={style.inputs}>
<input className={style.numbInput} type="number" min="0" value={inputs.basement_finished_sf} onChange={handleChange} name="basement_finished_sf" /> <strong>sf</strong> 
</div> <ViewExample imgSrc="https://www.costtobuild.net/images/basement_finished.jpg"></ViewExample>
</div>
</div>


<div className={style.subSection}>
<h2 className={style.calcSubTitle}>Unfinished Area in Basement:</h2>
<div className={style.explainerText}>his is the area in your basement that will remain unfinished. Often people will not finish there basement at the time they build in order to keep the cost down, then they can finish at a later time.</div>
<div className={style.inputRow}>
<div className={style.inputs}>
<input className={style.numbInput} type="number" min="0" value={inputs.basement_unfinished_sf} onChange={handleChange} name="basement_unfinished_sf" /> <strong>sf</strong> 
</div><ViewExample imgSrc="https://www.costtobuild.net/images/basement_unfinished.jpg"></ViewExample>
</div>
</div>

<div className={style.subSection}>
<h2 className={style.calcSubTitle}>Basement Ceiling Height:</h2>
<div className={style.explainerText}>This is the height of your ceiling in your basement. Typically they are 8', but are often upgraded to 9' or 10'.

</div>

<div className={style.inputRow}>
  <div className={style.inputs}>
    <input className={style.radioInput} type="radio" id="bh1" name="basement_height" value="8"  onChange={handleChange}  checked={inputs.basement_height == "8"}/>
    <label className={style.radioLabel} for="bh1">8ft</label>
    <input className={style.radioInput} type="radio" id="bh2" name="basement_height" value="9" onChange={handleChange}  checked={inputs.basement_height == "9"}/>
    <label className={style.radioLabel} for="bh2">9ft</label>
    <input className={style.radioInput} type="radio" id="bh3" name="basement_height" value="10" onChange={handleChange}  checked={inputs.basement_height == "10"}/>
    <label className={style.radioLabel} for="bh3">10ft</label>
    <input className={style.radioInput} type="radio" id="bh4" name="basement_height" value="11" onChange={handleChange}  checked={inputs.basement_height == "11"}/>
    <label className={style.radioLabel} for="bh4">11ft</label>
    <input className={style.radioInput} type="radio" id="bh5" name="basement_height" value="12" onChange={handleChange}  checked={inputs.basement_height == "12"}/>
    <label className={style.radioLabel} for="bh5">12ft</label>
</div>
<ViewExample imgSrc="https://www.costtobuild.net/images/basement_ceiling.jpg"></ViewExample>

</div>
</div>



<div className={style.buttonRow}>
<a href={'/general?' + searchParams.toString()} className={style.button}>Back</a>
  <a href={'/garage?' + searchParams.toString()} className={style.button}>Next</a>
</div>


  </div>

  <Footer></Footer>
</div>;
};
export default Basement