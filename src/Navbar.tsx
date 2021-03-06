import * as React from "react";
import { NavLink, Link } from 'react-router-dom';
import './components/ComponentPage.scss';


export class Navbar extends React.Component {

  public render() {
    return (
      <div className="side-nav">
        <div className="side-nav-sticky-scrolling">
          <Link to="/"><svg className="cseo-icon" width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="25.7474" height="28" fill="black" fillOpacity="0" transform="translate(1.5 2)" />
            <path d="M27.2146 8.86243L14.841 15.9191L2.59863 9.02428L15.0051 2L27.2146 8.86243Z" stroke="#0078D7" strokeWidth="2" strokeMiterlimit="10" />
            <path d="M27.2473 22.9432L14.8409 29.9999L2.63135 23.1051L15.005 16.0808L27.2473 22.9432Z" stroke="#0078D7" strokeWidth="2" strokeMiterlimit="10" />
            <path d="M1.5 23.2022V8.95947" stroke="#0078D7" strokeWidth="2" strokeMiterlimit="10" />
            <path d="M15.1111 30V2" stroke="#0078D7" strokeWidth="2" strokeMiterlimit="10" />
          </svg></Link>
          <ul className="nav-links">
            {/* <li className="nav-link">
              <NavLink className="nav-list" to="/overview" activeClassName="active">Overview</NavLink>
            </li> */}
            <li className="nav-link">
              <NavLink className="nav-list" to="/updates">Updates</NavLink>
            </li>
            <li className="nav-link">
              <NavLink className="nav-list" to="/resources">Resources</NavLink>
            </li>
            <li className="nav-link">
              <b className="nav-header">GET STARTED</b>
              <ul className="nav-sublist">
                <li className="sub-link">
                  <NavLink className="sub-list" to="/DesignGetStarted">Designers</NavLink>
                </li>
                <li className="sub-link">
                  <NavLink className="sub-list" to="/DeveloperGetStarted">Developers</NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-link">
              <b className="nav-header">STYLES</b>
              <ul className="nav-sublist">
                <li className="sub-link">
                  <NavLink className="sub-list" to="/styles/color">Color</NavLink>
                </li>
                <li className="sub-link">
                  <NavLink className="sub-list" to="/styles/grid">Grid</NavLink>
                </li>
                <li className="sub-link">
                  <NavLink className="sub-list" to="/styles/iconography">Iconography</NavLink>
                </li>
                <li className="sub-link">
                  <NavLink className="sub-list" to="/styles/typography">Typography</NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-link">
              <b className="nav-header">PATTERNS</b>
              <ul className="nav-sublist">
                <li className="sub-link">
                  <NavLink className="sub-list" to="/patterns/card">Card</NavLink>
                </li>
                <li className="sub-link">
                  <NavLink className="sub-list" to="/patterns/header">Header</NavLink>
                </li>
                <li className="sub-link">
                  <NavLink className="sub-list" to="/patterns/navigation">Navigation</NavLink>
                </li>

                {/* Empty space for Padding */}
                <li>
                  <Link to=""></Link>
                </li>
                {/* Empty space for Padding */}
                <li>
                  <Link to=""></Link>
                </li>
              </ul>
              {/* <img src={MicrosoftLogoJPG} alt="Illustration of Grid Legend." /> */}
            </li>

          </ul>

        </div>
      </div>

    );
  }
}
export default Navbar;