import React from "react";
import '../Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer-main-container">
            <div className="footer-main-content">
                <div className="iapl-container">
                    <div className="iapl-sub-col1" >INFYTECH LOOP AI
                        <div className="iapl-col1">
                            <li><Link to="/about">About US</Link></li>
                        </div>
                    </div>
                <div className="iapl-sub-col4">ENQUIRY
                    <div className="iapl-col4">
                        {/* <li><Link to="/faq">FAQs</Link></li> */}
                        <li><Link to="/contact">Contact Us</Link></li>
                    </div>
                </div>
                <div className="iapl-sub-col5">Quick Links
                    <div className="iapl-col5">
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </div>
                </div>
            </div>
            </div>
            <div className="footer-content">
                <ul className="footer-links">
                    <li>
                        <Link to="/privacy">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="/terms">Terms of Service</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
                <div className="copyright">
                    <p>&copy; {new Date().getFullYear()} Infytech Loop AI Private Limited</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;