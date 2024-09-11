import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../Homes/navigation.css'


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
    <div className='navbar-main-container'>
        <nav className={`navbar-menu-list ${isResponsive ? 'responsive' : ''}`} id='navbarMenuList'>
          <p className='tempId'>This website is under development!</p>
          <div id='navbar-menu-list1' className='nav-menu-col1'>
            <Link to="/">Home</Link>
          </div>

          <div id='navbar-menu-list2' className='nav-menu-col2'>
            <Link to="/about">About Us</Link>
          </div>

          <div id='navbar-menu-list3' className='nav-menu-col3'>
            <Link to="/services">Services</Link>
          </div>

          <div id='navbar-menu-list4' className='nav-menu-col4'>
            <Link to="/projects">Projects</Link>
          </div>

          <div id='navbar-menu-list5' className='nav-menu-col5'>
            <Link to="/contact">Contact Us</Link>
          </div>
       
          <a href="javascript:void(0);" className={`icon ${isResponsive ? 'active' : ''}`}  onClick={toggleResponsive}>&#9776;</a>
        </nav>
    </div>
  );
};

export default Navigation;