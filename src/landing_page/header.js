import React from 'react';
import './header.css';
import Logo from '../images/manna_logo.png';

function header() {
  return (
    <div className='header'>
      <div className='logo'>
        <a href='/'><img src={Logo} alt="rice" id='logo' /></a>  
      </div>
      <div className='links'>
        <a href='/order'>주문/Order</a>
        <a href='/about'>Our Team</a>
        {/* <a>Cooking Tips</a> */}
      </div>
      
    </div>
  )
}

export default header