import * as React from "react";
import './ComponentPage.scss';
import './HomePage.scss';
import './Typography.scss';
import { Link } from 'react-router-dom';
import FontRampGreen from '../assets/type/green-font-ramp.png';
//import FontRamp from '../assets/type/font-ramp.png';
const Typography = () => {

  return (
    <div className="PageContent">

     <div className="GlobalHeader"><div className="Page-cseo-header">CSEO </div><b>Coherence</b>
            <span className="contact-quicklinks"><Link to="/DesignGetStarted"  >For Designers</Link></span>
            <span className="contact-quicklinks"><Link to="/DeveloperGetStarted"  >For Developers</Link></span>
            </div>

      <div className="PageContent-spacing">
        <div className="PageHeader"><h1>Typography</h1>

        </div>
        {/* Typography Intro w/ image Section */}
        <div className="Intro">Consistent with all Microsoft products, We use the Segoe UI font family.</div>
        <div className="med-spacing"></div>
        <div className="SubHeader">Download fonts</div>
        <p>Windows machines come with Segoe UI pre-installed; for Mac, download here: <a href="https://microsoft.sharepoint.com/teams/BrandCentral/Pages/Bundles/Segoe_UI_fonts.aspx" className="global-links" target="_blank">Segoe UI</a></p>
        <div className="med-spacing"></div>
        <div className="med-spacing"></div>

        <div className="image-margin">
        <img className="image-width"src={FontRampGreen} alt="Illustration of Green Font ramp." />
        </div>
        <div className="SubHeader">Type ramp</div>
        <div className="med-spacing"></div>
        {/* <img className="Image-spacing" src={FontRamp} alt="Illustration of a general font ramp." /> */}
          <table>
            <thead></thead>
            <tbody>
              <tr className="type38">
                <td className="type-col-1">Aa</td>
                <td className="type-col-2">Hero Segoe UI 38 bold</td>
              </tr>
              <tr className="type28">
                <td className="type-col-1">Aa</td>
                <td className="type-col-2">Subhero Segoe UI 28 bold</td>
              </tr>
              <tr className="type24">
                <td className="type-col-1">Aa</td>
                <td className="type-col-2">Header Segoe UI 24 bold</td>
              </tr>
              <tr className="type18">
                <td className="type-col-1">Aa</td>
                <td className="type-col-2">Subheader Segoe UI 18 semibold</td>
              </tr>
              <tr className="type16">
                <td className="type-col-1">Aa</td>
                <td className="type-col-2">Subheader Alt Segoe UI 16 regular</td>
              </tr>
              <tr className="type14-body">
                <td className="type-col-1">Aa</td>
                <td className="type-col-2">Base Segoe UI 14 semibold</td>
              </tr>
              <tr className="type14-secondary">
                <td className="type-col-1">Aa</td>
                <td className="type-col-2">Body Segoe UI 14 regular</td>
              </tr>
              <tr className="type12">
                <td className="type-col-1">Aa</td>
                <td className="type-col-2">Caption Segoe UI 12 regular</td>
              </tr>
              <tr className="type10">
                <td className="type-col-1">Aa</td>
                <td className="type-col-2">Caption Alt Segoe UI 10 regular</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>

  );
};
export default Typography;