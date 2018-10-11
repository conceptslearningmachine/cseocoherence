import * as React from "react";
import './ComponentPage.scss';
import './HomePage.scss';
import FigmaLoginJPG from '../assets/design-onboarding1.jpg'
import LeftNavFigmaJPG from '../assets/left-side-bar.jpg'
import { Link } from 'react-router-dom';
import MicrosoftOrgFigmaJPG from '../assets/microsoft-organization.jpg'
import RequestJoinFigmaJPG from '../assets/request-join.jpg'

const DesignGetStarted = () => {

    return (
        <div className="PageContent">

            <div className="GlobalHeader"><div className="Page-cseo-header">CSEO </div><b>Coherence</b>
            <span className="contact-quicklinks"><Link to="/resources">Contact Us</Link></span>
            </div>

            <div className="PageContent-spacing">
                <div className="PageHeader"><h1>Design</h1>

                </div>
                {/* Icon Intro w/ image Section */}
                <div className="Intro"><p>Our design kit is a living document that will evolve and be updated in real time as systems change. 
                    This kit contains all of our visual assets (components, iconography, color palettes, grids, etc). The design toolkit exists 
                    in Figma — our prototyping tool.  </p></div>

                <div className="Content">
                <div className="resources-spacing">
                    <div className="resources-cols">
                        <b>Resources</b>
                        <ul className="resources-list">
                        <li><a className="global-links" href="https://microsoft.sharepoint.com/teams/BrandCentral/Pages/Bundles/Segoe_UI_fonts.aspx" target="_blank">Segoe UI fonts</a></li>
                            <li><a className="global-links" href="http://uni/DesignDepot.FrontEnd/#/iconLibraryResults?productId=45781&t=FULL%20MDL2%20Assets%7CFabric%20MDL2%20Assets&f=Font&theme=light&size=16" target="_blank">Segoe MDL2 Assets icons</a></li>
                            <li><a className="global-links" href="https://teams.microsoft.com/l/channel/19%3a35384be6215e45aea8dfcc504c2d959c%40thread.skype/Coherence?groupId=7cced089-d0d9-4f4a-be05-0a8508165afb&tenantId=72f988bf-86f1-41af-91ab-2d7cd011db47" target="_blank">Teams channel</a></li>
                            <li><a className="global-links" href="https://microsoft.sharepoint.com/teams/CSEDesign2/_layouts/OneNote.aspx?id=%2Fteams%2FCSEDesign2%2FShared%20Documents%2FCoherence%2FCoherence%20Notebook&wd=target%28Office%20Hours.one%7C219C9F8E-401D-4F44-99AB-6DF78F50F320%2F%29
onenote:https://microsoft.sharepoint.com/teams/CSEDesign2/Shared%20Documents/Coherence/Coherence%20Notebook/Office%20Hours.one#section-id={219C9F8E-401D-4F44-99AB-6DF78F50F320}&end" target="_blank">Office hours</a></li>
                            <li><a className="global-links" href="mailto:ssedesign_coherence@microsoft.com" target="_blank">Email</a></li>

                        </ul>
                    </div>
                    </div>
                    <div className="SubHeader">Figma</div>
                    
                    <p>Our took kit is built in Figma. We recoommend Figma because the Microsoft organization is moving in this direction and we want 
                    to align with their tool kit for future iterations. Figma offer’s many benefits such as robust, sharable libraries that can be 
                    updated across our organization from one, single-source, it’s operating system agnostic, includes commenting collaboration, 
                    flexible components and so many other modern capabilities.
                    <div className="sm-spacing"></div>
                    If you are using Illustrator, XD or Sketch, we have instructions in our toolkit on how to import your assets from those 
                    prototyping tools on the Getting Started section of the Figma UI kit.
                    <div className="sm-spacing"></div>
                    We do not want to force you to use a tool that you are not comfortable with. If you choose not to switch to Figma, you can still export our assets to a PNG, JPG or SVG. Unfortunately, 
                    some styling will be lost such as transparency blurs, shadows, and masks. You will need to reapply those styles in to your native application. We do not recommend this flow.
                    <div className="sm-spacing"></div>
                    Also, you will not benefit from the library updates. You will have to re-open Figma, update your library and reimport it in
                     to your native application. The risk is that you may end up using out-of-date components. Also, this process is slower, and will 
                     require extra steps to import fonts and make those assets compatible to your native application.
                     </p>
                     <div className="med-spacing"></div>
                     <div className="SubHeader">Updates</div>
                     <p>When we have pushed UI updates, we will send a message on Teams, explaining the changes.</p>
                     <div className="med-spacing"></div>
                    <div className="Designer-steps">Step 1: Visit the Figma website to install the application</div>
                    <p>Download the <b><a href="https://www.figma.com/downloads/" target="_blank">Desktop App</a></b></p>
                    <p></p>
                    <div className="Designer-steps">Step 2: Sign Up</div>
                    <p><b>Sign up</b> using your Microsoft.com email. Otherwise, you will not have access to join any of Microsoft channels within Figma. </p>
                    <div className="Design-onboarding-image">
                        <div className="Image-spacing"><img src={FigmaLoginJPG} alt="Illustration of login view in Figma." /></div>
                    </div>
                    <div className="Designer-steps">Step 3: Select "View all teams" in the left side bar</div>
                    <div className="Design-onboarding-image">
                    <div className="Image-spacing"><img src={LeftNavFigmaJPG} alt="Illustration of left side bar view in Figma."  /></div>
                    </div>
                    <div className="Designer-steps">Step 4: Scroll down until you see SSE Design. Click on Request to join. </div>
                    <div className="Design-onboarding-image">
                    <div className="Image-spacing"><img src={MicrosoftOrgFigmaJPG} alt="Illustration of Microsoft Organization view in Figma." /></div>
                    </div>
                    <div className="Designer-steps">Step 5: Describe what team that you are on and why you need access</div>

                    <p>Make sure to request edit access if you are a part of the team. If you want to join other team that
                        is not affiliated with your team, make sure to change from <b>can edit</b> to <b>can view</b>. If you try to request
                        edit access in other team, they may decline your access because they don’t want a person outside of the
            team to edit their file. </p>

                    <div className="Design-onboarding-image">
                    <div className="Image-spacing"><img src={RequestJoinFigmaJPG} alt="Illustration of how to request to join SSE channel in Figma." /></div>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default DesignGetStarted;