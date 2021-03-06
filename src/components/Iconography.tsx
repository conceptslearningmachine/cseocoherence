import * as React from "react";
import './ComponentPage.scss';
import './HomePage.scss';
import { Link } from 'react-router-dom';
import SampleIcons from '../assets/icon-page/icon-sample.png';

const Iconography = () => {

    return (  
        <div className="PageContent">
          
          <div className="GlobalHeader"><div className="Page-cseo-header">CSEO </div><b>Coherence</b>
            <span className="contact-quicklinks"><Link to="/DesignGetStarted"  >For Designers</Link></span>
            <span className="contact-quicklinks"><Link to="/DeveloperGetStarted"  >For Developers</Link></span>
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
              <p><a className="global-links" href="https://microsoft.sharepoint.com/teams/BrandCentral/Pages/Bundles/Segoe_UI_fonts.aspx" target="_blank">Segoe UI fonts</a></p>
              <p><a  href="http://uni/DesignDepot.FrontEnd/#/iconLibraryResults?productId=45781&t=FULL%20MDL2%20Assets%7CFabric%20MDL2%20Assets&f=Font&theme=light&size=16" className="global-links" target="_blank">Icon fonts for Mac</a></p>

              <p>Windows 10 users have the font installed automatically</p>
              <div className="med-spacing"></div>
              <div className="SubHeader">Icon request</div>
              <p>If you need a new icon designed, please fill out our <a href="https://github.com/Microsoft/cseo-design/issues" className="global-links" target="_blank">icon request form</a>.</p>
              <div className="med-spacing"></div>
              <div className="SubHeader">Icon samples</div>
              <img className="Image-spacing" src={SampleIcons} alt="Illustration of sample Fabric Icons." />

        </div>
        </div>
        
    );
}; 
export default Iconography;