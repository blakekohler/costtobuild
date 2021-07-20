import React, {useState} from 'react';
import * as style from './calc.module.css'
import Header from '../components/header';
import Footer from "../components/footer";
import ViewExample from "../components/viewExample";


const General  = () => {
  const isBrowser = typeof window !== "undefined";
  if (isBrowser) {
  var searchParams = new URLSearchParams(window.location.search)
  }
  else{
    searchParams = { get: (key) => { return null } };
  }
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
      <li className={`${style.breadcrumb} ${style.active}`}>General</li>
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
<h1 className={style.calcSectionTitle}>General Information</h1>
<div className={style.subSection}>
<h2 className={style.calcSubTitle}>Uncovered Deck area</h2>
<div className={style.explainerText}>Enter the total area of deck on your home which will not be covered.
</div>
<div className={style.inputRow}>
<div className={style.inputs}>
<input className={style.numbInput} min="0" value={inputs.deck_sf} onChange={handleChange} name="deck_sf" type="number"/> <strong>sf</strong> 
</div><ViewExample imgSrc="https://www.costtobuild.net/images/deck.jpg"></ViewExample>
</div>

</div>


<div className={style.subSection}>
<h2 className={style.calcSubTitle}>Covered Deck Area:</h2>
<div className={style.explainerText}>Enter the total area of deck on your home which will be covered.</div>
<div className={style.inputRow}>
<div className={style.inputs}>
<input className={style.numbInput} min="0" value={inputs.covered_deck_sf} onChange={handleChange} name="covered_deck_sf" type="number"/> <strong>sf</strong> 
</div><ViewExample imgSrc="https://www.costtobuild.net/images/covered_deck.jpg"></ViewExample>
</div>

</div>

<div className={style.subSection}>
<h2 className={style.calcSubTitle}>What is Your Roof Slope:</h2>
<div className={style.explainerText}>The slope determines how steep your roof will be. It is defined as the number of units vertical your roof rises compared to 12 units horizontal. Roof slopes can vary significantly. Typically they are in the range of 4:12 to 12:12. A common roof pitch would be around 6:12.
</div>

<div className={style.inputRow}>
  <div className={style.inputs}>
<input className={style.radioInput} type="radio" id="4:12" name="4:12" value="4" name="roof_slope" onChange={handleChange}  checked={inputs.roof_slope == "4"}/>
<label  className={style.radioLabel} for="4:12">4:12</label>
<input className={style.radioInput} type="radio" id="5:12" name="5:12" value="5" name="roof_slope" onChange={handleChange}   checked={inputs.roof_slope == "5"}/>
<label className={style.radioLabel}  for="5:12">5:12</label>
<input  className={style.radioInput}type="radio" id="6:12" name="6:12" value="6" name="roof_slope" onChange={handleChange}  checked={inputs.roof_slope == "6"}/>
<label className={style.radioLabel}  for="6:12">6:12</label>
<input className={style.radioInput} type="radio" id="7:12" name="7:12" value="7" name="roof_slope" onChange={handleChange}  checked={inputs.roof_slope == "7"}/>
<label className={style.radioLabel}  for="7:12">7:12</label>
<input className={style.radioInput} type="radio" id="8:12" name="8:12" value="8" name="roof_slope" onChange={handleChange}   checked={inputs.roof_slope == "8"}/>
<label className={style.radioLabel} for="8:12">8:12</label>
<input className={style.radioInput} type="radio" id="9:12" name="9:12" value="9" name="roof_slope" onChange={handleChange}   checked={inputs.roof_slope == "9"}/>
<label className={style.radioLabel}  for="9:12">9:12</label>
<input className={style.radioInput} type="radio" id="10:12" name="10:12" value="10" name="roof_slope" onChange={handleChange}   checked={inputs.roof_slope == "10"}/>
<label className={style.radioLabel}  for="10:12">10:12</label>
<input className={style.radioInput} type="radio" id="11:12" name="11:12" value="11" name="roof_slope" onChange={handleChange}  checked={inputs.roof_slope == "11"}/>
<label className={style.radioLabel}  for="11:12">11:12</label>
<input className={style.radioInput} type="radio" id="12:12" name="12:12" value="12" name="roof_slope" onChange={handleChange}   checked={inputs.roof_slope == "12"}/>
<label className={style.radioLabel}  for="12:12">12:12</label>
</div>
<ViewExample imgSrc="https://www.costtobuild.net/images/slope2.jpg"></ViewExample>
</div>
</div>

<div className={style.subSection}>
<h2 className={style.calcSubTitle}>What Structure Class Does Your Home Fit:</h2>
<div className={style.explainerText}>In order to determine the complexity of your home (which will effect the cost), select the class that best fits your home.
</div>
<div className={style.inputRow}>
  <div className={style.inputs}>
<input className={style.radioInput} type="radio" id="building_class1" name="building_class" value="1" name="building_class" onChange={handleChange}  checked={inputs.building_class == "1"}/>
<label  className={style.radioLabel} for="building_class1">1</label>
<input className={style.radioInput} type="radio" id="building_class2" name="building_class" value="2" name="building_class" onChange={handleChange}   checked={inputs.building_class == "2"}/>
<label className={style.radioLabel}  for="building_class2">2</label>
<input className={style.radioInput} type="radio" id="building_class3" name="building_class" value="3" name="building_class" onChange={handleChange}  checked={inputs.building_class == "3"}/>
<label className={style.radioLabel}  for="building_class3">3</label>
<input className={style.radioInput} type="radio" id="building_class4" name="building_class" value="4" name="building_class" onChange={handleChange}   checked={inputs.building_class == "4"}/>
<label className={style.radioLabel}  for="building_class4">4</label>
<input className={style.radioInput} type="radio" id="building_class5" name="building_class" value="5" name="building_class" onChange={handleChange}   checked={inputs.building_class == "5"}/>
<label className={style.radioLabel}  for="building_class5">5</label>
</div>
</div>
<div className={style.explainerText}>
<div className={style.extraHelp}>
  <h3>Extra Help:</h3>
          <a href="http://www.crookstondesigns.com">See examples provided by Crookston Custom Designs</a> <br/>
<b>Structure class 1</b> is considered the most basic with no extras. Starter homes will often fit into this class or class 2.
Typically there will only be one or two roof lines and the ceiling height will not change through out the home.<br/>
          <a onclick="window.open(this.getAttribute('href'),'Crookston Custom Designs','location=yes,menubar=yes,toolbar=yes,status=yes,resizable=yes,scrollbars=yes,width=800,height=720');return false;" target="_blank" href="http://www.crookstondesigns.com/plan_10058.00.html">Example 1 (Class 1)</a> <br/><br/>
<b>Structure class 2</b> is still a fairly simple home, but more complicated than class 1. Typically there will only be three to five
roof lines. The ceiling height will still stay the same through out the home.<br/>
          <a onclick="window.open(this.getAttribute('href'),'Crookston Custom Designs','location=yes,menubar=yes,toolbar=yes,status=yes,resizable=yes,scrollbars=yes,width=800,height=720');return false;" target="_blank" href="http://www.crookstondesigns.com/plan_8031.00.html">Example 1 (Class 2)</a> | 
          <a onclick="window.open(this.getAttribute('href'),'Crookston Custom Designs','location=yes,menubar=yes,toolbar=yes,status=yes,resizable=yes,scrollbars=yes,width=800,height=720');return false;" target="_blank" href="http://www.crookstondesigns.com/plan_10007.00.html"> Example 2 (Class 2)</a> <br/><br/>
<b>Structure class 3</b> is intended to be a fairly typical home complexity. Typically there will be 6 to 9 roof lines. The
ceiling height may change in one area but over all there is not much variation in roof height.<br/>
          <a onclick="window.open(this.getAttribute('href'),'Crookston Custom Designs','location=yes,menubar=yes,toolbar=yes,status=yes,resizable=yes,scrollbars=yes,width=800,height=720');return false;" target="_blank" href="http://www.crookstondesigns.com/plan_7053.00.html">Example 1 (Class 3)</a> | 
          <a onclick="window.open(this.getAttribute('href'),'Crookston Custom Designs','location=yes,menubar=yes,toolbar=yes,status=yes,resizable=yes,scrollbars=yes,width=800,height=720');return false;" target="_blank" href="http://www.crookstondesigns.com/plan_11012.00.html"> Example 2 (Class 3)</a> <br/>
          <a onclick="window.open(this.getAttribute('href'),'Crookston Custom Designs','location=yes,menubar=yes,toolbar=yes,status=yes,resizable=yes,scrollbars=yes,width=800,height=720');return false;" target="_blank" href="http://www.crookstondesigns.com/plan_9044.00.html">Example 3 (Class 3)</a> | 
  				<a onclick="window.open(this.getAttribute('href'),'Crookston Custom Designs','location=yes,menubar=yes,toolbar=yes,status=yes,resizable=yes,scrollbars=yes,width=800,height=720');return false;" target="_blank" href="http://www.crookstondesigns.com/plan_8018.00.html"> Example 4 (Class 3)</a> <br/><br/>
<b>Structure class 4</b> is intended to be a custom home with several changes in ceiling heights through out the home. Typically there
will be many different roof lines.<br/>
					<a onclick="window.open(this.getAttribute('href'),'Crookston Custom Designs','location=yes,menubar=yes,toolbar=yes,status=yes,resizable=yes,scrollbars=yes,width=800,height=720');return false;" target="_blank" href="http://www.crookstondesigns.com/plan_9038.00.html">Example 1 (Class 4)</a> | 
					<a onclick="window.open(this.getAttribute('href'),'Crookston Custom Designs','location=yes,menubar=yes,toolbar=yes,status=yes,resizable=yes,scrollbars=yes,width=800,height=720');return false;" target="_blank" href="http://www.crookstondesigns.com/plan_10014.00.html"> Example 2 (Class 4)</a> <br/><br/>
<b>Structure class 5</b> is intended to be the most complicated custom home with many changes in ceiling heights through out the
home. The roof will vary in height in many locations with many different roof lines.<br/>
				</div>
</div>
</div>



<div className={style.buttonRow}>
  <a href={'/calc?' + searchParams.toString()} className={style.button}>Back</a>
  <a href={'/basement?' + searchParams.toString()} className={style.button}>Next</a>
</div>


  </div>

  <Footer></Footer>
</div>;
};
export default General