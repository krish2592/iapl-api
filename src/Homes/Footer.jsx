import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <ul className="footer-links">
                    <li>
                    <a href="/privacy">Privacy Policy</a>
                    </li>
                    <li>
                    <a href="/terms">Terms of Service</a>
                    </li>
                    <li>
                    <a href="/contact">Contact Us</a>
                    </li>
                </ul>
                <p>&copy; {new Date().getFullYear()} Infytech AI Private Limited</p>
            </div>
        </footer>
    );
}

export default Footer;