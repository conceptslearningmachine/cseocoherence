import * as React from "react";
import './ComponentPage.scss';
import './Color.scss';
import './HomePage.scss';

const Color = () => {

    return (
        <div className="PageContent">

            <div className="GlobalHeader"><div className="Page-cseo-header">CSEO </div><b>Coherence</b>
            <span className="contact-quicklinks"><a href="mailto:ssedesign_coherence@microsoft.com" >Contact Us</a></span>
            </div>

            <div className="PageContent-spacing">
                <div className="PageHeader"><h1>Color</h1>

                </div>

                <div className="med-spacing"></div>
                {/* Chrome  palette section */}
                <div className="SubHeader">Text</div>

                {/* Color Palette for text */}

                <table className="table-styles">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td className="color-col-1">
                                <ul className="color-info">
                                    <li>Primary</li>
                                    <li>#333333</li>
                                </ul></td>
                            <td className="color-col-2"><div className="color-palette primary"></div></td>
                        </tr>

                        <tr>
                            <td className="color-col-1">
                                <ul className="color-info">
                                    <li>Secondary</li>
                                    <li>#666666</li>
                                </ul></td>
                            <td className="color-col-2"><div className="color-palette secondary"></div></td>
                        </tr>
                        <tr>
                            <td className="color-col-1">
                                <ul className="color-info">
                                    <li>Disabled</li>
                                    <li>#A6A6A6</li>
                                </ul>
                            </td>
                            <td className="color-col-2"><div className="color-palette disabled"></div></td>
                        </tr>
                        <tr>
                            <td className="color-col-1">
                                <ul className="color-info">
                                    <li>Hyperlink</li>
                                    <li>#0078D4</li>
                                </ul>
                            </td>
                            <td className="color-col-2"><div className="color-palette hyperlink000"></div></td>
                        </tr>
                        <tr>
                            <td className="color-col-1">
                                <ul className="color-info">
                                    <li>Hyperlink hover</li>
                                    <li>#106EBE</li>
                                </ul>
                            </td>
                            <td className="color-col-2"><div className="color-palette hyperlink100"></div></td>
                        </tr>
                        <tr>
                            <td className="color-col-1">
                                <ul className="color-info">
                                    <li>Hyperlink selected</li>
                                    <li>#005A9E</li>
                                </ul>
                            </td>
                            <td className="color-col-2"><div className="color-palette hyperlink200"></div></td>
                        </tr>
                        <tr>
                            <td className="color-col-1">
                                <ul className="color-info">
                                    <li>Hyperlink disabled</li>
                                    <li>#A6A6A6</li>
                                </ul>
                            </td>
                            <td className="color-col-2"><div className="color-palette hyperlink-disabled"></div></td>
                        </tr>

                        <tr className="type10">
                            <td className="type-col-1"></td>
                            <td className="type-col-2"></td>
                        </tr>
                    </tbody>
                </table>


                {/* Chrome  palette section */}
                <div className="SubHeader">Surfaces</div>
                {/* Color Palette for Neutrals */}

                <table className="table-styles">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td className="color-col-1">
                            <ul className="color-info">
                            <li>Primary</li>
                            <li>#FFFFFF</li>
                        </ul>
                                </td>
                            <td className="color-col-2"><div className="color-palette light000"></div></td>
                        </tr>

                        <tr>
                            <td className="color-col-1">
                            <ul className="color-info">
                            <li>Secondary</li>
                            <li>#FAFAFA</li>
                        </ul>
                                </td>
                            <td className="color-col-2"><div className="color-palette light100"></div></td>
                        </tr>
                        <tr>
                            <td className="color-col-1">
                            <ul className="color-info">
                            <li>Tertiary</li>
                            <li>#F2F2F2</li>
                        </ul>
                            </td>
                            <td className="color-col-2"><div className="color-palette light200"></div></td>
                        </tr>
                        <tr>
                            <td className="color-col-1">
                            <ul className="color-info">
                            <li>Navigation</li>
                            <li>#E5E5E5</li>
                        </ul>
                            </td>
                            <td className="color-col-2"><div className="color-palette light300"></div></td>
                        </tr>
                    </tbody>
                </table>
                <div className="med-spacing"></div>
                {/* App  palette section */}
                <div className="SubHeader">App theme surfaces</div>
                {/* Color Palette for alerts */}



                <table className="table-styles">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td className="color-col-1">
                            <ul className="color-info">
                            <li>App theme</li>
                            <li>#0078D4</li>
                        </ul>
                                </td>
                            <td className="color-col-2"><div className="color-palette app-theme-1"></div></td>
                        </tr>

                        <tr>
                            <td className="color-col-1">
                            <ul className="color-info">
                            <li>Text and icons</li>
                            <li>#FFFFFF</li>
                        </ul>
                                </td>
                            <td className="color-col-2"><div className="color-palette app-theme-2"></div></td>
                        </tr>
                    </tbody>
                </table>
                <p>* For interactive states on App theme backgrounds, use the Primary button state definitions</p>
                <div className="lg-spacing"></div>
                
                {/* Icons palette section */}
                <div className="SubHeader">Notification icons</div>
                {/* Color Palette for Icons */}
                <table className="table-styles">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td className="color-col-1">
                            <ul className="color-info">
                            <li>Warning</li>
                            <li>#797673</li>
                        </ul>
                                </td>
                            <td className="color-col-2"><div className="color-palette icons-warning"></div></td>
                        </tr>

                        <tr>
                            <td className="color-col-1">
                            <ul className="color-info">
                            <li>Severe Warning</li>
                            <li>#D83B01</li>
                        </ul>
                                </td>
                            <td className="color-col-2"><div className="color-palette icons-warning-severe"></div></td>
                        </tr>
                        <tr>
                            <td className="color-col-1">
                            <ul className="color-info">
                            <li>Success</li>
                            <li>#107C10</li>
                        </ul>
                            </td>
                            <td className="color-col-2"><div className="color-palette icons-success"></div></td>
                        </tr>
                        <tr>
                            <td className="color-col-1">
                            <ul className="color-info">
                            <li>Error block</li>
                            <li>#A80000</li>
                        </ul>
                            </td>
                            <td className="color-col-2"><div className="color-palette error"></div></td>
                        </tr>
                    </tbody>
                </table>


                <div className="med-spacing"></div>
                {/* Alerts  palette section */}
                <div className="SubHeader">Notifications background</div>
                {/* Color Palette for alerts */}
                <table className="table-styles">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td className="color-col-1">
                            <ul className="color-info">
                            <li>Warning</li>
                            <li>#FFFF4CE</li>
                        </ul>
                                </td>
                            <td className="color-col-2"><div className="color-palette alert-warning"></div></td>
                        </tr>

                        <tr>
                            <td className="color-col-1">
                            <ul className="color-info">
                            <li>Severe Warning</li>
                            <li>#FED9CC</li>
                        </ul>
                                </td>
                            <td className="color-col-2"><div className="color-palette alert-warning-severe"></div></td>
                        </tr>
                        <tr>
                            <td className="color-col-1">
                            <ul className="color-info">
                            <li>Success</li>
                            <li>#DFF6DD</li>
                        </ul>
                            </td>
                            <td className="color-col-2"><div className="color-palette alert-success"></div></td>
                        </tr>
                    </tbody>
                </table>
                <div className="med-spacing"></div>
            </div>
        </div>

    );
};
export default Color;
