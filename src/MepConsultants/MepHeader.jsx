import React from 'react';
import MepNavigation from './MepNavigation';
// import logo from '../Images/logo.jpg';
import logo from '../Images/logo-mep-consultants.jpg';

const MepHeader = () => {
  return (
    <header className="main-header-container">
      <div className='header-container'>
            <a className='logo' href='/'>
              <img src={logo} alt='Infytech AI'  className='company-logo'/>
            </a>
      </div>
      <div className="main-nav-bar-container">
          <MepNavigation/>
      </div>
    </header>
  );
};

export default MepHeader;