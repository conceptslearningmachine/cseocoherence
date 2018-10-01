import * as React from "react";
import './ComponentPage.scss';
//import { Link } from 'react-router-dom';
import './HomePage.scss';
import './Typography.scss';
import FontRampGreen from '../assets/type/green-font-ramp.png';
import FontRamp from '../assets/type/font-ramp.png';
const Typography = () => {

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
        <div className="PageHeader"><h1>Typography</h1>

        </div>
        {/* Typography Intro w/ image Section */}
        <div className="Intro">Our font family is Segoe UI. The typeramp created for the CSEO Design System 
        uses some of the text sizes from Fabric, while aligning closer to the M365 typography with text weights. 
        This means that each class sets the font type, text size, and text weight.</div>

        <div className="med-spacing"></div>
        <div className="med-spacing"></div>

        <div className="TypographyImage-placeholder">

        <img src={FontRampGreen} alt="Illustration of Green Font ramp." />
        <div className="SubHeader">Download fonts</div>
        <a href="" className="global-links" target="_blank"> Segoe UI</a>
        <div className="med-spacing"></div>
        <div className="SubHeader">Type ramp</div>
        <img src={FontRamp} alt="Illustration of a general font ramp." />
          {/* <table>
            <thead></thead>
            <tbody>
              <tr className="type38">
                <td className="type-col-1">Hero 38</td>
                <td className="type-col-2">Segoe UI 38 bold</td>
              </tr>
              <tr className="type28">
                <td className="type-col-1">Hero 28</td>
                <td className="type-col-2">Segoe UI 28 bold</td>
              </tr>
              <tr className="type24">
                <td className="type-col-1">Hero 24</td>
                <td className="type-col-2">Segoe UI 24 bold</td>
              </tr>
              <tr className="type18">
                <td className="type-col-1">Subheader 18</td>
                <td className="type-col-2">Segoe UI 18 semibold</td>
              </tr>
              <tr className="type16">
                <td className="type-col-1">Subheader 16</td>
                <td className="type-col-2">Segoe UI 16 regular</td>
              </tr>
              <tr className="type14-body">
                <td className="type-col-1">Body 14</td>
                <td className="type-col-2">Segoe UI 14 semibold</td>
              </tr>
              <tr className="type14-secondary">
                <td className="type-col-1">Secondary 14</td>
                <td className="type-col-2">Segoe UI 14 regular</td>
              </tr>
              <tr className="type12">
                <td className="type-col-1">Body 12</td>
                <td className="type-col-2">Segoe UI 12 regular</td>
              </tr>
              <tr className="type10">
                <td className="type-col-1">Body 10</td>
                <td className="type-col-2">Segoe UI 10 regular</td>
              </tr>
            </tbody>
          </table> */}


        </div>
      </div>
    </div>

  );
};
export default Typography;