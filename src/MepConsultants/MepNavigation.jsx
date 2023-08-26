import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const MepNavigation = () => {
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
             <Link to="/about">About Infytech Loop AI</Link>
             <Link to="/about/maahaul">About Maahaul</Link>
             <Link to="/why/maahaul">Why Maahaul</Link>
             <Link to="/team/maahaul">Team</Link>
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

          <div id='navbar-menu-list4' className='nav-menu-col4'>
            <Link to="/mep">Consultancy</Link>
          </div>

          <div id='navbar-menu-list8' className='nav-menu-col8' onMouseOver={() => handleDropdownMouseOver('channels')}
          onMouseLeave={() => handleDropdownMouseLeave('channels')}>
          <button className="dropbtn">
              Channels<i className="fa fa-caret-down"></i>
            </button>
            {isDropdownOpen.channels && (
          <div class="dropdown-content">
            <Link to="/education">Maahaul</Link>
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
            <Link to="/contact">Contact US</Link>
          </div>

          <div id='navbar-menu-list10' className='nav-menu-col10'>
            <Link to="/register">Register</Link>
          </div>
       
          <a href="javascript:void(0);" className={`icon ${isResponsive ? 'active' : ''}`}  onClick={toggleResponsive}>&#9776;</a>
        </nav>
  );
};

export default MepNavigation;