import React from "react";
import Footer from '../Homes/Footer';
import Header from '../Homes/Header';
import '../HomePages/aboutInfytech.css'

const AboutInfytech = () => {

    const services = ['Data centers', 'Industrial facilities', 'Laboratories', 'Residential and commercial buildings',
        'Offices', 'Hotels and hospitality', 'Mixed-use developments', 'Educational and institutional facilities',
        'Restaurants and bars', 'Metro stations', 'Bus terminals', 'Substations and switchyards', 'Various other industries'];

    return (
        <html>
            <Header />
            <body className="about-us-container">
                <div className='about-us'><div className='about-us-h1'>About US</div></div>
                <div className="about-us-container-sub">
                    <br /><br />
                    <div>
                        <p className="about-us-container-sub-content1"><strong>At Infytech MEP Design Consultants, </strong>
                            we are passionate about delivering innovative and
                            sustainable solutions in Mechanical, Electrical, and Plumbing (MEP) design.
                            Our team of young and professional designers ensures a unique, project-specific,
                            practical, and efficient design approach, with a major emphasis on minimizing energy
                            waste—not only in theory but in real-life operations.</p>
                        <div></div>
                    </div>
                    <br />
                    <div><h1 className='our-mission-h1'>Our Missions</h1>
                        <p className="about-us-container-sub-content2">Our mission is to deliver transformative impact through modern techniques, with a focus on digital twinning to lead the change in building design.</p>
                        <br />
                        <div><h1 className='expertise-h1'>Our Areas of Expertise</h1></div>
                        <p className="about-us-container-sub-content3"><strong>MEP Engineering Services: </strong>We specialize in designing Heating, Ventilation, and Air Conditioning (HVAC), Electrical, Low Voltage, Public Health Engineering (PHE), and Fire Fighting solutions. Our engineering services cater to a diverse range of projects, including:</p>
                        <div className="about-us-container-sub-content4">
                            {services.map((service, index) => (
                                <div key={index}>{service}</div>
                            ))}
                        </div>
                        <br />
                        <p className="about-us-container-sub-content5"><strong>Project Management Consultancy:</strong> With extensive experience in project management, we offer expert consultancy services for building projects. Our team ensures efficient and successful project execution, adhering to timelines and budget constraints.</p>
                        <br />
                        <p className="about-us-container-sub-content6"><strong>Green Energy and Sustainability:</strong> Infytech Loop AI is committed to promoting green energy and sustainable practices. We actively engage in projects that contribute to environmental preservation and energy efficiency.</p>
                        <br />
                    </div>
                    <br /><br />
                    <div className="about-us-container-sub-content7">At Infytech Loop AI Private Limited, we are driven by innovation, excellence, and a passion for education and engineering solutions. Our dedicated team is committed to provide outstanding services to our clients, ensuring their success and growth. Join us on our journey towards a brighter future through education and sustainable engineering solutions.</div>
                </div>
            </body>
            <Footer />
        </html>
    );
}


export default AboutInfytech;