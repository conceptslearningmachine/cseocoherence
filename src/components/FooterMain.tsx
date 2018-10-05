import * as React from "react";
import './ComponentPage.scss';
import { Link } from 'react-router-dom';

const FooterMain = () => {

    return (
         <div className="footer-links">
              <Link to="/resources">Contact Us</Link>
              <Link to="/resources">Terms of Use</Link>
              <Link to="/resources">Privacy and cookies</Link>
              <Link to="/resources">Trademarks</Link>
              <Link to="/resources">Safety and eco</Link>
              <p>&copy; Microsoft 2018</p>

            </div>
    );
};
export default FooterMain;