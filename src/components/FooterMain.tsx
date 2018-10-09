import * as React from "react";
import './ComponentPage.scss';

const FooterMain = () => {

    return (
         <div className="footer-links">
              <a className="footer-links" href="mailto:ssedesign_coherence@microsoft.com">Contact Us</a>
              <a className="footer-links" href="https://www.microsoft.com/en-us/legal/intellectualproperty/copyright/default.aspx" target="_blank">Terms of Use</a>
              <a className="footer-links" href="https://privacy.microsoft.com/en-US/privacystatement" target="_blank">Privacy and cookies</a>
              <a  className="footer-links" href="https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/en-us.aspx" target="_blank">Trademarks</a>
              <p>&copy; Microsoft 2018</p>

            </div>
    );
};
export default FooterMain;