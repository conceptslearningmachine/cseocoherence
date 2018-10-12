import * as React from "react";
import './ComponentPage.scss';
import './Color.scss';
//import { Link } from 'react-router-dom';
import './HomePage.scss';

const Color = () => {

    return (
        <div className="PageContent">

            <div className="GlobalHeader"><div className="Page-cseo-header">CSEO </div><b>Coherence</b>
            <span className="contact-quicklinks"> <a href="" target="_blank">Contact Us</a></span>
            </div>

            <div className="PageContent-spacing">
                <div className="PageHeader"><h1>Color</h1>

                </div>            

                <div className="med-spacing"></div>
                {/* Chrome  palette section */}
                <div className="SubHeader">Text</div>

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
                            <li>Disabled text caption on gray button</li>
                            <li>#A6A6A6</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette hyperlink000"></div>
                        <ul className="color-info">
                            <li>Hyperlink</li>
                            <li>#0078D4</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette hyperlink100"></div>
                        <ul className="color-info">
                            <li>Hyperlink hover</li>
                            <li>#106EBE</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette hyperlink200"></div>
                        <ul className="color-info">
                            <li>Hyperlink selected</li>
                            <li>#005A9E</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette hyperlink-disabled"></div>
                        <ul className="color-info">
                            <li>Hyperlink disabled</li>
                            <li>#C8C6C4</li>
                        </ul>
                    </div>
                </div>

                 {/* Chrome  palette section */}
                 <div className="SubHeader">Surfaces</div>
                {/* Color Palette for Neutrals */}
                <div className="palette-spacing">
                    <div className="color-palette-neutral">
                        <div className="color-palette light000"></div>
                        <ul className="color-info">
                            <li>Primary</li>
                            <li>#FFFFFF</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette light100"></div>
                        <ul className="color-info">
                            <li>Secondary</li>
                            <li>#FAFAFA</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette light200"></div>
                        <ul className="color-info">
                            <li>Tertiary</li>
                            <li>#F6F6F6</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette light300"></div>
                        <ul className="color-info">
                            <li>Navigation</li>
                            <li>#F2F2F2</li>
                        </ul>
                    </div>
                </div>
                {/* App  palette section */}
                <div className="SubHeader">App theme surfaces</div>
                {/* Color Palette for alerts */}
                <div className="palette-spacing">
                    <div className="color-palette-neutral">
                        <div className="color-palette app-theme-1"></div>
                        <ul className="color-info">
                            <li>App theme</li>
                            <li>#0078D4</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette app-theme-2"></div>
                        <ul className="color-info">
                            <li>Text and icons</li>
                            <li>#FFFFFF</li>
                        </ul>   
                    </div>
                    <p>* For interactive states on App theme backgrounds, use the Primary button state definitions</p>
                </div>
                {/* Icons palette section */}
                <div className="SubHeader">Notification icons</div>
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
                            <li>#D83B01</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette icons-success"></div>
                        <ul className="color-info">
                            <li>Success</li>
                            <li>#107C10</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette error"></div>
                        <ul className="color-info">
                            <li>Error block</li>
                            <li>#A80000</li>
                        </ul>
                    </div>
                </div>

                {/* Alerts  palette section */}
                <div className="SubHeader">Notifications background</div>
                {/* Color Palette for alerts */}
                <div className="palette-spacing">
                    <div className="color-palette-neutral">
                        <div className="color-palette alert-warning"></div>
                        <ul className="color-info">
                            <li>Warning</li>
                            <li>#FFFF4CE</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette alert-warning-severe"></div>
                        <ul className="color-info">
                            <li>Severe Warning</li>
                            <li>#FED9CC</li>
                        </ul>
                    </div>
                    <div className="color-palette-neutral">
                        <div className="color-palette alert-success"></div>
                        <ul className="color-info">
                            <li>Success</li>
                            <li>#DFF6DD</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default Color;
