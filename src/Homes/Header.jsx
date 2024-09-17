import React from 'react';
import Navigation from './Navigation';
import logo from '../Images/logo.jpg';
import '../Homes/header.css';
//import logo from '../Images/logo-maahaul.jpg';

const Header = () => {
  return (
    <header className='main-header-container'>
      <div className='main-header-sub-container'>
        <div className='header-container'>
            <a className='logo' href='/'>
              <img src={logo} alt='Infytech MEP Consultants'  className='company-logo'/>
            </a>
        </div>
        <div className="main-nav-bar-container">
          <Navigation/>
        </div>
      </div>
    </header>
  );
};

export default Header;