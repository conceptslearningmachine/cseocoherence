import * as React from "react";
import './ComponentPage.scss';
import { Link } from 'react-router-dom';
import './HomePage.scss';

const Overview = () => {

    return (  
        <div className="PageContent">       
        <div className="GlobalHeader"><p className="Page-cseo-header">CSEO </p><b> Coherence</b>
        <span className="contact-quicklinks"><Link to="/resources">Contact Us</Link></span>
        </div>

         <div className="PageContent-spacing">
         <div className="PageHeader"><h1>Overview</h1> 
         
         </div>
        {/* Grid Intro w/ image Section */}
         <div className="OverviewIntro Content"><p>The CSEO Design System is a product that serves other products, ensuring coherent
              visuals and interaction patterns across a diverse ecosystem of products. The Coherence team works in partnership 
              with product teams to provide resources and guidance that ensure coherency and familiarity across our products, 
              and with Microsoft.</p></div>
              <div className="med-spacing"></div>
              <div className="Content">
              <b>We benefit</b>
              <p className="font-medium">Design Systems increase efficiencies and reduce guesswork, allowing teams to move more quickly and confidently 
                  while staying focused on the most important problems.</p>
                  <div className="sm-spacing"></div>
                <b>Our customers benefit</b>
                <p className="font-medium">Design Systems increase usability and trustworthiness by making experiences familiar and consistent while 
                    also meeting the bar set by the Microsoft brand.</p>
                  <div className="sm-spacing"></div>
                <b>Our principles</b>
                <p className="font-medium">Fluent is the Design language of Microsoft, and serves as the foundation for our Design System, synthesized 
                    through the lens of the unique needs of our customers. We are also part of a federated community of Systems 
                    Teams from across the company that share similar patterns, platforms, requirements, and the like; we share work 
                    and perspectives with these teams as a way to strengthen the coherence of our Systems, as well as to utilize and 
                    build on each other’s work. These teams are currently M365, O365, and Dynamics.
                    <br/><br/>
                    Fabric is the platform we use for our controls and patterns. We reuse as much as possible,
                    while tailoring where we need to for our customers, and where applicable guidance is missing.</p>

              </div>
        {/* Grid Placeholder for more content */}
        <div className="GridImage-placeholder">
        </div>
        </div>
        </div>        
    );
}; 
export default Overview;