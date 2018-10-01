import * as React from "react";
import './ComponentPage.scss';
import { Link } from 'react-router-dom';
import './HomePage.scss';

const Resources = () => {

    return (
        <div className="PageContent">

            <div className="GlobalHeader"><div className="Page-cseo-header">CSEO</div><b> Coherence</b>
                <span className="contact-quicklinks"><Link to="/resources">Contact Us</Link></span>
            </div>

            <div className="PageContent-spacing">
                <div className="PageHeader"><h1>Resources</h1>

                </div>
                <div className="resources-spacing">
                    <div className="resources-cols">
                        <b>Contact Us</b>
                        <ul className="resources-list">
                            <li><a className="global-links" href="" target="_blank">Email</a></li>
                            <li><a className="global-links" href="" target="_blank">Teams Channel</a></li>
                            <li><a className="global-links" href="" target="_blank">Office Hours</a></li>
                        </ul>
                    </div>
                    <div className="resources-cols">
                        <b>Developers</b>
                        <ul className="resources-list">
                            <li><a className="global-links" href="" target="_blank">Fabric ReactJS</a></li>
                            <li><a className="global-links" href="" target="_blank">Fabric Core</a></li>
                            <li><a className="global-links" href="" target="_blank">GitHub</a></li>
                            <li><a className="global-links" href="" target="_blank">Report a bug</a></li>
                            <li><a className="global-links" href="" target="_blank">Add a work item</a></li>
                        </ul>
                    </div>
                    <div className="resources-cols">
                        <b>Designers</b>
                        <ul className="resources-list">
                            <li><a className="global-links" href="" target="_blank">Figma UI Toolkit</a></li>
                            <li><a className="global-links" href="" target="_blank">Fonts</a></li>
                            <li><a className="global-links" href="" target="_blank">Icons</a></li>
                            <li><a className="global-links" href="" target="_blank">Icon Request</a></li>
                        </ul>
                    </div>
                </div>
                {/* Icon Placeholder for more content */}
                <div className="IconImage-placeholder">
                </div>
            </div>
        </div>

    );
};
export default Resources;