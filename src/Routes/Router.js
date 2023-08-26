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
    /** Maahaul */

    /**Consultancy */
    <Route path="/mep" element={<MepHome/>}/>
  </Routes>
);

export default AppRoutes;