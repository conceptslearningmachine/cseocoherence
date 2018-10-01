import * as React from "react";
import './ComponentPage.scss';
//import { Link } from 'react-router-dom';
import './HomePage.scss';
import SampleIcons from '../assets/icon-page/icon-sample.png';
import SizeReference from '../assets/icon-page/size-reference.png';

const Iconography = () => {

    return (  
        <div className="PageContent">
          
         <div className="GlobalHeader"><div className="Page-cseo-header">CSEO </div><b>Coherence</b> 
         {/* <span className="Developer-quicklinks">Developer
            <br/> <p className="spacing">Get Fabric React</p>
            <br/> <p className="no-spacing">Get Fabric Core</p>
         </span> 
         <span className="Designer-quicklinks">Designer
         <br/> <p className="spacing">Get SSE Toolkit<br/> on Figma</p>
         </span> */}
          </div>

         <div className="PageContent-spacing">
         <div className="PageHeader"><h1>Iconography</h1> 
         
         </div>
        {/* Icon Intro w/ image Section */}
         <div className="Intro"><p>Microsoft provides over 1000 icons in the form of the Segoe MDL2 Assets font. It might not be intuitive to
              get an icon from a font, but our font display technology means these icons will look crisp and sharp on any display, at any resolution, 
              and at any size.</p>
              <p>Good icons harmonize with typography and with the rest of the design language. They don’t mix metaphors, and they communicate only
                   what’s needed, as speedily and simply as possible. This article describes icons within your app.</p>
              </div>
              <div className="med-spacing"></div>
              <div className="SubHeader">Sample of Fabric icons</div>
              <img src={SampleIcons} alt="Illustration of sample Fabric Icons." />
              <div className="med-spacing"></div>
              <div className="SubHeader">Download our icons</div>
              <p><a href="" className="global-links" target="_blank">Fabric icons</a></p>
              <p><a href="" className="global-links" target="_blank">Full MDL Assets</a></p>
              <p><a href="" className="global-links" target="_blank">Fonts for Mac</a></p>

              <p>Fonts for Windows:<br/> If you’re using Windows 10, the font is already installed.</p>
              <div className="med-spacing"></div>
              <div className="SubHeader">Icon request</div>
              <p>If you need a new icon designed, please fill out our <a href="" className="global-links" target="_blank">service request form</a>.</p>

              <div className="med-spacing"></div>
              <div className="SubHeader">Size reference</div>
              <img src={SizeReference} alt="Illustration of Icon Size reference." />
        </div>
        </div>
        
    );
}; 
export default Iconography;