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
                <div className="PageHeader"><h1>Get started: Designers</h1>

                </div>
                {/* Icon Intro w/ image Section */}
                <div className="Intro"><p>Our design kit is a living document that will evolve and be updated in real time as systems change. This kit contains all of our visual assets (components, iconography,
                     color palettes, grids, etc). The design toolkit exists in Figma — our prototyping tool.  </p></div>

                <div className="Content">
                <div className="resources-spacing">
                    <div className="resources-cols">
                        <div className="header-small">Resources</div>
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
                    <div className="SubHeader">Our toolkit is built in Figma</div>
                    
                    <p>For the best experience with the Design System, We recommend using Figma. It is an all-in-one, 
                        multi-platform tool that supports system governance, automatic updates, robust component creation, commenting, concurrent multiple users, and automated markup and code fragments 
                        for developers. Additionally, all files are shared and available within the community, so using
                         Figma allows designers to easily share, contribute, and build on the work of others. Figma is the design tool preferred by most organizations at Microsft for these reasons. It is a tool that enables us to break down communication silos and become more collaborative and informed. 
                    <div className="sm-spacing"></div>
                    Ultimately, we want to be tool agnostic and allow people to use the tools that are familiar to them; however, the reality is that our team cannot scale to all tools. 
                    If you are using Illustrator, XD or Sketch, we do have instructions in our toolkit on how to best import your assets from those prototyping tools on the 
                    Getting Started section of the Figma UI kit. In these cases, you will be required to have awareness of the latest from the system, 
                    and make your own updates in your files If you’re using Sketch, we will be introducing an solution soon that will automatically 
                    push system updates out to your files, though again, this does not solve all of the problems with not using Figma. 
                    <div className="sm-spacing"></div>
                    Our team is available to help you onboard to Figma and get the most out of this very robust tool.
                     </p>
                     <div className="med-spacing"></div>
                     <div className="SubHeader">Updates</div>
                     <p>When we have pushed UI updates, we will send a message on <a className="global-links" href="https://teams.microsoft.com/l/channel/19%3a35384be6215e45aea8dfcc504c2d959c%40thread.skype/Coherence?groupId=7cced089-d0d9-4f4a-be05-0a8508165afb&tenantId=72f988bf-86f1-41af-91ab-2d7cd011db47" target="_blank">Teams</a> explaining the changes.</p>
                     <div className="med-spacing"></div>
                     <div className="SubHeader">Steps to set up Figma</div>
                     <div className="sm-spacing"></div>
                    <div className="Designer-steps">Step 1: Visit the Figma website to install the application</div>
                    <p>Download the <b><a href="https://www.figma.com/downloads/" target="_blank">Desktop App</a></b></p>
                    <div className="med-spacing"></div>
                    <div className="Designer-steps">Step 2: Sign Up</div>
                    <p><b>Sign up</b> using your Microsoft.com email. Otherwise, you will not have access to join any of Microsoft channels within Figma. </p>
                    <div className="Design-onboarding-image">
                        <div className="Image-spacing"><img src={FigmaLoginJPG} alt="Illustration of login view in Figma." /></div>
                    </div>
                    <div className="med-spacing"></div>
                    <div className="Designer-steps">Step 3: Select "View all teams" in the left side bar</div>
                    <div className="Design-onboarding-image">
                    <div className="Image-spacing"><img src={LeftNavFigmaJPG} alt="Illustration of left side bar view in Figma."  /></div>
                    </div>
                    <div className="med-spacing"></div>
                    <div className="Designer-steps">Step 4: Scroll down until you see SSE Design. Click on Request to join. </div>
                    <div className="Design-onboarding-image">
                    <div className="Image-spacing"><img src={MicrosoftOrgFigmaJPG} alt="Illustration of Microsoft Organization view in Figma." /></div>
                    </div>
                    <div className="med-spacing"></div>
                    <div className="Designer-steps">Step 5: Describe what team that you are on and why you need access</div>

                    <p>Make sure to request edit access if you are a part of the team. If you want to join other team that
                        is not affiliated with your team, make sure to change from <b>can edit</b> to <b>can view</b>. If you try to request
                        edit access in other team, they may decline your access because they don’t want a person outside of the
            team to edit their file. </p>

                    <div className="Design-onboarding-image">
                    <div className="Image-spacing"><img src={RequestJoinFigmaJPG} alt="Illustration of how to request to join SSE channel in Figma." /></div>
                    </div>
                    <div className="med-spacing"></div>
                    <div className="Designer-steps">Step 6: Wait until the owner of the Figma channel approves you</div>
                    <p> Once you  are approved, you will now see the channel under the sidebar. </p>
                    <div className="med-spacing"></div>
                    <div className="Designer-steps">Step 7: Set up your local fonts </div>
                    <p> To use your local/system fonts in Figma, you have two options:
                        <ol className="figma-download-options">
                            <li className="figma-options">Use Figma’s <a href="https://www.figma.com/downloads/" target="_blank">desktop app</a> (available for macOS and Windows). 
                                This is the recommended option. Simply download the desktop app 
                                and you will be good to go. The fonts you've installed on your computer will 
                                appear in the font list.</li>
                            <li className="figma-options">If you want to use Figma on the web with your browser, you can download 
                                Figma’s <a href="https://help.figma.com/text/using-local-fonts" target="_blank">font helper</a>.</li>
                        </ol> 
                    </p>
                </div>
            </div>
        </div>

    );
};
export default DesignGetStarted;