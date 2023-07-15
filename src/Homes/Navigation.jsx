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
    services: false
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
             <Link to="/about">About Infytech AI</Link>
             <Link to="/why/infytech">Why Infytech AI</Link>
             <Link to="/team">Team</Link>
          </div>
            )}
          </div>
          <div id='navbar-menu-list3' className='nav-menu-col3' onMouseOver={() => handleDropdownMouseOver('services')}
          onMouseLeave={() => handleDropdownMouseLeave('services')}>
          <button className="dropbtn">
              Services<i className="fa fa-caret-down"></i>
            </button>
            {isDropdownOpen.services && (
          <div class="dropdown-content">
            <Link to="/education">Educational</Link>
            <Link to="/mep/design">Electrical MEP Design</Link>
          </div>
            )}
          </div>
          <div id='navbar-menu-list4' className='nav-menu-col4'>
            <Link to="/contact">Contact</Link>
          </div>
          <a href="javascript:void(0);" className={`icon ${isResponsive ? 'active' : ''}`}  onClick={toggleResponsive}>&#9776;</a>
        </nav>
  );
};

export default Navigation;