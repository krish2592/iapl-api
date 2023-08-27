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
                            <li><Link to="/why/infytech">Why Infytech Loop AI</Link></li>
                            {/* <li><Link to="/about">Team</Link></li>
                            <li><Link to="/about">Jobs at Infytech AI</Link></li>
                            <li><Link to="/about">Photo Gallery</Link></li> */}
                        </div>
                    </div>
                <div className="iapl-sub-col2">MAAHAUL
                    <div className="iapl-col2">
                        <li><Link to="/maahaul/about">About Us</Link></li>
                        <li><Link to="/maahaul">Maahaul</Link></li>
                        {/* <li><Link to="/about">Team</Link></li>
                        <li><Link to="/maahaul/career">Jobs at Maahaul</Link></li>
                        <li><Link to="/about">Photo Gallery</Link></li> */}
                    </div>
                </div>
                {/* <div className="iapl-sub-col3">MEP CONSULTANTS
                    <div className="iapl-col3">
                        <li><Link to="/maahaul/about">About US</Link></li>
                        <li><Link to="/maahaul">MEP Consultants</Link></li> */}
                        {/* <li><Link to="/about">Team</Link></li>
                        <li><Link to="/maahaul/career">Jobs at MEP Consultants</Link></li>
                        <li><Link to="/about">Photo Gallery</Link></li> */}
                    {/* </div>
                </div> */}
                <div className="iapl-sub-col4">ENQUIRY
                    <div className="iapl-col4">
                        <li><Link to="/maahaul/about">Blog</Link></li>
                        <li><Link to="/maahaul">FAQs</Link></li>
                        <li><Link to="/about">Feedback</Link></li>
                        <li><Link to="/maahaul/career">ContactUs</Link></li>
                    </div>
                </div>
                <div className="iapl-sub-col5">CONNECT US
                    <div className="iapl-col5">
                        <li><Link to="/maahaul/about">Twitter</Link></li>
                        <li><Link to="/maahaul">Instagram</Link></li>
                        <li><Link to="/about">Teligram</Link></li>
                        <li><Link to="/maahaul/career">Youtube</Link></li>
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