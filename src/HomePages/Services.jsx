import React from "react";
import Footer from '../Homes/Footer';
import Header from '../Homes/Header';
import '../HomePages/services.css'

const Services = () => {
    return (
        <html>
            <Header />
            <body className="service-body">
                <div id="main" className="main-container">
                    <div className="page_title">
                        <div className="container">
                            <h1 className="">SERVICES</h1>
                        </div>
                    </div>
                </div>
                <div className="service-container">
                    <div className="service-1-row-1-container">
                        <h2 id="ser1-row1-main-heading">Engineering Design</h2>
                        <div className="service-1-row-1">
                            <div className="service-1-col-1">
                                <h3 id="ser1-col1-main-cont1">Engineering</h3>
                                <div className="ser1-col-sub-cont">
                                <div id="ser1-col1-sub-cont1">➔ Electrical</div>
                                <div className="" id="ser1-col1-sub-cont2">➔ Emergency Power</div>
                                <div className="" id="ser1-col1-sub-cont3">➔ HVAC</div>
                                </div>
                            </div>
                            <div className="service-1-col-2">
                                <h3 id="ser1-col2-main-cont2">Fire Safety</h3>
                                <div className="ser1-col-sub-cont">
                                <div className="" id="ser1-col2-sub-cont1">➔ Detection & Suppression</div>
                                <div id="ser1-col2-sub-cont2">➔ Fire Engineering</div>
                                <div className="" id="ser1-col2-sub-cont3">➔ Smoke Evacuation</div>
                                </div>
                            </div>
                            <div className="service-1-col-3">
                                <h3 id="ser1-col3-main-cont3">Low Voltage</h3>
                                <div className="ser1-col-sub-cont">
                                <div className="" id="ser1-col3-sub-cont1">➔ Building Management</div>
                                <div className="" id="ser1-col3-sub-cont2">➔ Security System</div>
                                <div id="ser1-col3-sub-cont3">➔ Voice & Data Systems</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="service-2-row-2-container">
                        <h2 id="ser2-row2-main-heading">Environmental & Sustainability Design</h2>
                        <div className="service-2-row-2">
                            <div className="service-2-col-1">
                                <h3 id="ser2-col1-main-cont1">ESD</h3>
                                <div className="ser2-col-sub-cont">
                                <div className="" id="ser2-col1-sub-cont1">➔ Artificial Light Simulations</div>
                                <div className="" id="ser2-col1-sub-cont2">➔ CFD Modeling</div>
                                <div id="ser2-col1-sub-cont3">➔ Climatic Studies</div>
                                <div id="ser2-col1-sub-cont4">➔ Day Lighting Simulations</div>
                                <div className="" id="ser2-col1-sub-cont5">➔ Energy Modelling</div>
                                <div className="" id="ser2-col1-sub-cont7">➔ Heat Island Assessment</div>
                                <div className="" id="ser2-col1-sub-cont8">➔ Renewable Energy</div>
                                <div className="" id="ser2-col1-sub-cont9">➔ Solar & Wind Studies</div>
                                <div className="" id="ser2-col1-sub-cont10">➔ Thermal Comfort Analysis</div>
                                <div id="ser2-col1-sub-cont11">➔ Third Party Commissioning</div>
                                </div>
                            </div>
                            <div className="service-2-col-2">
                                <h3 id="ser2-col2-main-cont2">Certifications</h3>
                                <div className="ser2-col-sub-cont">
                                <div className="" id="ser2-col2-sub-cont1">➔  ECBC Compliance</div>
                                <div className="" id="ser2-col2-sub-cont2">➔ Green Building</div>
                                <div className="" id="ser2-col2-sub-cont3">➔ Netzero</div>
                                <div className="" id="ser2-col2-sub-cont4">➔ Wellness</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="service-3-row-3-container">
                        <h2 id="ser3-row3-main-heading">Post Occupancy Services Evaluation</h2>
                        <div className="service-3-row-3">
                            <div className="service-3-col-1">
                                <h3 id="ser3-col1-main-cont1">Property Condition</h3>
                                <div className="ser3-col-sub-cont">
                                <div id="ser3-col1-sub-cont1">➔ Mechanical & Electrical Systems</div>
                                <div className="" id="ser3-col1-sub-cont3">➔ Environmental</div>
                                <div className="" id="ser3-col1-sub-cont4">➔ Review Property's "As Build" Condition</div>
                                <div className="" id="ser3-col1-sub-cont5">➔ Review System Warranties</div>
                                <div className="" id="ser3-col1-sub-cont6">➔ Review Certificates Of Occupancies &
Permit</div>
                                <div className="" id="ser3-col1-sub-cont7">➔ Review Energy Usage Reports</div>
                                <div className="" id="ser3-col1-sub-cont8">➔ Review Maintenance Schedules</div>
                                </div>
                            </div>
                            <div className="service-3-col-2">
                                <h3 id="ser3-col2-main-cont2">Audits</h3>
                                <div className="ser3-col-sub-cont">
                                <div className="" id="ser3-col2-sub-cont1">➔ BMS Systems Audit</div>
                                <div id="ser3-col2-sub-cont2">➔ Calibrated Energy Model</div>
                                <div className="" id="ser3-col2-sub-cont3">➔ Energy Audit</div>
                                <div id="ser3-col2-sub-cont5">➔ Sustainability Audit</div>
                                <div className="" id="ser3-col2-sub-cont6">➔ Water Audit</div>
                                </div>
                            </div>
                            {/* <div className="service-3-col-3">
                                <h3 id="ser3-col3-main-cont3">Commissioning</h3>
                                <div className="ser3-col-sub-cont">
                                <div className="" id="ser3-col3-sub-cont1">➔ Equipment Performance Validation</div>
                                <div className="" id="ser3-col3-sub-cont2">➔ Testing, Adjusting & Balancing (TAB)</div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div class="service-4-row-4-container">
                        <h2 id="ser4-row4-main-heading">BIM Compliant:</h2>
                        <div className="service-4-row-4">
                        <div className="service-4-col-1">
                                {/* <h3 id="ser4-col1-main-cont1"></h3> */}
                                <div className="ser4-col-sub-cont">
                                <div id="ser4-col1-sub-cont1">➔ BIM Modeling</div>
                                <div className="" id="ser4-col1-sub-cont2">➔ Design Integration</div>
                                <div className="" id="ser4-col1-sub-cont3">➔ Services Coordination</div>
                                <div className="" id="ser4-col1-sub-cont4">➔ Clash Detection</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
            <Footer />
        </html>
    );
}


export default Services;