import * as React from "react";
import './ComponentPage.scss';
import { Link } from 'react-router-dom';
import './HomePage.scss';
import SampleIcons from '../assets/icon-page/icon-sample.png';

const Iconography = () => {

    return (  
        <div className="PageContent">
          
         <div className="GlobalHeader"><div className="Page-cseo-header">CSEO </div><b>Coherence</b> 
         <span className="contact-quicklinks"><Link to="/resources">Contact Us</Link></span>
        </div>

         <div className="PageContent-spacing">
         <div className="PageHeader"><h1>Iconography</h1> 
         
         </div>
        {/* Icon Intro w/ image Section */}
         <div className="Intro"><p>We use the standard Microsoft icon font, Segoe MDL2 Assets. This ensuring icons will look crisp and sharp on any 
             display, at any resolution, and at any size, as well as consistency across Microsoft products. If other formats are required, contact the Coherence team for guidance.</p>
              <p>Icons are typically 16px x 16px, except in rare circumstances. If you feel like you need icons at other sizes, consult with the Coherence team first.</p>
              </div>
              <div className="med-spacing"></div>
              
              <div className="SubHeader">Download our icons</div>
              <p><a href="" className="global-links" target="_blank">Segoe MDL2 Assets</a></p>
              <p><a href="" className="global-links" target="_blank">Fonts for Mac</a></p>

              <p>Windows 10 users have the font installed automatically</p>
              <div className="med-spacing"></div>
              <div className="SubHeader">Icon request</div>
              <p>If you need a new icon designed, please fill out our <a href="https://github.com/Microsoft/cseo-design/issues/new/choose" className="global-links" target="_blank">icon request form</a>.</p>
              <div className="med-spacing"></div>
              <div className="SubHeader">Icon samples</div>
              <img className="Image-spacing image-width-75" src={SampleIcons} alt="Illustration of sample Fabric Icons." />

        </div>
        </div>
        
    );
}; 
export default Iconography;