import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import logo from '../Images/logo.png';

const Header = () => {
  return (
    <header className="main-header-container">
      <div className='header-container'>
        <div className='top-header-row'>
          <div className=''>
            <a className='logo' href='/'>
              <img src={logo} alt='Infytech AI'  className='company-logo'/>
            </a>
          </div>
        </div>
      </div>
      <div className="main-nav-bar-container">
        <div className='container'>
          <div className='main-menu'>
            <Navigation/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;