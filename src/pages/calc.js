import React, {useState} from 'react';
import * as style from './calc.module.css'
import Header from '../components/header';
import Footer from "../components/footer";
import ViewExample from "../components/viewExample";
const module = typeof window !== `undefined` ? require("module") : null;

const Calc  = () => {
  


  // main_floor_sf:  1000,
  //   main_floor_height: 8,
  //   slab_on_grade: "Yes",
  //   porch_sf: 0,
  //   cov_porch_sf: 0,
  //   deck_sf: 0,
  //   covered_deck_sf: 0,
  //   roof_slope: 6,
  //   building_class: 3,
  //   basement: "No",
  //   basement_walkout: "No",
  //   basement_finished_sf: 0,
  //   basement_unfinished_sf: 0,
  //   basement_height: 8,
  //   garage: "Yes",
  //   garage_sf: 0,
  //   garage_height: 9,
  //   garage_cars: 2,
  //   garage_suspended: "No",
  //   floor2: "No",
  //   floor2_sf: 0,
  //   floor2_height: 8,
  //   floor3: "No",
  //   floor3_sf: 0,
  //   floor3_height: 8,
  //   loft: "No",
  //   loft_sf: 0,
  //   loft_height: 8,
  //   kitchen: 1,
  //   kitchen_size: 1,
  //   cabinet_grade: 1,
  //   countertop: "Formica",
  //   kitchenettes: 0,
  //   bath_cust: 0,
  //   bath_cust_shower_sf: 16,
  //   bath_full: 0,
  //   bath_3_4: 0,
  //   bath_1_2: 0,
  //   bath_grade: "1",
  //   siding1: "Vinyl",
  //   siding2: "Brick",
  //   siding2_percent: 0,
  //   trim_grade: 1,
  //   flooring_grade: 1,
  //   septic: "No",
  //   propan_tanks: 0,
  //   fire_gas_vented: 0,
  //   fire_gas_unvented: 0,
  //   fire_brick: 0,
  //   fire_woodstove: 0,
  //   fire_protection: "No"
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
<input className={style.numbInput} min="0" value={inputs.main_floor_sf} onChange={handleChange} name="main_floor_sf" type="number"/> <strong>sf</strong> 
</div>  <ViewExample imgSrc="https://costtobuild.net/images/areas.jpg"></ViewExample>
</div>

</div>

<div className={style.subSection}>
<h2 className={style.calcSubTitle}>Main floor ceiling height:</h2>
<div className={style.explainerText}>Enter the main floor ceiling height. This is the distance in feet from the floor to the ceiling. The standard ceiling height is 8 feet, but they are often upgraded to 9' or 10'.</div>

<div className={style.inputRow}>
  <div className={style.inputs}>
<input className={style.radioInput} type="radio" id="8ft" name="main_floor_height" value="8" onChange={handleChange}  checked={inputs.main_floor_height == "8"}/>
<label  className={style.radioLabel} for="8ft">8ft</label>
<input className={style.radioInput} type="radio" id="9ft" name="main_floor_height" value="9" onChange={handleChange}  checked={inputs.main_floor_height == "9"}/>
<label className={style.radioLabel}  for="9ft">9ft</label>
<input  className={style.radioInput}type="radio" id="10ft" name="main_floor_height" value="10" onChange={handleChange}  checked={inputs.main_floor_height == "10"}/>
<label className={style.radioLabel}  for="10ft">10ft</label>
<input className={style.radioInput} type="radio" id="11ft" name="main_floor_height" value="11" onChange={handleChange}  checked={inputs.main_floor_height == "11"}
/>
<label className={style.radioLabel}  for="11ft">11ft</label>
<input className={style.radioInput} type="radio" id="12ft" name="main_floor_height" value="12" onChange={handleChange}  checked={inputs.main_floor_height == "12"}/>
<label className={style.radioLabel} for="12ft">12ft</label>
</div>
<ViewExample imgSrc="https://www.costtobuild.net/images/ceiling_height_main.jpg"></ViewExample>
</div>
</div>

<div className={style.subSection}>
<h2 className={style.calcSubTitle}>Slab on grade</h2>
<div className={style.explainerText}>Will this be a slab on grade home? If you select "No" the program will calculate your home assuming it will have a crawl space or a basement. Slab on grade will calculate your main floor as concrete.</div>

<div className={style.inputRow}>
  <div className={style.inputs}>
<input className={style.radioInput}  type="radio" id="yesSlab" name="slab_on_grade" onChange={handleChange} value="Yes"  checked={inputs.slab_on_grade == "Yes"}/>
<label  className={style.radioLabel} for="yesSlab">Yes </label>
<input className={style.radioInput} type="radio" id="noSlab" name="slab_on_grade" value="No" onChange={handleChange}  checked={inputs.slab_on_grade == "No"}/>
<label className={style.radioLabel}  for="noSlab">No</label>

</div>
<ViewExample imgSrc="https://www.costtobuild.net/images/slab_on_grade.jpg"></ViewExample>
</div>
</div>

<div className={style.subSection}>
<h2 className={style.calcSubTitle}>Covered porch area:</h2>
<div className={style.explainerText}>This is the total area of all the porches on your home which will not have usable area underneath it. Porches are covered exterior areas which have a concrete floor. Deck area will be entered later.</div>
<div className={style.inputRow}>
<div className={style.inputs}>
<input className={style.numbInput} name="porch_sf" onChange={handleChange} value={inputs.porch_sf} type="number"/> <strong>sf</strong> 
</div><ViewExample imgSrc="https://www.costtobuild.net/images/porch.jpg"></ViewExample>
</div>
</div>

<div className={style.subSection}>
<h2 className={style.calcSubTitle}>Covered Porch w/ Cold Storage Under:</h2>
<div className={style.explainerText}>This is the total area of all the porches on your home which will have usable area underneath it. Often times the area underneath will be used for cold storage.</div>
<div className={style.inputRow}>
<div className={style.inputs}>

<input className={style.numbInput} onChange={handleChange} name="cov_porch_sf" value={inputs.cov_porch_sf} type="number"/> <strong>sf</strong> 

</div><ViewExample imgSrc="https://www.costtobuild.net/images/cold_storage.jpg"></ViewExample>
</div>

</div>





<div className={style.buttonRow}>
  <a href={'/general?' + searchParams.toString()} className={style.button}>Next</a>
  {/* <div className={style.button}>Calculate</div> */}
</div>


  </div>

  <Footer></Footer>
</div>;
};
export default Calc