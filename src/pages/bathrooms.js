import React, {useState} from 'react';

import * as style from './calc.module.css'
import Header from '../components/header';
import Footer from "../components/footer";
import ViewExample from "../components/viewExample";
const module = typeof window !== `undefined` ? require("module") : null;


const Bathrooms  = () => {
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
      <li className={style.breadcrumb}> Kitchens</li>
      <li className={`${style.breadcrumb} ${style.active}`}> Bathrooms</li>
      <li className={style.breadcrumb}> Finishes</li>
      <li className={style.breadcrumb}>Other</li>
      <li className={style.breadcrumb}> Location</li>
      <li className={style.breadcrumb}> Summary</li>
    </div>
    <div className={style.intro}>Answer the questions to get a detailed cost summary for a new home.</div>
<h1 className={style.calcSectionTitle}>Bathrooms Information</h1>

{/* How many Custom Bathrooms in your home: */}
<div className={style.subSection}>
  <h2 className={style.calcSubTitle}>How many custom bathrooms in your home:</h2>
  <div className={style.explainerText}>
  Custom bathrooms have a large tub and a separate shower, they also have double vanity sinks. Often times the master bathroom will fit in this category.
  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
      <input className={style.numbInput} min="0"  value={inputs.bath_cust} onChange={handleChange} name="bath_cust" type="number" />

    </div>
    <ViewExample imgSrc="https://www.costtobuild.net/images/custbath.jpg"></ViewExample>
  </div>
</div>

{/* Enter size of shower for custom bathroom in square feet: */}
<div className={style.subSection}>
  <h2 className={style.calcSubTitle}>Enter size of shower for custom bathroom:</h2>
  <div className={style.explainerText}>
  Often times there will be a separate shower in a custom bathroom. The smallest shower would be 9 square feet. Most showers are in the range of 16 to 20 square feet, but could be as large as you would like it to be.

  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
      <input className={style.numbInput} min="0"  value={inputs.bath_cust_shower_sf} onChange={handleChange} name="bath_cust_shower_sf" type="number" />
    </div>
    
  </div>
</div>

{/* How many full bathrooms in your home: */}
<div className={style.subSection}>
  <h2 className={style.calcSubTitle}>How many full bathrooms in your home:</h2>
  <div className={style.explainerText}>
  A full bathroom will have a tub/shower, sink and toilet.
  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
      <input className={style.numbInput} type="number" min="0"  value={inputs.bath_full} onChange={handleChange} name="bath_full"  />
    </div>
    <ViewExample imgSrc="https://www.costtobuild.net/images/fullbath.jpg"></ViewExample>
  </div>
  </div>
  {/* How many 3/4 bathrooms in your home: */}
  {/* A 3/4 bathroom will have a shower a sink and toilet. */}
  <div className={style.subSection}>
    <h2 className={style.calcSubTitle}>How many 3/4 bathrooms in your home:</h2>
    <div className={style.explainerText}>
    A 3/4 bathroom will have a shower, sink and toilet.
    </div>
    <div className={style.inputRow}>
      <div className={style.inputs}>
      <input className={style.numbInput} type="number" min="0"  value={inputs.bath_3_4} onChange={handleChange} name="bath_3_4"  />
      </div>
      <ViewExample imgSrc="https://www.costtobuild.net/images/3_4-bath.jpg"></ViewExample>
    </div>
  </div>
  {/* How many 1/2 bathrooms in your home: */}
  {/* A 1/2 bath will just have a sink and a toilet. A 1/2 bath is often used in areas away from bedrooms, such as a main floor without bedrooms or maybe in a mudroom area. */}
  <div className={style.subSection}>
    <h2 className={style.calcSubTitle}>How many 1/2 bathrooms in your home:</h2>
    <div className={style.explainerText}>
    A 1/2 bath will just have a sink and a toilet. A 1/2 bath is often used in areas away from bedrooms, such as a main floor without bedrooms or maybe in a mudroom area.
    </div>
    <div className={style.inputRow}>
      <div className={style.inputs}>
        <input className={style.numbInput} type="number" min="0"  value={inputs.bath_1_2} onChange={handleChange} name="bath_1_2"  />
      </div>
      <ViewExample imgSrc="https://www.costtobuild.net/images/halfbath.jpg"></ViewExample>
    </div>
  </div>

  {/* Select your Bathroom Grade: */}
  <div className={style.subSection}>
    <h2 className={style.calcSubTitle}>Select your bathroom grade:</h2>
    <div className={style.explainerText}>
    Select the grade of the bathroom you are looking to build.
    </div>
    <div className={style.inputRow}>
      <div className={style.inputs}>
        <input className={style.radioInput} type="radio" id="bg1" name="bath_grade" value="1" onChange={handleChange}  checked={inputs.bath_grade == "1"}/>
        <label className={style.radioLabel} for="bg1">Grade 1</label>
        <input className={style.radioInput} type="radio" id="bg2" name="bath_grade" value="2" onChange={handleChange}  checked={inputs.bath_grade == "2"}/>
        <label className={style.radioLabel} for="bg2">Grade 2</label>
        <input className={style.radioInput} type="radio" id="bg3" name="bath_grade" value="3" onChange={handleChange}  checked={inputs.bath_grade == "3"}/>
        <label className={style.radioLabel} for="bg3"> Grade 3</label>
        <input className={style.radioInput} type="radio" id="bg4" name="bath_grade" value="4" onChange={handleChange}  checked={inputs.bath_grade == "4"}/>
        <label className={style.radioLabel} for="bg4">Grade 4</label>
        <input className={style.radioInput} type="radio" id="bg5" name="bath_grade" value="5" onChange={handleChange}  checked={inputs.bath_grade == "5"}/>
        <label className={style.radioLabel} for="bg5">Grade 5</label>
      </div>
    </div>
    <div className={style.explainerText}>
      <div className={style.extraHelp}>
        <h3>Extra Help</h3>
        <ul>
          <li>Grade 1 would be the lowest grade, typically fiberglass tubs and showers with lower end fixtures.</li>
          <li>Grade 2 is a step up from grade 1 with higher end fiberglass tubs and showers and medium grade fixtures.</li>
          <li>Grade 3 is more of the medium grade. This includes a cast iron tub and a tile or cultured marble finish for the tub surround.</li>
          <li>Grade 4 would be similar to grade 3, but the tub surround would be of a higher grade as would the fixtures.</li>
          <li>Grade 5 would be the highest grade, typically natural tile or similar finishes for showers and around tubs with the highest grade fixtures.</li>
        </ul>
      </div>
    </div>
  </div>

<div className={style.buttonRow}>
  <a href={'/kitchens?' + searchParams.toString()} className={style.button}>Back</a>
  <a href={'/finishes?' + searchParams.toString()} className={style.button}>Next</a>
</div>





  </div>

  <Footer></Footer>
</div>;
};
export default Bathrooms