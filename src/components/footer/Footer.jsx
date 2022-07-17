import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

export const Footer = () => {
  return (
    <div className='footer' style={{ backgroundImage: `url(${bg})` }}>
      <div className='footer__content container'>
        <div className='footer__content__logo'>
          <div className='logo'>
            <img src={logo} alt='' />
            <Link to='/'>ZainMovies</Link>
          </div>
        </div>
        <div className='footer__content__menus'>
          <div className='footer__content__menu'>
            <Link to='/'>Home</Link>
          </div>
          <div className='footer__content__menu'>
            <Link to='/contact'>Contact us</Link>
          </div>
          <div className='footer__content__menu'>
            <Link to='/'>FAQ</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
