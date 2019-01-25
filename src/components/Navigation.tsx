import * as React from "react";
import './ComponentPage.scss';
import { Link } from 'react-router-dom';
import './HomePage.scss';
import NavExpandedCollapsed from '../assets/nav/nav-collapsed-expanded.png';

const Navigation = () => {

    return (  
        <div className="PageContent">
          
          <div className="GlobalHeader"><div className="Page-cseo-header">CSEO </div><b>Coherence</b>
            <span className="contact-quicklinks"><Link to="/DesignGetStarted"  >For Designers</Link></span>
            <span className="contact-quicklinks"><Link to="/DeveloperGetStarted"  >For Developers</Link></span>
            </div>

         <div className="PageContent-spacing">
         <div className="PageHeader"><h1>Navigation</h1>
         </div>
        {/* Navigation Intro w/ image Section */}
         <div className="Intro"><p>The navigation pane provides links to distinctly different functional areas of the application 
           and allows for quickly switching views. Tree nesting is available, but generally not
            recommended; use on-page sub navigation instead, when possible. The Navigation pane can be open 
            or collapsed by default, and is togglable by the user. There are many potential iterations of the navigation - connect
             directly with the Coherence team for further guidance.</p></div>
        {/* Navigation Placeholder for more content */}
        <div>
          <img className="image-width-50" src={NavExpandedCollapsed} alt="Illustration of Nav Collapsed." />
          </div>
          <div className="med-spacing"></div>
          <div className="med-spacing"></div>

        {/* Navigation Code Section */}
        <div className="SubHeader">Fabric Component Usage</div>
        <div className="CodeIntro">This section provides guidance on customizing <a href="https://github.com/OfficeDev/office-ui-fabric-react" target="_blank">Office UI Fabric's </a> "Nav" component to reflect the CSEO design system. 
        You will be able to customize this component for your needs if you are developing your project using ReactJS. Refer to the <Link to="/DeveloperGetStarted">Get Started Page for Developers</Link> to set up
        your project using ReactJS.

        The default navigation contains an ellipses. To follow the CSEO design guidelines replace the ellipses with the "ChevronDown" icon located in the <a href="https://developer.microsoft.com/en-us/fabric#/styles/icons" target="_blank">Fabric icon library</a>.
             
        <div className="CodeBody">The <b className="CodeHighlights">styles</b> prop allows you to control the styling of every part of a component. The root, the children, and even sub components. 
        You can use this prop to customize components based on given design direction, or you can create a brand new component with these custom styles. Below is an example of an Object based styling. 
        Learn more about styling Fabric components <a href="https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling#using-a-styleable-component" target="_blank" >here. </a></div>
        <div className="code-snippet"> 
        <pre><code className='javascript'>
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
             </code></pre>
            </div>



        </div>
        </div>
        </div>
        
    );
}; 
export default Navigation;