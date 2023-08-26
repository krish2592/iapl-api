import React from "react";
import Footer from '../Homes/Footer';
import Header from '../Homes/Header';
import { Link } from "react-router-dom";

const AboutMaahaul = () => {
    return (
        <htm>
            <Header/>
            <body>
            <div><h1>About Maahaul</h1>
                    <p>Maahaul provides the right platform for students who want to succeed in life.
                    <strong>"The attitude of a well-raised hyena among lions is better than that of a lion raised among hyenas". </strong> 
                        We strongly believe that a good environment is a key factor in developing the right mindset. At Maahaul, we continuously focus on making our students better every day by analyzing their key potential and providing quality education to help them achieve their goals. Maahaul is not just a brand; it is a well-researched and dedicated learning environment for our students.
                        To understand us better click <Link to="/why/maahaul" className="">Why Maahaul</Link>.</p>
                    <div></div>
                </div>
                <div>At Maahaul, we are driven by innovation, excellence, and a passion for education. Our dedicated team is committed to provide outstanding services to our clients, ensuring their success and growth. Join us on our journey towards a brighter future through a quality education.</div>
                
            </body>
            <Footer/>
        </htm>
    );
}


export default AboutMaahaul;