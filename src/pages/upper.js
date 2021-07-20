import React, {useState} from 'react';
import * as style from './calc.module.css'
import Header from '../components/header';
import Footer from "../components/footer";
import ViewExample from "../components/viewExample";


const Upper  = () => {
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
      <li className={style.breadcrumb}>General</li>
      <li className={style.breadcrumb}>Basement</li>
      <li className={style.breadcrumb}>Garage</li>
      <li className={`${style.breadcrumb} ${style.active}`}>Upper Floors</li>
      <li className={style.breadcrumb}> Kitchens</li>
      <li className={style.breadcrumb}> Bathrooms</li>
      <li className={style.breadcrumb}> Finishes</li>
      <li className={style.breadcrumb}>Other</li>
      <li className={style.breadcrumb}> Location</li>
      <li className={style.breadcrumb}> Summary</li>
    </div>
    <div className={style.intro}>Answer the questions to get a detailed cost summary for a new home.</div>
<h1 className={style.calcSectionTitle}>Upper Floors Information</h1>


<div className={style.subSection}>
  <h2 className={style.calcSubTitle}>Will your home have loft living area:</h2>
  <div className={style.explainerText}>Sometimes homes have living area which is built into the roof of the home. This usually called a loft.
  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
     <input className={style.radioInput} type="radio" id="l1" name="loft" value="Yes" onChange={handleChange}  checked={inputs.loft == "Yes"}/> 
     <label className={style.radioLabel} for="l1">Yes</label>
     <input className={style.radioInput} type="radio" id="l2" name="loft" value="No" onChange={handleChange}  checked={inputs.loft == "No"}/>
     <label className={style.radioLabel} for="l2">No</label>
    </div>
  
  </div>
</div>


<div className={style.subSection}>
<h2 className={style.calcSubTitle}>What is the living area of the loft:</h2>
<div className={style.explainerText}>Enter the Area of the loft in Square Feet</div>
<div className={style.inputRow}>
<div className={style.inputs}>
<input className={style.numbInput} min="0" type="number" value={inputs.loft_sf} onChange={handleChange} name="loft_sf" /> <strong>sf</strong> 
</div><ViewExample imgSrc="https://www.costtobuild.net/images/loft.jpg"></ViewExample>
</div>
</div>

{/* What is the ceiling height of the loft: */}
<div className={style.subSection}>
<h2 className={style.calcSubTitle}>What is the ceiling height of the loft:</h2>
<div className={style.explainerText}>This is the height from the floor to the highest point on the loft ceiling.
</div>

<div className={style.inputRow}>
  <div className={style.inputs}>
    <input className={style.radioInput} id="lh1" type="radio" name="loft_height" value="8"  onChange={handleChange}  checked={inputs.loft_height == "8"}/>
    <label className={style.radioLabel} for="lh1">8ft</label>
    <input className={style.radioInput} id="lh2" type="radio" name="loft_height" value="9"  onChange={handleChange}  checked={inputs.loft_height == "9"}/>
    <label className={style.radioLabel} for="lh2">9ft</label>
    <input className={style.radioInput} id="lh3" type="radio" name="loft_height" value="10"  onChange={handleChange}  checked={inputs.loft_height == "10"}/>
    <label className={style.radioLabel} for="lh3">10ft</label>
    <input className={style.radioInput} id="lh4" type="radio" name="loft_height" value="11"  onChange={handleChange}  checked={inputs.loft_height == "11"}/>
    <label className={style.radioLabel} for="lh4">11ft</label>
    <input className={style.radioInput} id="lh5" type="radio" name="loft_height" value="12"  onChange={handleChange}  checked={inputs.loft_height == "12"}/>
    <label className={style.radioLabel} for="lh5">12ft</label>
</div>
<ViewExample imgSrc="https://www.costtobuild.net/images/loft_ceiling.jpg"></ViewExample>
</div>
</div>


{/* Will your home have a second floor? */}
<div className={style.subSection}>
<h2 className={style.calcSubTitle}>Will your home have a second floor:</h2>
<div className={style.explainerText}>
  This is a floor which is directly over the main floor. If the area is built into the roof enter the space as a loft above.
</div>
<div className={style.inputRow}>
  <div className={style.inputs}>
    <input className={style.radioInput} id="f21" type="radio" name="floor2" value="Yes" onChange={handleChange}  checked={inputs.floor2 == "Yes"}/>
    <label className={style.radioLabel} for="f21">Yes</label>
    <input className={style.radioInput} id="f22" type="radio" name="floor2" value="No" onChange={handleChange}  checked={inputs.floor2 == "No"}/>
    <label className={style.radioLabel} for="f22">No</label>
  </div>
  <ViewExample imgSrc="https://www.costtobuild.net/images/second_floor.jpg"></ViewExample>
  
</div>
</div>

{/* What is the living area of the second floor: */}
<div className={style.subSection}>
<h2 className={style.calcSubTitle}>What is the living area of the second floor:</h2>
<div className={style.explainerText}>Enter the Area of the second floor in Square Feet</div>
<div className={style.inputRow}>
<div className={style.inputs}>
<input className={style.numbInput} min="0" value={inputs.floor2_sf} onChange={handleChange} name="floor2_sf" type="number" /> <strong>sf</strong>
</div>
</div>
</div>

{/* What is the ceiling height of the second floor */}
<div className={style.subSection}>
<h2 className={style.calcSubTitle}>What is the ceiling height of the second floor:</h2>
<div className={style.explainerText}>Height from floor to Ceiling
</div>
<div className={style.inputRow}>
  <div className={style.inputs}>
    <input className={style.radioInput} type="radio" id="f2h1" name="floor2_height" value="8" onChange={handleChange}  checked={inputs.floor2_height == "8"}/>
    <label className={style.radioLabel} for="f2h1">8ft</label>
    <input className={style.radioInput} type="radio" id="f2h2" name="floor2_height" value="9" onChange={handleChange}  checked={inputs.floor2_height == "9"}/>
    <label className={style.radioLabel} for="f2h2">9ft</label>
    <input className={style.radioInput} type="radio" id="f2h3" name="floor2_height" value="10" onChange={handleChange}  checked={inputs.floor2_height == "10"}/>
    <label className={style.radioLabel} for="f2h3">10ft</label>
    <input className={style.radioInput} type="radio" id="f2h4"name="floor2_height" value="11" onChange={handleChange}  checked={inputs.floor2_height == "11"}/>
    <label className={style.radioLabel} for="f2h4">11ft</label>
    <input className={style.radioInput} type="radio" id="f2h5" name="floor2_height" value="12" onChange={handleChange}  checked={inputs.floor2_height == "12"}/>
    <label className={style.radioLabel} for="f2h5">12ft</label>
  </div>
 
</div>
</div>

{/* Will your home have a third floor: */}
<div className={style.subSection}>
<h2 className={style.calcSubTitle}>Will your home have a third floor:</h2>
<div className={style.explainerText}>
  This is a floor which is directly over the second floor. If the area is built into the roof enter the space as a loft above.
</div>
<div className={style.inputRow}>
  <div className={style.inputs}>
    <input className={style.radioInput} id="f31" type="radio" name="floor3" value="Yes" onChange={handleChange}  checked={inputs.floor3 == "Yes"}/>
    <label className={style.radioLabel} for="f31">Yes</label>
    <input className={style.radioInput} id="f32" type="radio" name="floor3" value="No" onChange={handleChange}  checked={inputs.floor3 == "No"}/>
    <label className={style.radioLabel} for="f32">No</label>
  </div>
  
</div>
</div>


{/* What is the living area of the third floor: */}
<div className={style.subSection}>
<h2 className={style.calcSubTitle}>What is the living area of the third floor:</h2>
<div className={style.explainerText}>Enter the Area of the third floor in Square Feet</div>
<div className={style.inputRow}>
<div className={style.inputs}>
<input className={style.numbInput} type="number" min="0" value={inputs.floor3_sf} onChange={handleChange} name="floor3_sf" /> <strong>sf</strong>
</div>

</div>
</div>

{/* What is the ceiling height of the third floor: */}
<div className={style.subSection}>
<h2 className={style.calcSubTitle}>What is the ceiling height of the third floor:</h2>
<div className={style.explainerText}>Height from floor to Ceiling
</div>
<div className={style.inputRow}>
  <div className={style.inputs}>
  <input className={style.radioInput} type="radio" id="f3h1" name="floor3_height" value="8" onChange={handleChange}  checked={inputs.floor3_height == "8"}/>
    <label className={style.radioLabel} for="f3h1">8ft</label>
    <input className={style.radioInput} type="radio" id="f3h2" name="floor3_height" value="9" onChange={handleChange}  checked={inputs.floor3_height == "9"}/>
    <label className={style.radioLabel} for="f3h2">9ft</label>
    <input className={style.radioInput} type="radio" id="f3h3" name="floor3_height" value="10" onChange={handleChange}  checked={inputs.floor3_height == "10"}/>
    <label className={style.radioLabel} for="f3h3">10ft</label>
    <input className={style.radioInput} type="radio" id="f3h4"name="floor3_height" value="11" onChange={handleChange}  checked={inputs.floor3_height == "11"}/>
    <label className={style.radioLabel} for="f3h4">11ft</label>
    <input className={style.radioInput} type="radio" id="f3h5" name="floor3_height" value="12" onChange={handleChange}  checked={inputs.floor3_height == "12"}/>
    <label className={style.radioLabel} for="f3h5">12ft</label>
  </div>
  
</div>
</div>





<div className={style.buttonRow}>
<a href={'/garage?' + searchParams.toString()} className={style.button}>Back</a>
  <a href={'/kitchens?' + searchParams.toString()} className={style.button}>Next</a>

</div>





  </div>

  <Footer></Footer>
</div>;
};
export default Upper