import React from 'react';
import Header from './header';
import Footer from './footer';
import './home.css';
import img1 from '../images/hero1.jpg';
import img2 from '../images/014.jpg';
// type rfce for a template

function home() {
  return (
    <>
    <div className='order-container'>
    <Header/>
    <div className='home-body'>
      <div>
          <h1>Welcome to Manna Rice Cake House</h1>
          <h3>We cover the tri-cities in Tennessee as well as North Georgia and parts of Alabama!</h3>
      </div>
      <div>
        <img src={img1} alt="" id='img1'/>
      </div>
    </div>
    <div className="home-body2">
      <div>
        <img src={img2} alt="" id='img1'/>
      </div>
      <div>
          <h1>Our Mission</h1>
          <h3>We strive to provide the best homemade duk in the area that is not only delicious but healthy!</h3>
      </div>
    </div>
    <div className='home-body3'>
      <div>
          <h1>We Deliver</h1>
          <h3>We meet you were you are</h3>
      </div>
      <div>
        <img src={img1} alt="" id='img1'/>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default home