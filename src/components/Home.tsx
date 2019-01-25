import * as React from "react";
import './ComponentPage.scss';
import OneMSFT from '../assets/home/one-microsoft-process.png'
import calendar from '../assets/home/calendar.svg';
import clipboard from '../assets/home/clipboard.svg';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div><div className="HomePageContent">
            <div className="HomeHeader"><div><div className="Home-cseo-header">CSEO</div><b> Coherence</b>
            <span className="HomePage-contact"><Link to="/DesignGetStarted" className="Homepage-contact-link" >For Designers</Link></span>
            <span className="HomePage-contact"><Link to="/DeveloperGetStarted" className="Homepage-contact-link link-devs" >For Developers</Link></span>
            </div>
            
            </div>
            <div className="Homepage-header-text"><div>Create experiences that are familiar and predictable across a product ecosystem, achieved via
                 one single resource for shared, pre-defined UI components and usage guidelines.</div>
            </div>
        </div>
        <div className="HomePageContent-section-2">
            <div className="GlobalHeader">
            
            </div>
            <div className="Homepage-section-2-content">
            {/* <hr className="homepage-borders"></hr> */}
            <span className="left-section">
            <img src={clipboard} alt="" width="66" />
            <div className="text-header">Increased clarity and velocity for product teams </div>
            <div className="text-body"> Build, test, and ship faster, fewer bugs, technical debt, and UX inconsistencies. Focus on solving customer needs rather than basics.</div>
            </span>
            <span>
            <img src={calendar} alt="" width="59" />
            <div className="text-header">Better experiences for end customers </div>
            <div className="text-body"> Reduced cognitive overhead, faster task completion, and experience predictability  that leads to customer trust.</div>
            </span>
            </div>       
        </div>
        
        <div className="HomePageContent-section-3">
            <div className="GlobalHeader">
            
            </div>
            <div className="Homepage-section-2-content">
            {/* <hr className="homepage-borders"></hr> */}
            <div className="text-header">What is the One Microsoft process? 
            <div className="Image-spacing"><img width="120%" src={OneMSFT} alt="."  /></div></div>
            </div>
            
            
        </div>
        </div>
    );
};
export default Home;