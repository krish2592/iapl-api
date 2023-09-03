import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Users/Home';
import Login from '../Users/Login';
import Register from '../Users/Register';
import RegisterationForm from '../Users/RegisterationForm';
import AboutInfytech from '../HomePages/AboutInfytech';
import AboutMaahaul from '../HomePages/AboutMaahaul';
import WhyMaahaul from '../HomePages/WhyMaahaul';
import TeamMaahaul from '../HomePages/TeamMaahaul';
import MepHome from '../MepConsultants/MepHome';
import ContactUs from '../Users/ContactUs';
import PrivacyPolicy from '../HomePages/PrivacyPolicy';
import Terms from '../HomePages/Terms';
import Blog from '../HomePages/Blog';
import Faq from '../HomePages/Faq';
import FeedbackForm from '../HomePages/FeedbackForm';
import CommunityForm from '../HomePages/CommunityForm';
import Donation from '../HomePages/Donation';
import AdmissionForm from '../HomePages/OnlineAdmission';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/registerUser" element={<Register />} />
    <Route path="/register" element={<RegisterationForm />} />
    /** Home Pages */
    <Route path="/about" element={<AboutInfytech/>}/>
    <Route path="/aboutMaahaul" element={<AboutMaahaul/>}/>
    <Route path="/whyMaahaul" element={<WhyMaahaul/>}/>
    <Route path="/teamMaahaul" element={<TeamMaahaul/>}/>
    <Route path="/contact" element={<ContactUs/>}/>
    <Route path="/privacy" element={<PrivacyPolicy/>}/>
    <Route path="/terms" element={<Terms/>}/>
    <Route path="/blog" element={<CommunityForm/>}/>
    <Route path="/faq" element={<Faq/>}/>
    <Route path="/feedback" element={<FeedbackForm/>}/>
    <Route path="/donation" element={<Donation/>}/>
    <Route path="/admission" element={<AdmissionForm/>}/>
    /** Maahaul */

    /**Consultancy */
    <Route path="/mep" element={<MepHome/>}/>
  </Routes>
);

export default AppRoutes;