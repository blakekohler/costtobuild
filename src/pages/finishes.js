import React, {useState} from 'react';
import ViewExample from "../components/viewExample";

import * as style from './calc.module.css'
import Header from '../components/header';
import Footer from "../components/footer";

const Finishes  = () => {
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
      <li className={style.breadcrumb}>Upper Floors</li>
      <li className={style.breadcrumb}> Kitchens</li>
      <li className={style.breadcrumb}> Bathrooms</li>
      <li className={`${style.breadcrumb} ${style.active}`}> Finishes</li>
      <li className={style.breadcrumb}>Other</li>
      <li className={style.breadcrumb}> Location</li>
      <li className={style.breadcrumb}> Summary</li>
    </div>
    <div className={style.intro}>Answer the questions to get a detailed cost summary for a new home.</div>
<h1 className={style.calcSectionTitle}>Finishes Information</h1>

{/* Chose the main siding type: */}
{/* Vinyl Cement Board Stucco Brick Synthetic Rock Rock */}
<div className={style.subSection}>
  <h2 className={style.calcSubTitle}>Choose the main siding type:</h2>
  <div className={style.explainerText}>
  This is the type of siding that will be used on the majority of the exterior of your home.
  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
      <input className={style.radioInput} id="s11" type="radio" name="siding1" value="Vinyl" onChange={handleChange}  checked={inputs.siding1 == "Vinyl"}/>
      <label className={style.radioLabel} for="s11">Vinyl</label>
      <input className={style.radioInput} id="s12" type="radio" name="siding1" value="Cement Board" onChange={handleChange}  checked={inputs.siding1 == "Cement Board"}/>
      <label className={style.radioLabel} for="s12">Cement Board</label>
      <input className={style.radioInput} id="s13" type="radio" name="siding1" value="Stucco" onChange={handleChange}  checked={inputs.siding1 == "Stucco"}/>
      <label className={style.radioLabel} for="s13">Stucco</label>
      <input className={style.radioInput} id="s14" type="radio" name="siding1" value="Brick" onChange={handleChange}  checked={inputs.siding1 == "Brick"}/>
      <label className={style.radioLabel} for="s14">Brick</label>
      <input className={style.radioInput} id="s15" type="radio" name="siding1" value="Synthetic" onChange={handleChange}  checked={inputs.siding1 == "Synthetic"}/>
      <label className={style.radioLabel} for="s15">Synthetic Rock</label>
      <input className={style.radioInput} id="s16" type="radio" name="siding1" value="Rock" onChange={handleChange}  checked={inputs.siding1 == "Rock"}/>
      <label className={style.radioLabel} for="s16">Rock</label>
    </div>
    <ViewExample imgSrc="https://www.costtobuild.net/images/siding.jpg"></ViewExample>
  </div>
</div>
{/* Chose secondary siding type: */}
{/* Vinyl Cement Board Stucco Brick Synthetic Rock Rock */}
<div className={style.subSection}>
  <h2 className={style.calcSubTitle}>Choose the secondary siding type:</h2>
  <div className={style.explainerText}>
  Often times a secondary type of siding will be used on a home such as half brick or only brick on one side.
  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
    <input className={style.radioInput} id="s21" type="radio" name="siding2" value="Vinyl" onChange={handleChange}  checked={inputs.siding2 == "Vinyl"}/>
      <label className={style.radioLabel} for="s21">Vinyl</label>
      <input className={style.radioInput} id="s22" type="radio" name="siding2" value="Cement Board" onChange={handleChange}  checked={inputs.siding2 == "Cement Board"}/>
      <label className={style.radioLabel} for="s22">Cement Board</label>
      <input className={style.radioInput} id="s23" type="radio" name="siding2" value="Stucco" onChange={handleChange}  checked={inputs.siding2 == "Stucco"}/>
      <label className={style.radioLabel} for="s23">Stucco</label>
      <input className={style.radioInput} id="s24" type="radio" name="siding2" value="Brick" onChange={handleChange}  checked={inputs.siding2 == "Brick"}/>
      <label className={style.radioLabel} for="s24">Brick</label>
      <input className={style.radioInput} id="s25" type="radio" name="siding2" value="Synthetic" onChange={handleChange}  checked={inputs.siding2 == "Synthetic"}/>
      <label className={style.radioLabel} for="s25">Synthetic Rock</label>
      <input className={style.radioInput} id="s26" type="radio" name="siding2" value="Rock" onChange={handleChange}  checked={inputs.siding2 == "Rock"}/>
      <label className={style.radioLabel} for="s26">Rock</label>
    </div>
    <ViewExample imgSrc="https://www.costtobuild.net/images/siding2.jpg"></ViewExample>
  </div>
</div>

{/* Enter the % of second siding: */}
<div className={style.subSection}>
  <h2 className={style.calcSubTitle}>Enter the % of second siding:</h2>
  <div className={style.explainerText}>
  This is how you chose how much of the home will be covered in the secondary siding type. If you used the secondary siding on just the front you would want to enter around 30% to 40%. If You plan to just do 3 foot high brick in the front you would want to put in approximately 15%.

  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
      <input className={style.numbInput} type="number" name="siding2_percent" min="0"  value={inputs.siding2_percent} onChange={handleChange} /> %
    </div>
   
  </div>
</div>

{/* Select the grade Level for your Interior trim: */}
<div className={style.subSection}>
  <h2 className={style.calcSubTitle}>Select the grade Level for your Interior trim:</h2>
  <div className={style.explainerText}>
  This is the grade level of the trim you want to use.
  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
      <input className={style.radioInput} id="tg1" type="radio" name="trim_grade" value="1"  onChange={handleChange}  checked={inputs.trim_grade == "1"}/>
      <label className={style.radioLabel} for="tg1">Grade 1</label>
      <input className={style.radioInput}  id="tg2" type="radio" name="trim_grade" value="2"  onChange={handleChange}  checked={inputs.trim_grade == "2"}/>
      <label className={style.radioLabel} for="tg2">Grade 2</label>
      <input className={style.radioInput}  id="tg3" type="radio" name="trim_grade" value="3"  onChange={handleChange}  checked={inputs.trim_grade == "3"}/>
      <label className={style.radioLabel} for="tg3">Grade 3</label>
      <input className={style.radioInput}  id="tg4" type="radio" name="trim_grade" value="4"  onChange={handleChange}  checked={inputs.trim_grade == "4"}/>
      <label className={style.radioLabel}for="tg4"> Grade 4</label>
      <input className={style.radioInput}  id="tg5" type="radio" name="trim_grade" value="5"  onChange={handleChange}  checked={inputs.trim_grade == "5"}/>
      <label className={style.radioLabel} for="tg5">Grade 5</label>
    </div>
    
  </div>
  <div className={style.explainerText}>
  {/* Grade 1 is the lowest level. This will include the most basic trim; baseboard and door trim. All trim will be painted.
Grade 2 is similar to grade 1, but will include chair molding in approximately 25% of the house. All trim will be painted.
Grade 3 is a step up from grade 2 and will include crown molding in 25% of the house; all windows will be trimmed. All trim will be painted.
Grade 4 is a step up from grade 3. This will include crown molding in approximately half of the house and chair molding throughout the home. Some of the trim may be stain grade, most will be painted.
Grade 5 is the highest grade. This will include crown molding and chair molding throughout the home. All of the trim will be stain grade. */}

  <div className={style.extraHelp}>
    <h2>Extra Help</h2>
    <ul>
      <li>Grade 1 is the lowest level. This will include the most basic trim; baseboard and door trim. All trim will be painted.</li>
      <li>Grade 2 is similar to grade 1, but will include chair molding in approximately 25% of the house. All trim will be painted.</li>
      <li>Grade 3 is a step up from grade 2 and will include crown molding in 25% of the house; all windows will be trimmed. All trim will be painted.</li>
      <li>Grade 4 is a step up from grade 3. This will include crown molding in approximately half of the house and chair molding throughout the home. Some of the trim may be stain grade, most will be painted.</li>
      <li>Grade 5 is the highest grade. This will include crown molding and chair molding throughout the home. All of the trim will be stain grade.</li>
    </ul>
  </div>
  </div>

</div>


{/* Chose flooring grade: */}
<div className={style.subSection}>
  <h2 className={style.calcSubTitle}>Chose flooring grade:</h2>
  <div className={style.explainerText}>
  This is the grade level of the flooring you want to use.
  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
    <input className={style.radioInput} id="fg1" type="radio" name="flooring_grade" value="1"  onChange={handleChange}  checked={inputs.flooring_grade == "1"}/>
      <label className={style.radioLabel} for="fg1">Grade 1</label>
      <input className={style.radioInput}  id="fg2" type="radio" name="flooring_grade" value="2"  onChange={handleChange}  checked={inputs.flooring_grade == "2"}/>
      <label className={style.radioLabel} for="fg2">Grade 2</label>
      <input className={style.radioInput}  id="fg3" type="radio" name="flooring_grade" value="3"  onChange={handleChange}  checked={inputs.flooring_grade == "3"}/>
      <label className={style.radioLabel} for="fg3">Grade 3</label>
      <input className={style.radioInput}  id="fg4" type="radio" name="flooring_grade" value="4"  onChange={handleChange}  checked={inputs.flooring_grade == "4"}/>
      <label className={style.radioLabel}for="fg4"> Grade 4</label>
      <input className={style.radioInput}  id="fg5" type="radio" name="flooring_grade" value="5"  onChange={handleChange}  checked={inputs.flooring_grade == "5"}/>
      <label className={style.radioLabel} for="fg5">Grade 5</label>
    </div>
    
  </div>
  <div className={style.explainerText}>
  {/* Grade 1 is the lowest level. This will include the most basic carpet with linoleum flooring in the kitchen and bathrooms.
Grade 2 is similar to grade 1, but it will also include a small amount of tile in an area such as an entry.
Grade 3 includes medium grade carpet with tile in the bathrooms and tile or laminate wood flooring in the kitchen area.
Grade 4 includes upgraded carpet in bedroom areas, with tile and wood flooring throughout the rest of the home.
Grade 5 is similar to grade 4, but all of the flooring material is upgraded. */}
  <div className={style.extraHelp}>
    <h2>Extra Help</h2>
    <ul>
      <li>Grade 1 is the lowest level. This will include the most basic carpet with linoleum flooring in the kitchen and bathrooms.</li>
      <li>Grade 2 is similar to grade 1, but it will also include a small amount of tile in an area such as an entry.</li>
      <li>Grade 3 includes medium grade carpet with tile in the bathrooms and tile or laminate wood flooring in the kitchen area.</li>
      <li>Grade 4 includes upgraded carpet in bedroom areas, with tile and wood flooring throughout the rest of the home.</li>
      <li>Grade 5 is similar to grade 4, but all of the flooring material is upgraded.</li>
    </ul>
  </div>
  </div>
</div>



<div className={style.buttonRow}>
  <a href={'/bathrooms?' + searchParams.toString()} className={style.button}>Back</a>
  <a href={'/other?' + searchParams.toString()} className={style.button}>Next</a>
</div>





  </div>

  <Footer></Footer>
</div>;
};
export default Finishes