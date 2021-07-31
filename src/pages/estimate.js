import React, { useState } from "react";
import * as style from "./calc.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import ViewExample from "../components/viewExample";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faToilet } from "@fortawesome/free-solid-svg-icons";

const Estimate = () => {
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
  const isBrowser = typeof window !== "undefined";
  if (isBrowser) {
    var searchParams = new URLSearchParams(window.location.search);
  } else {
    searchParams = {
      get: (key) => {
        return null;
      },
    };
  }
  const [inputs, setInputs] = useState({
    main_floor_sf: searchParams.get("main_floor_sf")
      ? searchParams.get("main_floor_sf")
      : 1000,
    main_floor_height: searchParams.get("main_floor_height")
      ? searchParams.get("main_floor_height")
      : 8,
    slab_on_grade: searchParams.get("slab_on_grade")
      ? searchParams.get("slab_on_grade")
      : "Yes",
    porch_sf: searchParams.get("porch_sf") ? searchParams.get("porch_sf") : 0,
    cov_porch_sf: searchParams.get("cov_porch_sf")
      ? searchParams.get("cov_porch_sf")
      : 0,
    deck_sf: searchParams.get("deck_sf") ? searchParams.get("deck_sf") : 0,
    covered_deck_sf: searchParams.get("covered_deck_sf")
      ? searchParams.get("covered_deck_sf")
      : 0,
    roof_slope: searchParams.get("roof_slope")
      ? searchParams.get("roof_slope")
      : 6,
    building_class: searchParams.get("building_class")
      ? searchParams.get("building_class")
      : 3,
    basement: searchParams.get("basement")
      ? searchParams.get("basement")
      : "No",
    basement_walkout: searchParams.get("basement_walkout")
      ? searchParams.get("basement_walkout")
      : "No",
    basement_finished_sf: searchParams.get("basement_finished_sf")
      ? searchParams.get("basement_finished_sf")
      : 0,
    basement_unfinished_sf: searchParams.get("basement_unfinished_sf")
      ? searchParams.get("basement_unfinished_sf")
      : 0,
    basement_height: searchParams.get("basement_height")
      ? searchParams.get("basement_height")
      : 8,
    garage: searchParams.get("garage") ? searchParams.get("garage") : "Yes",
    garage_sf: searchParams.get("garage_sf")
      ? searchParams.get("garage_sf")
      : 0,
    garage_height: searchParams.get("garage_height")
      ? searchParams.get("garage_height")
      : 9,
    garage_cars: searchParams.get("garage_cars")
      ? searchParams.get("garage_cars")
      : 2,
    garage_suspended: searchParams.get("garage_suspended")
      ? searchParams.get("garage_suspended")
      : "No",
    floor2: searchParams.get("floor2") ? searchParams.get("floor2") : "No",
    floor2_sf: searchParams.get("floor2_sf")
      ? searchParams.get("floor2_sf")
      : 0,
    floor2_height: searchParams.get("floor2_height")
      ? searchParams.get("floor2_height")
      : 8,
    floor3: searchParams.get("floor3") ? searchParams.get("floor3") : "No",
    floor3_sf: searchParams.get("floor3_sf")
      ? searchParams.get("floor3_sf")
      : 0,
    floor3_height: searchParams.get("floor3_height")
      ? searchParams.get("floor3_height")
      : 8,
    loft: searchParams.get("loft") ? searchParams.get("loft") : "No",
    loft_sf: searchParams.get("loft_sf") ? searchParams.get("loft_sf") : 0,
    loft_height: searchParams.get("loft_height")
      ? searchParams.get("loft_height")
      : 8,
    kitchen: searchParams.get("kitchen") ? searchParams.get("kitchen") : 1,
    kitchen_size: searchParams.get("kitchen_size")
      ? searchParams.get("kitchen_size")
      : 1,
    cabinet_grade: searchParams.get("cabinet_grade")
      ? searchParams.get("cabinet_grade")
      : 1,
    countertop: searchParams.get("countertop")
      ? searchParams.get("countertop")
      : "Formica",
    kitchenettes: searchParams.get("kitchenettes")
      ? searchParams.get("kitchenettes")
      : 0,
    bath_cust: searchParams.get("bath_cust")
      ? searchParams.get("bath_cust")
      : 0,
    bath_cust_shower_sf: searchParams.get("bath_cust_shower_sf")
      ? searchParams.get("bath_cust_shower_sf")
      : 16,
    bath_full: searchParams.get("bath_full")
      ? searchParams.get("bath_full")
      : 0,
    bath_3_4: searchParams.get("bath_3_4") ? searchParams.get("bath_3_4") : 0,
    bath_1_2: searchParams.get("bath_1_2") ? searchParams.get("bath_1_2") : 0,
    bath_grade: searchParams.get("bath_grade")
      ? searchParams.get("bath_grade")
      : "1",
    siding1: searchParams.get("siding1")
      ? searchParams.get("siding1")
      : "Vinyl",
    siding2: searchParams.get("siding2")
      ? searchParams.get("siding2")
      : "Brick",
    siding2_percent: searchParams.get("siding2_percent")
      ? searchParams.get("siding2_percent")
      : 0,
    trim_grade: searchParams.get("trim_grade")
      ? searchParams.get("trim_grade")
      : "1",
    flooring_grade: searchParams.get("flooring_grade")
      ? searchParams.get("flooring_grade")
      : "1",
    septic: searchParams.get("septic") ? searchParams.get("septic") : "No",
    propan_tanks: searchParams.get("propan_tanks")
      ? searchParams.get("propan_tanks")
      : 0,
    fire_gas_vented: searchParams.get("fire_gas_vented")
      ? searchParams.get("fire_gas_vented")
      : 0,
    fire_gas_unvented: searchParams.get("fire_gas_unvented")
      ? searchParams.get("fire_gas_unvented")
      : 0,
    fire_brick: searchParams.get("fire_brick")
      ? searchParams.get("fire_brick")
      : 0,
    fire_woodstove: searchParams.get("fire_woodstove")
      ? searchParams.get("fire_woodstove")
      : 0,
    fire_protection: searchParams.get("fire_protection")
      ? searchParams.get("fire_protection")
      : 0,
  });










  
  const handleChange = (event) => {
    searchParams.set([event.target.name], event.target.value);
    var newRelativePathQuery =
      window.location.pathname + "?" + searchParams.toString();
    window.history.replaceState(null, "", newRelativePathQuery);
    console.log(newRelativePathQuery);
    setInputs((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    sessionStorage.setItem([event.target.name], event.target.value);
  };

  return (
    <div>
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
          <li className={style.breadcrumb}> Garage</li>
          <li className={style.breadcrumb}>Upper Floors</li>
          <li className={style.breadcrumb}> Kitchens</li>
          <li className={style.breadcrumb}> Bathrooms</li>
          <li className={style.breadcrumb}> Finishes</li>
          <li className={style.breadcrumb}>Other</li>
          <li className={style.breadcrumb}> Location</li>
          <li
            className={style.breadcrumb}
            className={`${style.breadcrumb} ${style.active}`}
          >
            {" "}
            Summary
          </li>
        </div>

        <h1 className={style.calcSectionTitle}>
          Your Estimated Cost To Build:
        </h1>
        <h1 className={style.bigTotal}>$176,342</h1>
        <div className={style.anchorHolder}>
          <a className={style.anchorDetails} href="#details">
            View Complete Cost Breakdown
          </a>
        </div>
        <div className={style.anchorHolder}>
          <div className={style.downArrow}>˅</div>
        </div>

        <div className={style.subSection}>
          <h2 className={style.calcSubTitle}>
            RECOMMENDED PLANS BASED ON YOUR SELECTIONS :
          </h2>
          <div className={style.planList}>
            <div className={style.plan}>
              <img
                className={style.planPic}
                src="https://www.crookstondesigns.com/plan_pictures/12050.00/picture1.jpg"
              />
              <div className={style.details}>
                <h4>Rambled</h4>
                <div>Square Footage: 2338 sf</div>
                <div>Bedrooms: 4</div>
                <div>Baths: 3</div>
              </div>
              <a className={style.viewPlan}>View Plan In Calculator</a>
            </div>

            <div className={style.plan}>
              <img
                className={style.planPic}
                src="https://www.crookstondesigns.com/plan_pictures/12050.00/picture1.jpg"
              />
              <div className={style.details}>
                <h4>Rambled</h4>
                <div>Square Footage: 2338 sf</div>
                <div>
                  {" "}
                  <FontAwesomeIcon icon={faBed} /> Bedrooms: 4
                </div>
                <div>
                  {" "}
                  <FontAwesomeIcon icon={faToilet} />
                  Baths: 3
                </div>
              </div>
              <a className={style.viewPlan}>View Plan In Calculator</a>
            </div>

            <div className={style.plan}>
              <img
                className={style.planPic}
                src="https://www.crookstondesigns.com/plan_pictures/12050.00/picture1.jpg"
              />
              <div className={style.details}>
                <h4>Rambled</h4>
                <div>Square Footage: 2338 sf</div>
                <div>
                  {" "}
                  <FontAwesomeIcon icon={faBed} /> Bedrooms: 4
                </div>
                <div>
                  {" "}
                  <FontAwesomeIcon icon={faToilet} />
                  Baths: 3
                </div>
              </div>
              <a className={style.viewPlan}>View Plan In Calculator</a>
            </div>

            <div className={style.plan}>
              <img
                className={style.planPic}
                src="https://www.crookstondesigns.com/plan_pictures/12050.00/picture1.jpg"
              />
              <div className={style.details}>
                <h4>Rambled</h4>
                <div>Square Footage: 2338 sf</div>
                <div className={style.bed}>
                  {" "}
                  <FontAwesomeIcon icon={faBed} /> Bedrooms: 4
                </div>
                <div className={style.bath}>
                  {" "}
                  <FontAwesomeIcon icon={faToilet} />
                  Baths: 3
                </div>
              </div>
              <a className={style.viewPlan}>View Plan In Calculator</a>
            </div>
          </div>
          <h2> </h2>
        </div>

        <h1 className={style.calcSectionTitle}>Detailed Cost Breakdown</h1>

        <div className={style.TableHolder}>
         
          <div className={style.table}>
            <div className={style.th}>
              <div className={style.td}>Item</div>
              <div className={style.td}>Material</div>
              <div className={style.td}>Labor</div>
              <div className={style.td}>Total</div>
            </div>
            <div className={style.tr}>
              <div className={style.td}>Site Work</div>
              <div className={style.td}>{4.5*Math.sqrt(inputs.main_floor_sf)}</div>
              <div className={style.td}>$924</div>
              <div className={style.td}>$4,006</div>
            </div>
            <div className={style.tr}>
              <div className={style.td}>Sewer, Water, Gas</div>
              <div className={style.td}>$2,752</div>
              <div className={style.td}>$721</div>
              <div className={style.td}>$3473</div>
            </div>
            <div className={style.tr}>
              <div className={style.td}>Septic System</div>
              <div className={style.td}>$0</div>
              <div className={style.td}>$0</div>
              <div className={style.td}>$0</div>
            </div>
            <div className={style.tr}>
              <div className={style.td}>Propane Tanks</div>
              <div className={style.td}>$0</div>
              <div className={style.td}>$0</div>
              <div className={style.td}>$0</div>
            </div>
            <div className={style.tr}>
              <div className={style.td}>Building Concrete</div>
              <div className={style.td}>$10,443</div>
              <div className={style.td}>$6,226</div>
              <div className={style.td}>$16,669</div>
            </div>
            <div className={style.tr}>
              <div className={style.td}>Outside Concrete</div>
              <div className={style.td}>$1,686</div>
              <div className={style.td}>$2,754</div>
              <div className={style.td}>$4,440</div>
            </div>
            <div className={style.tr}>
              <div className={style.td}>Rough Carpentry</div>
              <div className={style.td}>$19,906</div>
              <div className={style.td}>$11,302</div>
              <div className={style.td}>$31,208</div>
            </div>
            <div className={style.tr}>
              <div className={style.td}>Cabinets</div>
              <div className={style.td}>$3,622</div>
              <div className={style.td}>$157</div>
              <div className={style.td}>$3779</div>
            </div>
            <div className={style.tr}>
              <div className={style.td}>Finish Carpentry</div>
              <div className={style.td}>$1,127</div>
              <div className={style.td}>$1,270</div>
              <div className={style.td}>$2397</div>
            </div>
          
          <div className={style.tr}>
            <div className={style.td}>Interior Doors</div>
            <div className={style.td}>$1,354</div>
            <div className={style.td}>$1,144</div>
            <div className={style.td}>$2,497</div>
          </div>
          <div className={style.tr}>
            <div className={style.td}>Exterior Doors</div>
            <div className={style.td}>$5,769</div>
            <div className={style.td}>$1,625</div>
            <div className={style.td}>$7,395</div>
          </div>
          <div className={style.tr}>
            <div className={style.td}>Insulation</div>
            <div className={style.td}>$4,081</div>
            <div className={style.td}>$1,077</div>
            <div className={style.td}>$5,158</div>
          </div>
          <div className={style.tr}>
            <div className={style.td}>Exterior Siding</div>
            <div className={style.td}>$6,408</div>
            <div className={style.td}>$4,844</div>
            <div className={style.td}>$11,252</div>
          </div>
          <div className={style.tr}>
            <div className={style.td}>Roofing</div>
            <div className={style.td}>$3,287</div>
            <div className={style.td}>$1,039</div>
            <div className={style.td}>$4,325</div>
          </div>
          <div className={style.tr}>
            <div className={style.td}>Hardware</div>
            <div className={style.td}>$633</div>
            <div className={style.td}>$147</div>
            <div className={style.td}>$780</div>
          </div>
          <div className={style.tr}>
            <div className={style.td}>Windows</div>
            <div className={style.td}>$2,019</div>
            <div className={style.td}>$386</div>
            <div className={style.td}>$2,405</div>
          </div>
          <div className={style.tr}>
            <div className={style.td}>Drywall</div>
            <div className={style.td}>$3,554</div>
            <div className={style.td}>$4,449</div>
            <div className={style.td}>$7,959</div>
          </div>
          <div className={style.tr}>
            <div className={style.td}>Painting</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$4,919</div>
          </div>
          <div className={style.tr}>
            <div className={style.td}>Floor Covering</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$4,919</div>
          </div>
          <div className={style.tr}>
            <div className={style.td}>Plumbing</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$4,919</div>
          </div>
          <div className={style.tr}>
            <div className={style.td}>Tubs, Showers</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$4,919</div>
          </div>
          <div className={style.tr}>
            <div className={style.td}>Bath Acces. & Mirrors</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$4,919</div>
          </div>
          <div className={style.tr}>
            <div className={style.td}>Appliances</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$4,919</div>
          </div>

          <div className={style.tr}>
            <div className={style.td}>HVAC System</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$4,919</div>
          </div>

          <div className={style.tr}>
            <div className={style.td}>Fireplace</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$4,919</div>
          </div>

          <div className={style.tr}>
            <div className={style.td}>Electrical</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$4,919</div>
          </div>

          <div className={style.tr}>
            <div className={style.td}>Light Fixtures</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$4,919</div>
          </div>

          <div className={style.tr}>
            <div className={style.td}>Fire Protection</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$4,919</div>
          </div>

          <div className={style.trTotals}>
            <div className={style.td}>Subtotal Direct Building Costs</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$4,919</div>
          </div>
          </div>
        </div>

        <div className={style.table}>
          <div className={style.tr}>
            <div className={style.td}>General Requirements</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$4,919</div>
          </div>
          <div className={style.tr}>
            <div className={style.td}>Building Permit</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$4,919</div>
          </div>
          <div className={style.tr}>
            <div className={style.td}>Utility Connection Fees (Sewer, Water Gas)</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$4,919</div>
          </div>
          <div className={style.tr}>
            <div className={style.td}>Construction Plans & Specs</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$4,919</div>
          </div>
          <div className={style.trTotals}>
            <div className={style.td}>Subtotal Indirect Building Costs</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$4,919</div>
          </div>
        </div>

        <div className={style.table}>
          <div className={style.tr}>
            <div className={style.td}>Total Costs</div>
            <div className={style.td}>-</div>
            <div className={style.td}>$1,856</div>
            <div className={style.td}>$4,919</div>
          </div>
         
        </div>


        <div className={style.table}>
        <div className={style.tr}>
            <div className={style.td}></div>
            <div className={style.td}>Material</div>
            <div className={style.td}>Labor</div>
            <div className={style.td}>Total</div>
          </div>
          <div className={style.trTotals}>
            <div className={style.td}>Total Costs</div>
            <div className={style.td}>$93,964</div>
            <div className={style.td}>$58,629</div>
            <div className={style.td}>$152,919</div>
          </div>
         
        </div>

        <div>Cost To Build LLC does not guarantee the accuracy of this cost summary. <br/>
Prices Updated March 18, 2021</div>

        


        <div className={style.buttonRow}>
          <a
            href={"/general?" + searchParams.toString()}
            className={style.button}
          >
            Change Location
          </a>
          {/* <div className={style.button}>Calculate</div> */}
        </div>
      </div>

      <Footer></Footer>

      <div class="col-xs-12 col-sm-9 col-md-7 col-md-pull-3" >

<div class="row t_sum">
  <div class="col-xs-12 col-sm-3 col-md-3 sum font-bold">Item</div><div class="clearfix visible-xs"></div>	
  <div class="col-xs-4 col-sm-3 col-md-3 sum font-bold" >Material</div>
  <div class="col-xs-4 col-sm-3 col-md-3 sum font-bold" >Labor</div>	
  <div class="col-xs-4 col-sm-3 col-md-3 sum font-bold" >Total</div>			
</div>	


<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum" id='catname0'>Site Work</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_2' id='XLEW_2_2_2' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_2' id='XLEW_2_3_2' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_2' id='XLEW_2_4_2' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum" id='catname1'>Sewer, Water Gas</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_3' id='XLEW_2_2_3' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_3' id='XLEW_2_3_3' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_3' id='XLEW_2_4_3' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum" id='catname2'>Septic System</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_4' id='XLEW_2_2_4' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_4' id='XLEW_2_3_4' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_4' id='XLEW_2_4_4' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Propane Tanks</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_5' id='XLEW_2_2_5' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_5' id='XLEW_2_3_5' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_5' id='XLEW_2_4_5' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Building Concrete</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_6' id='XLEW_2_2_6' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_6' id='XLEW_2_3_6' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_6' id='XLEW_2_4_6' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Outside Concrete</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_7' id='XLEW_2_2_7' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_7' id='XLEW_2_3_7' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_7' id='XLEW_2_4_7' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Rough Carpentry</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_8' id='XLEW_2_2_8' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_8' id='XLEW_2_3_8' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_8' id='XLEW_2_4_8' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Cabinets</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_9' id='XLEW_2_2_9' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_9' id='XLEW_2_3_9' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_9' id='XLEW_2_4_9' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Finish Carpentry</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_10' id='XLEW_2_2_10' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_10' id='XLEW_2_3_10' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_10' id='XLEW_2_4_10' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Interior Doors</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_11' id='XLEW_2_2_11' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_11' id='XLEW_2_3_11' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_11' id='XLEW_2_4_11' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Exterior Doors</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_12' id='XLEW_2_2_12' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_12' id='XLEW_2_3_12' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_12' id='XLEW_2_4_12' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Insulation</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_13' id='XLEW_2_2_13' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_13' id='XLEW_2_3_13' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_13' id='XLEW_2_4_13' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Exterior Siding</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_14' id='XLEW_2_2_14' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_14' id='XLEW_2_3_14' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_14' id='XLEW_2_4_14' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Roofing</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_15' id='XLEW_2_2_15' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_15' id='XLEW_2_3_15' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_15' id='XLEW_2_4_15' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Hardware</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_16' id='XLEW_2_2_16' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_16' id='XLEW_2_3_16' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_16' id='XLEW_2_4_16' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Windows</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_17' id='XLEW_2_2_17' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_17' id='XLEW_2_3_17' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_17' id='XLEW_2_4_17' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Drywall</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_18' id='XLEW_2_2_18' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_18' id='XLEW_2_3_18' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_18' id='XLEW_2_4_18' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Painting</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_19' id='XLEW_2_2_19' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_19' id='XLEW_2_3_19' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_19' id='XLEW_2_4_19' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Floor Covering</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_20' id='XLEW_2_2_20' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_20' id='XLEW_2_3_20' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_20' id='XLEW_2_4_20' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Plumbing</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_21' id='XLEW_2_2_21' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_21' id='XLEW_2_3_21' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_21' id='XLEW_2_4_21' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Tubs, Showers</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_22' id='XLEW_2_2_22' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_22' id='XLEW_2_3_22' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_22' id='XLEW_2_4_22' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Bath Acces. & Mirrors</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_23' id='XLEW_2_2_23' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_23' id='XLEW_2_3_23' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_23' id='XLEW_2_4_23' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Appliances</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_24' id='XLEW_2_2_24' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_24' id='XLEW_2_3_24' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_24' id='XLEW_2_4_24' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">HVAC System</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_25' id='XLEW_2_2_25' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_25' id='XLEW_2_3_25' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_25' id='XLEW_2_4_25' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Fireplace</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_26' id='XLEW_2_2_26' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_26' id='XLEW_2_3_26' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_26' id='XLEW_2_4_26' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Electrical</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_27' id='XLEW_2_2_27' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_27' id='XLEW_2_3_27' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_27' id='XLEW_2_4_27' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Light Fixtures</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_28' id='XLEW_2_2_28' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_28' id='XLEW_2_3_28' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_28' id='XLEW_2_4_28' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Fire Protection</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_29' id='XLEW_2_2_29' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_29' id='XLEW_2_3_29' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_29' id='XLEW_2_4_29' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum font-bold">Subtotal Direct Building Costs</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_31' id='XLEW_2_2_31' class='sumi font-bold' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_31' id='XLEW_2_3_31' class='sumi font-bold' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_31' id='XLEW_2_4_31' class='sumi font-bold' /></div>
</div>
<br/>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">General Requirements</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_33' id='XLEW_2_2_33' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_33' id='XLEW_2_3_33' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_33' id='XLEW_2_4_33' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Building Permit</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_34' id='XLEW_2_2_34' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_34' id='XLEW_2_3_34' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_34' id='XLEW_2_4_34' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Utility Connection Fees (Sewer, Water Gas)</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_35' id='XLEW_2_2_35' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_35' id='XLEW_2_3_35' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_35' id='XLEW_2_4_35' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Construction Plans & Specs</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_36' id='XLEW_2_2_36' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_36' id='XLEW_2_3_36' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_36' id='XLEW_2_4_36' class='sumi' /></div>
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum font-bold">Subtotal Indirect Building Costs</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_38' id='XLEW_2_2_38' class='sumi font-bold' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_38' id='XLEW_2_3_38' class='sumi font-bold' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_38' id='XLEW_2_4_38' class='sumi font-bold' /></div>
</div>
<br/>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum">Contractor Overhead & Profit</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_40' id='XLEW_2_2_40' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_40' id='XLEW_2_3_40' class='sumi' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_40' id='XLEW_2_4_40' class='sumi' /></div>
</div>

<br/>
<div class="row t_sum">
  <div class="col-xs-12 col-sm-3 col-md-3 sum font-bold"></div><div class="clearfix visible-xs"></div>	
  <div class="col-xs-4 col-sm-3 col-md-3 sum font-bold">Material</div>
  <div class="col-xs-4 col-sm-3 col-md-3 sum font-bold" >Labor</div>	
  <div class="col-xs-4 col-sm-3 col-md-3 sum font-bold" >Total</div>			
</div>
<div class="row t_sum">
<div class="col-xs-12 col-sm-3 col-md-3 sum font-bold">Total Costs</div><div class="clearfix visible-xs"></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_2_42' id='XLEW_2_2_42' class='sumi font-bold' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_3_42' id='XLEW_2_3_42' class='sumi font-bold' /></div>
<div class="col-xs-4 col-sm-3 col-md-3 sum"><input readonly='readonly' value='-' type='text' name='XLEW_2_4_42' id='XLEW_2_4_42' class='sumi font-bold' /></div>
</div>
Cost To Build LLC does not guarantee the accuracy of this cost summary.<br/>
Prices Updated March 18, 2021
<br/>
<div class="row">
<div id="Ad2" class="col-xs-12 col-sm-7 col-lg-8"></div>
<div class="clearfix visible-xs"></div>
<div class="col-xs-12 col-sm-5 col-lg-4 text-center">
  <div class="btn-group-vertical">
    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal0">Export to Edit Page</button>
    <a type="button" class="btn btn-primary btn-lg" href="edit-summary">Edit Page without Export</a>
    <a type="button" class="btn btn-primary btn-lg" href="calculator.html">Revise Input</a>
    <a type="button" class="btn btn-primary btn-lg" href="find_plan.html">See Recommended<br/>Plans For You<br/>Based On Your<br/>Selections</a>
  </div>
</div>

</div>
</div>



    </div>
  );
};
export default Estimate;
