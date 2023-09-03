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
                    <p>Maahaul provides the right podium to the students who want to succeed in their life.
                        We strongly believe that a good environment is a key factor in developing the right mindset. <strong>"The attitude of a well-raised hyena among lions is better than that of a lion raised among hyenas". </strong> At Maahaul, we continuously focus on making our students better every day by analyzing their key potential and providing quality education to help them achieve their goals. Maahaul is not just a name; it is a well-researched and dedicated learning environment for our students.
                        To know more click <Link to="/whyMaahaul" className="">Why Maahaul</Link>.</p>
                    <div></div>
                </div>
                <div>At Maahaul, we are driven by innovation, excellence, and a passion for education. Our dedicated team is committed to provide outstanding services to our clients, ensuring their success and growth. Join us on our journey towards a brighter future through a quality education.</div>
                
            </body>
            <Footer/>
        </htm>
    );
}


export default AboutMaahaul;