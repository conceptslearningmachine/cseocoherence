import * as React from "react";
import './ComponentPage.scss';
import './Color.scss';
//import { Link } from 'react-router-dom';
import './HomePage.scss';

const Color = () => {

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
                <div className="PageHeader"><h1>Color</h1>

                </div>
                {/* Color Intro Section */}
                <div className="Intro"><p>CSEO Design System currently utilizes Fluent for Fabric. The library currently includes 9 theme colors and 11 neutral colors. Each has helper classes for text,
                background, border, and hover states. When selecting colors, refer to the color accessibility guidance (PDF) to
         ensure that your text can be ready by everyone. If you need to customize your theme, see the Theme generator.</p></div>
                {/* Chrome  palette section */}
                <div className="SubHeader">Chrome</div>
                <div className="Content">
                <p>CSEO design system uses Fluent's bright theme color ramp which consists of 8 shades of light gray colors and pure white.
            These colors are applied only on backgrounds according a defined hierarchy.</p>
            </div>

                 {/* Color Palette for Neutrals */}
                <div className="palette-spacing">
                    <div className="color-palette-neutral">
                        <div className="color-palette light000"></div>
                        <ul className="color-info">
                            <li>Light 000</li>
                            <li>#ffffff</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette light100"></div>
                        <ul className="color-info">
                            <li>Light 100</li>
                            <li>#fafafa</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette light200"></div>
                        <ul className="color-info">
                            <li>Light 200</li>
                            <li>#f6f6f6</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette light300"></div>
                        <ul className="color-info">
                            <li>Light 300</li>
                            <li>#f2f2f2</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette light400"></div>
                        <ul className="color-info">
                            <li>Light 400</li>
                            <li>#e9e9e9</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette light500"></div>
                        <ul className="color-info">
                            <li>Light 500</li>
                            <li>#e9e9e9</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette light600"></div>
                        <ul className="color-info">
                            <li>Light 600</li>
                            <li>#e9e9e9</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette light700"></div>
                        <ul className="color-info">
                            <li>Light 700</li>
                            <li>#dddddd</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette light800"></div>
                        <ul className="color-info">
                            <li>Light 800</li>
                            <li>#c4c4c4</li>
                        </ul>
                    </div>
                </div>



                {/* Chrome  palette section */}
                <div className="SubHeader">Text</div>
                <div className="Content">
                <p>CSEO design system uses Fabric's text theme color ramp which consists of 8 shades of shades of gray colors. We’ve included 
                    three hyperlink colors to align with accessibililty.</p>
                </div>
                {/* Color Palette for text */}
                <div className="palette-spacing">
                    <div className="color-palette-neutral">
                        <div className="color-palette primary"></div>
                        <ul className="color-info">
                            <li>Primary</li>
                            <li>#333333</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette secondary"></div>
                        <ul className="color-info">
                            <li>Secondary</li>
                            <li>#666666</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette disabled"></div>
                        <ul className="color-info">
                            <li>Disabled</li>
                            <li>#a6a6a6</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette hyperlink000"></div>
                        <ul className="color-info">
                            <li>Hyperlink</li>
                            <li>#0078d4</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette hyperlink100"></div>
                        <ul className="color-info">
                            <li>Hyperlink</li>
                            <li>#106ebe</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette hyperlink200"></div>
                        <ul className="color-info">
                            <li>Hyperlink</li>
                            <li>#005a9e</li>
                        </ul>
                    </div>
                </div>



                 {/* Icons palette section */}
                 <div className="SubHeader">Icons</div>
                {/* Color Palette for Icons */}
                <div className="palette-spacing">
                    <div className="color-palette-neutral">
                        <div className="color-palette icons-warning"></div>
                        <ul className="color-info">
                            <li>Warning</li>
                            <li>#797673</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette icons-warning-severe"></div>
                        <ul className="color-info">
                            <li>Severe Warning</li>
                            <li>#d83b01</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette icons-success"></div>
                        <ul className="color-info">
                            <li>Success</li>
                            <li>#107c10</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette error"></div>
                        <ul className="color-info">
                            <li>Error block</li>
                            <li>#a80000</li>
                        </ul>
                    </div>
                </div>


                {/* Alerts  palette section */}
                <div className="SubHeader">Icons</div>
                {/* Color Palette for alerts */}
                <div className="palette-spacing">
                    <div className="color-palette-neutral">
                        <div className="color-palette alert-warning"></div>
                        <ul className="color-info">
                            <li>Warning</li>
                            <li>#fff4ce</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette alert-warning-severe"></div>
                        <ul className="color-info">
                            <li>Severe Warning</li>
                            <li>#fed9cc</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette alert-success"></div>
                        <ul className="color-info">
                            <li>Success</li>
                            <li>#dff6dd</li>
                        </ul>
                    </div>
                </div>


                                {/* Data viz  palette section */}
                                <div className="SubHeader">Data Visualization</div>
                {/* Color Palette for data viz */}
                <div className="palette-spacing">

                </div>
            </div>
        </div>

    );
};
export default Color;