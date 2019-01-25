import * as React from "react";
import './ComponentPage.scss';
import HeaderBlue from '../assets/header/header-blue.png';
import HeaderBlack from '../assets/header/header-black.png';
import HeaderGray from '../assets/header/header-gray.png';
import { Link } from 'react-router-dom';
//import Highlight from 'react-highlight';
import './HomePage.scss';

const Header = () => {

    return (  
        <div className="PageContent">
          
          <div className="GlobalHeader"><div className="Page-cseo-header">CSEO </div><b>Coherence</b>
            <span className="contact-quicklinks"><Link to="/DesignGetStarted"  >For Designers</Link></span>
            <span className="contact-quicklinks"><Link to="/DeveloperGetStarted"  >For Developers</Link></span>
            </div>
          

         <div className="PageContent-spacing">
         <div className="PageHeader"><h1>Header</h1> </div>
         <div className="Intro"><p>The header is always at the top of the application as an identifier 
           for the user to quickly understand which application they are in. The header will include the app name and icons if neccessary. 
           Please contact the Coherence team for further guidance.</p></div>
         <p className="semibold">
           <div className="sm-spacing">App Theme</div>
         <img className="image-width-75 Image-spacing" src={HeaderBlue} alt="Illustration of blue Chrome Header."/>
         <div className="sm-spacing">Neutral dark</div>
         <img className="image-width-75 Image-spacing" src={HeaderBlack} alt="Illustration of black Chrome Header." />
         <div className="sm-spacing">Neutral Light</div>
          <img className="image-width-75 Image-spacing" src={HeaderGray} alt="Illustration of gray Chrome Header." />
          </p>

        <div className="med-spacing"></div>
        <div className="med-spacing"></div>

        <div className="SubHeader">Fabric Component Usage</div>
        <div className="Content">
        <div className="Developer-steps">Step 1: Import office-ui-fabric-react package</div>
        <div className="CodeBody">You should be able to npm install and import the following Office UI Fabric components in your code, 
        as shown below:</div>
       <div className="code-snippet"> 
        <pre><code className='javascript'>
  {`import * as React from 'react';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import './App.scss';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import {
  Persona,
  PersonaSize,
  PersonaPresence
} from 'office-ui-fabric-react/lib/Persona';
import { TestImages } from 'office-ui-fabric-react/lib/common/TestImages';`}
</code></pre>
</div>

        <div className="Developer-steps">Step 2: Add header to <b className="CodeHighlights">App.js</b> or <b className="CodeHighlights">App.tsx</b> file</div>
          <div className="CodeBody">Once you have installed and imported the dependencies, you can utilize the following code and place it in
          the <b className="CodeHighlights">render</b> function to return the header, as shown below:</div>
           <div className="code-snippet"> 
        <pre><code className='javascript'>
        {`<div className="topBar">
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
        </code></pre>
        </div>
        

        <div className="Developer-steps">Step 3: Add styling to header</div>
        <div className="CodeBody">Below is the <b className="CodeHighlights">.SCSS</b> snippet accompanying the code shown above.</div>
        <div className="code-snippet"> 
        <pre><code className='javascript'>
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
        </code></pre>
        </div>

        </div>
        
        </div>
        </div>
        
    );
}; 
export default Header;