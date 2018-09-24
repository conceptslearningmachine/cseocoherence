import * as React from "react";
import './ComponentPage.scss';
import './HomePage.scss';
import FigmaLoginJPG from '../assets/design-onboarding1.jpg'
import WelcomeFigmaJPG from '../assets/welcomeDialog.jpg'
import LeftNavFigmaJPG from '../assets/left-side-bar.jpg'
import MicrosoftOrgFigmaJPG from '../assets/microsoft-organization.jpg'
import RequestJoinFigmaJPG from '../assets/request-join.jpg'

const DesignGetStarted = () => {

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
                <div className="PageHeader"><h1>Design</h1>

                </div>
                {/* Icon Intro w/ image Section */}
                <div className="Intro"><p>Our design kit is a living document that will evolve and be updated in real time as systems change.
                    This kit contains all of our visual assets (components, iconography, color palettes, grids, etc). The tools exist in Figma
              — our prototyping tool. </p></div>

                <div className="Content">
                    <div className="Designer-steps">Step 1: Visit the Figma website to install the application</div>
                    <p>Be sure to download the <b>Desktop App</b></p>
                    <p>You can find the link to the Figma download <a href="https://www.figma.com/downloads/">here.</a></p>
                    <p></p>
                    <div className="Designer-steps">Step 2: Sign Up</div>
                    <p>A dialog will ask you to <b>Sign in</b>, or <b>Sign up</b>. Select <b>Sign up</b> in the bottom right to create your account.</p>
                    <div className="Design-onboarding-image">
                        <img
                            src={FigmaLoginJPG}
                            alt="Illustration of login view in Figma."
                        />
                    </div>
                    <div className="Designer-steps">Step 3: Follow the onboarding modals</div>
                    <div className="Design-onboarding-image">
                        <img
                            src={WelcomeFigmaJPG}
                            alt="Illustration of welcome dialog view in Figma."
                        />
                    </div>
                    <div className="Designer-steps">Step 4: Select View all teams in the left side bar</div>
                    <div className="Design-onboarding-image">
                        <img
                            src={LeftNavFigmaJPG}
                            alt="Illustration of left side bar view in Figma."
                        />
                    </div>
                    <div className="Designer-steps">Step 5: Scroll down until you see SSE Design. Click on Request to join. </div>
                    <div className="Design-onboarding-image">
                        <img
                            src={MicrosoftOrgFigmaJPG}
                            alt="Illustration of Microsoft Organization view in Figma."
                        />
                    </div>
                    <div className="Designer-steps">Step 6: Describe what team that you are on and why you need access</div>

                    <p>Make sure to request edit access if you are a part of the team. If you want to join other team that
                        is not affiliated with your team, make sure to change from can edit to can view. If you try to request
                        edit access in other team, they may decline your access because they don’t want a person outside of the
            team to mess with their file. </p>

                    <div className="Design-onboarding-image">
                        <img
                            src={RequestJoinFigmaJPG}
                            alt="Illustration of how to request to join SSE channel in Figma."
                        />
                    </div>
                    <div className="Designer-steps">Step 7: Wait until the owner of the Figma channel approves you</div>
                    <p> Once you  are approved, you will now see the channel under the sidebar. </p>

                    <div className="Design-onboarding-image">
                        <img
                            src={RequestJoinFigmaJPG}
                            alt="Illustration of how to request to join SSE channel in Figma."
                        />
                    </div>
                    <div className="Designer-steps">Step 8: Set up your local fonts </div>
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