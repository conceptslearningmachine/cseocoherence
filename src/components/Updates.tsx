import * as React from "react";
import './ComponentPage.scss';
import { Link } from 'react-router-dom';
import './HomePage.scss';

const Updates = () => {

    return (  
        <div className="PageContent">
          
         <div className="GlobalHeader"><div className="Page-cseo-header">CSEO</div><b> Coherence</b> 
         <span className="contact-quicklinks"><Link to="/resources">Contact Us</Link></span>
          </div>

         <div className="PageContent-spacing">
         <div className="PageHeader"><h1>Updates</h1> 
         
         </div>
         <div className="med-spacing"></div>
         <p><b>Release 1.0.0. — September 30th, 2018</b></p>
        <p className="semibold">ADDED</p>
        <p>CSEO MVP design system site live.</p>
        </div>
        </div>
        
    );
}; 
export default Updates;