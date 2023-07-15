import React from 'react';
import Navigation from './Navigation';
import logo from '../Images/logo.png';

const Header = () => {
  return (
    <header className="main-header-container">
      <div className='header-container'>
            <a className='logo' href='/'>
              <img src={logo} alt='Infytech AI'  className='company-logo'/>
            </a>
      </div>
      <div className="main-nav-bar-container">
          <Navigation/>
      </div>
    </header>
  );
};

export default Header;