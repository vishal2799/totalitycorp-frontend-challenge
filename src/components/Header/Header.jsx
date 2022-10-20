import React, { useState } from 'react';
import './Header.css';
import TeslaLogo from '../../assets/teslaLogoSmall.svg';

const Header = () => {
  const [navStatus, setNavStatus] = useState(false);
  return (
    <div className='header'>
      <div className='header__logo'>
        <img src={TeslaLogo} alt='Tesla Logo' />
      </div>

      <div className='header__center'>
        <p>Model S</p>
        <p>Model 3</p>
        <p>Model X</p>
        <p>Model Y</p>
        <p>Solar Roof</p>
        <p>Solar Panel</p>
      </div>

      <div className='header__right'>
        <p>Shop</p>
        <p>Tesla Account</p>
        <span onClick={() => setNavStatus(true)} style={{ cursor: 'pointer' }}>
          Menu
        </span>
      </div>

      <div
        className='nav__mobile'
        style={{ transform: navStatus ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div
          onClick={() => setNavStatus(false)}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            cursor: 'pointer',
          }}
        >
          <span>X</span>
        </div>
        <div>
          <li>
            <a href=''>Model S</a>
          </li>
          <li>
            <a href=''>Model 3</a>
          </li>
          <li>
            <a href=''>Model X</a>
          </li>
          <li>
            <a href=''>Model Y</a>
          </li>
          <li>
            <a href=''>Solar Roof</a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Header;
