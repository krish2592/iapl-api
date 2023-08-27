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

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/registerUser" element={<Register />} />
    <Route path="/register" element={<RegisterationForm />} />
    /** Home Pages */
    <Route path="/about" element={<AboutInfytech/>}/>
    <Route path="/about/maahaul" element={<AboutMaahaul/>}/>
    <Route path="/why/maahaul" element={<WhyMaahaul/>}/>
    <Route path="/team/maahaul" element={<TeamMaahaul/>}/>
    <Route path="/contact" element={<ContactUs/>}/>
    <Route path="/privacy" element={<PrivacyPolicy/>}/>
    <Route path="/terms" element={<Terms/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/faq" element={<Faq/>}/>
    <Route path="/feedback" element={<FeedbackForm/>}/>
    /** Maahaul */

    /**Consultancy */
    <Route path="/mep" element={<MepHome/>}/>
  </Routes>
);

export default AppRoutes;