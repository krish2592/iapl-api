import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='navbar-toggleabale-container'>
      <div className='navbar-collapse' id='nav-collapse'>
        <div className='navbar-menu-list'>
          <div id='navbar-menu-list1' className='nav-menu-col1'> 
            <Link to="/">Home</Link>
          </div>
          <div id='navbar-menu-list2' className='nav-menu-col2'>
            <Link to="/about">About</Link>
          </div>
          <div id='navbar-menu-list3' className='nav-menu-col3'>
            <Link to="/services">Services</Link>
          </div>
          <div id='navbar-menu-list4' className='nav-menu-col4'>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;