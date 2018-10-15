import * as React from "react";
import './ComponentPage.scss';
import './HomePage.scss';
import BaseGrid from '../assets/grid/breakpoint-1368.png';
import GridBreakboint1838 from '../assets/grid/1838px.png';
import GridBreakboint1255 from '../assets/grid/1255px.png';
import GridBreakboint1368 from '../assets/grid/1368px.png';
import GridBreakboint2241 from '../assets/grid/2241px.png';
const Grid = () => {

    return (
        <div className="PageContent">

            <div className="GlobalHeader"><div className="Page-cseo-header">CSEO </div><b>Coherence</b>
            <span className="contact-quicklinks"><a href="mailto:ssedesign_coherence@microsoft.com" >Contact Us</a></span>
            </div>

            <div className="PageContent-spacing">
                <div className="PageHeader"><h1>Grid</h1>

                </div>
                {/* Grid Intro w/ image Section */}
                <div className="Intro"><p>Our system is based off of a 12 column framework for 4 breakpoints.
             The mobile perspective is still being devloped.<br /><br />
                    Download our <a href="https://www.figma.com/file/p8OUJlr3v1vYc4ra1V5X0I/CSEO.DESIGN_TOOLKIT-10-1-08-Copy?node-id=7%3A131" target="_blank">UI Kit</a> from Figma to use the art, or click the grid to see a larger image.</p></div>
                {/* Grid Placeholder for more content */}
                <div className="med-spacing"></div>
                <div className="header-small">Key:</div>
                <table className="grid-legend-table-style">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>
                            <td className="grid-legend-col"><div className="grid-legend-colors columns"></div></td>
                              Columns  
                            </td>
                            
                        </tr>

                        <tr>
                            <td>
                            <td className="grid-legend-col"><div className="grid-legend-colors gutters"></div></td>
                               Gutters
                            </td>
                            
                        </tr>
                        <tr>
                            <td>
                            <td className="grid-legend-col"><div className="grid-legend-colors margins"></div></td>
                            Margins
                           </td>           
                        </tr>
                    </tbody>
                </table>
                <div className="med-spacing"></div>
                <div className="GridImage-placeholder">
                <p className="header-small">Base grid</p>
                    <img className="image-width-95" src={BaseGrid} alt="Illustration of Grid Breakpoint." />
                </div>
                
                <div className="med-spacing"></div>
                <div className="GridImage-placeholder">
                <p className="header-small">1255 px</p>
                    <img className="image-width-95" src={GridBreakboint1255} alt="Illustration of Grid Breakpoint." />
                </div>
                <div className="GridImage-placeholder">
                <p className="header-small">1368 px</p>
                    <img className="image-width-95" src={GridBreakboint1368} alt="Illustration of Grid Breakpoint." />
                </div>
                <div className="GridImage-placeholder">
                <p className="header-small">1838 px</p>
                    <img className="image-width-95" src={GridBreakboint1838} alt="Illustration of Grid Breakpoint." />
                </div>
                <div className="GridImage-placeholder">
                <p className="header-small">2241 px</p>
                    <img className="image-width-95" src={GridBreakboint2241} alt="Illustration of Grid Breakpoint." />
                </div>
            </div>
        </div>
    );
};
export default Grid;