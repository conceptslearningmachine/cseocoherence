import * as React from "react";
import './ComponentPage.scss';
import { Link } from 'react-router-dom';
import './HomePage.scss';
import GridLegendJPG from '../assets/grid/grid-legend.jpg';
import GridBreakboint1368 from '../assets/grid/breakpoint-1368.png';
import GridBreakboint1838 from '../assets/grid/breakpoint-1838.png';
const Grid = () => {

    return (
        <div className="PageContent">

            <div className="GlobalHeader"><div className="Page-cseo-header">CSEO </div><b>Coherence</b>
            <span className="contact-quicklinks"><Link to="/resources">Contact Us</Link></span>
            </div>

            <div className="PageContent-spacing">
                <div className="PageHeader"><h1>Grid</h1>

                </div>
                {/* Grid Intro w/ image Section */}
                <div className="Intro"><p>Our system is based off of a 12 column framework for 4 breakpoints.
             The mobile perspective is still being devloped.<br /><br />
                    Download our <a href="#">UI Kit</a> from Figma to use the art, or click the grid to see a larger image.</p></div>
                {/* Grid Placeholder for more content */}
                <div className="med-spacing"></div>
                <div className="GridImage-placeholder">
                    <img src={GridLegendJPG} alt="Illustration of Grid Legend." />
                </div>
                
                <div className="med-spacing"></div>
                <div className="GridImage-placeholder">
                <p><b>1368 px</b></p>
                    <img className="image-width-90" src={GridBreakboint1368} alt="Illustration of Grid Breakpoint." />
                </div>
                
                <div className="med-spacing"></div>
                <div className="GridImage-placeholder">
                <p><b>1838 px</b></p>
                    <img className="image-width-90" src={GridBreakboint1838} alt="Illustration of Grid Breakpoint." />
                </div>
            </div>
        </div>
    );
};
export default Grid;