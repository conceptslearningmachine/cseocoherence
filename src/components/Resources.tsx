import * as React from "react";
import './ComponentPage.scss';
import './HomePage.scss';

const Resources = () => {

    return (
        <div className="PageContent">

            <div className="GlobalHeader"><div className="Page-cseo-header">CSEO</div><b> Coherence</b>
                <span className="contact-quicklinks"><a href="mailto:ssedesign_coherence@microsoft.com" >Contact Us</a></span>
            </div>

            <div className="PageContent-spacing">
                <div className="PageHeader"><h1>Resources</h1>

                </div>
                <div className="resources-spacing">
                    <div className="resources-cols">
                        <b>Contact Us</b>
                        <ul className="resources-list">
                            <li><a className="global-links" href="mailto:ssedesign_coherence@microsoft.com">Email</a></li>
                            <li><a className="global-links" href="https://teams.microsoft.com/l/channel/19%3a35384be6215e45aea8dfcc504c2d959c%40thread.skype/Coherence?groupId=7cced089-d0d9-4f4a-be05-0a8508165afb&tenantId=72f988bf-86f1-41af-91ab-2d7cd011db47" target="_blank">Teams channel</a></li>
                            <li><a className="global-links" href="https://microsoft.sharepoint.com/teams/CSEDesign2/_layouts/OneNote.aspx?id=%2Fteams%2FCSEDesign2%2FShared%20Documents%2FCoherence%2FCoherence%20Notebook&wd=target%28Office%20Hours.one%7C219C9F8E-401D-4F44-99AB-6DF78F50F320%2F%29
onenote:https://microsoft.sharepoint.com/teams/CSEDesign2/Shared%20Documents/Coherence/Coherence%20Notebook/Office%20Hours.one#section-id={219C9F8E-401D-4F44-99AB-6DF78F50F320}&end" target="_blank">Office Hours</a></li>
                        </ul>
                    </div>
                    <div className="resources-cols">
                        <b>Developers</b>
                        <ul className="resources-list">
                            <li><a className="global-links" href="https://github.com/OfficeDev/office-ui-fabric-react/" target="_blank">Fabric ReactJS</a></li>
                            <li><a className="global-links" href="https://github.com/OfficeDev/office-ui-fabric-core/" target="_blank">Fabric Core</a></li>
                            <li><a className="global-links" href="https://github.com/OfficeDev/office-ui-fabric-js" target="_blank">Fabric JS</a></li>
                            <li><a className="global-links" href="https://github.com/Microsoft/cseo-design" target="_blank">GitHub</a></li>
                            <li><a className="global-links" href="https://github.com/Microsoft/cseo-design/issues/new/choose" target="_blank">Report a bug</a></li>
                            <li><a className="global-links" href="https://github.com/Microsoft/cseo-design/issues/new/choose" target="_blank">Add a work item</a></li>
                        </ul>
                    </div>
                    <div className="resources-cols">
                        <b>Designers</b>
                        <ul className="resources-list">
                            <li><a className="global-links" href="https://www.figma.com/file/Qln7Fqzj6PL78ulLFIRFQWzx/CSEO.DESIGN_TOOLKIT-10-1-08?node-id=0%3A1" target="_blank">Figma UI Toolkit</a></li>
                            <li><a className="global-links" href="https://microsoft.sharepoint.com/teams/BrandCentral/Pages/Bundles/Segoe_UI_fonts.aspx" target="_blank">Segoe UI fonts</a></li>
                            <li><a className="global-links" href="http://uni/DesignDepot.FrontEnd/#/iconLibraryResults?productId=45781&t=FULL%20MDL2%20Assets%7CFabric%20MDL2%20Assets&f=Font&theme=light&size=16" target="_blank">Segoe MDL2 Assets icons</a></li>
                            <li><a className="global-links" href="https://github.com/Microsoft/cseo-design/issues/new/choose" target="_blank">Icon Request</a></li>
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