import * as React from "react";
import './ComponentPage.scss';
import { Link } from 'react-router-dom';
import CardExampleJPG from '../assets/small-card.jpg';
import CardExampleExpand from '../assets/card/card-small-expand-icon.png';
import CardExampleHyperlink from '../assets/card/card-small-hyperlink.png';
import CardExampleDetails from '../assets/card/card-overflow-details.png';
import { Highlight } from '@uifabric/example-app-base';
import './HomePage.scss';

const Card = () => {

    return (  
        <div className="PageContent">
          
         <div className="GlobalHeader"><b>Coherence</b> 
         <span className="contact-quicklinks"><Link to="/resources">Contact Us</Link></span>
          </div>

         <div className="PageContent-spacing">
         <div className="PageHeader"><h1>Card</h1> 
         
         </div>
        {/* Card Intro w/ image Section */}
         <div className="Intro"><p>Brief introduction about the SSE card system, from where it originates (M365 card) 
         and how it has been adopted to fit SSE needs. About 4-5 lines of text. Brief introduction about the SSE card system, 
         from where it originates (M365 card) and how it has been adopted to fit SSE needs. About 4-5 lines of text.</p></div>
         <div className="med-spacing"></div>
         <div className="SubHeader">Card types</div>
         Card with Overflow menu
        <div className="CardImage-spacing"><img src={CardExampleJPG} alt="Illustration showing a Card component." width="400" /></div>
        Card with expand-collapse functionality
        <div className="CardImage-spacing"><img src={CardExampleExpand} alt="Illustration showing a small Card with expand and collapse." width="400" /></div>
        Card with  external hyperlink to second level view
        <div className="CardImage-spacing"><img src={CardExampleHyperlink} alt="Illustration showing a small Card with an external hyperlink." width="400" /></div>
        <div className="SubHeader">Card overflow patterns</div>
        <div className="CardImage-spacing"><img src={CardExampleDetails} alt="Illustration showing a small Card with overflow and details."  /></div>

        {/* Card Code Section */}
        <div className="SubHeader">Fabric Component Usage</div>
        <div className="CodeIntro">This section provides guidance on the customizing the "DashboardCard" component that exists within <a href="#">Office UI Fabric</a> framework. 
        You will be able to customize this component for your needs if you are developing your project using ReactJS. Refer to the <Link to="/DevelopGettingStarted">Get Started Page for Developers</Link> to set up
        your project using ReactJS. Remember that there a number of variations of the card.

        <div className="CodeBody">For example, the default <b className="CodeHighlights">box-shadow</b> value for the card is set in the <code>DashboardGridLayout.css</code> file and a snippet is shown below. Reference the <a href="#">Fabric React Github site</a> for the most updated usage guidance. </div>
        <div className="ComponentPage-code">
              <Highlight className="html">
                {`.react-grid-item.react-draggable-dragging {
  transition: box-shadow 600ms;
  z-index: 3;
  will-change: transform;
  /* 64px Fluent Shadow Values */
  box-shadow: 0 4.8px 14.4px rgba(0, 0, 0, 0.18), 0 25.6px 57.6px rgba(0, 0, 0, 0.22);
  background-color: rgba(255, 255, 255, 0.9);
}`}
              </Highlight>
            </div>


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
export default Card;