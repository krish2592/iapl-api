import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const Navigation = () => {
  const [isResponsive, setIsResponsive] = useState(false);
  const toggleResponsive = () => {
    setIsResponsive(prevState => !prevState);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState({
    about: false,
    service1: false,
    training: false,
    iplan: false,
    channels: false
  });

  const handleDropdownMouseOver = (dropdownName) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [dropdownName]: true
    }));
  };

  const handleDropdownMouseLeave = (dropdownName) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [dropdownName]: false
    }));
  };

  return (
        <nav className={`navbar-menu-list ${isResponsive ? 'responsive' : ''}`} id='navbarMenuList'>
          
          <div id='navbar-menu-list1' className='nav-menu-col1'>
            <Link to="/">Home</Link>
          </div>

          <div id='navbar-menu-list2' className='nav-menu-col2' onMouseOver={() => handleDropdownMouseOver('about')}
          onMouseLeave={() => handleDropdownMouseLeave('about')}>
            <button className="dropbtn">
              About<i className="fa fa-caret-down"></i>
            </button>
            {isDropdownOpen.about && (
          <div class="dropdown-content">
             <Link to="/about">About US</Link>
             <Link to="/aboutMaahaul">About Maahaul</Link>
             <Link to="/whyMaahaul">Why Maahaul</Link>
             {/* <Link to="/teamMaahaul">Team</Link> */}
          </div>
            )}
          </div>

          {/* <div id='navbar-menu-list3' className='nav-menu-col3' onMouseOver={() => handleDropdownMouseOver('services')}
          onMouseLeave={() => handleDropdownMouseLeave('services')}>
          <button className="dropbtn">
              Services<i className="fa fa-caret-down"></i>
            </button>
            {isDropdownOpen.services && (
          <div class="dropdown-content">
            <Link to="/education">Maahaul</Link>
            <Link to="/mep/design">MEP Consultants</Link>
          </div>
            )}
          </div> */}

          {/*
          <div id='navbar-menu-list3' className='nav-menu-col3' onMouseOver={() => handleDropdownMouseOver('service1')}
          onMouseLeave={() => handleDropdownMouseLeave('service1')}>
          <button className="dropbtn">
              Maahaul<i className="fa fa-caret-down"></i>
            </button>
            {isDropdownOpen.service1 && (
          <div class="dropdown-content">
            <Link to="/maahaul/engineering/admission">IIT/NIT/Top Engineering College</Link>
            <Link to="/maahaul/doctor">NEET/Top MBBS College</Link>
            <Link to="/maahaul/defence">Defence</Link>
            <Link to="/maahaul/gate">GATE-PSUs</Link>
            <Link to="/maahaul/ias">UPSC-IAS/IPS/IFS/IES</Link>
            <Link to="/maahaul/business">CAT</Link>
            <Link to="/maahaul/faculty">Faculties/Teachers</Link>
            <Link to="/maahaul/banking">Banking</Link>
            <Link to="/maahaul/software">Software</Link>
            <Link to="/maahaul/startup">Entrepreneurship</Link>
            <Link to="/maahaul/government">Other Government Job</Link>
            <Link to="/maahaul/private">Other Private Job</Link> 
          </div>
            )}
          </div> */}

          <div id='navbar-menu-list4' className='nav-menu-col4'>
            <Link to="/mep">Consultancy</Link>
          </div>

          <div id='navbar-menu-list5' className='nav-menu-col5' onMouseOver={() => handleDropdownMouseOver('training')}
          onMouseLeave={() => handleDropdownMouseLeave('training')}>
          <button className="dropbtn">
              Training<i className="fa fa-caret-down"></i>
            </button>
            {isDropdownOpen.training && (
          <div class="dropdown-content">
            <Link to="/training/1-5">Certified Faculty upto 5th</Link>
            <Link to="/training/1-8">Certified Faculty upto 8th</Link>
            <Link to="/training/1-10">Certified Faculty upto 10th</Link>
            <Link to="/training/1-12">Certified Faculty upto 12th</Link>
          </div>
            )}
          </div>

          <div id='navbar-menu-list6' className='nav-menu-col6' onMouseOver={() => handleDropdownMouseOver('iplan')}
          onMouseLeave={() => handleDropdownMouseLeave('iplan')}>
          <button className="dropbtn">
             Class<i className="fa fa-caret-down"></i>
            </button>
            {isDropdownOpen.iplan && (
          <div class="dropdown-content">
            <Link to="/class/1-5">Electron (1-5)</Link>
            <Link to="/class/6-8">Proton (6-8)</Link>
            <Link to="/class/9-10">Neutron (9-10)</Link>
            <Link to="/class/11-12">Atom (11-12)</Link>
            {/* <Link to="/education">First standard</Link>
            <Link to="/mep/design">Second standard</Link>
            <Link to="/mep/design">Third standard</Link>
            <Link to="/mep/design">Fourth standard</Link>
            <Link to="/mep/design">Fifth standard</Link>
            <Link to="/mep/design">Sixth standard</Link>
            <Link to="/mep/design">Seventh standard</Link>
            <Link to="/mep/design">Eigth standard</Link>
            <Link to="/mep/design">Ninth standard</Link>
            <Link to="/mep/design">Tenth standard</Link>
            <Link to="/mep/design">Eleventh standard</Link>
            <Link to="/mep/design">Twelth standard</Link> */}
          </div>
            )}
          </div>

          <div id='navbar-menu-list7' className='nav-menu-col7'>
            <Link to="/admission">Online Admission</Link>
          </div>

          <div id='navbar-menu-list8' className='nav-menu-col8' onMouseOver={() => handleDropdownMouseOver('channels')}
          onMouseLeave={() => handleDropdownMouseLeave('channels')}>
          <button className="dropbtn">
              Channels<i className="fa fa-caret-down"></i>
            </button>
            {isDropdownOpen.channels && (
          <div class="dropdown-content">
            <Link to="https://www.youtube.com/@InfytechMaahaul">Maahaul</Link>
          </div>
            )}
          </div>
          
          {/* <div id='navbar-menu-list3' className='nav-menu-col3' onMouseOver={() => handleDropdownMouseOver('services')}
          onMouseLeave={() => handleDropdownMouseLeave('services')}>
          <button className="dropbtn">
              Community<i className="fa fa-caret-down"></i>
            </button>
            {isDropdownOpen.services && (
          <div class="dropdown-content">
            <Link to="/maahaule/student">Student</Link>
            <Link to="/maahaule/Faculty">Faculty</Link>
            <Link to="/maahaule/Faculty">Parents</Link>
            <Link to="/maahaule/Alumini">Alumini</Link>
            <Link to="/maahaule/Others">Others</Link>
          </div>
            )}
          </div> */}

          <div id='navbar-menu-list9' className='nav-menu-col9'>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div id='navbar-menu-list10' className='nav-menu-col10'>
            <Link to="/register">Register</Link>
          </div>

          <div id='navbar-menu-list11' className='nav-menu-col11'>
            <Link to="/donation">Donation</Link>
          </div>
       
          <a href="javascript:void(0);" className={`icon ${isResponsive ? 'active' : ''}`}  onClick={toggleResponsive}>&#9776;</a>
        </nav>
  );
};

export default Navigation;