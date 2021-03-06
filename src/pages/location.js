import React, {useState} from 'react';
import * as style from './calc.module.css'
import Header from '../components/header';
import Footer from "../components/footer";
import cityArray from "../LocCostIdx";

const Location  = () => {
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

  const [country, setCountry] = useState(0); 
  const [state, setState] = useState('0');
  const [city, setCity] = useState('');


var usa = [["Alabama", 1, 3, 3,
[
  ["Birmingham", 2, 9, 9],
  ["Huntsville", 3, 8, 8],
  ["Mobile", 4, 3, 3],
  ["Montgomery", 5, -4, -4],
  ["Tuscaloosa", 6, -1, -1]
]
],
["Alaska", 7, 56, 56,
[
  ["Anchorage", 8, 54, 54],
  ["Fairbanks", 9, 57, 57],
  ["Juneau", 10, 54, 54],
  ["Ketchikan", 11, 59, 59]
]
],
["Arizona", 12, 7, 7,
[
  ["Flagstaff", 13, 9, 9],
  ["Mesa/Tempe", 14, 8, 8],
  ["Phoenix", 15, 9, 9],
  ["Prescott", 16, 3, 3],
  ["Tucson", 17, 6, 6]
]
],
["Arkansas", 18, -1, -1,
[
  ["Fort Smith", 19, 1, 1],
  ["Jonesboro", 20, -5, -5],
  ["Little Rock", 21, 1, 1],
  ["Pine Bluff", 22, -1, -1]
]
],
["California", 23, 40, 40,
[
  ["Anaheim", 24, 34, 34],
  ["Bakersfield", 25, 34, 34],
  ["Fresno", 26, 39, 39],
  ["Los Angeles", 27, 38, 38],
  ["Oakland", 28, 53, 53],
  ["Oxnard", 29, 37, 37],
  ["Redding", 30, 41, 41],
  ["Riverside", 31, 35, 35],
  ["Sacramento", 32, 41, 41],
  ["San Diego", 33, 30, 30],
  ["San Francisco", 34, 57, 57],
  ["San Jose", 35, 53, 53],
  ["Santa Barbara", 36, 35, 35],
  ["Stockton", 37, 41, 41],
  ["San Bernardino", 38, 33, 33]
]
],
["Colorado", 39, 11, 11,
[
  ["Colorado Springs", 40, 9, 9],
  ["Denver", 41, 13, 13],
  ["Fort Collins", 42, 11, 11],
  ["Grand Junction", 43, 15, 15],
  ["Greeley", 44, 8, 8],
  ["Pueblo", 45, 11, 11]
]
],
["Connecticut", 46, 41, 41,
[
  ["Bridgeport", 47, 41, 41],
  ["Bristol", 48, 41, 41],
  ["Hartford", 49, 39, 39],
  ["New Haven", 50, 41, 41],
  ["Norwalk", 51, 42, 42],
  ["Stamford", 52, 42, 42],
  ["Waterbury", 53, 41, 41]
]
],
["D.C.", 54, 19, 19,
[
  ["Washington", 55, 19, 19]
]
],
["Delaware", 56, 29, 29,
[
  ["Wilmington", 57, 29, 29]
]
],
["Florida", 58, 6, 6,
[
  ["Daytona Beach", 59, 10, 10],
  ["Fort Lauderdale", 60, 9, 9],
  ["Jacksonville", 61, 4, 4],
  ["Melbourne", 62, 10, 10],
  ["Miami", 63, 9, 9],
  ["Orlando", 64, 10, 10],
  ["Panama City", 65, -3, -3],
  ["Pensacola", 66, 3, 3],
  ["St. Petersburg", 67, 1, 1],
  ["Tallahassee", 68, -1, -1],
  ["Tampa", 69, 14, 14]
]
],
["Georgia", 70, 1, 1,
[
  ["Albany", 71, -3, -3],
  ["Atlanta", 72, 10, 10],
  ["Augusta", 73, 3, 3],
  ["Columbus", 74, 1, 1],
  ["Macon", 75, 0, 0],
  ["Savannah", 76, 1, 1],
  ["Valdosta", 77, -6, -6]
]
],
["Guam", 78, 18, 18,
[
  ["Guam", 79, 18, 18]
]
],
["Hawaii", 80, 52, 52,
[
  ["Hilo", 81, 49, 49],
  ["Honolulu", 82, 54, 54]
]
],
["Idaho", 83, 14, 14,
[
  ["Boise", 84, 11, 11],
  ["Lewiston", 85, 25, 25],
  ["Pocatello", 86, 10, 10],
  ["Twin Falls", 87, 3, 3],
  ["Coeur d'Alene", 88, 23, 23]
]
],
["Illinois", 89, 42, 42,
[
  ["Chicago", 90, 54, 54],
  ["Decatur", 91, 33, 33],
  ["Joliet", 92, 54, 54],
  ["Peoria", 93, 35, 35],
  ["Rockford", 94, 41, 41],
  ["Springfield", 95, 33, 33]
]
],
["Indiana", 96, 18, 18,
[
  ["Bloomington", 97, 19, 19],
  ["Evansville", 98, 15, 15],
  ["Fort Wayne", 99, 14, 14],
  ["Gary", 100, 34, 34],
  ["Indianapolis", 101, 18, 18],
  ["Muncie", 102, 16, 16],
  ["South Bend", 103, 15, 15],
  ["Terre Haute", 104, 14, 14]
]
],
["Iowa", 105, 12, 12,
[
  ["Cedar Rapids", 106, 18, 18],
  ["Council Bluffs", 107, 9, 9],
  ["Davenport", 108, 23, 23],
  ["Des Moines", 109, 15, 15],
  ["Dubuque", 110, 9, 9],
  ["Sioux City", 111, 10, 10],
  ["Waterloo", 112, 4, 4]
]
],
["Kansas", 113, 5, 5,
[
  ["Dodge City", 114, 3, 3],
  ["Kansas City", 115, 24, 24],
  ["Salina", 116, 1, 1],
  ["Topeka", 117, -1, -1],
  ["Wichita", 118, 0, 0]
]
],
["Kentucky", 119, 15, 15,
[
  ["Bowling Green", 120, 14, 14],
  ["Lexington", 121, 14, 14],
  ["Louisville", 122, 16, 16],
  ["Owensboro", 123, 15, 15]
]
],
["Louisiana", 124, 1, 1,
[
  ["Alexandria", 125, -4, -4],
  ["Baton Rouge", 126, 4, 4],
  ["Lake Charles", 127, 5, 5],
  ["Monroe", 128, -6, -6],
  ["New Orleans", 129, 9, 9],
  ["Shreveport", 130, -1, -1]
]
],
["Maine", 131, 21, 21,
[
  ["Augusta", 132, 18, 18],
  ["Bangor", 133, 22, 22],
  ["Portland", 134, 23, 23]
]
],
["Maryland", 135, 12, 12,
[
  ["Baltimore", 136, 14, 14],
  ["Hagerstown", 137, 10, 10]
]
],
["Massachusetts", 138, 45, 45,
[
  ["Boston", 139, 53, 53],
  ["Brockton", 140, 47, 47],
  ["Fall River", 141, 47, 47],
  ["Lawrence", 142, 48, 48],
  ["New Bedford", 143, 47, 47],
  ["Pittsfield", 144, 35, 35],
  ["Springfield", 145, 35, 35]
]
],
["Michigan", 146, 19, 19,
[
  ["Detroit", 147, 33, 33],
  ["Flint", 148, 22, 22],
  ["Grand Rapids", 149, 15, 15],
  ["Lansing", 150, 19, 19],
  ["Saginaw", 151, 18, 18],
  ["Traverse City", 152, 9, 9]
]
],
["Minnesota", 153, 32, 32,
[
  ["Brainerd", 154, 22, 22],
  ["Duluth", 155, 34, 34],
  ["Minneapolis", 156, 43, 43],
  ["Rochester", 157, 32, 32],
  ["Saint Paul", 158, 41, 41],
  ["St. Cloud", 159, 33, 33],
  ["Windom", 160, 18, 18]
]
],
["Mississippi", 161, 1, 1,
[
  ["Clarksdale", 162, -6, -6],
  ["Biloxi", 163, 1, 1],
  ["Greenville", 164, 3, 3],
  ["Jackson", 165, 4, 4],
  ["Meridian", 166, 3, 3]
]
],
["Missouri", 167, 20, 20,
[
  ["Cape Girardeau", 168, 13, 13],
  ["Columbia", 169, 16, 16],
  ["Joplin", 170, 14, 14],
  ["Kansas City", 171, 33, 33],
  ["Springfield", 172, 13, 13],
  ["St. Joseph", 173, 24, 24],
  ["St. Louis", 174, 30, 30]
]
],
["Montana", 175, 13, 13,
[
  ["Billings", 176, 14, 14],
  ["Butte", 177, 11, 11],
  ["Great Falls", 178, 15, 15],
  ["Helena", 179, 11, 11],
  ["Missoula", 180, 11, 11]
]
],
["Nebraska", 181, 12, 12,
[
  ["Grand Island", 182, 11, 11],
  ["Lincoln", 183, 10, 10],
  ["North Platte", 184, 13, 13],
  ["Omaha", 185, 14, 14]
]
],
["Nevada", 186, 24, 24,
[
  ["Carson City", 187, 22, 22],
  ["Las Vegas", 188, 30, 30],
  ["Reno", 189, 20, 20]
]
],
["New Hampshire", 190, 19, 19,
[
  ["Charleston", 191, 9, 9],
  ["Manchester", 192, 24, 24],
  ["Portsmouth", 193, 23, 23]
]
],
["New Jersey", 194, 44, 44,
[
  ["Newark", 195, 44, 44],
  ["Paterson", 196, 44, 44],
  ["Trenton", 197, 43, 43]
]
],
["New Mexico", 198, 5, 5,
[
  ["Albuquerque", 199, 5, 5],
  ["Farmington", 200, 5, 5],
  ["Las Cruces", 201, 3, 3],
  ["Santa Fe", 202, 8, 8]
]
],
["New York", 203, 37, 37,
[
  ["Albany", 204, 24, 24],
  ["Binghamton", 205, 23, 23],
  ["Buffalo", 206, 34, 34],
  ["Hicksville", 207, 52, 52],
  ["New York (Manhattan)", 208, 70, 70],
  ["New York", 209, 70, 70],
  ["Rochester", 210, 25, 25],
  ["Syracuse", 211, 24, 24],
  ["Utica", 212, 19, 19],
  ["Watertown", 213, 16, 16],
  ["White Plains", 214, 46, 46]
]
],
["North Carolina", 215, 9, 9,
[
  ["Asheville", 216, 5, 5],
  ["Charlotte", 217, 9, 9],
  ["Durham", 218, 8, 8],
  ["Fayetteville", 219, 13, 13],
  ["Greensboro", 220, 8, 8],
  ["Raleigh", 221, 9, 9],
  ["Wilmington", 222, 9, 9],
  ["Winston-Salem", 223, 9, 9]
]
],
["North Dakota", 224, -1, -1,
[
  ["Bismarck", 225, -1, -1],
  ["Fargo", 226, 0, 0],
  ["Grand Forks", 227, -8, -8],
  ["Minot", 228, 4, 4]
]
],
["Ohio", 229, 21, 21,
[
  ["Akron", 230, 24, 24],
  ["Canton", 231, 18, 18],
  ["Cincinnati", 232, 16, 16],
  ["Cleveland", 233, 27, 27],
  ["Columbus", 234, 20, 20],
  ["Dayton", 235, 16, 16],
  ["Toledo", 236, 24, 24],
  ["Youngstown", 237, 20, 20]
]
],
["Oklahoma", 238, -1, -1,
[
  ["Enid", 239, -4, -4],
  ["Lawton", 240, 1, 1],
  ["Muskogee", 241, -6, -6],
  ["Oklahoma City", 242, 4, 4],
  ["Tulsa", 243, -1, -1]
]
],
["Oregon", 244, 24, 24,
[
  ["Eugene", 245, 25, 25],
  ["Medford", 246, 23, 23],
  ["Pendleton", 247, 24, 24],
  ["Portland", 248, 25, 25],
  ["Salem", 249, 24, 24]
]
],
["Pennsylvania", 250, 25, 25,
[
  ["Allentown", 251, 32, 32],
  ["Altoona", 252, 11, 11],
  ["Erie", 253, 19, 19],
  ["Harrisburg", 254, 23, 23],
  ["Philadelphia", 255, 47, 47],
  ["Pittsburgh", 256, 28, 28],
  ["Reading", 257, 24, 24],
  ["Scranton", 258, 24, 24],
  ["York", 259, 18, 18]
]
],
["Puerto Rico", 260, -5, -5,
[
  ["San Juan", 261, -5, -5]
]
],
["Rhode Island", 262, 39, 39,
[
  ["Bristol", 263, 39, 39],
  ["Coventry", 264, 39, 39],
  ["Cranston", 265, 39, 39],
  ["Newport", 266, 38, 38],
  ["Providence", 267, 39, 39],
  ["Warwick", 268, 39, 39]
]
],
["South Carolina", 269, 11, 11,
[
  ["Charleston", 270, 19, 19],
  ["Columbia", 271, 9, 9],
  ["Greenville", 272, 8, 8],
  ["Spartanburg", 273, 9, 9]
]
],
["South Dakota", 274, -3, -3,
[
  ["Aberdeen", 275, -5, -5],
  ["Pierre", 276, -3, -3],
  ["Rapid City", 277, -1, -1],
  ["Sioux Falls", 278, -4, -4]
]
],
["Tennessee", 279, 2, 2,
[
  ["Chattanooga", 280, 5, 5],
  ["Jackson", 281, -3, -3],
  ["Knoxville", 282, -5, -5],
  ["Memphis", 283, 6, 6],
  ["Nashville", 284, 8, 8]
]
],
["Texas", 285, 1, 1,
[
  ["Abilene", 286, -4, -4],
  ["Amarillo", 287, 0, 0],
  ["Austin", 288, -1, -1],
  ["Beaumont", 289, 3, 3],
  ["Corpus Christi", 290, 0, 0],
  ["Dallas", 291, 6, 6],
  ["El Paso", 292, -6, -6],
  ["Fort Worth", 293, 5, 5],
  ["Houston", 294, 8, 8],
  ["Lubbock", 295, 1, 1],
  ["Odessa", 296, 1, 1],
  ["San Antonio", 297, 1, 1],
  ["Waco", 298, -1, -1],
  ["Wichita Falls", 299, -1, -1]
]
],
["Utah", 300, 4, 4,
[
  ["Garden City", 301, 8, 8],
  ["Logan", 302, 0, 0],
  ["Ogden", 303, 0, 0],
  ["Price", 304, -3, -3],
  ["Provo", 305, 0, 0],
  ["Salt Lake City", 306, 1, 1],
  ["St. George", 307, 20, 20]
]
],
["Vermont", 308, 22, 22,
[
  ["Bennington", 309, 28, 28],
  ["Burlington", 310, 20, 20],
  ["Rutland", 311, 19, 19]
]
],
["Virginia", 312, 27, 27,
[
  ["Arlington", 313, 32, 32],
  ["Alexandria", 314, 34, 34],
  ["Norfolk", 315, 24, 24],
  ["Richmond", 316, 22, 22],
  ["Roanoke", 317, 22, 22]
]
],
["Washington", 318, 26, 26,
[
  ["Everett", 319, 32, 32],
  ["Seattle", 320, 29, 29],
  ["Spokane", 321, 23, 23],
  ["Tacoma", 322, 28, 28],
  ["Vancouver", 323, 23, 23],
  ["Yakima", 324, 24, 24]
]
],
["West Virginia", 325, 21, 21,
[
  ["Charleston", 326, 23, 23],
  ["Huntington", 327, 24, 24],
  ["Parkersburg", 328, 18, 18],
  ["Wheeling", 329, 20, 20]
]
],
["Wisconsin", 330, 28, 28,
[
  ["Eau Claire", 331, 25, 25],
  ["Green Bay", 332, 29, 29],
  ["La Crosse", 333, 22, 22],
  ["Madison", 334, 25, 25],
  ["Milwaukee", 335, 37, 37]
]
],
["Wyoming", 336, 1, 1,
[
  ["Casper", 337, -5, -5],
  ["Cheyenne", 338, 1, 1],
  ["Cody", 339, 1, 1],
  ["Rock Springs", 340, 6, 6]
]
]];

  var canada = [["Alberta", 341, 40, 40,
  [
    ["Calgary", 342, 43, 43],
    ["Edmonton", 343, 42, 42],
    ["Fort McMurray", 344, 44, 44],
    ["Lethbridge", 345, 42, 42],
    ["Lloydminster", 346, 35, 35],
    ["Medicine Hat", 347, 35, 35],
    ["Red Deer", 348, 35, 35]
  ]
],
["British Columbia", 349, 34, 34,
  [
    ["Prince George", 350, 33, 33],
    ["Vancouver", 351, 35, 35]
  ]
],
["Manitoba", 352, 30, 30,
  [
    ["Brondon", 353, 34, 34],
    ["Winnipeg", 354, 27, 27]
  ]
],
["New Brunswick", 355, 23, 23,
  [
    ["Bathurst", 356, 20, 20],
    ["Frederiction", 357, 27, 27],
    ["Moncton", 358, 22, 22]
  ]
],
["Newfoundland", 359, 28, 28,
  [
    ["Corner Brook", 360, 25, 25],
    ["St Johns", 361, 32, 32]
  ]
],
["Northwest Territories", 362, 38, 38,
  [
    ["Yellowknife", 363, 38, 38]
  ]
],
["Nova Scotia", 364, 27, 27,
  [
    ["Halifax", 365, 28, 28],
    ["Sydney", 366, 25, 25]
  ]
],
["Ontario", 367, 40, 40,
  [
    ["Sudbury", 368, 34, 34],
    ["Thunder Bay", 369, 41, 41],
    ["Timmins", 370, 41, 41],
    ["Toronto", 371, 43, 43]
  ]
],
["Prince Edward Island", 372, 18, 18,
  [
    ["Charlottetown", 373, 16, 16],
    ["Summerside", 374, 19, 19]
  ]
],
["Quebec", 375, 43, 43,
  [
    ["Montreal", 376, 44, 44],
    ["Quebec", 377, 43, 43],
    ["Rouyn-Noranda", 378, 43, 43]
  ]
],
["Saskatchewan", 379, 29, 29,
  [
    ["Prince Albert", 380, 18, 18],
    ["Regina", 381, 35, 35],
    ["Saskatoon", 382, 33, 33]
  ]
],
["Yukon", 383, 24, 24,
  [
    ["Whitehorse", 384, 24, 24]
  ]
]];
  
  

const selectUs = () => {
 setCountry(0);
 setState('0');
};

const selectCanada = () => {
setCountry(1);
setState('0');
};
  
  


const changeState = (event) => {
  setState(event.target.value);
}


  const handleChange = (event) => {
    setCountry(values => ({ ...values, [event.target.name]: event.target.value }));
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
      <li className={style.breadcrumb}> Other</li>
      <li className={`${style.breadcrumb} ${style.active}`}> Location</li>
      <li className={style.breadcrumb}> Summary</li>
    </div>
    <div className={style.intro}>Answer the questions to get a detailed cost summary for a new home.</div>
<h1 className={style.calcSectionTitle}>Location Information</h1>


{/* Select Country only US and Canada */}
<div className={style.subSection}>
  <h2 className={style.calcSubTitle}>Select Country</h2>
  <div className={style.explainerText}>
  <p>Select the country you live in. This will determine the cost of the materials. </p>
  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
    <input className={style.radioInput} type="radio" id="g1" name="country" value="0"  onChange={selectUs}  checked={country == 0}/> 
     <label className={style.radioLabel} for="g1">United States</label>
     <input className={style.radioInput} type="radio" id="g2" name="country" value="1"  onChange={selectCanada}  checked={country == 1}/>
     <label className={style.radioLabel} for="g2">Canada</label>
    </div>
  </div>
</div>



{/* Select State */}
<div className={style.subSection}>
  <h2 className={style.calcSubTitle}>Select State:</h2>
  <div className={style.explainerText}>
  Select the state in which your new home will be located.
  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
      <select className={style.selectInput} name="state" onChange={changeState}>
        <option value="0" >Select State</option>
        { country == 0 ? usa.map(state => ( <option>{state[0]}</option>) ) : canada.map(state => ( <option >{state[0]}</option>) )
        }
      </select>
    </div>
  </div>
</div>


{/* Select City */}

{ state != "0" ? <div className={style.subSection}>
  <h2 className={style.calcSubTitle}>Select City:</h2>
  <div className={style.explainerText}>
  Select the city in which your new home will be located.
  </div>
  <div className={style.inputRow}>
    <div className={style.inputs}>
      <select className={style.selectInput} name="city">
        <option value="0" disabled>Select City</option>
{ country == 0 ? usa.filter(f => f[0]== state).map(state => state[4].map(city => ( <option>{city[0]}</option>) )) : canada.filter(f => f[0]== state).map(state => state[4].map(city => ( <option>{city[0]}</option>) ))}

     
       
        </select>
    </div>
  </div>
</div> : null }


<div className={style.buttonRow}>
  <a href={'/other?' + searchParams.toString()} className={style.button}>Back</a>
  <a href={'/estimate?' + searchParams.toString()} className={style.button}>Caculate Estimate</a>
</div>





  </div>

  <Footer></Footer>
</div>;
};
export default Location