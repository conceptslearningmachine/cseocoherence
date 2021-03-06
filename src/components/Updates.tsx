import * as React from "react";
import './ComponentPage.scss';
import './HomePage.scss';
import { Link } from 'react-router-dom';

const Updates = () => {

    return (  
        <div className="PageContent">
          
          <div className="GlobalHeader"><div className="Page-cseo-header">CSEO </div><b>Coherence</b>
            <span className="contact-quicklinks"><Link to="/DesignGetStarted"  >For Designers</Link></span>
            <span className="contact-quicklinks"><Link to="/DeveloperGetStarted"  >For Developers</Link></span>
            </div>

         <div className="PageContent-spacing">
         <div className="PageHeader"><h1>Updates</h1> 
         
         </div>
         <div className="med-spacing"></div>
         <p><b>Release 1.0.0. — October 12th, 2018</b></p>
        <p className="semibold">ADDED</p>
        <p>CSEO MVP design system site live.</p>
        </div>
        </div>
        
    );
}; 
export default Updates;