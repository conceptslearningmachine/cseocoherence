import * as React from "react";
import './ComponentPage.scss';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className="HomePageContent">
            <div className="GlobalHeader"><div><div className="Home-cseo-header">CSEO</div><b> Coherence</b>
            <span className="HomePage-contact"><a href="mailto:ssedesign_coherence@microsoft.com" className="Homepage-contact-link" >Contact Us</a></span>

            </div>
            
            </div>
            <div className="Homepage-title"><div>Design System</div>
            <div className="Homepage-desc">Resources and guidance for using the CSEO Design System in product design and development.</div>
            <div className="quicklinks"><span><Link to="/DesignGetStarted">For Designers</Link></span><br/><br/>
            <span><Link to="/DeveloperGetStarted">For Developers</Link></span>
                </div>
            </div>
        </div>
    );
};
export default Home;