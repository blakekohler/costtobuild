import React, {useState} from 'react';

import * as style from './calc.module.css'
import Header from '../components/header';
import Footer from "../components/footer";
import ViewExample from "../components/viewExample";

const Other  = () => {
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
  fire_protection: searchParams.get('fire_protection') ? searchParams.get('fire_protection') : "No", 
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
      <li className={style.breadcrumb}>Upper Floors</li>
      <li className={style.breadcrumb}> Kitchens</li>
      <li className={style.breadcrumb}> Bathrooms</li>
      <li className={style.breadcrumb}>Finishes</li>
      <li className={`${style.breadcrumb} ${style.active}`}> Other</li>
      <li className={style.breadcrumb}> Location</li>
      <li className={style.breadcrumb}> Summary</li>
    </div>
    <div className={style.intro}>Answer the questions to get a detailed cost summary for a new home.</div>
<h1 className={style.calcSectionTitle}>Other Information</h1>



{/* Will your home need a septic System: */}
<div className={style.subSection}>
  <h2 className={style.calcSubTitle}>Will your home need a septic system:</h2>
  <div className={style.explainerText}>
  Most homes are connected to a public sewer system and will not need a septic system. If a connection is not available you will need a Septic System.
  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
    <input className={style.radioInput} type="radio" id="septic1" value="Yes" name="septic" onChange={handleChange}  checked={inputs.septic == "Yes"}/> 
     <label className={style.radioLabel} for="septic1">Yes</label>
     <input className={style.radioInput} type="radio" id="septic2" value="No" name="septic" onChange={handleChange}  checked={inputs.septic == "No"}/>
     <label className={style.radioLabel} for="septic2">No</label>
    </div>
  </div>
</div>

{/* Enter number of propane tanks you need: */}
<div className={style.subSection}>
  <h2 className={style.calcSubTitle}>Enter number of propane tanks you need:</h2>
  <div className={style.explainerText}>
  Propane Tanks are used for fuel storage where it will be used. Some times there is piped in natural gas available or you may chose to use electric heat, if this is the case you will not need propane tanks. (1000 Gallon's per tank)
  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
      <input className={style.numbInput} type="number" name="propan_tanks" min="0"  value={inputs.propan_tanks} onChange={handleChange} />
    </div>
    
  </div>
</div>


{/* Number of Gas Fire Places: */}
<div className={style.subSection}>
  <h2 className={style.calcSubTitle}>Number of Gas Fire Places:</h2>
  <div className={style.explainerText}>Gas fire places are used for looks and heat, they can be built into a wall or they can be free standing.
  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
      <input className={style.numbInput} type="number" name="fire_gas_vented" min="0"  value={inputs.fire_gas_vented} onChange={handleChange} />
    </div>
    <ViewExample imgSrc="https://www.costtobuild.net/images/fireplace.jpg"></ViewExample>
  </div>
</div>


{/* Number of Un-vented Gas Fire Places: */}
<div className={style.subSection}>
  <h2 className={style.calcSubTitle}>Number of Un-vented Gas Fire Places:</h2>
  <div className={style.explainerText}>This is similar to a gas fire place as described above, except it is not vented to the exterior of your home. Un-vented fire places are more efficient than vented ones but they do have some disadvantages. They put moisture into the air, this may or may not be a disadvantage. They use oxygen from the air in your home and can put out an odor from the gas. Most people prefer the vented fire places.
  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
      <input className={style.numbInput} type="number" name="fire_gas_unvented" min="0"  value={inputs.fire_gas_unvented} onChange={handleChange} />
    </div>
    
  </div>
</div>

{/* Number of Brick Wood Fire Places: */}
<div className={style.subSection}>
  <h2 className={style.calcSubTitle}>Number of Brick Wood Fire Places:</h2>
  <div className={style.explainerText}>This refers to fireplaces constructed out of brick and masonry. These types of fire places have a chimney and are able to burn wood. They can be fitted with a gas log system.
  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
      <input className={style.numbInput} type="number" name="fire_brick" min="0"  value={inputs.fire_brick} onChange={handleChange} />
    </div>
    
  </div>
</div>


{/* Number of Wood Burning Stoves: */}
<div className={style.subSection}>
  <h2 className={style.calcSubTitle}>Number of Wood Burning Stoves:</h2>
  <div className={style.explainerText}>This refers to a stove which sits in the room and is equipped to burn wood. This will require a chimney and is typically more expensive than a gas fire place.
  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
      <input className={style.numbInput} type="number" name="fire_woodstove" min="0"  value={inputs.fire_woodstove} onChange={handleChange} />
    </div>
    <ViewExample imgSrc="https://www.costtobuild.net/images/woodstove.jpg"></ViewExample>
  </div>
</div>


{/* Home Fire Suppression System: */}
<div className={style.subSection}>
  <h2 className={style.calcSubTitle}>Home Fire Suppression System:</h2>
  <div className={style.explainerText}>Sometimes fire suppression systems are required inside a home. This is a system of sprinklers piped throughout the home and set to automatically go off in a fire. This is not a common requirement but can amount to significant cost if it is required.
  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
    <input className={style.radioInput} type="radio" id="fire1" value="Yes" name="fire_protection" onChange={handleChange}  checked={inputs.fire_protection == "Yes"}/> 
     <label className={style.radioLabel} for="fire1">Yes</label>
     <input className={style.radioInput} type="radio" id="fire2" value="No" name="fire_protection" onChange={handleChange}  checked={inputs.fire_protection == "No"}/>
     <label className={style.radioLabel} for="fire2">No</label>
    </div>
    <ViewExample imgSrc="https://www.costtobuild.net/images/fire_sup.jpg"></ViewExample>
  </div>
</div>








<div className={style.buttonRow}>
  <a href={'/finishes?' + searchParams.toString()} className={style.button}>Back</a>
  <a href={'/location?' + searchParams.toString()} className={style.button}>Next</a>
</div>





  </div>

  <Footer></Footer>
</div>;
};
export default Other