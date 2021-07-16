import React, {useState} from 'react';
import * as style from './calc.module.css'
import Header from '../components/header';
import Footer from "../components/footer";
import ViewExample from "../components/viewExample";


const Garage  = () => {

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
      <li className={style.breadcrumb}>Basement</li>
      <li className={`${style.breadcrumb} ${style.active}`}>Garage</li>
      <li className={style.breadcrumb}>Upper Floors</li>
      <li className={style.breadcrumb}> Kitchens</li>
      <li className={style.breadcrumb}> Bathrooms</li>
      <li className={style.breadcrumb}> Finishes</li>
      <li className={style.breadcrumb}>Other</li>
      <li className={style.breadcrumb}> Location</li>
      <li className={style.breadcrumb}> Summary</li>
    </div>
    <div className={style.intro}>Answer the questions to get a detailed cost summary for a new home.</div>
<h1 className={style.calcSectionTitle}>Garage Information</h1>


<div className={style.subSection}>
  <h2 className={style.calcSubTitle}>Will Your Home Have a Garage:</h2>
  <div className={style.explainerText}>Will Your home have an attached garage. For Detached garages use the garage calculator
  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
     <input className={style.radioInput} type="radio" id="g1" name="garage" value="Yes"  onChange={handleChange}  checked={inputs.garage == "Yes"}/> 
     <label className={style.radioLabel} for="g1">Yes</label>
     <input className={style.radioInput} type="radio" id="g2" name="garage" value="No"  onChange={handleChange}  checked={inputs.garage == "No"}/>
     <label className={style.radioLabel} for="g2">No</label>
    </div>
    <ViewExample imgSrc="https://www.costtobuild.net/images/garage.jpg"></ViewExample>
  </div>
</div>


<div className={style.subSection}>
<h2 className={style.calcSubTitle}>What is the Square Footage of the Garage:</h2>
<div className={style.explainerText}>A typical two car garage is between 500 to 700 square feet. A typical three car garage is between 800 to 1200 square feet.</div>
<div className={style.inputRow}>
<div className={style.inputs}>
<input className={style.numbInput} value={inputs.garage_sf} min="0" onChange={handleChange} name="garage_sf" type="number" /> <strong>sf</strong> 
</div>
</div>
</div>



<div className={style.subSection}>
<h2 className={style.calcSubTitle}>Garage Ceiling Height:</h2>
<div className={style.explainerText}>Typically your garage ceiling height for a home with a basement or a crawl space will be 1' taller than the main floor ceiling height. If you will have a slab on grade home the ceiling height is usually the same as the main floor.

</div>

<div className={style.inputRow}>
  <div className={style.inputs}>
    <input className={style.radioInput} type="radio" id="gh1" name="garage_height" value="8" onChange={handleChange}  checked={inputs.garage_height == "8"}/>
    <label className={style.radioLabel} for="gh1">8ft</label>
    <input className={style.radioInput} type="radio" id="gh2" name="garage_height" value="9" onChange={handleChange}  checked={inputs.garage_height == "9"}/>
    <label className={style.radioLabel} for="gh2">9ft</label>
    <input className={style.radioInput} type="radio"  id="gh3" name="garage_height" value="10" onChange={handleChange}  checked={inputs.garage_height == "10"}/>
    <label className={style.radioLabel} for="gh3">10ft</label>
    <input className={style.radioInput} type="radio" id="gh4" name="garage_height" value="11" onChange={handleChange}  checked={inputs.garage_height == "11"}/>
    <label className={style.radioLabel} for="gh4">11ft</label>
    <input className={style.radioInput} type="radio" id="gh5" name="garage_height" value="12" onChange={handleChange}  checked={inputs.garage_height == "12"}/>
    <label className={style.radioLabel} for="gh5">12ft</label>
</div>

</div>
</div>

<div className={style.subSection}>
<h2 className={style.calcSubTitle}>How many garage doors will your garage have:</h2>
<div className={style.explainerText}>
Enter the number of garage doors (large doors for car) your garage will have. Include lower garage doors for suspended garage.
</div>
<div className={style.inputRow}>
  <div className={style.inputs}>
    <input className={style.radioInput} type="radio" id="gc1" name="garage_cars" value="1" onChange={handleChange}  checked={inputs.garage_cars == "1"}/>
    <label className={style.radioLabel} for="gc1"> 1</label>
    <input className={style.radioInput} type="radio" id="gc2"  name="garage_cars" value="2" onChange={handleChange}  checked={inputs.garage_cars == "2"}/>
    <label className={style.radioLabel} for="gc2">2</label>
    <input className={style.radioInput} type="radio" id="gc3"  name="garage_cars" value="3" onChange={handleChange}  checked={inputs.garage_cars == "3"}/>
    <label className={style.radioLabel} for="gc3">3</label>
    <input className={style.radioInput} type="radio" id="gc4"  name="garage_cars" value="4" onChange={handleChange}  checked={inputs.garage_cars == "4"}/>
    <label className={style.radioLabel} for="gc4">4</label>
    <input className={style.radioInput} type="radio" id="gc5"  name="garage_cars" value="5" onChange={handleChange}  checked={inputs.garage_cars== "5"}/>
    <label className={style.radioLabel} for="gc5">5</label>
    <input className={style.radioInput} type="radio" id="gc6" name="garage_cars" value="6" onChange={handleChange}  checked={inputs.ggarage_cars == "6"}/>
    <label className={style.radioLabel} for="gc6">6</label>
</div>
</div>
</div>

{/* Will the garage have a suspended floor? */}
<div className={style.subSection}>
<h2 className={style.calcSubTitle}>Will the garage have a suspended floor:</h2>
<div className={style.explainerText}>
Sometimes the area under the garage is used for living area or just a shop/garage area. If this is the case then the garage floor will have to be what is considered a suspended floor. The garage floor is constructed of reinforced concrete which is able to support the weight of the cars to be stored in the upper garage. Typically a standard garage is not suspended.
</div>
<div className={style.inputRow}>
  <div className={style.inputs}>
    <input className={style.radioInput} type="radio" id="gs1" name="garage_suspended" value="Yes"  onChange={handleChange}  checked={inputs.garage_suspended == "Yes"}/>
    <label className={style.radioLabel} for="gs1">Yes</label>
    <input className={style.radioInput} type="radio" id="gs2" name="garage_suspended" value="No"  onChange={handleChange}  checked={inputs.garage_suspended == "No"}/>
    <label className={style.radioLabel} for="gs2">No</label>
</div>

<ViewExample imgSrc="https://www.costtobuild.net/images/suspended_garage.jpg"></ViewExample>


</div>
</div>

<div className={style.buttonRow}>
  <a href={'/basement?' + searchParams.toString()} className={style.button}>Back</a>
  <a href={'/upper?' + searchParams.toString()} className={style.button}>Next</a>
</div>


  </div>

  <Footer></Footer>
</div>;
};
export default Garage