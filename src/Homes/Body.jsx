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
                <iframe className="mh-what-unique" src="https://www.youtube.com/embed/MyJFtIy2BqI" title="Praggnanandhaa Asks: How To Handle Tension in a Game? | Chess World Cup" autoPlay allowFullScreen></iframe>
            </div>
        </section>

        <div className="services-level">OUR MISSION</div>
        <p>Our unwavering mission is to revolutionize the landscape of education by providing access to knowledge and learning experiences that are entirely value of cost or financial barriers. Our vision is a world where everyone, regardless of their background or financial resources, has the opportunity to access high-quality education that is invaluable and life-transforming.</p>
        <section className="mh-video-container">
            <div className="mh-video-section">
                <iframe className="mh-what-unique" src="https://www.youtube.com/embed/tdPW1qg1ius" title="Elon Musk Reacts To Chandrayaan-3 Mission Cost" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" autoPlay allowFullScreen></iframe>
            </div>
        </section>

        <div className="services-level">FEATURES</div>
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