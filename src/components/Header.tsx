import * as React from "react";
import './ComponentPage.scss';
import { Link } from 'react-router-dom';
import { Highlight } from '@uifabric/example-app-base';
import './HomePage.scss';
import ChromeHeaderJPG from '../assets/header/Chrome-header.jpg';
import HeaderWireframeJPG from '../assets/header/header-wireframe.jpg';

const Header = () => {

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
        <div className="PageHeader"><h1>Header</h1>

        </div>
        {/* Header Intro w/ image Section */}
        <div className="Intro"><p>The CSEO header is a blend of the Fabric and Fluent UI styling.</p></div>
        {/* Header Placeholder for more content */}
        <div className="HeaderImage-placeholder">
          <img src={HeaderWireframeJPG} alt="Illustration of Header on wireframe layout." />
        </div>
        <div className="med-spacing"></div>
        <div className="Content">
          <p className="font-medium">The header tool located in our Figma UI kit allows you to expand or contract from left to
          right to fit the width of your window. Simply select the left or right bounding box and drag to the width that works
         for your layout. </p>
          <img className="image-width" src={ChromeHeaderJPG} alt="Illustration of Chrome Header." />
        </div>
        <div className="med-spacing"></div>


        {/* Header Code Section */}
        <div className="SubHeader">Fabric Component Usage</div>
        <div className="CodeIntro">This section provides general guidance on the creating a <b className="CodeHighlights">Header</b> component in a ReactJS application.
         Refer to the <Link to="/DevelopGettingStarted">Get Started Page for Developers</Link> to set up
         your project using ReactJS. We provide a sam
 
 
         <div className="Developer-steps">Step 1: Install office-ui-fabric-react package</div>
        <div className="CodeBody">You should be able to npm install and import the following Office UI Fabric components in your code, 
        as shown below:</div>
        
        <div className="ComponentPage-code">
        <Highlight className="html">
              {`import * as React from 'react';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import './App.scss';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import {
  Persona,
  PersonaSize,
  PersonaPresence
} from 'office-ui-fabric-react/lib/Persona';
import { TestImages } from 'office-ui-fabric-react/lib/common/TestImages';
`}
            </Highlight>
          </div>
          <div className="Developer-steps">Step 2: Add header to <b className="CodeHighlights">App.js</b> or <b className="CodeHighlights">App.tsx</b> file</div>
          <div className="CodeBody">Once you have installed and imported the dependencies, you can utilize the following code and place it in
          the <b className="CodeHighlights">render</b> function to return the header, as shown below:</div>
          <div className="ComponentPage-code">
          <Highlight className="html">
              {`
<div className="topBar">
<div className="headerLeft">
  <IconButton
    className={'headerWaffle'}
    menuIconProps={{iconName: 'WaffleOffice365'}}
    title="Waffle Menu"
    ariaLabel="Waffle Menu"
  />
  <div className="titleLogo">
    App Title
  </div>
</div>
<div className="headerRight">
  <IconButton
    className={'headerRightIcons'}
    menuIconProps={{iconName: 'Ringer'}}
    title="Notification"
    ariaLabel="Notification"
  />
  <IconButton
    className={'headerRightIcons'}
    menuIconProps={{iconName: 'Settings'}}
    title="Settings"
    ariaLabel="Settings"
  />
  <IconButton
    className={'headerRightIcons'}
    menuIconProps={{iconName: 'Help'}}
    title="Help"
    ariaLabel="Help"
  />

  <Persona
    className={'headerRightPersona'}
    imageUrl={TestImages.personaMale}
    size={PersonaSize.size28}
    presence={PersonaPresence.online}
  />
</div>
</div>`}
            </Highlight>
          </div>
          <div className="Developer-steps">Step 3: Add styling to header</div>
          <div className="CodeBody">Below is the <b className="CodeHighlights">.SCSS</b> snippet accompanying the code shown above.</div>
          <div className="ComponentPage-code">
            <Highlight className="html">
              {`.topBar {
  grid-area: top;
  flex-direction: row;
  display: flex;
  background-color: #DDD;
  color: #000;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;

  .headerLeft {
    display: flex;
    align-items: center;

    button {
      color: #000; 
      width: 48px;
      height: 48px;
        
      .ms-Button-menuIcon {
        font-size: 16px;
      }
    }

    .titleLogo {
      font-size: 16px;
      font-weight: 600;
      padding-left: 6px;
      @media (min-width: 400) {
        font-size: 16px;
      }
    }
  }

  .headerRight {
    display: flex;
    align-items: center;

    button {
      color: #fff; 
      width: 48px;
      height: 48px;
      display: none;
      
      @media (min-width: 375) {
        display: flex;
      }

      div i {
        font-size: 16px;
      }
    }

    .headerRightPersona {
      align-items: center;
      display: block;
      margin: 0 16px 0 8px;
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
export default Header;