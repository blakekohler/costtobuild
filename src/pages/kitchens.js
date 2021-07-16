import React, {useState} from 'react';

import * as style from './calc.module.css'
import Header from '../components/header';
import Footer from "../components/footer";
import ViewExample from "../components/viewExample";


const Kitchens  = () => {
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
      <li className={style.breadcrumb}>Garage</li>
      <li className={style.breadcrumb}>Upper Floors</li>
      <li className={`${style.breadcrumb} ${style.active}`}>Kitchens</li>
      <li className={style.breadcrumb}> Bathrooms</li>
      <li className={style.breadcrumb}> Finishes</li>
      <li className={style.breadcrumb}>Other</li>
      <li className={style.breadcrumb}> Location</li>
      <li className={style.breadcrumb}> Summary</li>
    </div>
    <div className={style.intro}>Answer the questions to get a detailed cost summary for a new home.</div>
<h1 className={style.calcSectionTitle}>Kitchens Information</h1>


{/* Enter number of Full Kitchens: */}
<div className={style.subSection}>
  <h2 className={style.calcSubTitle}>How many full kitchens will your home have:</h2>
  <div className={style.explainerText}>
  A full Kitchen typically has a sink, dishwasher, fridge and an oven with a cook top.
  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
    <input className={style.numbInput} min="0"  value={inputs.kitchen} onChange={handleChange} name="kitchen" type="number" /> 
    </div>
    <ViewExample imgSrc="https://www.costtobuild.net/images/kitchen.jpg"></ViewExample>
  </div>
</div>

{/* Size of Kitchen: */}
<div className={style.subSection}>
  <h2 className={style.calcSubTitle}>Size of Kitchen:</h2>
  <div className={style.explainerText}>
  Select the size category (from the example) that best corresponds to the kitchen you will have.
  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
      <input className={style.radioInput} type="radio" id="ks1" name="kitchen_size" value="1" onChange={handleChange}  checked={inputs.kitchen_size == "1"}/>
      <label className={style.radioLabel} for="ks1">1</label>
      <input className={style.radioInput} type="radio" id="ks2" name="kitchen_size" value="2" onChange={handleChange}  checked={inputs.kitchen_size == "2"}/>
      <label className={style.radioLabel} for="ks2">2</label>
      <input className={style.radioInput} type="radio" id="ks3" name="kitchen_size" value="3" onChange={handleChange}  checked={inputs.kitchen_size == "3"}/>
      <label className={style.radioLabel} for="ks3">3</label>
      <input className={style.radioInput} type="radio" id="ks4" name="kitchen_size" value="4" onChange={handleChange}  checked={inputs.kitchen_size == "4"}/>
      <label className={style.radioLabel} for="ks4">4</label>
      <input className={style.radioInput} type="radio" id="ks5" name="kitchen_size" value="5" onChange={handleChange}  checked={inputs.kitchen_size == "5"}/>
      <label className={style.radioLabel} for="ks5">5</label>

    </div>
    <ViewExample imgSrc="https://www.costtobuild.net/images/kitchens.jpg"></ViewExample>
  </div>
</div>


{/* Select your Cabinet Grade: */}
<div className={style.subSection}>
  <h2 className={style.calcSubTitle}>Select your Cabinet Grade:</h2>
  <div className={style.explainerText}>
  Select the cabinet grade that best corresponds to the kitchen you will have.
  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
      <input className={style.radioInput} type="radio" id="cg1" name="cabinet_grade" value="1" onChange={handleChange}  checked={inputs.cabinet_grade == "1"}/>
      <label className={style.radioLabel} for="cg1">1</label>
      <input className={style.radioInput} type="radio" id="cg2" name="cabinet_grade" value="2" onChange={handleChange}  checked={inputs.cabinet_grade == "2"}/>
      <label className={style.radioLabel} for="cg2">2</label>
      <input className={style.radioInput} type="radio" id="cg3" name="cabinet_grade" value="3" onChange={handleChange}  checked={inputs.cabinet_grade == "3"}/>
      <label className={style.radioLabel} for="cg3">3</label>
      <input className={style.radioInput} type="radio" id="cg4" name="cabinet_grade" value="4" onChange={handleChange}  checked={inputs.cabinet_grade == "4"}/>
      <label className={style.radioLabel} for="cg4">4</label>
      <input className={style.radioInput} type="radio" id="cg5" name="cabinet_grade" value="5" onChange={handleChange}  checked={inputs.cabinet_grade == "5"}/>
      <label className={style.radioLabel} for="cg5">5</label>
</div>
<ViewExample imgSrc="https://www.costtobuild.net/images/cabinet_grade.jpg"></ViewExample>
</div>
<div className={style.explainerText}>
<div className={style.extraHelp}>
  <h3>Extra Help:</h3>
  <b>Grade 1</b> is a basic grade kitchen. Cabinets would typically be constructed of alder or similar material. The cabinets would be standard heights and widths.<br/><br/><b>Grade 2</b> is similar to Grade 1, but would have a few more details such as extra trim.<br/><br/><b>Grade 3</b> would be constructed of better materials, such as oak or similar woods and would have more details than Grade 2.<br/><br/><b>Grade 4</b> would be made out of similar materials to grade 3, but would have extras such as crown molding.<br/><br/><b>Grade 5</b> is the highest end cabinets, constructed of some of the best woods with many details including variations in depth and height.<br/><br/>
				</div>
</div>
</div>


{/* Choose counter top type: */}
<div className={style.subSection}>
  <h2 className={style.calcSubTitle}>Choose counter top type:</h2>
  <div className={style.explainerText}>
  This allows you to select the type of counter tops you will have. 
  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
      <input className={style.radioInput} type="radio" id="ct1" name="countertop" value="Formica" onChange={handleChange}  checked={inputs.countertop == "Formica"}/>
      <label className={style.radioLabel} for="ct1">Formica</label>
      <input className={style.radioInput} type="radio" id="ct2" name="countertop" value="Tile" onChange={handleChange}  checked={inputs.countertop == "Tile"}/>
      <label className={style.radioLabel} for="ct2">Tile</label>
      <input className={style.radioInput} type="radio" id="ct3" name="countertop" value="Corian" onChange={handleChange}  checked={inputs.countertop == "Corian"}/>
      <label className={style.radioLabel} for="ct3">Corian</label>
      <input className={style.radioInput} type="radio" id="ct4" name="countertop" value="Granite" onChange={handleChange}  checked={inputs.countertop == "Granite"}/>
      <label className={style.radioLabel} for="ct4">Granite</label>
    
    </div>
    
  </div>
  <div className={style.explainerText}>
  <div className={style.extraHelp}>
  <h3>Extra Help:</h3>

  {/* Formica is the most cost effective, it is a laminate counter top. Tile counter tops are similar to a tile floor. This has the benefit of many choices and designs. Corian is a cultured marble type counter top. Granite counter tops are made from natural slabs of granite which are cut and used as a counter top. These are typically the most expensive counter tops. */}
  <ul>
    <li>Formica is the most cost effective, it is a laminate counter top. </li>
    <li>Tile counter tops are similar to a tile floor. This has the benefit of many choices and designs.</li>
    <li>Corian is a cultured marble type counter top. </li>
    <li>Granite counter tops are made from natural slabs of granite which are cut and used as a counter top. These are typically the most expensive counter tops.</li>
  </ul>
  </div>
  </div>

</div>

{/* Number of Kitchenettes: */}
<div className={style.subSection}>
  <h2 className={style.calcSubTitle}>Number of Kitchenettes:</h2>
  <div className={style.explainerText}>
  Kitchenettes are small kitchens which consist of a fridge, sink and usually an oven. Often times they will be located in a basement or a loft area to give better access to a kitchen or to provide for a small basement apartment.

  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
      <input className={style.numbInput} type="number"  min="0" value={inputs.kitchenettes} onChange={handleChange} name="kitchenettes"/>
</div>

</div>
<div className={style.explainerText}></div>
</div>

<div className={style.buttonRow}>
  <a href={'/upper?' + searchParams.toString()} className={style.button}>Back</a>
  <a href={'/bathrooms?' + searchParams.toString()} className={style.button}>Next</a>
</div>





  </div>

  <Footer></Footer>
</div>;
};
export default Kitchens