import * as React from "react";
import './ComponentPage.scss';
//import { Link } from 'react-router-dom';
import './HomePage.scss';

const Resources = () => {

    return (  
        <div className="PageContent">
          
         <div className="GlobalHeader"><b>Coherence</b> 
         {/* <span className="Developer-quicklinks">Developer
            <br/> <p className="spacing">Get Fabric React</p>
            <br/> <p className="no-spacing">Get Fabric Core</p>
         </span> 
         <span className="Designer-quicklinks">Designer
         <br/> <p className="spacing">Get SSE Toolkit<br/> on Figma</p>
         </span> */}
          </div>

         <div className="PageContent-spacing">
         <div className="PageHeader"><h1>Resources</h1> 
         
         </div>
        {/* Icon Intro w/ image Section */}
         <div className="Intro"><p>CSEO Design System currently utilizes Fluent for Fabric. The library currently includes 9 theme colors and 11 neutral colors. Each has helper classes for text, 
         background, border, and hover states. When selecting colors, refer to the color accessibility guidance (PDF) to 
         ensure that your text can be ready by everyone. If you need to customize your theme, see the Theme generator.</p></div>
        {/* Icon Placeholder for more content */}
        <div className="IconImage-placeholder">
        </div>
        </div>
        </div>
        
    );
}; 
export default Resources;