import * as React from "react";
import './ComponentPage.scss';
import { Link } from 'react-router-dom';
import PrimaryCard from '../assets/card/primary-card.png';
import CardLevel1 from '../assets/card/level1-card.png';
import CardLevel2 from '../assets/card/level2-card.png';
import './HomePage.scss';

const Card = () => {

    return (  
        <div className="PageContent">
          
         <div className="GlobalHeader"><div className="Page-cseo-header">CSEO</div><b> Coherence</b> 
         <span className="contact-quicklinks"><a href="mailto:ssedesign_coherence@microsoft.com" >Contact Us</a></span>
          </div>
          
         <div className="PageContent-spacing">
         <div className="PageHeader"><h1>Cards</h1> </div>

         <div className="med-spacing"></div>
          <div className="med-spacing"></div>

         <div className="SubHeader">Primary</div>

         <div className="CardImage-spacing image-margin"><img className="image-width-75" src={PrimaryCard} alt="Illustration showing a Card component." /></div>
         <div className="SubHeader">Level 1 Dropdown</div>
         <div className="CardImage-spacing image-margin"><img className="image-width" src={CardLevel1} alt="Illustration showing a card with a button expanded." /></div>

         <div className="SubHeader">Level 2 Dropdown</div>
         <div className="CardImage-spacing image-margin"><img className="image-width" src={CardLevel2} alt="Illustration showing a card with a button expanded."/></div>

         <div className="med-spacing"></div>
                 {/* Card Code Section */}
        <div className="SubHeader">Fabric Component Usage</div>
        <div className="Content">
        This section provides guidance on the customizing the "DashboardCard" component that exists within <a href="https://github.com/OfficeDev/office-ui-fabric-react/" target="_blank">Office UI Fabric</a> framework. 
        You will be able to customize this component for your needs if you are developing your project using ReactJS. Refer to the <Link to="/DeveloperGetStarted">Get Started Page for Developers</Link> to set up
        your project using ReactJS. Remember that there a number of variations of the card.
       
       <p>For example, the default <b className="CodeHighlights">box-shadow</b> value for the card is set in 
       the <code>DashboardGridLayout.css</code> file and a snippet is shown below. Reference the <a href="https://github.com/OfficeDev/office-ui-fabric-react/" target="_blank">Fabric React Github site</a> for
        the most updated usage guidance.</p>
       <div className="code-snippet"> 
        <pre><code className='css'>
  {`.react-grid-item.react-draggable-dragging {
  transition: box-shadow 600ms;
  z-index: 3;
  will-change: transform;
  /* 64px Fluent Shadow Values */
  box-shadow: 0 4.8px 14.4px rgba(0, 0, 0, 0.18),
   0 25.6px 57.6px rgba(0, 0, 0, 0.22);
  background-color: rgba(255, 255, 255, 0.9);
}`}
</code></pre>
</div>
        <div className="med-spacing"></div>
        <p>The <b className="CodeHighlights">styles</b> prop allows you to control the styling of every part of a component. The root, the children, and even sub components. 
        You can use this prop to customize components based on given design direction, or you can create a brand new component with these custom styles. Below is an example of an Object based styling. 
        Learn more about styling Fabric components <a href="https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling#using-a-styleable-component" target="_blank" >here. </a></p>
        <div className="code-snippet"> 
        <pre><code className='javascript'>
  {`// Define styling, split out styles for each area.
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
        <div className="med-spacing"></div>
        </div>
        
        </div>
        </div>
        
    );
}; 
export default Card;