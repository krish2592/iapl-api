import React from "react";
import '../Body.css';
import { Link } from 'react-router-dom';
import logo1 from '../Images/logo-maahaul.jpg';
import logo2 from '../Images/logo-mep-consultants.jpg';
//import logo3 from '../Images/logo.jpg'

const Body = () => {

    return (
    <body className="main-body">
        
    <div className="cont-body-1">
        <div className="sub-cont-body-1">   
            {/* <section className="mh-video-container">
                <div className="mh-video-section">
                    <iframe className="mh-what-unique" src="https://www.youtube.com/embed/tdPW1qg1ius" title="Elon Musk Reacts To Chandrayaan-3 Mission Cost" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" autoPlay allowFullScreen></iframe>
                </div>
            </section> */}
        </div>
    </div>

    <div className="cont-body-2">
        <div>   
            <div className="services-level"><h3></h3></div>
           <div>
                <div></div>
                <div></div>
           </div>
        </div>
    </div>

    </body>
    );
}

export default Body;