import React from "react";
import '../Body.css';
import { Link } from 'react-router-dom';
import logo1 from '../Images/logo-maahaul.jpg';
import logo2 from '../Images/logo-mep-consultants.jpg';
import { useNavigate } from 'react-router-dom';
//import logo3 from '../Images/logo.jpg'

const Body = () => {

    const navigate = useNavigate();

    const handleTurnkey = () => {
        navigate('/about')
    }

    const handleBuyHomes = () => {
        navigate('/services')
    }

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
                    <br></br>
                    <div className="Body-Comp-1">
                        <div className="Body-Comp-Turnkey">
                            <div className='Body-Comp-Turnkey-Sub'>
                                <div className='Body-Comp-Turnkey-Sub-xpa'>
                                    <div>Engineering Design for Solar (Rooftop and Ground Mounted), MEP Engineering Services, Project Management Consultancy and Green Energy and Sustainability</div>
                                </div>
                                <div className='Body-Comp-Turnkey-Sub-xpb'>
                                    <div>Simple Efficient and Cost-effective way to Design</div>
                                </div>
                                <div className='Body-Comp-Turnkey-Sub-xpc'>
                                    <div className='Body-Comp-Turnkey-Sub-xpca' onClick={handleTurnkey}>Know More</div>
                                </div>
                            </div>
                        </div>
                        <div className="Body-Comp-Buy-Homes">
                            <div className='Body-Comp-Buy-Homes-Sub'>
                                <div className='Body-Comp-Buy-Homes-Sub-xpa'>
                                    <div>
                                        We Provide Broad Range of Engineering Services and Design
                            </div>
                                </div>
                                <div className='Body-Comp-Buy-Homes-Sub-xpb'>
                                    <div>Our services includes Engineering Design,
                                        Environmental and Sustainability Design,
                                        Post Occupancy Services Evaluation and BIM Compliant
                                    </div>
                                </div>
                                <div className='Body-Comp-Buy-Homes-Sub-xpc'>
                                    <div className='Body-Comp-Buy-Homes-Sub-xpca' onClick={handleBuyHomes}>Know More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
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