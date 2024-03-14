import React from 'react';
import Header from './header';
import Footer from './footer';
import './home.css';
// type rfce for a template

function home() {
  return (
    <>
    <Header/>
    <div className='home-body'>
        <h1>Body</h1>
    </div>
    <Footer/>
    </>
  )
}

export default home