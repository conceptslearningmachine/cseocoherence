import * as React from "react";
import './ComponentPage.scss';
import { Link } from 'react-router-dom';
import { Highlight } from '@uifabric/example-app-base';
import './HomePage.scss';
import NavExpandedCollapsed from '../assets/nav/nav-collapsed-expanded.png';

const Navigation = () => {

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
         <div className="PageHeader"><h1>Navigation</h1>
         </div>
        {/* Navigation Intro w/ image Section */}
         <div className="Intro"><p>Navs (also called "left nav" or "navigation pane") provide links to the main areas of an app or a site. 
           In larger configurations, the Nav is always on-screen, usually on the left of the view. In smaller configurations, the Nav may
          collapse into a skinnier version or be completely hidden until the user taps an icon.</p></div>
        {/* Navigation Placeholder for more content */}
          <img src={NavExpandedCollapsed} alt="Illustration of Nav Collapsed." />
          <div className="med-spacing"></div>
          <div className="med-spacing"></div>

        {/* Navigation Code Section */}
        <div className="SubHeader">Fabric Component Usage</div>
        <div className="CodeIntro">This section provides guidance on customizing <a href="#">Office UI Fabric's </a> "Nav" component to reflect the CSEO design system. 
        You will be able to customize this component for your needs if you are developing your project using ReactJS. Refer to the <Link to="/DevelopGettingStarted">Get Started Page for Developers</Link> to set up
        your project using ReactJS.

        The default navigation contains an ellipses. To follow the CSEO design guidelines replace the ellipses with the "ChevronDown" icon located in the <a href="#">Fabric icon library</a>.
             
        <div className="CodeBody">The <b className="CodeHighlights">styles</b> prop allows you to control the styling of every part of a component. The root, the children, and even sub components. 
        You can use this prop to customize components based on given design direction, or you can create a brand new component with these custom styles. Below is an example of an Object based styling. 
        Learn more about styling Fabric components <a href="https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling#using-a-styleable-component" target="_blank" >here. </a></div>
        <div className="ComponentPage-code">
              <Highlight className="html">
                {`
// Define styling, split out styles for each area.
const styles: IComponentStyles {
  root: { /* styles */ },
  child1: ['className', { /* styles */ }],
  child2: { /* styles */ }
  subComponentStyles: {
    subComponent: {
      root: { /* styles */ },
      child1: { /* styles */ },
    }
  }
}`}
              </Highlight>
            </div>



        </div>
        </div>
        </div>
        
    );
}; 
export default Navigation;