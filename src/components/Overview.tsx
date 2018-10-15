import * as React from "react";
import './ComponentPage.scss';
import './HomePage.scss';

const Overview = () => {

    return (  
        <div className="PageContent">       
        <div className="GlobalHeader"><p className="Page-cseo-header">CSEO </p><b> Coherence</b>
        <span className="contact-quicklinks"><a href="mailto:ssedesign_coherence@microsoft.com" >Contact Us</a></span>
        </div>

         <div className="PageContent-spacing">
         <div className="PageHeader"><h1>Overview</h1> 
         
         </div>
        {/* Grid Intro w/ image Section */}
         <div className="OverviewIntro Content"><p>The Core Services Engineering & Operations (CSEO) group builds and manages the critical products and services that Microsoft runs on. 
             The CSEO Design System ensures coherent experiences across our product ecosystem and is at the heart of modern product-making culture. The Coherence 
             team works in partnership with product teams to provide resources, guidance, and processes that ensure coherency and familiarity across our products, and with Microsoft.</p></div>
              <div className="med-spacing"></div>
              <div className="Content">
              <b>We benefit</b>
              <p className="font-medium">Using shared resources, code, processes, and a centralized design POV increases efficiencies, creates clarity, 
              and breaks down knowledge silos. The Design System empoweres teams to collaborate more effectively, enabling a faster design to ship cycle
               and keeps teams focused on solving the most important problems for our customers. </p>
                  <div className="sm-spacing"></div>
                <b>Our customers benefit</b>
                <p className="font-medium">Design Systems increase usability, trustworthiness, and brand equity by making experiences familiar and 
                coherent across our ecosystem, while also meeting the bar set by Microsoft. With a Design System, we ship better experiences.</p>
                  <div className="sm-spacing"></div>
                <b>Our principles</b>
                <p className="font-medium">We share knowledge and resources with System teams across the company, beginning with our partnership with Fluent. 
                We build on the work of others wherever we can, and tailor our experiences to best serve the needs of our product’s customers. And when needed, 
                we innovate new experiences that can then be fed back into the Microsoft community of federated product ecosystems.</p>
                 <div className="sm-spacing"></div>
                <b>The Design System belongs to everyone</b>
                <p className="font-medium">Everyone is accountable for supporting, utilizing, and contributing to the System. The Coherence team are 
                the curators and facilitators of the System, but we are all co-owners. The full promise of the Design System depends on everyone’s commitment.</p>
              </div>
        {/* Grid Placeholder for more content */}
        <div className="GridImage-placeholder">
        </div>
        </div>
        </div>        
    );
}; 
export default Overview;