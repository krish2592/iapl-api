import React from "react";
import '../Body.css';
import { Link } from 'react-router-dom';
import logo1 from '../Images/logo-maahaul.jpg'
import logo2 from '../Images/logo-mep-consultants.jpg'
//import logo3 from '../Images/logo.jpg'

const Body = () => {

    return (
    <body><div className="services-level">WHAT UNIQUE IN MAAHAUL</div>
        
        <section className="mh-video-container">
            <div className="mh-video-section">
                <iframe className="mh-what-unique" src="https://www.youtube.com/embed/xNRJwmlRBNU" title="How To Embed YouTube Videos in React / Gatsby (and make them Responsive)" autoPlay allowFullScreen></iframe>
            </div>
        </section>

        <div className="services-level">OUR MISSION</div>
        <section className="mh-video-container">
            <div className="mh-video-section">
                <iframe className="mh-what-unique" src="https://www.youtube.com/embed/gNkydtIfcKs" title="Client-Side Field Level Encryption: The Next Generation of Privacy &amp; Security" autoPlay allowFullScreen></iframe>
            </div>
        </section>

        <div className="services-level">Features</div>
        <section className="mh-video-container">
            <div>Features need to be here</div>
        </section>

        <div className="services-level">OUR SERVICES</div>
        <section className="wl-p-main-container">
            <div className="mh-wl-p">
                <img src={logo1} alt='Infytech AI'  className='mh-logo'/>
                <div className="mh-hm-b">
                    <Link to="/maahaul" className="theme-button">Know More</Link>
                </div>
            </div>
            <div className="mep-de-wlp">
            <img src={logo2} alt='Infytech AI'  className='mh-logo'/>
                <div className="mh-hm-b">
                    <Link to="/mep" className="theme-button">Know More</Link>
                </div>
            </div>
            {/* <div className="mh-wl-p">
                <img src={logo3} alt='Infytech AI'  className='mh-logo'/>
                <div className="mh-hm-b">
                    <Link to="/" className="theme-button">Know More</Link>
                </div>
            </div> */}
        </section>
    </body>
    );
}

export default Body;