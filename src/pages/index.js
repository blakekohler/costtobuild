import * as React from "react"
import * as style from "./index.module.css";
import Header from '../components/header';
import Footer from "../components/footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faWarehouse } from '@fortawesome/free-solid-svg-icons'
import { faHammer } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faToilet } from '@fortawesome/free-solid-svg-icons'
import compass from '../images/compass.png';
import building from '../images/build.png';
import house from '../images/nearme.png';






const IndexPage = () => {
  return (
    <main >
      <title>Home Page</title>
      <Header></Header>
     <div className={style.darkHouse}>
       <div className={style.heroText}>
         <h1>Calculate Your Dream</h1>
         <h3>Use our <span className={style.free}>free</span> construction calculators to estimate the cost for your next project</h3>
       </div>
     </div>
     <div className={style.calcHolder}>
       <a className={style.calc}>
         <div className={style.iconHolder}>
         <div className={style.calcIcon}>
         <FontAwesomeIcon icon={faHome} />
         </div>
         </div>
        
         <div className={style.calcHeaderRow}>
           <h3 className={style.calcHeader}>Housing Calculator</h3>
         </div>
         <div className={style.calcInfo}>
         Determine the cost to build your next home
         </div>
         <div className={style.calcActionRow}>
          <div className={style.calcAction}>Calculate House Cost</div>
         </div>
       </a>
      
       <a className={style.calc}>
         <div className={style.iconHolder}>
         <div className={style.calcIcon}>
         <FontAwesomeIcon icon={faWarehouse} />
         </div>
         </div>
        
         <div className={style.calcHeaderRow}>
           <h3 className={style.calcHeader}>Garage Calculator</h3>
         </div>
         <div className={style.calcInfo}>
         Determine the cost to build a garage
         </div>
         <div className={style.calcActionRow}>
          <div className={style.calcAction}>Calculate Garage Cost</div>
         </div>
       </a>


       <a className={style.calc}>
         <div className={style.iconHolder}>
         <div className={style.calcIcon}>
         <FontAwesomeIcon icon={faHammer} />
         </div>
         </div>
        
         <div className={style.calcHeaderRow}>
           <h3 className={style.calcHeader}>Professional Estiamte Tool</h3>
         </div>
         <div className={style.calcInfo}>
         Are you a pro? Use our professional estimate tool to give quality estimates.
         </div>
         <div className={style.calcActionRow}>
          <div className={style.calcAction}>Start an Estimate</div>
         </div>
       </a>
     </div>

<section>
<div className={style.ourPlans}>
  <h2 className={style.sectionHeader}>  《 <span className={style.white}>Our Top Plans</span>  》</h2>
  <div className={style.planList}>
<div className={style.plan}>
<img className={style.planPic} src="https://www.crookstondesigns.com/plan_pictures/12050.00/picture1.jpg"/>
<div className={style.details}>
<h4>Rambled</h4>
<div>Square Footage: 2338 sf</div>
<div>Bedrooms: 4</div>
<div>Baths: 3</div>
</div>
<a className={style.viewPlan}>View Plan In Calculator</a>
</div>

<div className={style.plan}>
<img className={style.planPic} src="https://www.crookstondesigns.com/plan_pictures/12050.00/picture1.jpg"/>
<div className={style.details}>
<h4>Rambled</h4>
<div>Square Footage: 2338 sf</div>
<div>  <FontAwesomeIcon icon={faBed} /> Bedrooms: 4</div>
<div>  <FontAwesomeIcon icon={faToilet} />Baths: 3</div>
</div>
<a className={style.viewPlan}>View Plan In Calculator</a>
</div>



<div className={style.plan}>
<img className={style.planPic} src="https://www.crookstondesigns.com/plan_pictures/12050.00/picture1.jpg"/>
<div className={style.details}>
<h4>Rambled</h4>
<div>Square Footage: 2338 sf</div>
<div>  <FontAwesomeIcon icon={faBed} /> Bedrooms: 4</div>
<div>  <FontAwesomeIcon icon={faToilet} />Baths: 3</div>
</div>
<a className={style.viewPlan}>View Plan In Calculator</a>
</div>

<div className={style.plan}>
<img className={style.planPic} src="https://www.crookstondesigns.com/plan_pictures/12050.00/picture1.jpg"/>
<div className={style.details}>
<h4>Rambled</h4>
<div>Square Footage: 2338 sf</div>
<div className={style.bed}>  <FontAwesomeIcon icon={faBed} /> Bedrooms: 4</div>
<div className={style.bath}>  <FontAwesomeIcon icon={faToilet} />Baths: 3</div>
</div>
<a className={style.viewPlan}>View Plan In Calculator</a>
</div>


  </div>
</div>
</section>


{/* Services Near Me Section  */}
<section>
  <div className={style.services}>
    <div className={style.serviceRow}>
    <div className={style.service}>
      <div className={style.serviceIcon}>
      <img src={building} />
      </div>
      <h2 className={style.serviceHeader}>Find Builders</h2>
      <div className={style.serviceDescription}>View reviews and information about builders near you.</div>
      <a className={style.serviceLink}>View Builders</a>
          </div>

          <div className={style.service}>
      <div className={style.serviceIcon}>
      <img src={house} />
      </div>
      <h2 className={style.serviceHeader}>Find Homes</h2>
      <div className={style.serviceDescription}>View listing of new homes near me</div>
      <a className={style.serviceLink}>See Homes</a>
          </div>

          <div className={style.service}>
      <div className={style.serviceIcon}>
      <img src={compass} />
      </div>
      <h2 className={style.serviceHeader}>Find Designers</h2>
      <div className={style.serviceDescription}>View reviews and information about designers near you.</div>
      <a className={style.serviceLink}>View Designers</a>
          </div>
    </div>
   
  </div>
</section>





{/* Blog Section  */}
<section>
  <div className={style.blogHolder}>
    <h2 className={style.sectionHeader}>《 <span className={style.yellow}>From Our Blog</span> 》</h2>
    <div className={style.blogRow}>
      <div className={style.blog}>
        <div className={style.blogImg}>
          <img src="https://h7f7z2r7.stackpathcdn.com/sites/default/files/images/articles/housing-ap_1.jpg"/>
          <div className={style.blogDate}>
            <div className={style.day}></div> 
            <div className={style.month}></div>
          </div>
        </div>
        <div className={style.blogInfo}>
        <div className={style.blogTitle}>
          <h3>When it comes to your house, don't mess wit hthe rest, trust the best</h3>
        </div>
        <div className={style.author}>By Blake Kohler</div>
        <div className={style.description}>Same as saying through shrinking from toil and pain these cases perfectly simple.</div>
        <div className={style.readMore}><a>Read More ›</a></div>
        </div>
      </div>

      <div className={style.blog}>
        <div className={style.blogImg}>
          <img src="https://h7f7z2r7.stackpathcdn.com/sites/default/files/images/articles/housing-ap_1.jpg"/>
          <div className={style.blogDate}>
            <div className={style.day}></div> 
            <div className={style.month}></div>
          </div>
        </div>
        <div className={style.blogInfo}>
        <div className={style.blogTitle}>
          <h3>When it comes to your house, don't mess wit hthe rest, trust the best</h3>
        </div>
        <div className={style.author}>By Blake Kohler</div>
        <div className={style.description}>Same as saying through shrinking from toil and pain these cases perfectly simple.</div>
        <div className={style.readMore}><a>Read More ›</a></div>
        </div>
      </div>


      <div className={style.blog}>
        <div className={style.blogImg}>
          <img src="https://h7f7z2r7.stackpathcdn.com/sites/default/files/images/articles/housing-ap_1.jpg"/>
          <div className={style.blogDate}>
            <div className={style.day}></div> 
            <div className={style.month}></div>
          </div>
        </div>
        <div className={style.blogInfo}>
        <div className={style.blogTitle}>
          <h3>When it comes to your house, don't mess wit hthe rest, trust the best</h3>
        </div>
        <div className={style.author}>By Blake Kohler</div>
        <div className={style.description}>Same as saying through shrinking from toil and pain these cases perfectly simple.</div>
        <div className={style.readMore}><a>Read More ›</a></div>
        </div>
      </div>

      <div className={style.blog}>
        <div className={style.blogImg}>
          <img src="https://h7f7z2r7.stackpathcdn.com/sites/default/files/images/articles/housing-ap_1.jpg"/>
        </div>
        <div className={style.blogInfo}>
        <div className={style.blogTitle}>
          <h3>When it comes to your house, don't mess wit hthe rest, trust the best</h3>
        </div>
        <div className={style.author}>By Blake Kohler</div>
        <div className={style.description}>Same as saying through shrinking from toil and pain these cases perfectly simple.</div>
        <div className={style.readMore}><a>Read More ›</a></div>
        </div>
      </div>
    </div>
  </div>
</section>

<Footer></Footer>
    </main>
  )
}

export default IndexPage
